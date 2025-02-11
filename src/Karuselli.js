import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Karuselli.css"; // Lisää omat tyylit tarvittaessa

const Karuselli = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src="/kuva1.png" alt="Slide 1" />
        </div>
        <div>
          <img src="/kuva2.png" alt="Slide 2" />
        </div>
        <div>
          <img src="/kuva3.png" alt="Slide 3" />
        </div>
        <div>
          <img src="/kuva4.png" alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
};

export default Karuselli;
