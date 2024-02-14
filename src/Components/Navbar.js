import React from 'react'
import Logo from "../assets/_614750d8-08e5-4936-aaa9-a9c27b6618d5-removebg-preview.png"
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          style={{ color: "white", fontWeight: "bold" }}
          href="#"
        >
          <div className="d-flex">
            <Image src={Logo} className="w-10 h-10" />
            <h5 className="mt-2">Developer Castle</h5>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav text-white">
            <li className="nav-item text-white">
              <a
                className="nav-link active text-whites"
                aria-current="page"
                href="#"
                style={{ color: "white" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "white" }}>
                portfolio
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link " style={{ color: "white" }}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " style={{ color: "white" }}>
                Contact US
              </a>
            </li>
          </ul>
          <div class="d-flex" role="search">
            <button class="btn btn-outline-light" type="submit">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar