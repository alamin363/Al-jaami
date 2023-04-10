import Link from "next/link";
// import Slider from "react-slick";
// import { sliderData } from "./SliderData";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import client1 from "../../../assets/images/client/1.png";
import client2 from "../../../assets/images/client/2.png";
import client5 from "../../../assets/images/client/5.png";
import client3 from "../../../assets/images/client/3.png";
import client4 from "../../../assets/images/client/4.png";
const clientSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      // spaceBetween={30}
      slidesPerView={1}
      // navigation
      // pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="client">
          <Image width={50} height={50} src={client1} alt="client" />
          <Image width={50} height={50} src={client1} alt="client" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client">
          <Image width={50} height={50} src={client2} alt="client" />
          <Image width={50} height={50} src={client2} alt="client" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image width={50} height={50} src={client4} alt="client" />
        <Image width={50} height={50} src={client4} alt="client" />
      </SwiperSlide>
      <SwiperSlide>
        <Image width={50} height={50} src={client1} alt="client" />
        <Image width={50} height={50} src={client1} alt="client" />
      </SwiperSlide>
    </Swiper>

    // </div>
  );
};

export default clientSlider;