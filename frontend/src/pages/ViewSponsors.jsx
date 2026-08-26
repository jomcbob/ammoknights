import sponsorTiers from "../sponsorTiers"
import Header from "../components/Header"
import { useEffect } from "react";

export default function ViewSponsors() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])

  return (
    <>
      <Header position="sticky" />
      <div className="viewSponsors">
        {[...sponsorTiers].sort((a, b) => b.lowRange - a.lowRange).map((tier) => (
          <div
            key={tier.name}
            className={`sponsorTier sponsorTier-${tier.name.toLowerCase()}`}
          >
            <h2>{tier.name}</h2>

            <p>
              ${tier.lowRange.toLocaleString()} -{" "}
              {tier.highRange === Infinity
                ? "+"
                : `$${tier.highRange.toLocaleString()}`}
            </p>

            <div className="sponsors">
              {tier.sponsors.map((sponsor) => (
                <a href={sponsor.link} className="sponsor" key={sponsor.name}>
                  <div
                    className="sponsorLogo"
                    dangerouslySetInnerHTML={{ __html: sponsor.svg }}
                  />

                  <h3>{sponsor.name}</h3>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}