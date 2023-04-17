import React from "react";
import Slider from "react-slick";
import miniimg from "../../assets/images/client/1.png";

export default function Minislider() {
  var settings = {
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // appendDots: (dots) => (
    //   <div>
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
  };

  return (
    <div className="slick-carousel">
      <Slider {...settings}>
        <div className="client">
          <img src={miniimg} alt="client" />
          <img src={miniimg} alt="client" />
        </div>
        <div className="client">
          <img src={miniimg} alt="client" />
          <img src={miniimg} alt="client" />
        </div>
        <div className="client">
          <img src={miniimg} alt="client" />
          <img src={miniimg} alt="client" />
        </div>
        <div className="client">
          <img src={miniimg} alt="client" />
          <img src={miniimg} alt="client" />
        </div>
        <div className="client">
          <img src={miniimg} alt="client" />
          <img src={miniimg} alt="client" />
        </div>
        <div className="client">
          <img src={miniimg} alt="client" />
          <img src={miniimg} alt="client" />
        </div>
        <div className="client">
          <img src={miniimg} alt="client" />
          <img src={miniimg} alt="client" />
        </div>
      </Slider>
    </div>
  );
}
