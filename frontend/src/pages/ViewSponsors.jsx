import sponsorshipLevels from "../sponsorTiers"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import { getAllSponsors } from "../api_calls/get"

export default function ViewSponsors() {
  const [sponsors, setSponsors] = useState([])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })

    const loadSponsors = async () => {
      try {
        const res = await getAllSponsors()

        if (!res) {
          throw new Error("Sponsor fetch failed")
        }

        console.log("Sponsors fetched:", res)

        setSponsors(res)
      } catch (error) {
        console.error("Failed to load sponsors:", error)
      }
    }

    loadSponsors()
  }, [])

  const getLevelAmount = (amount) => {
    const numbers = amount.match(/\$[\d,]+/g)

    if (!numbers) return 0

    return Number(numbers[0].replace(/[$,]/g, ""))
  }

const sortedLevels = [...sponsorshipLevels]
  .filter((level) => getLevelAmount(level.amount) >= 500)
  .sort(
    (a, b) => getLevelAmount(b.amount) - getLevelAmount(a.amount)
  )

  return (
    <>
      <Header position="sticky" />

      <div className="viewSponsors">
        {sortedLevels.map((level) => {
          const numbers = level.amount.match(/\$[\d,]+/g)

          const low = Number(
            numbers[0].replace(/[$,]/g, "")
          )

          const high = level.title
            ? Infinity
            : Number(
              numbers[1].replace(/[$,]/g, "")
            )

          const levelSponsors = sponsors
            .filter((sponsor) => {
              const amount = Number(sponsor.amountDonated)

              return amount >= low && amount <= high
            })
            .sort(
              (a, b) =>
                Number(b.amountDonated) -
                Number(a.amountDonated)
            )

          return (
            <div
              key={level.name}
              style={{ backgroundColor: level.color }}
              className={`sponsorTier ${level.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              <h2>{level.name}</h2>

              <p className="sponsorRange">
                {level.amount}
              </p>

              <p className="sponsorDescription">
                {level.description}
              </p>

              <div className="sponsors">
                {levelSponsors.map((sponsor) => (
                  <a
                    href={sponsor.websiteUrl || undefined}
                    className="sponsor"
                    key={sponsor.id}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="sponsorLogo">
                      {sponsor.logo ?
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                        />
                        :
                        <h2 className="nameLogo">{sponsor.name}</h2>
                      }
                    </div>

                    <span className="sponsorAmount">
                      ${sponsor.amountDonated.toLocaleString()}
                      {' -- '}
                      {sponsor.donationType === "SERVICE"
                        ? "Service"
                        : "Cash"}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}