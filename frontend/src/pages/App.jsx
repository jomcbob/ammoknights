import { motion } from "motion/react"
import sponserArr from "../sponsors"
import { Link } from "react-router"
import { useTransform, useScroll } from "framer-motion"
import Header from "../components/Header"

export default function App() {
  const { scrollYProgress } = useScroll()

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
    <Header />
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

      <section className="light-blue carousel">
        <div className="reviewCarousel">
          <h2 className="header">Our Royal Sponsers</h2>

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

      <section className="sectionLight contact">
        <div className="contact-info">
          <div>
            <h2>Contact Us</h2>
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