// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Link from "next/link";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";

export const ContentWritingSlide = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      spaceBetween={50}
      slidesPerView={3}
    >
      <SwiperSlide>
        <div className="service-item">
          <div className="service__content">
            <div className="service__icon">
              <i className="icon-server" />
            </div>
            {/* /.service__icon */}
            <h4 className="service__title">E-Book</h4>
            <p className="service__desc">
              We offer various design services to help businesses build strong
              brands, create a professional image, and engage customers.{" "}
            </p>
            <p className="service__desc">
              Our experienced designers create custom designs that fit each
              business&rsquo;s unique needs
            </p>
            <br />
            <Link href="/website-design" className="btn btn__secondary">
              <span>Read More</span>
              <i className="icon-arrow-right" />
            </Link>
          </div>
          {/* /.service-content */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="service-item">
          <div className="service__content">
            <div className="service__icon">
              <i className="icon-cyberspace" />
            </div>
            {/* /.service__icon */}
            <h4 className="service__title">Article Marketing</h4>
            <p className="service__desc">
              We provide IT and web services that help businesses stay
              up-to-date with the latest technology trends.
            </p>

            <p className="service__desc">
              Our team of experts tailors solutions that meet each
              business&rsquo;s specific needs
            </p>
            <br />
            <Link href="/Logo-Branding" className="btn btn__secondary">
              <span>Read More</span>
              <i className="icon-arrow-right" />
            </Link>
          </div>
          {/* /.service-content */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="service-item">
          <div className="service__content">
            <div className="service__icon">
              <i className="icon-cloud-computing" />
            </div>
            {/* /.service__icon */}
            <h4 className="service__title">Blog Content</h4>
            <p className="service__desc">
              We help businesses control the pricing monopoly at full retail by
              creating awareness and marketing on popular platforms such as:
            </p>
            <p className="service__desc">
              Our services provide businesses with a robust online presence that
              attracts new customers and retains existing ones.
            </p>
            <Link href="/Advertising" className="btn btn__secondary">
              <span>Read More</span>
              <i className="icon-arrow-right" />
            </Link>
          </div>
          {/* /.service-content */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="service-item">
          <div className="service__content">
            <div className="service__icon">
              <i className="icon-server" />
            </div>
            {/* /.service__icon */}
            <h4 className="service__title">Business WebPage</h4>
            <p className="service__desc">
              We offer various design services to help businesses build strong
              brands, create a professional image, and engage customers.{" "}
            </p>
            <p className="service__desc">
              Our experienced designers create custom designs that fit each
              business&rsquo;s unique needs
            </p>
            <br />
            <Link href="/Social-media" className="btn btn__secondary">
              <span>Read More</span>
              <i className="icon-arrow-right" />
            </Link>
          </div>
          {/* /.service-content */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="service-item">
          <div className="service__content">
            <div className="service__icon">
              <i className="icon-cyberspace" />
            </div>
            {/* /.service__icon */}
            <h4 className="service__title">Marketing Collateral</h4>
            <p className="service__desc">
              We provide IT and web services that help businesses stay
              up-to-date with the latest technology trends.
            </p>
            <p className="service__desc">
              Our team of experts tailors solutions that meet each
              business&rsquo;s specific needs
            </p>
            <br />
            <Link href="/packaging" className="btn btn__secondary">
              <span>Read More</span>
              <i className="icon-arrow-right" />
            </Link>
          </div>
          {/* /.service-content */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="service-item">
          <div className="service__content">
            <div className="service__icon">
              <i className="icon-cyberspace" />
            </div>
            {/* /.service__icon */}
            <h4 className="service__title">Email Marketing Campaigns</h4>
            <p className="service__desc">
              We provide IT and web services that help businesses stay
              up-to-date with the latest technology trends.
            </p>
            <p className="service__desc">
              Our team of experts tailors solutions that meet each
              business&rsquo;s specific needs
            </p>
            <br />
            <Link href="/packaging" className="btn btn__secondary">
              <span>Read More</span>
              <i className="icon-arrow-right" />
            </Link>
          </div>
          {/* /.service-content */}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
