import { Outlet, Link, useLocation } from "react-router";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

const App = () => {

  return (
    <div className="App">
    <Sidebar />
    <Outlet />
    </div>
  )
}

export default App
