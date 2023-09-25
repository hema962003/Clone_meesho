import React from "react-dom";
import "./Nav2.css";
function Nav() {
  return (
    <div class="sub-nav">
      <nav class="nav nav-tabs sticky-top" id="nav2">
        <a>
          <li class="nav-link" href="#" id="women-ethnic">
            Women Ethnic
          </li>
          <div class="menu">
            <div class="sub-menu">
              <div class="women">
                <ul class="All Women Ethnic">
                  <span>All Women Ethnic</span>
                  <a href="">
                    <li>View all</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </a>
        <a>
          <li class="nav-link" href="#">
            Women Western
          </li>
        </a>
        <a>
          <li class="nav-link" href="#">
            Men
          </li>
        </a>
        <a>
          <li class="nav-link" href="#">
            Kids
          </li>
        </a>
        <a>
          <li class="nav-link" href="#">
            Cosmetics
          </li>
        </a>
        <a>
          <li class="nav-link" href="#">
            Bags & Footwear
          </li>
        </a>
        <a>
          <li class="nav-link" href="#">
            Home & Kitchen
          </li>
        </a>
        <a>
          <li class="nav-link" href="#">
            Electronics
          </li>
        </a>
        <a>
          <li class="nav-link" href="#">
            Jewellery & Accessories
          </li>
        </a>
      </nav>
    </div>
  );
}
export default Nav;
