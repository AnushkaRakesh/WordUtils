import React from 'react';
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">WordUtils</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/wordArea">WordArea</Link>
        </li>
      </ul>
      {/* <div className={`form-check form switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode}type="checkbox"id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label> */}
       
      <div className={`custom-control custom-switch-${props.mode==='light'?'dark':'light'}`}>
          {/* <input type="checkbox" class="custom-control-input"  id="customSwitches"/> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-toggle-on"onClick={props.toggleMode} viewBox="0 0 16 16">
      <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
    </svg>
          <label class="custom-control-label" for="customSwitches"><i class="bi bi-toggle-on"></i>Enable DarkMode</label>
      </div>
    </div>
  </div>
</nav>
  )
}
