import { useEffect, useState } from "react"
import { getAllSponsors } from "../api_calls/get"

const SponsorTrack = ({ sponsors }) => {
  return sponsors?.map((sponsor, i) => (
    <a href={sponsor.websiteUrl} key={i} className="sponser">
      {sponsor.logo ?
        <img height={50} src={sponsor.logo} alt={sponsor.name} />
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
        setSponsors(res)
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