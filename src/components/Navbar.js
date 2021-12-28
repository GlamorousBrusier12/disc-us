import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="nav">
      <div className="left-div">
        <Link to="/">
          <h1 className="website-name">{"< Disc-Us/>"}</h1>
        </Link>
      </div>
      <div className="search-container">
        <img
          className="search-icon"
          src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
          alt="search-icon"
        />
        <input placeholder="Search" />

        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
            <li className="search-results-row">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        <div className="user">
          <img
            src="https://cdn-icons-png.flaticon.com/512/449/449586.png"
            alt="user-dp"
            id="user-dp"
          />
          <span>John Doe</span>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/login">Log in</Link>
            </li>

            <li>
              <Link to="/logout">Log out</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
