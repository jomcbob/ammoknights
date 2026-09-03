const getAllSponsors = async () => {
  try {
    const response = await fetch("http://localhost:3000/sponsors", {
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