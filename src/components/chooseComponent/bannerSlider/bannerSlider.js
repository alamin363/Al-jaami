import Link from "next/link";
// import Slider from "react-slick";
// import { sliderData } from "./SliderData";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import client1 from "../../../assets/images/client/1.png";
import client2 from "../../../assets/images/client/2.png";
import client5 from "../../../assets/images/client/5.png";
import client3 from "../../../assets/images/client/3.png";
import client4 from "../../../assets/images/client/4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
const BannerSlider = ({ children }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      // spaceBetween={30}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="testimonial-item">
          <p className="testimonial__desc color-white">
            If you’re looking for a rewarding career and the chance to make an
            impact, you’ve come to the right place. We will transform your
            business through our techniques!
          </p>
          <div
            className="testimonial__meta"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "-150px",
              gap: "10px",
            }}
          >
            <Image width={50} height={50} src={client1} alt="client" />
            <Image width={50} height={50} src={client2} alt="client" />
            <span>
              <h4 className="testimonial__meta-title">Ahmed Abdallah</h4>
              <p className="testimonial__meta-desc">Digital Media Manager</p>
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-item">
          <p className="testimonial__desc color-white">
            If you’re looking for a rewarding career and the chance to make an
            impact, you’ve come to the right place. We will transform your
            business through our techniques!{" "}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "-150px",
              gap: "10px",
            }}
            className="testimonial__meta"
          >
            <Image width={50} height={50} src={client3} alt="client" />
            <Image width={50} height={50} src={client5} alt="client" />
            <span>
              <h4 className="testimonial__meta-title">John Peter</h4>
              <p className="testimonial__meta-desc">7oroof Inc</p>
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-item">
          <p className="testimonial__desc color-white">
            If you’re looking for a rewarding career and the chance to make an
            impact, you’ve come to the right place. We will transform your
            business through our techniques!
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "-150px",
              gap: "10px",
            }}
            className="testimonial__meta"
          >
            <Image width={50} height={50} src={client2} alt="client" />
            <Image width={50} height={50} src={client3} alt="client" />
            <span>
              <h4 className="testimonial__meta-title">Ayman</h4>
              <p className="testimonial__meta-desc">7oroof Inc</p>
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-item">
          <p className="testimonial__desc color-white">
            {" "}
            If you’re looking for a rewarding career and the chance to make an
            impact, you’ve come to the right place. We will transform your
            business through our techniques!{" "}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "-150px",
              gap: "10px",
            }}
            className="testimonial__meta"
          >
            <Image width={50} height={50} src={client3} alt="client" />
            <Image width={50} height={50} src={client4} alt="client" />
            <span>
              <h4 className="testimonial__meta-title">John Peter</h4>
              <p className="testimonial__meta-desc">7oroof Inc</p>
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-item">
          <p className="testimonial__desc color-white">
            My project was a simple & small task, but the persistence and
            determination turned it into an awesome and great project which make
            me happy .
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "-150px",
              gap: "10px",
            }}
            className="testimonial__meta"
          >
            <Image width={50} height={50} src={client4} alt="client" />
            <Image width={50} height={50} src={client5} alt="client" />
            <span>
              <h4 className="testimonial__meta-title">John Peter</h4>
              <p className="testimonial__meta-desc">7oroof Inc</p>
            </span>
          </div>
        </div>
      </SwiperSlide>
      {/* {children} */}
    </Swiper>

    // </div>
  );
};

export default BannerSlider;
