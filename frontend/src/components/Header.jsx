import { Link } from "react-router"
import { useEffect, useState } from "react"
import { Menu } from 'lucide-react'
import Dropdown from "./Dropdown"

export default function Header({ headerIsShown = true }) {
  const [showHeader, setShowHeader] = useState(headerIsShown)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = currentScrollY - lastScrollY

      if ((currentScrollY <= 75)) {
        setShowHeader(headerIsShown)
      } else if (scrollDifference > 75) {
        setShowHeader(false)
        lastScrollY = currentScrollY
      } else if (scrollDifference < -50) {
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
    showHeader ? (
      <header className="full">
        <Link to="/" className="logo">
          <img src="/logo-light.png" height={50} alt="" />
        </Link>

        <nav className="nav">
          <Link className='navLink' to="/about">About</Link>
          <Dropdown
            className='navLink'
            pageSide='center'
            options={[
              <Link className="defaultLink" to='/sponsors/view'>View Sponsors</Link>,
              <Link className="defaultLink" to='/sponsors/become'>Become Sponsor</Link>,
              <Link className="defaultLink" to='/sponsors/why-become'>View Impact</Link>,
            ]}
          >
            Sponsor
          </Dropdown>
          <Link className='navLink' to="/contact">Contact</Link>
        </nav>
      </header>
    ) : (
      <header className="hamburger">
        <Menu
          size={34}
          onClick={() => setShowHeader((prev) => !prev)}
        />
      </header>
    )
  )
}