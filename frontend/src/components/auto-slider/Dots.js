import React from "react";

function Dots({ activeIndex, onclick, sliderImage }) {
  return (
    <div className="all-dots2">
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot2 active-dot2" : "dot2"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}
export default Dots;