import React from "react-dom";
import playstore from "./Assets/content5_s1.webp";
import applestore from "./Assets/content5_s2.webp";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div class="footer-main">
        <div class="footer-child1">
          <h2 id="footer-head">Shop Non-Stop on Meesho</h2>
          <div class="footer-cont">
            <span id="footer-cont1">Trusted by more than 1 Crore Indians</span>
            <p id="footer-cont2">Cash on Delivery | Free Delivery</p>
          </div>
          <div class="store">
            <a href="#">
              <img
                src={playstore}
                id="footer-playstore"
                height="50px"
                width="150px"
              />
            </a>
            <a href="#">
              <img
                src={applestore}
                id="footer-applestore"
                height="50px"
                width="150px"
              />
            </a>
          </div>
        </div>
        <div class="footer-child2">
          <ul>
            <a href="#">
              <li>Careers</li>
            </a>
            <a href="#">
              <li>Become a supplier</li>
            </a>
            <a href="#">
              <li>Hall of Fame</li>
            </a>
            <a href="#">
              <li>Sitemap</li>
            </a>
          </ul>
        </div>
        <div class="footer-child3">
          <ul>
            <a href="#">
              <li>Legal and Policies</li>
            </a>
            <a href="#">
              <li>Meesho Tech Blog</li>
            </a>
            <a href="#">
              <li>Notices and Returns</li>
            </a>
          </ul>
        </div>
        <div class="footer-child4">
          <h6>Reach out to us</h6>
        </div>
        <div class="footer-child5">
          <h6>Contact Us</h6>
          <span>
            Fashnear Technologies Private Limited, CIN: U74900KA2015PTC082263
            06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring
            Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India
            E-mail address: query@meesho.com © 2015-2023 Meesho.com
          </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
