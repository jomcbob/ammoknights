import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router"
import App from "./pages/App"
import './css/globle.css'
import MockPageOne from "./pages/MockPageOne"
import MockPageTwo from "./pages/MockPageTwo"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "one", element: <MockPageOne /> },
      { path: "two", element: <MockPageTwo /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
