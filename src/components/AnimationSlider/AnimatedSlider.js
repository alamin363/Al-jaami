import Image from "next/image";
import image1 from "../../assets/images/clients/1.png";
import image2 from "../../assets/images/clients/2.png";
import image3 from "../../assets/images/clients/3.png";
import image4 from "../../assets/images/clients/4.png";
import image5 from "../../assets/images/clients/5.png";
import image6 from "../../assets/images/clients/6.png";
import image7 from "../../assets/images/clients/7.png";
import Slider from "react-slick";
const AnimatedSlider = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Slider
      {...settings}
      className="slick-carousel"
      style={{ height: "80px"}}
    >
      <div className="client">
        <Image height={80} width={"auto"} src={image1} alt="client" />
        <Image height={80} width={"auto"} src={image1} alt="client" />
      </div>
      <div className="client">
        <Image height={80} width={"auto"} src={image2} alt="client" />
        <Image height={80} width={"auto"} src={image2} alt="client" />
      </div>
      <div className="client">
        <Image height={80} width={"auto"} src={image3} alt="client" />
        <Image height={80} width={"auto"} src={image3} alt="client" />
      </div>
      <div className="client">
        <Image height={80} width={"auto"} src={image4} alt="client" />
        <Image height={80} width={"auto"} src={image4} alt="client" />
      </div>
      <div className="client">
        <Image height={80} width={"auto"} src={image5} alt="client" />
        <Image height={80} width={"auto"} src={image5} alt="client" />
      </div>
      <div className="client">
        <Image height={80} width={"auto"} src={image6} alt="client" />
        <Image height={80} width={"auto"} src={image6} alt="client" />
      </div>
      <div className="client">
        <Image height={80} width={"auto"} src={image7} alt="client" />
        <Image height={80} width={"auto"} src={image7} alt="client" />
      </div>
    </Slider>
  );
};

export default AnimatedSlider;
