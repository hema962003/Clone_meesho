import react from "react-dom";
import "./Product.css";
import product1 from "./Assets/product1.webp";
import product2 from "./Assets/product2.webp";
import product3 from "./Assets/product3.webp";
import product4 from "./Assets/product4.webp";

export default function Product() {
  return (
    <div class="main-product">
      <div class="parent1">
        <div class="p1-child1">
          <div class="card">
            <img src={product1} id="product1" class="card-img-top" alt="..." />
            <div class="card-body">
              <span id="product-head" class="card-title text-muted">
                Buccly Women's Solid Round Neck Maroon Dresses
              </span>
              <div class="rs-onwards">
                <h4 class="card-text">Rs.204</h4>
                <span class="text-muted">onwards</span>
              </div>
              <label class="text-muted" id="free-del">
                Free Delivery
              </label>
              <div class="rating-rev">
                <div class="rating">
                  <span id="rat-val">3.5</span>
                  <i id="rat-star" class="fa-solid fa-star"></i>
                </div>
                <div class="rev">
                  <p class="card-text">
                    <small class="text-muted">257 reviews</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p1-child2">
          <div class="card">
            <img src={product2} id="product2" class="card-img-top" alt="..." />
            <div class="card-body">
              <span id="product-head" class="card-title text-muted">
                Classy Fashionable Women's Top
              </span>
              <div class="rs-onwards">
                <h4 class="card-text">Rs.204</h4>
                <span class="text-muted">onwards</span>
              </div>
              <label class="text-muted" id="free-del">
                Free Delivery
              </label>
              <div class="rating-rev">
                <div class="rating">
                  <span id="rat-val">3.5</span>
                  <i id="rat-star" class="fa-solid fa-star"></i>
                </div>
                <div class="rev">
                  <p class="card-text">
                    <small class="text-muted">257 reviews</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p1-child3">
          <div class="card">
            <img src={product3} id="product3" class="card-img-top" alt="..." />
            <div class="card-body">
              <span id="product-head" class="card-title text-muted">
                Trendy Fashionable Men T-Shirt
              </span>
              <div class="rs-onwards">
                <h4 class="card-text">Rs.204</h4>
                <span class="text-muted">onwards</span>
              </div>
              <label class="text-muted" id="free-del">
                Free Delivery
              </label>
              <div class="rating-rev">
                <div class="rating">
                  <span id="rat-val">3.5</span>
                  <i id="rat-star" class="fa-solid fa-star"></i>
                </div>
                <div class="rev">
                  <p class="card-text">
                    <small class="text-muted">257 reviews</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p1-child4">
          <div class="card">
            <img src={product4} id="product4" class="card-img-top" alt="..." />
            <div class="card-body">
              <span id="product-head" class="card-title text-muted">
                Aviksi Banarasi Silk Saree
              </span>
              <div class="rs-onwards">
                <h4 class="card-text">Rs.204</h4>
                <span class="text-muted">onwards</span>
              </div>
              <label class="text-muted" id="free-del">
                Free Delivery
              </label>
              <div class="rating-rev">
                <div class="rating">
                  <span id="rat-val">3.5</span>
                  <i id="rat-star" class="fa-solid fa-star"></i>
                </div>
                <div class="rev">
                  <p class="card-text">
                    <small class="text-muted">257 reviews</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
