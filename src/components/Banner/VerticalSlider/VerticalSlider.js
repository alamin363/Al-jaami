import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Icon1 from "../../../assets/images/awards/icons/1.png";
import Icon2 from "../../../assets/images/awards/icons/2.png";
import Icon3 from "../../../assets/images/awards/icons/3.png";
import Icon4 from "../../../assets/images/awards/icons/4.png";
import Image from "next/image";

export default function VerticalSlider() {
  return (
    <Swiper
      breakpoints={{
        600: {
          width: 500,
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      loop={true}
      // autoplay={true}
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="fancybox-item service-item">
          <div className="fancybox__icon-img">
            <Image src={Icon1} alt="icon" />
          </div>
          {/* /.fancybox__icon-img */}
          <div className="fancybox__content">
            <h4 className="fancybox__title">CSS Design Award</h4>
            <p className="fancybox__desc">
              A web design & development award platform for digital folk, UI/UX
              peeps and inspiring leaders of the web.
            </p>
          </div>
          {/* /.fancybox-content */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="fancybox-item service-item">
          <span className="pinned-ribbon" />
          <div className="fancybox__icon-img">
            <Image src={Icon2} alt="icon" />
          </div>
          <div className="fancybox__content">
            <h4 className="fancybox__title">W3 Design Award</h4>
            <p className="fancybox__desc">
              Awards celebrates digital by honoring outstanding Websites, Web
              Marketing, Video, Sites, Apps & Social content.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="fancybox-item service-item">
          <div className="fancybox__icon-img">
            <Image src={Icon3} alt="icon" />
          </div>
          {/* /.fancybox__icon-img */}
          <div className="fancybox__content">
            <h4 className="fancybox__title">The FWA Award</h4>
            <p className="fancybox__desc">
              Showcasing innovation every day since 2000, our mission is to
              showcase cutting edge creativity, regardless
            </p>
          </div>
          {/* /.fancybox-content */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="fancybox-item service-item">
          <div className="fancybox__icon-img">
            <Image src={Icon4} alt="icon" />
          </div>
          {/* /.fancybox__icon-img */}
          <div className="fancybox__content">
            <h4 className="fancybox__title">WWW Awards</h4>
            <p className="fancybox__desc">
              The awards that recognize the talent and effort of the best web
              designers, developers and agencies in the world.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
