import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaFingerprint } from "react-icons/fa";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const[button, setButton] = useState(true)

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/">
            <FaFingerprint className="navbar-icon" />
            Website
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaBars /> : <FaTimes />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Product
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link>
                  <Button buttonStyle="btn--outline">SIGN UP</Button>
                </Link>
              ) : (
                <Link>
                  <Button buttonStyle="btn--outline">SIGN UP</Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
