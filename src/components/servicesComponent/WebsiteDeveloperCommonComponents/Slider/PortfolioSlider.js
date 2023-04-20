import Two from "../../../../assets/images/portfolio/grid/1.jpg";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
export default function PortfolioSlider() {
  return (
    <div className="slick-carousel">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={34}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        navigation={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="portfolio-item">
            <div className="portfolio__img">
              <Image height={374} width={374} src={Two} alt="portfolio img" />
            </div>
            <div className="portfolio__content service__content">
              <div className="portfolio__cat">
                <Link href="#">Building</Link>
                <Link href="#">Interior</Link>
              </div>
              <h4 className="portfolio__title">
                <Link href="#">Financial’s Need For Strategic Advisor</Link>
              </h4>
              <p className="portfolio__desc">
                We delivered solutions at every step, and moved seamlessly into
                a more proactive role as a strategic advisor, providing support
                and guidance across all IT topics.
              </p>
              <Link
                href="blogsinglepost"
                className="btn btn__secondary btn__link"
              >
                <span>Read More</span>
                <i className="icon-arrow-right" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio-item">
            <div className="portfolio__img">
              <Image height={374} width={374} src={Two} alt="portfolio img" />
            </div>
            <div className="portfolio__content">
              <div className="portfolio__cat">
                <Link href="#">Management</Link>
                <Link href="#">Cloud</Link>
              </div>
              <h4 className="portfolio__title">
                <Link href="#">Nonprofit Organization Utilized Security</Link>
              </h4>
              <p className="portfolio__desc">
                Servers going down on a weekly basis had become the
                organization’s “normal.” We came on board with the objective of
                stabilizing the environment, assisting{" "}
              </p>
              <Link
                href="/blogsinglepost"
                className="btn btn-primary btn__secondary btn__link"
              >
                <span>Read More</span>
                <i className="icon-arrow-right" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio-item">
            <div className="portfolio__img">
              <Image height={374} width={374} src={Two} alt="portfolio img" />
            </div>
            <div className="portfolio__content">
              <div className="portfolio__cat">
                <Link href="#">Management</Link>
                <Link href="#">Cloud</Link>
              </div>
              <h4 className="portfolio__title">
                <Link href="#">Nonprofit Organization Utilized Security</Link>
              </h4>
              <p className="portfolio__desc">
                Servers going down on a weekly basis had become the
                organization’s “normal.” We came on board with the objective of
                stabilizing the environment, assisting{" "}
              </p>
              <Link
                href="/blogsinglepost"
                className="btn btn__secondary btn__link"
              >
                <span>Read More</span>
                <i className="icon-arrow-right" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio-item">
            <div className="portfolio__img">
              <Image height={374} width={374} src={Two} alt="portfolio img" />
            </div>
            <div className="portfolio__content">
              <div className="portfolio__cat">
                <Link href="#">Digital</Link>
                <Link href="#">HR</Link>
              </div>
              <h4 className="portfolio__title">
                <Link href="#">
                  Powerful IT Upgrade Aligns With Your Objectives
                </Link>
              </h4>
              <p className="portfolio__desc">
                They needed a robust management solution to organize archive
                critical documents for client cases, and wanted to determine
                solutions at every step, and moved{" "}
              </p>
              <Link
                href="/blogsinglepost"
                className="btn btn__secondary btn__link"
              >
                <span>Read More</span>
                <i className="icon-arrow-right" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio-item">
            <div className="portfolio__img">
              <Image height={374} width={374} src={Two} alt="portfolio img" />
            </div>
            <div className="portfolio__content">
              <div className="portfolio__cat">
                <Link href="#">Digital</Link>
                <Link href="#">HR</Link>
              </div>
              <h4 className="portfolio__title">
                <Link href="#">
                  Powerful IT Upgrade Aligns With Your Objectives
                </Link>
              </h4>
              <p className="portfolio__desc">
                They needed a robust management solution to organize archive
                critical documents for client cases, and wanted to determine
                solutions at every step, and moved{" "}
              </p>
              <Link
                href="/blogsinglepost"
                className="btn btn__secondary btn__link"
              >
                <span>Read More</span>
                <i className="icon-arrow-right" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio-item">
            <div className="portfolio__img">
              <Image height={374} width={374} src={Two} alt="portfolio img" />
            </div>
            <div className="portfolio__content">
              <div className="portfolio__cat">
                <Link href="#">Digital</Link>
                <Link href="#">HR</Link>
              </div>
              <h4 className="portfolio__title">
                <Link href="#">
                  Powerful IT Upgrade Aligns With Your Objectives
                </Link>
              </h4>
              <p className="portfolio__desc">
                They needed a robust management solution to organize archive
                critical documents for client cases, and wanted to determine
                solutions at every step, and moved{" "}
              </p>
              <Link
                href="/blogsinglepost"
                className="btn btn__secondary btn__link"
              >
                <span>Read More</span>
                <i className="icon-arrow-right" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
