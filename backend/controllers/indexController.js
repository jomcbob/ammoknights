import { prisma } from "../lib/prisma.js"

const test = (req, res) => {
  res.json({ message: 'test!' })
}

const createNewSponsor = async (req, res) => {
  const { name, email, logo, amountDonated, websiteUrl } = req.body

  if (!name || !email || !amountDonated) {
    return res.status(400).json({
      error: "Amount donated, name and email are required"
    })
  }

  try {
    const sponsor = await prisma.sponsor.create({
      data: {
        name,
        email,
        logo,
        amountDonated: Number(amountDonated),
        websiteUrl
      }
    })

    return res.status(201).json(sponsor)
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      error: error.message || "Internal server error"
    })
  }
}

const getAllSponsors = async (req, res) => {
  try {
    const sponsors = await prisma.sponsor.findMany()

    return res.status(201).json(sponsors)
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      error: error.message || "Internal server error"
    })
  }
}

export {
  test,
  createNewSponsor,
  getAllSponsors,
}