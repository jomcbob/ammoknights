import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router"
import App from './pages/App.jsx'
import ViewSponsors from './pages/ViewSponsors.jsx'
import BecomeSponsor from './pages/BecomeSponsor.jsx'
import WhyBecomeSponsor from './pages/WhyBecomeSponsor.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import './css/globle.css'
import './css/viewSponsors.css'
import './css/header.css'
import './css/becomeSponsor.css'
import './css/about.css'
import './css/contact.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/sponsors/view",
    element: <ViewSponsors />
  },
  {
    path: "/sponsors/become",
    element: <BecomeSponsor />
  },
  {
    path: "/sponsors/why-become",
    element: <WhyBecomeSponsor />
  },
  {
    path: "/about",
    element: <About />
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
