import { useEffect, useState } from "react"
import { getAllSponsors } from "../api_calls/get"

const SponsorTrack = ({ sponsors }) => {
  if (!sponsors) {
    return null
  }
  return sponsors?.map((sponsor, i) => (
    <a href={sponsor.websiteUrl} key={i} className="sponser">
      {sponsor.logo ?
        <img src={sponsor.logo} alt={sponsor.name} />
        :
        sponsor.name}
    </a>
  ))
}

const SponsorCarousel = () => {
  const [sponsors, setSponsors] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getAllSponsors()
        console.log(res)
        if (!res) {
          throw new Error('Sponsor fetch failed')
        }

        console.log("Sponsors fetched:", res)
        const correctTier = res.filter(sponsor => sponsor.amountDonated >= 2000)
        setSponsors(correctTier)
      } catch (error) {
        console.log(error)
      }
    }

    load()
  }, [])

  return (
    <div className="carousel-track">
      {/* we need two of the same thing to create the endless track effect */}
      <SponsorTrack sponsors={sponsors} />
      <SponsorTrack sponsors={sponsors} />
    </div>
  )
}

export default SponsorCarousel