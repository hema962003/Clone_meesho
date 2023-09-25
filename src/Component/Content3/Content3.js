import React from "react-dom";
import "./Content3.css";
import cont3_s1 from "./Assets/content3_s1.webp";
import cont3_s2 from "./Assets/content3_s2.webp";
import cont3_s3 from "./Assets/content3_s3.webp";

function Content3() {
  return (
    <div class="cont3">
      <div class="cont3-left">
        <h1 id="essential">Essentials</h1>
        <a href="#">
          <button class="btn cl-md-4" id="view">
            View all
          </button>
        </a>
      </div>
      <div class="cont3-right" id="con3-right">
        <div class="home">
          <a href="#">
            <img src={cont3_s1} id="homedecor1" />
            <br />
            <button class="btn cl-md-4" id="homedecor2">
              Home Decor
            </button>
          </a>
        </div>
        <div class="kitchen">
          <a href="#">
            <img src={cont3_s2} id="kitchen1" />
            <br />
            <button class="btn cl-md-4" id="kitchen2">
              Kitchen Appliance
            </button>
          </a>
        </div>
        <div class="health">
          <a href="#">
            <img src={cont3_s3} id="health1" />
            <br />
            <button class="btn cl-md-4" id="health2">
              Health Care
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Content3;
