import { Link } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useEffect } from "react"

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

const WhyBecomeSponsor = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])

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
            <Link to="/sponsors/become" className="sponsorPrimaryButton">
              Become a Sponsor
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

      <Footer />

    </div>
  )
}

export default WhyBecomeSponsor