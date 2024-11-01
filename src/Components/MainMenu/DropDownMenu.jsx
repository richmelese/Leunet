import React, { useState } from "react";

export default function DropDownMenu({
  title,
  newsub,
  dropDownList,
  exploreMoreLink,
  currentDropDownMenuOpen,
}) {
  const [userIsOnDropDownMenu, setUserIsOnDropDownMenu] = useState(false);

  return (
    <div
      className="drop_down_menu"
      onMouseOver={() => setUserIsOnDropDownMenu(true)}
      onMouseOut={() => setUserIsOnDropDownMenu(false)}
      style={{
        display:
          currentDropDownMenuOpen || userIsOnDropDownMenu ? "block" : "none",
      }}
    >
      <div>
        <div className="title_section">
          <h3>{title}</h3>
          <a href={exploreMoreLink} className="gl_button">
            Explore More
          </a>
        </div>
        <div className="drop_down_items">
          {dropDownList.map((ddi, i) => {
            return (
              <a
                href={`${exploreMoreLink}\\${ddi.id}`}
                key={i}
                className="drop_down_item"
              >
                <div className="left">
                  <div className="img_wrapper">
                    <img src={ddi.thumbnail} />
                  </div>
                </div>
                <div className="right">
                  <h3>{ddi.title}</h3>
                  <div className="Drop__list">
                    <ul>
                      <li>{ddi.subone}</li>
                    </ul>
                    <ul>
                      {" "}
                      <li>{ddi.subtwo}</li>
                    </ul>
                    <ul>
                      <li>{ddi.subthree}</li>
                    </ul>
                    <ul>
                      {" "}
                      <li>{ddi.subFour}</li>
                    </ul>
                    <ul>
                      <li>{ddi.subFive}</li>
                    </ul>
                    <ul>
                      <li>{ddi.subsix}</li>
                    </ul>
                    <ul>
                      <li>{ddi.subseven}</li>
                      <li>{ddi.subegiht}</li>
                    </ul>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
