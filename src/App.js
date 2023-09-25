import Content1 from "./Component/Content1/Content1";
import Content2 from "./Component/Content2/Content2";
import Content3 from "./Component/Content3/Content3";
import Content4 from "./Component/Content4/Content4";
import Content5 from "./Component/Content5/Content5";
import Content6 from "./Component/Content6/Content6";
import Footer from "./Component/Footer/Footer";
import Nav2 from "./Component/Navbar/Nav2";
import Navbar from "./Component/Navbar/Navbar-canvas";
import Product from "./Component/Product/Product";
import Menu from "./Component/Product_menu/Product_menu";

import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="flex-nav">
        <Nav2 />
      </div>
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
      <div class="flex-product">
        <div class="app-menu">
          <Menu />
        </div>
        <div class="app-product">
          <div class="app-product1">
            <Product />
          </div>
          <div class="app-product2">
            <Product />
          </div>
          <div class="app-product3">
            <Product />
          </div>
          <div class="app-product4">
            <Product />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
