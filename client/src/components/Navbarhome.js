import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg nav-main-div">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <h3 className='fs-2 fw-bolder logo'>LOCO</h3>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
            <Link to="/" className='nav-text'>
          Home
          </Link>
        </li>
        <Link to="/about" className='nav-text'>
        <li class="nav-item">
         About
        </li></Link>
        <Link to="/contact" className='nav-text'>
        <li class="nav-item">
          Contact
        </li></Link>
      </ul>
      <div class="">
            <Link to="/account">
            <button class="btn btn-home2" data-toggle="modal" data-target="#loginModal">Sign In</button>
            </Link>
            <Link to="/account">
            <button class="btn btn-home mx-2" data-toggle="modal" data-target="#loginModal">Sign Up</button>
            </Link>
            
        </div>
    </div>
     
  </div>
</nav>
    </div>
  )
}
