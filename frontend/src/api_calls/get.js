const getAllSponsors = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKGROUND_URL}/sponsors`, {
      headers: {
        "Content-Type": "application/json",
      }
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || "Failed to add sponsor")
    }

    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

export {
  getAllSponsors
}