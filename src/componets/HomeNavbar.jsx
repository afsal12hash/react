import React from 'react';
import { Link,NavLink } from 'react-router-dom';

export default function HomeNavbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/About">About</Link>
        </li>
        <li class="nav-item">
          <Link activeClassName='active' class="nav-link" to="/Contact">Contact</Link>
        </li>
        <li class="nav-item">
          <Link activeClassName='active' class="nav-link" to={'/Profile'}>Profile</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
