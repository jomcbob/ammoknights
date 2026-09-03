import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router"
import App from './pages/App.jsx'
import ViewSponsors from './pages/ViewSponsors.jsx'
import BecomeSponsor from './pages/BecomeSponsor.jsx'
import About from './pages/About.jsx'
import './css/globle.css'
import './css/viewSponsors.css'
import './css/header.css'
import './css/becomeSponsor.css'
import './css/about.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "/about",
    element: <About />
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
