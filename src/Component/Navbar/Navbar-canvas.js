import React from "react-dom";
import "./Navbar-canvas.css";

function Navbar() {
  return (
    <div class="main-nav sticky-top">
      <nav class="navbar navbar-expand-lg " id="sticky">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <h1 id="navbar-brand">meesho</h1>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div class="main-search">
              <div class="search">
                <img src="https://cdn-icons-png.flaticon.com/128/54/54481.png" />
              </div>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-3 col-md-12"
                  type="search"
                  placeholder="Try Saree,Kurti or search product code"
                  aria-label="Search"
                />
              </form>
            </div>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav-items">
              <li class="nav-item">
                <div id="download">
                  <i class="fa-solid fa-mobile" id="download-icon"></i>
                  <span>Download App</span>
                </div>
              </li>
              <li class="nav-item">
                <div id="supply">
                  <i class="fa-solid fa-boxes-packing" id="supplier-icon"></i>
                  Become a Supplier
                </div>
              </li>
              <li class="nav-item">
                <div id="profile">
                  <i class="fa-solid fa-user" id="profile-icon"></i>
                  Profile
                </div>
              </li>
              <li class="nav-item">
                <div id="cart">
                  <i class="fa-solid fa-cart-shopping" id="cart-icon"></i>
                  Cart
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
