import React, { useEffect, useState } from "react";
import DataServices from "../../Data/DataServices";

export default function ServicesServiceList() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let navigationLinks = document.querySelectorAll(
      ".services_navigation >  ul > li"
    );
    window.addEventListener("scroll", (event) => {
      let fromTop = window.scrollY;

      let sn = document.querySelectorAll(".services_navigation")[0];
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
    <div className="services_service_list">
      <div className="services_navigation">
        <ul>
          {DataServices.map((ser, i) => {
            return (
              <li key={i} className={active == i ? "active" : ""}>
                <a href={`#service_num_${i}`} onClick={() => setActive(i)}>
                  {ser.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="services">
        {DataServices.map((ser, i) => {
          return (
            <a
              href={`/Services/${ser.id}`}
              id={`service_num_${i}`}
              key={i}
              className="service_item"
            >
              <div className="top">
                <div className="img_wrapper">
                  <img src={ser.thumbnail} />
                </div>
                <h5>{ser.title}</h5>
              </div>
              <div className="middle">
                <p>{ser.desc}</p>
                <button className="gl_button">Learn More</button>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
