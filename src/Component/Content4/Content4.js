import React from "react-dom";
import "./Content4.css";
import cont4_s1 from "./Assets/content4_s1.webp";
import cont4_s2 from "./Assets/content4_s2.webp";
import cont4_s3 from "./Assets/content4_s3.webp";

function Content4() {
  return (
    <div class="cont4">
      <div class="cont4-left">
        <h1 id="newstyles">New Styles</h1>
        <a href="#">
          <button class="btn cl-md-4" id="view">
            View all
          </button>
        </a>
      </div>
      <div class="cont4-right" id="con3-right">
        <div class="access">
          <a href="#">
            <img src={cont4_s1} id="access1" />
            <br />
            <button class="btn cl-md-4" id="access2">
              Accessories
            </button>
          </a>
        </div>
        <div class="footwear">
          <a href="#">
            <img src={cont4_s2} id="footwear1" />
            <br />
            <button class="btn cl-md-4" id="footwear2">
              Foot Wears
            </button>
          </a>
        </div>
        <div class="electronic">
          <a href="#">
            <img src={cont4_s3} id="electronic1" />
            <br />
            <button class="btn cl-md-4" id="electronic2">
              Electronics
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Content4;
