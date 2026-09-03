import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router"
import App from "./pages/App"
import AddSponsor from "./pages/AddSponsor"
import ViewSponsors from "./pages/ViewSponsors"
import './css/globle.css'
import './css/sponsorship.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/sponsors/add", element: <AddSponsor /> },
      { path: "/sponsors/view", element: <ViewSponsors /> },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
