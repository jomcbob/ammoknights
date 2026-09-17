import { Link } from "react-router"
import { useEffect, useState } from "react"

export default function Header({ headerIsShown = true }) {
  const [showHeader, setShowHeader] = useState(headerIsShown)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = currentScrollY - lastScrollY

      if ((currentScrollY <= 75)) {
        setShowHeader(headerIsShown)
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
  }, [headerIsShown])

  return (
    <header
      className={`header ${showHeader ? "headerVisible" : "headerHidden"}`}
    >
      <Link to="/" className="logo">
        <img src="/logo-light.png" height={50} alt="" />
      </Link>

      <nav className="nav">
        <Link to="/about">About</Link>
        <Link to="/sponsors/become">Sponsor</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}