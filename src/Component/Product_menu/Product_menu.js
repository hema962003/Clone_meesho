import React from "react-dom";
import "./Product_menu.css";

export default function Menu() {
  return (
    <div class="main-menu">
      <h1 class="product-head">Products for you</h1>
      <div class="sub-menu">
        <div class="sortby">
          <div class="input-group mb-3">
            <select
              class="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
            >
              <option selected>Sort by:</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="filter">
          <div class="flt1">
            <h6 class="flt1-head" aria-describedby="flt-txt">
              FILTERS
            </h6>
            <small id="flt1-txt" class="text-muted">
              1000+ Products
            </small>
            <hr />
          </div>
          <div class="flt2">
            <div class="input-group mb-3">
              <select
                class="form-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
              >
                <option selected id="cat-head">
                  Category
                </option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Kids</option>
              </select>
            </div>
          </div>
          <div class="flt3"></div>
          <div class="flt4"></div>
          <div class="flt5"></div>
        </div>
      </div>
    </div>
  );
}
