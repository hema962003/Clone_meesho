import react from "react-dom";
import "./Content5.css";

import cont5_s1 from "./Assets/content5_s1.webp";
import cont5_s2 from "./Assets/content5_s2.webp";

function Content5() {
  return (
    <div class="cont5">
      <div id="cont5-right">
        <h4>Become a Reseller and</h4>
        <h1 id="business">Start your Online Business</h1>
        <h1 id="zero">with Zero Investment</h1>
        <a href="#">
          <img src={cont5_s1} id="cont5_playstore" />
        </a>
        <a href="#">
          <img src={cont5_s2} id="cont5_applestore" />
        </a>
      </div>
    </div>
  );
}
export default Content5;
