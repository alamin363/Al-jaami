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
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="clients">
      <div className="slick-carousel">
        <Slider {...settings}>
          <div className="client">
            <Image height={180} width={180} src={image1} alt="client" />
            <Image height={180} width={180} src={image1} alt="client" />
          </div>
          <div className="client">
            <Image height={180} width={180} src={image2} alt="client" />
            <Image height={180} width={180} src={image2} alt="client" />
          </div>
          <div className="client">
            <Image height={180} width={180} src={image3} alt="client" />
            <Image height={180} width={180} src={image3} alt="client" />
          </div>
          <div className="client">
            <Image height={180} width={180} src={image4} alt="client" />
            <Image height={180} width={180} src={image4} alt="client" />
          </div>
          <div className="client">
            <Image height={180} width={180} src={image5} alt="client" />
            <Image height={180} width={180} src={image5} alt="client" />
          </div>
          <div className="client">
            <Image height={180} width={180} src={image6} alt="client" />
            <Image height={180} width={180} src={image6} alt="client" />
          </div>
          <div className="client">
            <Image height={180} width={180} src={image7} alt="client" />
            <Image height={180} width={180} src={image7} alt="client" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AnimatedSlider;
