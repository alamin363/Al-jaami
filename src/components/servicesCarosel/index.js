import Link from "next/link";
// import Slider from "react-slick";
// import { sliderData } from "./SliderData";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import { sliderData } from "./SliderData";
const ServicesCarousel = () => {
  return (
    <div className="slick-carousel">
      <Swiper
        // breakpoints={{
        //   640: {
        //     // width: 640,
        //     slidesPerView: 2,
        //   },
        //   768: {
        //     // width: 768,
        //     slidesPerView: 2,
        //   },
        //   1200: {
        //     // width: 1100,
        //     slidesPerView: 3,
        //   },
        // }}
        modules={[Navigation, Pagination]}
        spaceBetween={34}
        slidesPerView={3}
        // navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="service-item">
            <div className="service__content">
              <div className="service__icon">
                <i className="icon-server"></i>
              </div>
              <h4 className="service__title">
                IT Management <br /> Services
              </h4>
              <p className="service__desc">
                We provide clients with 24/7/365 IT management service, which
                includes monitoring, support, maintenance, and management.
              </p>
              <ul className="list-items list-unstyled mb-30">
                <li>Business IT alignment</li>
                <li> IT financial management</li>
                <li> IT service management</li>
              </ul>
              <Link href="/itsolutionssingle" className="btn btn__secondary">
                <span>Read More</span>
                <i className="icon-arrow-right"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service-item">
            <div className="service__content">
              <div className="service__icon">
                <i className="icon-cyberspace"></i>
              </div>
              <h4 className="service__title">
                Cyber Security
                <br /> Services
              </h4>
              <p className="service__desc">
                Our cyber security solutions include a range of services to suit
                your business. They also give extensive notifications,
                reporting, and dashboards.
              </p>
              <ul className="list-items list-unstyled mb-30">
                <li>Internet security</li>
                <li>Automotive security</li>
                <li>Cyberwarfare</li>
              </ul>
              <Link href="/itsolutionssingle" className="btn btn__secondary">
                <span>Read More</span>
                <i className="icon-arrow-right"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service-item">
            <div className="service__content">
              <div className="service__icon">
                <i className="icon-code"></i>
              </div>
              <h4 className="service__title">
                Cloud Computing
                <br /> Services
              </h4>
              <p className="service__desc">
                Our Expertise in Various Types of Cloud Computing Models is the
                Cornerstone of our Market-leading Cloud Computing Services.
              </p>
              <ul className="list-items list-unstyled mb-30">
                <li>Private cloud services</li>
                <li>Public cloud services</li>
                <li>Hybrid cloud services</li>
              </ul>
              <Link href="/itsolutionssingle" className="btn btn__secondary">
                <span>Read More</span>
                <i className="icon-arrow-right"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service-item">
            <div className="service__content">
              <div className="service__icon">
                <i className="icon-code"></i>
              </div>
              <h4 className="service__title">
                IT Consulting <br /> Services
              </h4>
              <p className="service__desc">
                Our strategic IT consulting will help you in automating and
                digitalizing processes, we can assist you to optimize your
                software portfolio and implement new technologies.
              </p>
              <ul className="list-items list-unstyled mb-30">
                <li>Scoping & planning</li>
                <li>Process & system design</li>
                <li>Project management support</li>
              </ul>
              <Link href="/itsolutionssingle" className="btn btn__secondary">
                <span>Read More</span>
                <i className="icon-arrow-right"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service-item">
            <div className="service__content">
              <div className="service__icon">
                <i className="icon-code"></i>
              </div>
              <h4 className="service__title">
                Software Dev
                <br /> Services
              </h4>
              <p className="service__desc">
                A wide variety of Concept Design Services are available at
                reasonable pricing from us. By adhering to industry standards,
                our services are always of the highest quality.
              </p>
              <ul className="list-items list-unstyled mb-30">
                <li>Implementation</li>
                <li>Testing & documenting</li>
                <li>Deployment & maintenance</li>
              </ul>
              <Link href="/itsolutionssingle" className="btn btn__secondary">
                <span>Read More</span>
                <i className="icon-arrow-right"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service-item">
            <div className="service__content">
              <div className="service__icon">
                <i className="icon-code"></i>
              </div>
              <h4 className="service__title">
                Backup & Recovery
                <br /> Services
              </h4>
              <p className="service__desc">
                Backup and Recovery Services protect the data of programs,
                files, and servers that are set up, administered, monitored, and
                supported.
              </p>
              <ul className="list-items list-unstyled mb-30">
                <li>Compression & Deduplication</li>
                <li>Duplication & Encryption</li>
                <li>Multiplexing & Refactoring</li>
              </ul>
              <Link href="/itsolutionssingle" className="btn btn__secondary">
                <span>Read More</span>
                <i className="icon-arrow-right"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServicesCarousel;
