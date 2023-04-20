// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Link from "next/link";

export const BrochureSlideSection = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="service-item">
          <div className="service__content">
            <div className="service__icon">
            <i className="icon-server" />
            </div>
            {/* /.service__icon */}
            <h4 className="service__title">Website Design</h4>
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
            <h4 className="service__title">Logo & Branding</h4>
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
            <h4 className="service__title">Advertising</h4>
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
            <h4 className="service__title">Social Media</h4>
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
            <h4 className="service__title">Packaging</h4>
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
              <i className="icon-cloud-computing" />
            </div>
            {/* /.service__icon */}
            <h4 className="service__title">Graphic Design</h4>
            <p className="service__desc">
              We help businesses control the pricing monopoly at full retail by
              creating awareness and marketing on popular platforms such as:
            </p>
            <p className="service__desc">
              Our services provide businesses with a robust online presence that
              attracts new customers and retains existing ones.
            </p>
            <Link href="/Graphic-Design" className="btn btn__secondary">
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
            <h4 className="service__title">Copywriting Services</h4>
            <p className="service__desc">
              We help businesses control the pricing monopoly at full retail by
              creating awareness and marketing on popular platforms such as:
            </p>
            <p className="service__desc">
              Our services provide businesses with a robust online presence that
              attracts new customers and retains existing ones.
            </p>
            <Link href="/Copy-writing-Services" className="btn btn__secondary">
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
