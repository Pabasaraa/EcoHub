import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

import logo from "../../assets/Logo.png";

function NavBar() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedin(true);
    }
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        padding: "0.8rem 3rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="navbar-brand mt-2 mt-lg-0" to={"/"}>
            <img src={logo} height="30" alt="MDB Logo" loading="lazy" />
          </Link>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={"/products"}>
                <b>Products</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"#"}>
                <b>Articles</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"#"}>
                <b>Seminars</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"#"}>
                <b>Contact Us</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"#"}>
                <b>About Us</b>
              </Link>
            </li>
          </ul>
        </div>

        {!isLoggedin ? (
          <div className="d-flex align-items-center">
            <Link className="text-reset me-3" to={"/cart"}>
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <Dropdown>
              <Dropdown.Toggle variant="link" id="navbarDropdownMenuAvatar">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-end">
                <Dropdown.Item>
                  <Link className="nav-link" to={"/profile"}>
                    My profile
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="nav-link" to={"/profile"}>
                    Log out
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ) : (
          <div className="d-flex align-items-center">
            <button
              type="button"
              className="btn btn-link px-3 me-2"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-primary me-3"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
