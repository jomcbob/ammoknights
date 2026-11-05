import { useState } from "react"

const Dropdown = ({ children, options, pageSide }) => {
  if (!options || options.length == 0) return children
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="dropdownContainer"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsOpen(false)
        }
      }}
    >
      <div
        className="dropdownTrigger"
        onClick={() => setIsOpen((prev) => !prev)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key == 'Enter') {
            setIsOpen((prev) => !prev)
          }
        }}
      >
        {children}
      </div>

      {isOpen &&
        <div className={`dropdown ${pageSide ? pageSide : ''}`}>
          {options.map((item, index) => (
            <span className="dropdownItem" key={index}>{item}</span>
          ))}
        </div>
      }
    </div>
  )
}

export default Dropdown