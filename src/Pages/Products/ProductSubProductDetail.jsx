import React from "react";
import DataProducts from "../../Data/DataProducts";
import { useParams } from "react-router-dom";
import GrowWithUs from "../../Components/GrowWithUs";
import Footer from "../../Components/Footer";
import SubFooter from "../../Components/SubFooter";
export default function ProductSubProductDetail() {
  let { productId, subProductId } = useParams();
  let product = DataProducts.find((dp) => dp.id == productId);
  let subProduct = product.childProducts.find((cp) => cp.id == subProductId);

  return (
    <div className="product_sub_product_detail container">
      <div className="top_seciton">
        <img src={subProduct.img} />
        <h1>{subProduct.title}</h1>
        <p>{subProduct.shortDesc}</p>
      </div>
      <div className="product_list">
        {subProduct.products.map((prod, i) => {
          return (
            <div key={i} className="product">
              <img src={prod.img} />
              <p>{prod.name}</p>
              <a href="/contact-us">
                {" "}
                <button className="gl_button">Contact Us</button>
              </a>
            </div>
          );
        })}
      </div>
      <GrowWithUs />
      {/* <SubFooter /> */}
    </div>
  );
}
