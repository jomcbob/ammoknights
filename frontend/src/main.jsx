import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import App from './pages/App.jsx'
import ViewSponsors from './pages/ViewSponsors.jsx'
import './css/globle.css'
import './css/viewSponsors.css'
import './css/header.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/view-sponsors",
    element: <ViewSponsors />
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
