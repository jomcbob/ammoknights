import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={collapsed ? "collapsed" : ""}>
      <button onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? "→" : "←"}
      </button>

      <Link
        to="/"
        className={location.pathname === "/" ? "active" : ""}
      >
        Home
      </Link>

      <Link
        to="/one"
        className={location.pathname === "/one" ? "active" : ""}
      >
        Edit Home
      </Link>

      <Link
        to="/two"
        className={location.pathname === "/two" ? "active" : ""}
      >
        Add Sponsor
      </Link>
    </aside>
  );
};

export default Sidebar;