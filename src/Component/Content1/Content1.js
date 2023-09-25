import React from "react-dom";
import "./Content1.css";
import content1 from "./Assets/content1_img.webp";
import cash from "./Assets/cashondelivery.svg";
import freeDelivery from "./Assets/freeDelivery.svg";
import easyReturn from "./Assets/easyReturns.svg";
import playstore from "./Assets/playstoreSmallicon.png";

function Content1() {
  return (
    <div>
      <div class="main">
        <div class="left">
          <div class="left-content">
            <h1>Lowest Prices</h1>
            <h1>Best Quality Shopping</h1>
          </div>
          <ul class="info">
            <li>
              <div class="item">
                <img src={freeDelivery} />
                <p>Free Delivery</p>
              </div>
            </li>
            <li>
              <div class="item">
                <img src={cash} />
                <p>Cash on Delivery</p>
              </div>
            </li>
            <li>
              <div class="item">
                <img src={easyReturn} />
                <p>Easy Return</p>
              </div>
            </li>
          </ul>
          <a href="https://play.google.com/store/search?q=meesho&c=apps&hl=en-IN">
  
          <button class="btn btn-lg">
              <img src={playstore} />
              Download the Meesho App
           
          </button>
          </a>
        </div>
        <div class="right">
          <img src={content1} height="350px" width="100%" />
        </div>
      </div>
    </div>
  );
}
export default Content1;
