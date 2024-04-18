import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebar"
          aria-controls="offcanvasExample"
        >
          <span className="navbar-toggler-icon" data-bs-target="#sidebar"></span>
        </button>
        <a className='navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold' href='/'>Admin Pannel</a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topNavBar"
          aria-controls="topNavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="topNavBar">
          <form className="d-flex ms-auto my-3 my-lg-0">
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle ms-2"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-fill"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <Link to="/profile">
                <li><a className="dropdown-item text-center" href="/">Parush Uppal</a></li>
                </Link>
                <li><a className="dropdown-item" href="/">parush.uppal@gmail.com</a></li>
                <li>
                  <a className="dropdown-item text-center" href="/">
                    <Link to="/">
                  <button class="btn btn-danger" data-toggle="modal" data-target="#loginModal">Logout</button> 
                  </Link>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

