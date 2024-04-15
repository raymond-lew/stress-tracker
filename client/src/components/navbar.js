import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="container">
      <div class="row">
        <nav className="navbar navbar-expand-lg">
          <div class="logo">Stress Tracker</div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/entries" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  New
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/charts" className="nav-link">
                  Charts
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/logout" className="nav-link">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
