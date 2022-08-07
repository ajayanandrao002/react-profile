import React from 'react'
import './Navbar.scss';

const Navbar = () => {
  return (
    <>
     <nav class="navbar navbar-expand-md navbar-dark">
        <div class="container-fluid ">
          <a class="navbar-brand" id="ajay" href="./index.html">My Profile</a>
    
          <button class="navbar-toggler" id="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"aria-controls="navbarNavDropdown"aria-expanded="false" aria-label="Toggle navigation" >
          <i style={{ fontSize:"28px"}} class="fa-solid fa-bars"></i>
          </button>
    
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <div class="navul">
            <div class="c" id="c">
            <ul class="navbar-nav "  id="ul">
              <li class="nav-item">
                <a class="nav-link active" href="./index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./Contact.html">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./About.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="./Signin.html">Sign in</a>
              </li>
              
            </ul>
          </div>
        </div>
    
        <div class="navbar-collapse justify-content-end"></div>
          <div class="form-navbar">
            <form class="d-flex">
              <input class="form-control form-control-sm me-2" type="text" placeholder="Search"/>
              <button class="btn btn-sm btn-outline-success btn-glass" id="btn" type="button">Search</button>        
            </form>
          
          </div>
        </div>
        </div>
      </nav>  

    </>
  )
}

export default Navbar