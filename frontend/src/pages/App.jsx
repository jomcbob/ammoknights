import { motion } from "motion/react"
import sponserArr from "../sponsors"
import { Link } from "react-router"
import { useTransform, useScroll, translateAxis } from "framer-motion"
import Header from "../components/Header"
import mentors from "../mentors"
import { useEffect, useState } from "react"

export default function App() {
  const { scrollYProgress } = useScroll()
  const [mentor, setMentor] = useState(0)

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, 1.1]
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, 0.5]
  )

  return (
    <>
      <Header position="fixed" />
      <section className="hero">

        <video
          className="heroVideo"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-gameplay.mp4" type="video/mp4" />
        </video>

        <div className="heroText">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ scale, opacity }}
            className="large"
          >
            AMMOKNIGHTS
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link
              to="https://www.firstinspires.org/about"
              target="_blank"
              rel="noopener noreferrer"
              className="small"
            >
              FRC Team #1566
            </Link>
          </motion.span>
        </div>

      </section>

      {/* About / What We Do */}
      <section className="sectionLight introduction">
        <h2 className="header">What We Do</h2>

        <div className="content">
          <p>
            We are an Idaho Falls–based FIRST Robotics Competition team made up of students, mentors,
            and sponsors from Idaho Falls and the surrounding communities.
            Every year, we take on a new challenge: designing, building, programming, and competing with a robot from the ground up.
            You can think of us like a sports team—but instead of a ball, we have a robot. Our competitions combine engineering, teamwork, strategy, and creativity,
            giving students the opportunity to put what they learn into practice.
            Before competition season begins, our team spends time developing the skills we need to succeed.
            Students learn 3D design, programming, electronics, mechanical design, fabrication, machining, driving, and how to safely use a variety of tools and equipment.
          </p>
          <img src="/teamphotos/banner.jpg" alt="" />
        </div>

      </section>

      <section className="sectionLight introduction">
        <h2 className="header">Our Team's Mission:</h2>
        <div className="content">
          <img src="/teamphotos/pit.jpg" alt="" />

          <div>
            We aim to provide a safe and welcoming environment for high-school-aged students interested in STEM and STEAM, and to help them compete well and have character building opportunities that may not be available to them in traditional extracurricular activities.
            <br />
            We seek to create a culture that supports STEM development in SE Idaho. We reach out to the community to collect and provide access to professional tools, training and materials and then use these to solve exciting and engaging engineering problems.
            <br />
            We work to provide support, training, knowledge and experience that will prepare students to become independent and active participants in their community. They learn to think through and identify challenges, and gain the confidence to develop and implement solutions. A skill applicable to all aspects of life.
            <br />
            By learning business and engineering principles students will leave our program armed to be leaders, active decision makers, and problem solvers.
          </div>
        </div>
      </section>

      <section className="light-blue carousel">
        <div className="reviewCarousel">
          <h2 className="header">Many thanks to our Sponsers!</h2>

          <div className="carousel-track">
            {/* we need two of the same thing to create the endless track effect */}
            {sponserArr.map((sponsor, i) => (
              <div key={i} className="sponser">
                <span>{sponsor.logo}</span>
              </div>
            ))}

            {sponserArr.map((sponsor, i) => (
              <div key={i} className="sponser">
                <span>{sponsor.logo}</span>
              </div>
            ))}
          </div>
          <div className="moreSponserOptions">
            <Link to='view-sponsors'>View All Sponsors</Link>
            <Link>Become A Sponsor</Link>
            <Link>Sponsorship Impact</Link>
          </div>
        </div>
      </section>

      <section className="sectionLight mentorCarousel">
        <h2 className="header">Meet Our Mentors</h2>
        <div className="mentorViewport">
          <div
            className="mentorTrack"
            style={{ transform: `translateX(${mentor * -100}%)` }}
          >
            {mentors.map((mentor, i) => (
              <div key={i} className="mentor">
                <img src="/teamphotos/mentors.jpg" alt={mentor.name} />

                <div className="mentorInfo">
                  <h3>{mentor.name}</h3>

                  <p className="mentorYears">
                    <strong>{mentor.timeWithTeam}</strong> years with the team
                  </p>

                  <p className="mentorBio">
                    "{mentor.bio}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cycleMentorCardButtons">
          <button
            disabled={mentor === 0}
            onClick={() =>
              setMentor(prev => Math.max(prev - 1, 0))
            }
          >
            <img src="/arrow-left.svg" alt="previous mentor" />
          </button>
          <button
            // plus one because mentor is 0 indexed and arr.length is not
            disabled={mentor + 1 === mentors.length}
            onClick={() =>
              setMentor(prev => Math.min(prev + 1, mentors.length - 1))
            }
          >
            <img src="/arrow-right.svg" alt="next mentor" />
          </button>
        </div>
      </section>

      <section className="sectionLight contact">
        <h2 className="header">Contact Us</h2>
        <div className="contact-info">
          <div>
            <p>Phone: 000-000-0000</p>
            <p>Email: 000@000.000</p>
          </div>

          <form>
            <div className="input-container">
              <input
                type="text"
                placeholder=" "
                id="name"
              />
              <label htmlFor="name">Name</label>
            </div>

            <div className="input-container">
              <input
                type="email"
                id="email"
                placeholder=" "
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-container">
              <textarea
                id="message"
                placeholder=" "
              />
              <label htmlFor="message">Message</label>
            </div>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}