import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          {/* <i class="bi bi-mic-mute-fill"></i> */}
          <i className="bi bi-cart4"></i>
          <a className="navbar-brand" href="#">
           
            Rift
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link active" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Pricing
                </a>
               
              </li> */}
              <li class="nav-item">
                <a class="nav-link active" href="/view_cart">
                  Cart
                </a>
               
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
    </div>
  )
}

export default Navbar