import { useState } from "react"
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { NavLink } from "react-router-dom"

const NestedSidebar = ({ links }) => {
  return (
    <div className="nestedLinks">
      {links.map((link) => (
        <NavLink
          key={link.link}
          to={link.link}
          className={({ isActive }) =>
            isActive ? "nestedLink active" : "nestedLink"
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  )
}

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <aside className={collapsed ? "collapsed" : ""}>
      <button className='openSidebar' onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? <PanelLeftOpen size={30} /> : <PanelLeftClose size={30} />}
      </button>

      <div className="openLinks">
        <button className={openSection === 'edit' ? 'active trigger' : 'trigger'} onClick={() => toggleSection("edit")}>
          Edit Sections <img src={`/arrow-${openSection === 'edit' ? 'down' : 'right'}.svg`} alt="" />
        </button>

        {openSection === "edit" && (
          <NestedSidebar links={[
            {
              name: 'hero',
              link: '/sections/edit/hero'
            },
            {
              name: 'About Us',
              link: '/sections/edit/about-us'
            },
            {
              name: 'Our Mission',
              link: '/sections/edit/our-mission'
            },
          ]} />
        )}
      </div>

      <div className="openLinks">
        <button className={openSection === 'sponsor' ? 'active trigger' : 'trigger'} onClick={() => toggleSection("sponsor")}>
          Sponsorship <img src={`/arrow-${openSection === 'sponsor' ? 'down' : 'right'}.svg`} alt="" />
        </button>

        {openSection === "sponsor" && (
          <NestedSidebar links={[
            {
              name: 'View Sponsors',
              link: '/sponsors/view'
            },
            {
              name: 'Add Sponsor',
              link: '/sponsors/add'
            },
          ]} />
        )}
      </div>
    </aside>
  )
}

export default Sidebar