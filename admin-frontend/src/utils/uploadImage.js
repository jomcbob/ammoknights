const getNameWithoutExtension = (filename) => {
  // Find a dot followed by one or more non-dot characters at the end of the filename and replace with ""
  return filename.replace(/\.[^/.]+$/, "")
}

const uploadImage = async (file) => {
  if (!file) throw new Error('No file provided')

  if (!file.type.startsWith("image/")) {
    alert("Invalid file")
    return
  }

  if (!file.name) {
    alert("Missing file name!")
    return
  }

  if (file.size > 25_000_000) {
    alert("File is too large max sizes is 25mb")
    return
  }

  const formData = new FormData()

  formData.append('file', file)
  formData.append("folder", "ammoknights_website_imgs")
  formData.append('upload_preset', 'ammoknights_website_imgs')
  formData.append("public_id", getNameWithoutExtension(file.name))

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: 'POST',
      body: formData,
    }
  )

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.error?.message || 'Upload failed')
  }

  const img = await res.json()

  return img
}

export default uploadImage