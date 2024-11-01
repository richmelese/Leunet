import React from "react";
import img_1 from "../../Assets/mainswtch.jpg";
import GrowWithUs from "../../Components/GrowWithUs";
import ProductsProductList from "./ProductsProductList";
import Footer from "../../Components/Footer";

export default function Products() {
  return (
    <div>
      <div className="products container">
        <div className="title_sec">
          <p className="small_title">Products</p>
          <h3>Our Products</h3>
        </div>
        <img src={img_1} />
        <ProductsProductList />
        {/* <ProductList /> */}
      </div>
      {/* <GrowWithUs /> */}
      <Footer />
    </div>
  );
}
