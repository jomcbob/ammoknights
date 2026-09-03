import { Link } from "react-router"
import { useEffect, useState } from "react"

export default function Header({ position = "relative" }) {
  const [showHeader, setShowHeader] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = currentScrollY - lastScrollY

      if (currentScrollY <= 75) {
        setShowHeader(true)
      }

      else if (scrollDifference > 75) {
        setShowHeader(false)
        lastScrollY = currentScrollY
      }

      else if (scrollDifference < -50) {
        setShowHeader(true)
        lastScrollY = currentScrollY
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`header ${showHeader ? "headerVisible" : "headerHidden"}`}
      style={{ position }}
    >
      <Link to="/" className="logo">
        <img src="/logo-light.png" height={50} alt="" />
      </Link>

      <nav className="nav">
        <Link to="/about">About</Link>
        <Link to="/sponsors/become">Sponsor</Link>
        {/* <Link to="/contact">Contact</Link> */}
      </nav>
    </header>
  )
}