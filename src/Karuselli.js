import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Karuselli.css";

const Karuselli = ({ folder, imageCount = 1 }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  // Define the image numbers corresponding to filenames like p1.png, p2.png, etc.
  // numbers from 1 to 60 in array
  const imageNumbers = [...Array(imageCount).keys()].map((i) => i + 1);

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {imageNumbers.map((number) => (
          <div key={number}>
            <img
              src={`/${folder}/p${number}.jpg`}
              alt={`${folder} Slide ${number}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Karuselli;
