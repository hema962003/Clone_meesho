import React from "react-dom";
import "./Content2.css";
import content2 from "./Assets/content2.webp";
import content2_s1 from "./Assets/content2_s1.webp";
import content2_s2 from "./Assets/content2_s2.webp";
function Content2() {
  return (
    <div id="page2">
      <hr class="hr-text" data-content="Top Categories to Choose from" />

      <div id="content2">
        <div class="cont2-left">
          <img src={content2} />
        </div>
        <div class="cont2-right">
          <h1 class="cont2-head">Be fashion forward</h1>
          <div id="s1_s2">
            <img src={content2_s1} />
            <img src={content2_s2} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content2;
