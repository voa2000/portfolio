import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav-list">
        <div className="nav-item">
          <Link>About</Link>
        </div>
        <div className="nav-item">
          <Link>Skills</Link>
        </div>
        <div className="nav-item">
          <Link>Projects</Link>
        </div>
        <div className="nav-item">
          <Link>Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
