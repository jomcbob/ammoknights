import { useEffect, useState } from "react"
import { Link } from "react-router"
import onEnterKeyDownClick from "../utils/onEnterKeyDownClick"


const checkedDates = [
  {
    id: 1,
    date: "Tuesday August 11 2026",
    isAvailableDate: true,
    appointments: [
      {
        name: "John Doe",
        email: "john@doe.com",
      },
    ],
  },
  {
    id: 2,
    date: "Wednesday August 12 2026",
    isAvailableDate: true,
    appointments: [],
  },
  {
    id: 3,
    date: "Thursday August 13 2026",
    isAvailableDate: false,
    appointments: [],
  },
  {
    id: 4,
    date: "Friday August 14 2026",
    isAvailableDate: true,
    appointments: [
      {
        name: "Jane Smith",
        email: "jane@smith.com",
      },
    ],
  },
  {
    id: 5,
    date: "Saturday August 15 2026",
    isAvailableDate: true,
    appointments: [],
  },
  {
    id: 6,
    date: "Sunday August 16 2026",
    isAvailableDate: false,
    appointments: [],
  },
  {
    id: 7,
    date: "Monday August 17 2026",
    isAvailableDate: true,
    appointments: [
      {
        name: "Michael Brown",
        email: "michael@brown.com",
      },
      {
        name: "Sarah Wilson",
        email: "sarah@wilson.com",
      },
    ],
  },
  {
    id: 8,
    date: "Tuesday August 18 2026",
    isAvailableDate: true,
    appointments: [],
  },
  {
    id: 9,
    date: "Wednesday August 19 2026",
    isAvailableDate: false,
    appointments: [],
  },
  {
    id: 10,
    date: "Thursday August 20 2026",
    isAvailableDate: true,
    appointments: [
      {
        name: "David Johnson",
        email: "david@johnson.com",
      },
    ],
  },
  {
    id: 11,
    date: "Friday August 21 2026",
    isAvailableDate: true,
    appointments: [
      {
        name: "Emily Davis",
        email: "emily@davis.com",
      },
    ],
  },
  {
    id: 12,
    date: "Saturday August 22 2026",
    isAvailableDate: false,
    appointments: [],
  },
  {
    id: 13,
    date: "Sunday August 23 2026",
    isAvailableDate: false,
    appointments: [],
  },
  {
    id: 14,
    date: "Monday August 24 2026",
    isAvailableDate: true,
    appointments: [],
  },
  {
    id: 15,
    date: "Tuesday August 25 2026",
    isAvailableDate: true,
    appointments: [
      {
        name: "Chris Miller",
        email: "chris@miller.com",
      },
    ],
  },
  {
    id: 16,
    date: "Wednesday August 26 2026",
    isAvailableDate: true,
    appointments: [
      {
        name: "Jessica Taylor",
        email: "jessica@taylor.com",
      },
      {
        name: "Robert Anderson",
        email: "robert@anderson.com",
      },
    ],
  },
  {
    id: 17,
    date: "Thursday August 27 2026",
    isAvailableDate: false,
    appointments: [],
  },
  {
    id: 18,
    date: "Friday August 28 2026",
    isAvailableDate: true,
    appointments: [],
  },
  {
    id: 19,
    date: "Saturday August 29 2026",
    isAvailableDate: true,
    appointments: [
      {
        name: "Daniel Thomas",
        email: "daniel@thomas.com",
      },
    ],
  },
  {
    id: 20,
    date: "Sunday August 30 2026",
    isAvailableDate: false,
    appointments: [],
  },
  {
    id: 21,
    date: "Monday August 31 2026",
    isAvailableDate: true,
    appointments: [
      {
        name: "Ashley Jackson",
        email: "ashley@jackson.com",
      },
    ],
  },
  {
    id: 22,
    date: "Tuesday September 1 2026",
    isAvailableDate: true,
    appointments: [],
  },
  {
    id: 23,
    date: "Wednesday September 2 2026",
    isAvailableDate: false,
    appointments: [],
  },
  {
    id: 24,
    date: "Thursday September 3 2026",
    isAvailableDate: true,
    appointments: [
      {
        name: "Matthew White",
        email: "matthew@white.com",
      },
    ],
  },
  {
    id: 25,
    date: "Friday September 4 2026",
    isAvailableDate: true,
    appointments: [
      {
        name: "Olivia Harris",
        email: "olivia@harris.com",
      },
    ],
  },
  {
    id: 26,
    date: "Saturday September 5 2026",
    isAvailableDate: false,
    appointments: [],
  },
  {
    id: 27,
    date: "Sunday September 6 2026",
    isAvailableDate: false,
    appointments: [],
  },
  {
    id: 28,
    date: "Monday September 7 2026",
    isAvailableDate: true,
    appointments: [
      {
        name: "William Martin",
        email: "william@martin.com",
      },
      {
        name: "Sophia Thompson",
        email: "sophia@thompson.com",
      },
    ],
  },
  {
    id: 29,
    date: "Tuesday September 8 2026",
    isAvailableDate: true,
    appointments: [],
  },
  {
    id: 30,
    date: "Wednesday September 9 2026",
    isAvailableDate: true,
    appointments: [
      {
        name: "Ethan Garcia",
        email: "ethan@garcia.com",
      },
    ],
  },
  {
    id: 31,
    date: "Thursday September 10 2026",
    isAvailableDate: false,
    appointments: [],
  },
  {
    id: 32,
    date: "Friday September 11 2026",
    isAvailableDate: true,
    appointments: [
      {
        name: "Isabella Martinez",
        email: "isabella@martinez.com",
      },
    ],
  },
  {
    id: 33,
    date: "Saturday September 12 2026",
    isAvailableDate: true,
    appointments: [],
  },
  {
    id: 34,
    date: "Sunday September 13 2026",
    isAvailableDate: false,
    appointments: [],
  },
  {
    id: 35,
    date: "Monday September 14 2026",
    isAvailableDate: true,
    appointments: [
      {
        name: "James Robinson",
        email: "james@robinson.com",
      },
    ],
  },
]

const getDateOffset = (offset) => {
  const date = new Date()
  date.setDate(date.getDate() + offset)
  return date
}

const getColorForId = (id) => {
  const random = (multiplier) => 150 + ((id * multiplier) % 106)

  return `rgb(${random(37)}, ${random(67)}, ${random(97)})`
}

// How many days do I need to move from today to get to this week's Monday?
const getMondayOffset = () => {
  const day = new Date().getDay()

  // Sunday = 0, Monday = 1, etc.
  return day === 0 ? -6 : 1 - day
}

const getDateOnly = (date) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  )
}

const isWithinWarningPeriod = (dateString) => {
  const today = getDateOnly(new Date())
  const selectedDate = getDateOnly(new Date(dateString))

  const difference =
    (selectedDate - today) / (1000 * 60 * 60 * 24)

  return difference < 3
}

// Where should this particular date be placed in a Monday-first calendar row
const getCalendarOffset = (dateString) => {
  const day = new Date(dateString).getDay()

  // Convert Sunday = 0...Saturday = 6
  // to Monday = 0...Sunday = 6
  return (day + 6) % 7
}

export default function Schedule() {
  const [selectedDates, setSelectedDates] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const filteredDates = checkedDates.filter(
    // make sure the dates are not within the warning period (3 days from today) so that users cannot select dates that are too soon
    (date) => !isWithinWarningPeriod(date.date)
  )

  const emptySpots =
    filteredDates.length > 0
      ? getCalendarOffset(filteredDates[0].date)
      : 0

  const isDateAvailable = (date) => {
    return (
      date.isAvailableDate &&
      date.appointments.length < 2
    )
  }

  const handleDateClick = (date) => {
    setSelectedDates((currentDates) => {
      if (currentDates.includes(date)) {
        return currentDates.filter(
          (selectedDate) => selectedDate !== date
        )
      }

      if (currentDates.length >= 3) {
        alert("You can only select up to 3 dates.")
        return currentDates
      }

      return [...currentDates, date]
    })
  }

  useEffect(() => {
    console.log("Selected Dates:", selectedDates)
  }, [selectedDates])

  return (
    <div className="schedule">
      <header>
        <Link to="/">Go Home</Link>
      </header>

      <section className="instructions">
        <h2>How it works</h2>
        <div className="instructionCards">
          <div className="card">
            <div className="title">Select Dates</div>
            <hr />
            <p>
              Please select a date to schedule your appointment.
              Unavailable dates will be grayed out.
              Appointments must be scheduled at least{" "}
              <strong>3 days in advance</strong>.
            </p>
          </div>

          <div className="card">
            <div className="title">Provide Contact Info</div>
            <hr />
            <p>
              Please enter your{" "}
              <strong>name and email address</strong> so we can
              contact you to confirm your appointment.
              You may also provide{" "}
              <strong>up to three dates</strong> that work for
              you. We’ll email you to confirm which date works
              best for both of us.
            </p>
          </div>

          <div className="card">
            <div className="title">Thank You</div>
            <hr />
            <p>
              Thank you for your understanding. We look forward
              to working with you!
            </p>
          </div>
        </div>
      </section>

      <div className="inputContainer">
        <div className="input-container">
          <input
            id="name"
            type="text"
            placeholder=" "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name">Name</label>
        </div>

        <div className="input-container">
          <input
            id="email"
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </div>
      </div>

      <div className="calendar">
        <div className="days">
          {Array.from({ length: 7 }, (_, i) => (
            <div key={i} className="day">
              {getDateOffset(
                getMondayOffset() + i
              ).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </div>
          ))}
        </div>

        <div className="availableDates">
          {Array.from({ length: emptySpots }, (_, i) => (
            <div
              key={`empty-${i}`}
              className="date empty"
            />
          ))}

          {filteredDates.map((date) => {
            const available = isDateAvailable(date)
            const selected = selectedDates.includes(date.date)

            return (
              <div
                key={date.id}
                tabIndex={available ? 0 : null}
                onKeyDown={(e) => onEnterKeyDownClick(e)}
                className={[
                  "date",
                  available ? "available" : "unavailable",
                  selected && "selected",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => {
                  if (!available) {
                    console.log(
                      `Date ${date.date} is unavailable.`
                    )
                    return
                  }

                  console.log(`Selected date: ${date.date}`)
                  handleDateClick(date.date)
                }}
              >
                <span>
                  {new Date(date.date).getDate()}
                </span>

                {date.appointments.length > 0 && (
                  <div className="appointments">
                    {date.appointments.map((appointment, i) => (
                      <div
                        key={i}
                        className="appointment"
                        style={{
                          backgroundColor: getColorForId(date.id),
                        }}
                      >
                        <span>{appointment.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}