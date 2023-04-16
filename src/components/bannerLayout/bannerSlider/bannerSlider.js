import Link from "next/link";
// import Slider from "react-slick";
// import { sliderData } from "./SliderData";
import client1 from "../../../assets/images/client/1.png";
import client2 from "../../../assets/images/client/2.png";
import client5 from "../../../assets/images/client/5.png";
import client3 from "../../../assets/images/client/3.png";
import client4 from "../../../assets/images/client/4.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

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
      // pagination={{ clickable: true }}
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

          <div className="slider-img-text">
            <div className="testimonial__meta">
              <h4 className="testimonial__meta-title">Ahmed Abdallah</h4>
              <p className="testimonial__meta-desc">Digital Media Manager</p>
            </div>
            <div
              className="userPhoto"
              style={{
                marginTop: "50px",
              }}
            >
              <span className="testimonial__thumb">
                <Image
                  width={50}
                  height={50}
                  src="https://images.pexels.com/photos/2896424/pexels-photo-2896424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="client"
                />
              </span>
              <span className="testimonial__thumb">
                <Image
                  width={50}
                  height={50}
                  src="https://images.pexels.com/photos/3262878/pexels-photo-3262878.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="client"
                />
              </span>
            </div>
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
          <div className="slider-img-text">
            <div className="testimonial__meta">
              <h4 className="testimonial__meta-title">John Peter</h4>
              <p className="testimonial__meta-desc">7oroof Inc</p>
            </div>
            <div
              className="userPhoto"
              style={{
                marginTop: "50px",
              }}
            >
              <span className="testimonial__thumb">
                <Image
                  width={50}
                  height={50}
                  src="https://images.pexels.com/photos/3262878/pexels-photo-3262878.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="client"
                />
              </span>
              <span className="testimonial__thumb">
                <Image
                  width={50}
                  height={50}
                  src="https://images.pexels.com/photos/2806202/pexels-photo-2806202.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="client"
                />
              </span>
            </div>
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
              position: "relative",
            }}
          >
            <div className="testimonial__meta">
              <h4 className="testimonial__meta-title">Ayman</h4>
              <p className="testimonial__meta-desc">7oroof Inc</p>
            </div>
            <div
              className="userPhoto"
              style={{
                marginTop: "50px",
              }}
            >
              <span className="testimonial__thumb">
                <Image
                  width={50}
                  height={50}
                  src="https://images.pexels.com/photos/2806202/pexels-photo-2806202.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="client"
                />
              </span>
              <span className="testimonial__thumb">
                <Image
                  width={50}
                  height={50}
                  src="https://images.pexels.com/photos/2838597/pexels-photo-2838597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="client"
                />
              </span>
            </div>
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
          <div className="slider-img-text">
            <div className="testimonial__meta">
              <h4 className="testimonial__meta-title">John Peter</h4>
              <p className="testimonial__meta-desc">7oroof Inc</p>
            </div>
            <div
              className="userPhoto"
              style={{
                marginTop: "50px",
              }}
            >
              <span className="testimonial__thumb">
                <Image
                  width={50}
                  height={50}
                  src="https://images.pexels.com/photos/2838597/pexels-photo-2838597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="client"
                />
              </span>
              <span className="testimonial__thumb">
                <Image
                  width={50}
                  height={50}
                  src="https://images.pexels.com/photos/1390599/pexels-photo-1390599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="client"
                />
              </span>
            </div>
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
          <div className="slider-img-text">
            <div className="testimonial__meta">
              <h4 className="testimonial__meta-title">John Peter</h4>
              <p className="testimonial__meta-desc">7oroof Inc</p>
            </div>
            <div
              className="userPhoto"
              style={{
                marginTop: "50px",
              }}
            >
              <span className="testimonial__thumb">
                <Image
                  width={50}
                  height={50}
                  src="https://images.pexels.com/photos/1390599/pexels-photo-1390599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="client"
                />
              </span>
              <span className="testimonial__thumb">
                <Image
                  width={50}
                  height={50}
                  src="https://images.pexels.com/photos/2896424/pexels-photo-2896424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="client"
                />
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    // </div>
  );
};

export default BannerSlider;
