import { Link } from "react-router"

// position of type string 
export default function Header({ position = "relative" }) {
  return (
    <header className="header" style={{ position }}>
      <Link to='/' className="logo">
        Logo
      </Link>

      <nav className="nav">
        <Link to="/about">About</Link>
        <Link to="/sponsor">Sponsor</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}