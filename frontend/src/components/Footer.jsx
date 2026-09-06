import { Link } from "react-router"

const Footer = () => {
  return (
    <footer className="finalSponsorCTA">
      <div>
        <span>AMMOKNIGHTS ROBOTICS</span>
        <h2>Build Something That Lasts.</h2>

        <p>
          Help us build the engineers, leaders, and problem solvers of tomorrow.
          Interested in joining the team or supporting our mission?
        </p>

        <div className="footerButtons">
          <Link to="/contact">Contact Us</Link>
          <Link to="/sponsors/become">Become a Sponsor</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer