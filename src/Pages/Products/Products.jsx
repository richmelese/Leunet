import React from "react";
import img_1 from "../../Assets/products_page_main.jpeg"
import GrowWithUs from "../../Components/GrowWithUs";
import ProductsProductList from "./ProductsProductList";
export default function Products() {
    return (
        <div className="products container">
            <div className="title_sec">
                <p className="small_title">Products</p>
                <h3>Our Products</h3>
            </div>
            <img src={img_1} />
            <ProductsProductList />
            {/* <ProductList /> */}
            <GrowWithUs />

        </div>
    );
}
