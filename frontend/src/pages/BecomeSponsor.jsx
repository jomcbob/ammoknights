import { useState } from "react"
import { useEffect } from "react"
import Header from "../components/Header"
import sponsorshipLevels from "../sponsorTiers"
import { Link } from "react-router"

const BecomeSponsor = () => {
  const [selectedLevel, setSelectedLevel] = useState("")

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)

    formData.append("access_key", "476545c3-a6e2-458b-ad0a-8ebd58e90b56")

    formData.append(
      "subject",
      `New Sponsorship Offer`
    )

    formData.append("from_name", "Ammoknights Sponsorship Form")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        alert("Thank you! Your sponsorship offer has been submitted.")
        form.reset()
        setSelectedLevel("")
      } else {
        alert("Something went wrong. Please try again.")
        console.error(data)
      }
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="sponsorPage">
      <Header position="sticky" />

      <section className="sponsorHero">
        <div className="sponsorHeroContent">
          <span className="sponsorEyebrow">AMMOKNIGHTS ROBOTICS</span>

          <h1>
            Help Us Build
            <span> The Future.</span>
          </h1>

          <p>
            Your support gives local students the opportunity to build robots,
            develop real-world skills, compete at the highest level, and
            discover a future in STEM.
          </p>

          <div className="heroButtons">
            <Link to="/sponsors/why-become" className="sponsorPrimaryButton">
              Why Support Us?
            </Link>
          </div>
        </div>

        <div className="heroStats">
          <div className="heroStat">
            <strong>$6,300+</strong>
            <span>Annual registration</span>
          </div>

          <div className="heroStat">
            <strong>$3,000+</strong>
            <span>Per additional regional</span>
          </div>

          <div className="heroStat">
            <strong>~$5,000</strong>
            <span>Typical robot parts</span>
          </div>

          <div className="heroStat">
            <strong>$0</strong>
            <span>Cost for students</span>
          </div>
        </div>
      </section>

      <section
        className="sponsorSection levelsSection"
        id="sponsorship-levels"
      >
        <div className="sectionHeading">
          <span>SPONSORSHIP OPPORTUNITIES</span>
          <h2>Choose Your Level</h2>
          <p>
            Every sponsor helps us keep robotics free and accessible to local
            youth. Higher sponsorship levels provide additional recognition
            and opportunities to connect with our team.
          </p>
        </div>

        <div className="sponsorLevels">
          {sponsorshipLevels.map((level) => (
            <article
              className={`sponsorCard ${level.featured ? "featuredSponsor" : ""
                } ${level.title ? "titleSponsor" : ""}`}
              key={level.name}
            >
              {level.featured && (
                <div className="popularBadge">FEATURED</div>
              )}

              {level.title && (
                <div className="titleBadge">ONE PER SEASON</div>
              )}

              <div className="sponsorCardTop">
                <span className="sponsorRank">
                  {level.title ? "👑" : "♞"}
                </span>

                <h3>{level.name}</h3>
                <strong>{level.amount}</strong>

                <p>{level.description}</p>
              </div>

              <div className="benefits">
                {level.benefits.map((benefit, index) => (
                  <div className="benefit" key={index}>
                    <span>✓</span>
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>

              <button
                className="chooseSponsorButton"
                onClick={() => {
                  setSelectedLevel(level.name)
                  document
                    .getElementById("sponsor-signup")
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Choose {level.name}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="sponsorSection signupSection" id="sponsor-signup">
        <div className="signupContainer">
          <div className="signupIntro">
            <span>BECOME A SPONSOR</span>

            <h2>Join the Team.</h2>

            <p>
              Interested in supporting the Ammoknights? Fill out the form and
              we'll get in touch with you about your sponsorship.
            </p>

            <div className="contactInfo">
              <h3>Sponsor Contact</h3>
              <p>
                <strong>Anne Kearns</strong>
                <br />
                Mentor
                <br />
                <a href="tel:8056302692">(805) 630-2692</a>
              </p>

              <p className="nonprofitText">
                Donations are made through the{" "}
                <strong>Rocky Mountain Robotics Coalition</strong>, a
                501(c)(3) organization.
              </p>

              <p className="nonprofitText">
                We are also on the Schwab Donor Advised Fund (DAF).
              </p>
            </div>
          </div>

          <form className="sponsorForm" onSubmit={handleSubmit}>
            <div className="formHeader">
              <span>SPONSORSHIP OFFER</span>
              <h3>Tell Us About Your Business</h3>
            </div>

            <div className="formGrid">
              <label>
                Business Name
                <input
                  type="text"
                  name="businessName"
                  placeholder="Your business"
                  required
                />
              </label>

              <label>
                Contact Name
                <input
                  type="text"
                  name="contactName"
                  placeholder="Your name"
                  required
                />
              </label>
            </div>

            <div className="formGrid">
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@business.com"
                  required
                />
              </label>

              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  placeholder="(208) 555-5555"
                />
              </label>
            </div>

            <label>
              Sponsorship Level
              <select
                name="level"
                value={selectedLevel}
                onChange={(event) => setSelectedLevel(event.target.value)}
                required
              >
                <option value="">Select a sponsorship level</option>

                {sponsorshipLevels.map((level) => (
                  <option value={level.name} key={level.name}>
                    {level.name} — {level.amount}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Business Website
              <input
                type="url"
                name="website"
                placeholder="https://yourbusiness.com"
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="5"
                placeholder="Tell us anything you'd like us to know..."
              />
            </label>

            <button type="submit" className="submitSponsorButton">
              Submit Sponsorship Offer
              <span>→</span>
            </button>

            <p className="formDisclaimer">
              Submitting this form does not process a payment. A team member
              will contact you with the next steps.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default BecomeSponsor