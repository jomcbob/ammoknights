import Header from "../components/Header";
import { Link } from "react-router";

export default function Contact() {

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)

    formData.append("access_key", "476545c3-a6e2-458b-ad0a-8ebd58e90b56")

    formData.append(
      "subject",
      `Message From Website Contact Form`
    )

    formData.append("from_name", "Ammoknights Contact Form")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        alert("Thank you! Your sponsorship offer has been submitted.")
        form.reset()
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
    <main className="contactPage">
      <Header position="sticky" />

      <section className="contactSection">

        <div className="contactForm">
          <div className="contactSectionHeader">
            <span className="contactLabel">SEND A MESSAGE</span>
            <h2>How can we help?</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="contactFormRow">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label>
              What are you contacting us about?
              <select name="topic" required>
                <option value="">Select an option</option>
                <option value="Joining">Joining the Team</option>
                <option value="Sponsorship">Sponsorship</option>
                <option value="Mentoring">Mentoring</option>
                <option value="General">General Question</option>
              </select>
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="7"
                placeholder="Tell us what's on your mind..."
                required
              />
            </label>

            <button type="submit">
              Send Message →
            </button>
          </form>
        </div>

        <aside className="contactDetails">
          <div className="contactDetail">
            <span className="contactLabel">EMAIL</span>
            <h3>First1566Ammoknights@gmail.com</h3>
            <p>
              Prefer email? You can contact the team directly.
            </p>

            <a className="contactLink" href="mailto:First1566Ammoknights@gmail.com">
              Email us →
            </a>
          </div>

          <div className="contactDetail">
            <span className="contactLabel">JOIN THE TEAM</span>
            <h3>Become an Ammoknight.</h3>
            <p>
              If you're 14–18 and interested in STEM, engineering,
              programming, design, media, or outreach, we'd love to
              hear from you.
            </p>

            <Link className="contactLink" to="/about">
              Learn About the Team →
            </Link>
          </div>

          <div className="contactDetail">
            <span className="contactLabel">SPONSORSHIP</span>
            <h3>Support the Ammoknights.</h3>
            <p>
              Help give students the resources and opportunities to
              build, compete, and grow.
            </p>

            <Link className="contactLink" to="/sponsors/become">
              Become a Sponsor →
            </Link>
          </div>
        </aside>

      </section>

    </main>
  );
}
