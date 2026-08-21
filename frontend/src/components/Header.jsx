
// position of type string 
export default function Header({ position = 'relative' }) {
  return (
    <header style={{ position: position }}>
      <div className="logo">
        Logo
      </div>

      <nav className="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  )
}