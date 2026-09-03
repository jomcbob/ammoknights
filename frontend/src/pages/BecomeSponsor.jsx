import { useState } from "react"
import { useEffect } from "react"
import Header from "../components/Header"
import sponsorshipLevels from "../sponsorTiers"

const impactItems = [
  {
    icon: "⚙",
    title: "Hands-On STEM",
    text: "Students design, build, program, fabricate, and compete with a real competition robot.",
  },
  {
    icon: "🤝",
    title: "Community",
    text: "We work with organizations such as Community Youth in Action to help provide opportunities for local youth.",
  },
  {
    icon: "🚀",
    title: "Future Careers",
    text: "Students develop problem-solving, teamwork, communication, and professional skills that can follow them into their careers.",
  },
]

const BecomeSponsor = () => {
  const [selectedLevel, setSelectedLevel] = useState("")

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    // Connect this to your backend later.
    console.log("Sponsor request submitted")
  }

  return (
    <div className="sponsorPage">
      <Header position="sticky" />

      {/* HERO */}
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
            <a href="#sponsorship-levels" className="sponsorPrimaryButton">
              Become a Sponsor
            </a>

            <a href="#why-support" className="sponsorSecondaryButton">
              Why Support Us?
            </a>
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

      {/* COMMUNITY IMPACT */}
      <section className="sponsorSection impactSection">
        <div className="sectionHeading">
          <span>WHY IT MATTERS</span>
          <h2>Your Support Has an Impact</h2>
          <p>
            The Ammoknights are more than a robotics team. We're giving young
            people an opportunity to learn, build, compete, and grow.
          </p>
        </div>

        <div className="impactGrid">
          {impactItems.map((item) => (
            <div className="impactCard" key={item.title}>
              <div className="impactIcon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPONSORSHIP LEVELS */}
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

      {/* WHY WE NEED SUPPORT */}
      <section className="sponsorSection supportSection" id="why-support">
        <div className="supportContent">
          <div className="supportText">
            <span>WHERE YOUR SUPPORT GOES</span>

            <h2>Why We Need Your Help</h2>

            <p>
              Competitive robotics is expensive. Annual registration alone
              costs a minimum of $6,300, with an additional $3,000 or more for
              each regional competition. Travel costs are on top of that.
            </p>

            <p>
              Robot components, motors, swerve drive systems, controllers,
              electronics, materials, and other equipment can quickly add up.
              We typically spend around $5,000 just on robot parts.
            </p>

            <p>
              Additional funding allows us to expand what we can offer
              students and our community.
            </p>

            <div className="fundingList">
              <div>✓ STEM outreach supplies</div>
              <div>✓ Larger workspace</div>
              <div>✓ Future-season funding</div>
              <div>✓ Community outreach</div>
            </div>
          </div>

          <div className="costCard">
            <div className="costCardHeader">
              <span>OUR SEASON</span>
              <h3>It Takes a Team</h3>
            </div>

            <div className="costRow">
              <span>Registration</span>
              <strong>$6,300+</strong>
            </div>

            <div className="costRow">
              <span>Additional Regional</span>
              <strong>$3,000+</strong>
            </div>

            <div className="costRow">
              <span>Robot & Components</span>
              <strong>~$5,000</strong>
            </div>


            <div className="costRow totalCost">
              <span>Growing our tools</span>
              <strong>Additional</strong>
            </div>

            <div className="costRow totalCost">
              <span>Travel</span>
              <strong>Additional</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNUP */}
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
              <span>SPONSORSHIP REQUEST</span>
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
              Submit Sponsorship Request
              <span>→</span>
            </button>

            <p className="formDisclaimer">
              Submitting this form does not process a payment. A team member
              will contact you with the next steps.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="finalSponsorCTA">
        <div>
          <span>AMMOKNIGHTS ROBOTICS</span>
          <h2>Build Something That Lasts.</h2>
          <p>
            Your support helps us build robots today and build the engineers,
            leaders, and problem solvers of tomorrow.
          </p>

          <a href="#sponsor-signup">Become a Sponsor →</a>
        </div>
      </section>
    </div>
  )
}

export default BecomeSponsor