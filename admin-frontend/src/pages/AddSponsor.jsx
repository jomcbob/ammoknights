import { useState } from "react"
import uploadImage from "../utils/uploadImage"
import { addSponsor } from "../api_calls/post"
import { useNavigate } from "react-router"

const AddSponsor = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [amountDonated, setAmountDonated] = useState(0)
  const [logo, setLogo] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const handleLogoChange = (event) => {
    const file = event.target.files[0]

    if (!file) {
      setLogo(null)
      setPreview(null)
      return
    }

    setLogo(file)
    setPreview(URL.createObjectURL(file))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!name || !email || !amountDonated) {
      setMessage("Please fill out name, amount donated, and email")
      return
    }

    setLoading(true)
    setMessage("")

    let img = ''
    if (logo) {
      const res = await uploadImage(logo)
      img = res.url
    }

    const success = await addSponsor(name, email, img, amountDonated, websiteUrl)

    if (!success) {
      setMessage("Something went wrong! Please try again.")
      setLoading(false)
      return
    } else {
      navigate('/')
    }
  }

  return (
    <main className="addSponsorPage">
      <div className="addSponsorCard">

        <div className="addSponsorHeader">
          <h1>Add Sponsor</h1>
          <p>
            Add a sponsor and upload their logo.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="sponsorForm">

          <div className="formGroup">
            <label htmlFor="name">
              Sponsor Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Boeing"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="email">
              Sponsor Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="contact@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="websiteUrl">
              Sponsor Website Url
            </label>

            <input
              id="websiteUrl"
              type="text"
              placeholder="https://example.com"
              value={websiteUrl}
              onChange={(event) => setWebsiteUrl(event.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="amountDonated">
              Amount Donated
            </label>

            <input
              id="amountDonated"
              type="number"
              min={0}
              placeholder="$9999.99"
              value={amountDonated}
              onChange={(event) => setAmountDonated(event.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="logo">
              Sponsor Logo (if this is not included the name will be used instead)
            </label>

            <label htmlFor="logo" className="logoUpload">

              {preview ? (
                <img
                  src={preview}
                  alt="Sponsor logo preview"
                  className="logoPreview"
                />
              ) : (
                <>
                  <span className="uploadIcon">↑</span>

                  <span className="uploadText">
                    Click to upload logo
                  </span>

                  <span className="uploadHint">
                    Image file
                  </span>
                </>
              )}

            </label>

            <input
              id="logo"
              type="file"
              accept="image"
              onChange={handleLogoChange}
              hidden
            />
          </div>

          {message && (
            <p className="formMessage">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="submitSponsor"
            disabled={loading}
          >
            {loading ? "Adding Sponsor..." : "Add Sponsor"}
          </button>

        </form>
      </div>
    </main>
  )
}

export default AddSponsor