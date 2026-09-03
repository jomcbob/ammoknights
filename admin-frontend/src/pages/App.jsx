import { Outlet } from "react-router"
import Sidebar from "../components/Sidebar"

const App = () => {

  return (
    <div className="App">
    <Sidebar />
    <div className="outlet">
      <Outlet />
    </div>
    </div>
  )
}

export default App
