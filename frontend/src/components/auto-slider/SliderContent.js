import React from "react";
import './slider.css';
import './sliderImage'

//la classe slide-logo permet d'inserer un logo sur l'image du slide.

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image1" src={slide.urls} alt="" />
          <h2 className="slide-title1">{slide.title}</h2>
          <h3 className="slide-text1">{slide.description}</h3>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
