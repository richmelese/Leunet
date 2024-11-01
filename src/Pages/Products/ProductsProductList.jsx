import React, { useEffect, useState } from "react";
import DataProducts from "../../Data/DataProducts";
import Footer from "../../Components/Footer";

export default function ProductsProductList() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let navigationLinks = document.querySelectorAll(
      ".products_navigation >  ul > li"
    );
    window.addEventListener("scroll", (event) => {
      let fromTop = window.scrollY;

      let sn = document.querySelectorAll(".products_navigation")[0];
      if (sn.offsetTop > fromTop) return;

      navigationLinks.forEach((link) => {
        let section = document.querySelector(link.children[0].hash);

        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
  });

  return (
    <div className="products_product_list">
      <div className="products_navigation">
        <ul>
          {DataProducts.map((prod, i) => {
            return (
              <li key={i} className={active == i ? "active" : ""}>
                <a href={`#product_num_${i}`} onClick={() => setActive(i)}>
                  {prod.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="products">
        {DataProducts.map((prod, i) => {
          return (
            <a
              href={`/products/${prod.id}`}
              id={`product_num_${i}`}
              key={i}
              className="product_item"
            >
              <div className="top">
                <div className="img_wrapper">
                  <img src={prod.thumbnail} />
                </div>
                <h5>{prod.title}</h5>
              </div>
              <div className="middle">
                <p>{prod.desc}</p>
                <button className="gl_button">Learn More</button>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
