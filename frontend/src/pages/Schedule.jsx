
const checkedDates = [
  {
    id: 1,
    date: 'Tuesday August 11 2026',
    isAdvalibleDate: true,
    appointments: [
      {
        name: 'John Doe',
        email: 'john@doe.com'
      }
    ]
  },
  {
    id: 2,
    date: 'Wednesday August 12 2026',
    isAdvalibleDate: true,
    appointments: []
  },
  {
    id: 3,
    date: 'Thursday August 13 2026',
    isAdvalibleDate: false,
    appointments: []
  },
  {
    id: 4,
    date: 'Friday August 14 2026',
    isAdvalibleDate: true,
    appointments: [
      {
        name: 'Jane Smith',
        email: 'jane@smith.com'
      }
    ]
  },
  {
    id: 5,
    date: 'Saturday August 15 2026',
    isAdvalibleDate: true,
    appointments: []
  },
  {
    id: 6,
    date: 'Sunday August 16 2026',
    isAdvalibleDate: false,
    appointments: []
  },
  {
    id: 7,
    date: 'Monday August 17 2026',
    isAdvalibleDate: true,
    appointments: [
      {
        name: 'Michael Brown',
        email: 'michael@brown.com'
      },
      {
        name: 'Sarah Wilson',
        email: 'sarah@wilson.com'
      }
    ]
  },
  {
    id: 8,
    date: 'Tuesday August 18 2026',
    isAdvalibleDate: true,
    appointments: []
  },
  {
    id: 9,
    date: 'Wednesday August 19 2026',
    isAdvalibleDate: false,
    appointments: []
  },
  {
    id: 10,
    date: 'Thursday August 20 2026',
    isAdvalibleDate: true,
    appointments: [
      {
        name: 'David Johnson',
        email: 'david@johnson.com'
      }
    ]
  },
  {
    id: 11,
    date: 'Friday August 21 2026',
    isAdvalibleDate: true,
    appointments: [
      {
        name: 'Emily Davis',
        email: 'emily@davis.com'
      }
    ]
  },
  {
    id: 12,
    date: 'Saturday August 22 2026',
    isAdvalibleDate: false,
    appointments: []
  },
  {
    id: 13,
    date: 'Sunday August 23 2026',
    isAdvalibleDate: false,
    appointments: []
  },
  {
    id: 14,
    date: 'Monday August 24 2026',
    isAdvalibleDate: true,
    appointments: []
  },
  {
    id: 15,
    date: 'Tuesday August 25 2026',
    isAdvalibleDate: true,
    appointments: [
      {
        name: 'Chris Miller',
        email: 'chris@miller.com'
      }
    ]
  },
  {
    id: 16,
    date: 'Wednesday August 26 2026',
    isAdvalibleDate: true,
    appointments: [
      {
        name: 'Jessica Taylor',
        email: 'jessica@taylor.com'
      },
      {
        name: 'Robert Anderson',
        email: 'robert@anderson.com'
      }
    ]
  },
  {
    id: 17,
    date: 'Thursday August 27 2026',
    isAdvalibleDate: false,
    appointments: []
  },
  {
    id: 18,
    date: 'Friday August 28 2026',
    isAdvalibleDate: true,
    appointments: []
  },
  {
    id: 19,
    date: 'Saturday August 29 2026',
    isAdvalibleDate: true,
    appointments: [
      {
        name: 'Daniel Thomas',
        email: 'daniel@thomas.com'
      }
    ]
  },
  {
    id: 20,
    date: 'Sunday August 30 2026',
    isAdvalibleDate: false,
    appointments: []
  },
  {
    id: 21,
    date: 'Monday August 31 2026',
    isAdvalibleDate: true,
    appointments: [
      {
        name: 'Ashley Jackson',
        email: 'ashley@jackson.com'
      }
    ]
  },
  {
    id: 22,
    date: 'Tuesday September 1 2026',
    isAdvalibleDate: true,
    appointments: []
  },
  {
    id: 23,
    date: 'Wednesday September 2 2026',
    isAdvalibleDate: false,
    appointments: []
  },
  {
    id: 24,
    date: 'Thursday September 3 2026',
    isAdvalibleDate: true,
    appointments: [
      {
        name: 'Matthew White',
        email: 'matthew@white.com'
      }
    ]
  },
  {
    id: 25,
    date: 'Friday September 4 2026',
    isAdvalibleDate: true,
    appointments: [
      {
        name: 'Olivia Harris',
        email: 'olivia@harris.com'
      }
    ]
  },
  {
    id: 26,
    date: 'Saturday September 5 2026',
    isAdvalibleDate: false,
    appointments: []
  },
  {
    id: 27,
    date: 'Sunday September 6 2026',
    isAdvalibleDate: false,
    appointments: []
  },
  {
    id: 28,
    date: 'Monday September 7 2026',
    isAdvalibleDate: true,
    appointments: [
      {
        name: 'William Martin',
        email: 'william@martin.com'
      },
      {
        name: 'Sophia Thompson',
        email: 'sophia@thompson.com'
      }
    ]
  },
  {
    id: 29,
    date: 'Tuesday September 8 2026',
    isAdvalibleDate: true,
    appointments: []
  },
  {
    id: 30,
    date: 'Wednesday September 9 2026',
    isAdvalibleDate: true,
    appointments: [
      {
        name: 'Ethan Garcia',
        email: 'ethan@garcia.com'
      }
    ]
  },
  {
    id: 31,
    date: 'Thursday September 10 2026',
    isAdvalibleDate: false,
    appointments: []
  },
  {
    id: 32,
    date: 'Friday September 11 2026',
    isAdvalibleDate: true,
    appointments: [
      {
        name: 'Isabella Martinez',
        email: 'isabella@martinez.com'
      }
    ]
  },
  {
    id: 33,
    date: 'Saturday September 12 2026',
    isAdvalibleDate: true,
    appointments: []
  },
  {
    id: 34,
    date: 'Sunday September 13 2026',
    isAdvalibleDate: false,
    appointments: []
  },
  {
    id: 35,
    date: 'Monday September 14 2026',
    isAdvalibleDate: true,
    appointments: [
      {
        name: 'James Robinson',
        email: 'james@robinson.com'
      }
    ]
  }
]

const getDayOfTheMonthOffsetFromToday = (offsetFromToday) => {
  const day = new Date()
  day.setDate(day.getDate() + offsetFromToday)
  return day
}

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 156) + 100
  const g = Math.floor(Math.random() * 156) + 100
  const b = Math.floor(Math.random() * 156) + 100

  return `rgb(${r}, ${g}, ${b})`
}

const getMondayOffset = () => {
  const today = new Date()
  const day = today.getDay()

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

const getCalendarOffset = (dateString) => {
  const date = new Date(dateString)

  // Convert JS Sunday=0...Saturday=6
  // to Monday=0...Sunday=6
  return (date.getDay() + 6) % 7
}

export default function Schedule() {
  return (
    <>
      <p>
        Please select a date to schedule your appointment.
        Unavailable dates will be grayed out.
        Appointments must be scheduled at least <strong>3 days in advance</strong>.
      </p>

      <p>
        Please enter your <strong>name and email address</strong> so we can contact you
        to confirm your appointment. You may also provide
        <strong>up to three dates</strong> that work for you. We’ll email you to confirm which date works best for both of us.
      </p>

      <p>
        Thank you for your understanding. We look forward to working with you!
      </p>

      <div className="inputContainer">
        <div className="input-container">
          <input
            type="text"
            placeholder=" "
            id="name"
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-container">
          <input
            type="email"
            id="email"
            placeholder=" "
          />
          <label htmlFor="email">Email</label>
        </div>
      </div>

      {/* 7 days at the top */}
      <div className="days">
        {Array.from({ length: 7 }, (_, i) => {

          return (
            <div key={i} className="day">
              {getDayOfTheMonthOffsetFromToday(getMondayOffset() + i).toLocaleDateString("en-US", {
                weekday: "long"
              })}
            </div>
          )
        })}
      </div>

      <div className="availableDates">
        {(() => {
          const filteredDates = checkedDates.filter(
            (date) => !isWithinWarningPeriod(date.date)
          )

          const emptySpots = getCalendarOffset(filteredDates[0].date)

          return (
            <>
              {/* Blank spots before the first date */}
              {Array.from({ length: emptySpots }).map((_, i) => (
                <div key={`empty-${i}`} className="date empty"></div>
              ))}

              {filteredDates.map((date) => (
                <div
                  key={date.id}
                  className={`date ${date.isAdvalibleDate && date.appointments.length < 2
                    ? "available"
                    : "unavailable"
                    }`}
                  onClick={() => {
                    if (
                      date.isAdvalibleDate &&
                      date.appointments.length < 2
                    ) {
                      console.log(`Selected date: ${date.date}`)
                    } else {
                      console.log(`Date ${date.date} is unavailable.`)
                    }
                  }}
                >
                  <span>{new Date(date.date).getDate()}</span>

                  <div>
                    {date.appointments.length > 0 && (
                      <div className="appointments">
                        {date.appointments.map((appointment, i) => (
                          <div
                            style={{
                              backgroundColor: getRandomColor()
                            }}
                            key={i}
                            className="appointment"
                          >
                            <span>{appointment.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </>
          )
        })()}
      </div>
    </>
  )
}