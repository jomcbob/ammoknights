import { motion } from "motion/react"
import choseWebsiteReviews from "../reviews"
import { Link } from "react-router"
import { useTransform, useScroll } from "framer-motion"

const stuffWeOffer = [
  "Interior Car Detailing",
  "fast and reliable service",
  "friendly and professional staff",
  "competitive pricing",
  "local business with a focus on quality",
  "convenient scheduling options",
]

export default function App() {
  const { scrollYProgress } = useScroll()
  const reviews = choseWebsiteReviews()
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

      <section className="img admin">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ scale, opacity }}
        >
          Zane's Car Detailing
        </motion.h1>
      </section>

      <section className="light-gray introduction">
        <h2>What We Offer</h2>

        <div className="offerings">
          {stuffWeOffer.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.25 }}
              className="offering"
            >
              <img height={30} src="/check.svg" alt="" />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="light-blue carousel">
        <div className="reviewCarousel">
          What Our Customers Say
          <div className="carousel-track">
            {/* we need two of the same thing to create the endless track effect */}
            {reviews.map((review, i) => (
              <div key={i} className="review">
                <span>{review.name}</span>
                <hr />
                <span>{review.comment}</span>
              </div>
            ))}

            {reviews.map((review, i) => (
              <div key={i} className="review">
                <span>{review.name}</span>
                <hr />
                <span>{review.comment}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="dark-blue">
        Schedule an appointment today!
        <Link to='/schedule'>Schedule Now!</Link>
      </section>

      <section className="light-gray contact">
        <div className="contact-info">
          <div>
            <h2>Contact Us</h2>
            <p>Phone: 000-000-0000</p>
            <p>Email: 000@000.000</p>
          </div>
          <form action="">
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
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  )
}

// export default function App() {
//   const cards = [
//     "React",
//     "Node.js",
//     "Express",
//     "Prisma",
//     "PostgreSQL",
//     "Framer Motion",
//     "JavaScript",
//     "TypeScript",
//     "HTML",
//     "CSS",
//   ];

//   return (
//     <div style={{ fontFamily: "Arial, sans-serif" }}>
//       {/* Hero */}
//       <section
//         style={{
//           height: "100vh",
//           display: "grid",
//           placeItems: "center",
//           background: "#282c34",
//           color: "white",
//         }}
//       >
//         <h1>Scroll Down ↓</h1>
//       </section>

//       {/* Animated Cards */}
//       <section
//         style={{
//           maxWidth: "800px",
//           margin: "0 auto",
//           padding: "100px 20px",
//         }}
//       >
//         {cards.map((card, index) => (
//           <motion.div
//             key={card}
//             initial={{
//               opacity: 0,
//               y: -100,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.3,
//             }}
//             transition={{
//               duration: 0.6,
//               delay: index * 0.15,
//               ease: "easeOut",
//             }}
//             style={{
//               background: "#61dafb",
//               padding: "40px",
//               marginBottom: "30px",
//               borderRadius: "12px",
//               fontSize: "2rem",
//               fontWeight: "bold",
//               textAlign: "center",
//               color: "#222",
//             }}
//           >
//             {card}
//           </motion.div>
//         ))}
//       </section>
//     </div>
//   );
// }