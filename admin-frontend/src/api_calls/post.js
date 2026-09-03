

const addSponsor = async (name, email, logo, amountDonated, websiteUrl) => {
  try {
    const response = await fetch("http://localhost:3000/sponsors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        logo,
        amountDonated,
        websiteUrl
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || "Failed to add sponsor")
    }

    return response.ok
  } catch (error) {
    console.log(error)
    return false
  }
}

export {
  addSponsor
}