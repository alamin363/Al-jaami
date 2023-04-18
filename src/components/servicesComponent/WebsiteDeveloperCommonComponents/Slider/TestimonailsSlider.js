import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";

export const TestimonailsSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <div className="testimonials testimonials-wrapper">
      <div className="slider-with-navs">
        <Slider arrows={false} asNavFor={nav2} ref={slider1}>
          {/* Testimonial #1 */}
          <div className="testimonial-item">
            <p className="testimonial__desc color-white">
              Working with Business Savvy UK has been a game-changer for our
              business. Their design and digital marketing expertise have helped
              us build a strong brand and effectively reach our target audience.
              Their hands-on approach and tailored solutions have made all the
              difference. We highly recommend their services to any business
              seeking growth and success.
            </p>
            {/* <div className="testimonial__meta">
              <h4 className="testimonial__meta-title">Ahmed Abdallah</h4>
              <p className="testimonial__meta-desc">Digital Media Manager</p>
            </div> */}
            {/* /.testimonial-meta */}
          </div>
          {/* /. testimonial-item */}
          {/* Testimonial #2 */}
          <div className="testimonial-item">
            <p className="testimonial__desc color-white">
              &rdquo;We have been working with Business Savvy UK for over a year
              and are thrilled with the results. Their IT and web services have
              helped us stay up-to-date with the latest technology trends, while
              their sales and marketing solutions have helped us increase
              revenue and reach new customers. Their team of experts is
              knowledgeable, responsive, and always ready to help. Thank you,
              Business Savvy UK!&rdquo;
            </p>
            {/* <div className="testimonial__meta">
              <h4 className="testimonial__meta-title">John Peter</h4>
              <p className="testimonial__meta-desc">7oroof Inc</p>
            </div> */}
            {/* /.testimonial-meta */}
          </div>
          {/* /. testimonial-item */}
          {/* Testimonial #3 */}
          <div className="testimonial-item">
            <p className="testimonial__desc color-white">
              Business Savvy UK&rsquo;s recruitment services have been a
              lifesaver for our business. We struggled to find the right people
              to fill key positions, but they provided us with high-quality
              candidates who fit our company perfectly. Their expertise in
              various industries and commitment to finding the best candidates
              for each role has made our hiring process much easier. We highly
              recommend their services to any business looking for top
              talent.&rsquo;
            </p>
            {/* <div className="testimonial__meta">
              <h4 className="testimonial__meta-title">Ayman</h4>
              <p className="testimonial__meta-desc">7oroof Inc</p>
            </div> */}
            {/* /.testimonial-meta */}
          </div>
          {/* /. testimonial-item */}
          {/* Testimonial #2 */}
          <div className="testimonial-item">
            <p className="testimonial__desc color-white">
              {" "}
              Data Savvy has been a crucial partner for our business. Their data
              discovery and processing services have helped us keep our
              information up-to-date and accurate, making all the difference in
              our sales efforts. Their team of experts is knowledgeable and
              responsive, and they go above and beyond to ensure that we have
              the information we need to succeed. We highly recommend Data Savvy
              to businesses looking to maximize their data assets.&rsquo;{" "}
            </p>
            {/* <div className="testimonial__meta">
              <h4 className="testimonial__meta-title">John Peter</h4>
              <p className="testimonial__meta-desc">7oroof Inc</p>
            </div> */}
            {/* /.testimonial-meta */}
          </div>
          {/* /. testimonial-item */}
          {/* Testimonial #3 */}

          {/* /. testimonial-item */}
        </Slider>
      </div>
      <div className="slider-nav">
        <Slider
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={2}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div className="testimonial__thumb">
            {/* <img src={thumb1} alt="author thumb" /> */}
          </div>
          {/* /.testimonial-thumb */}
          <div className="testimonial__thumb">
            {/* <img src={thumb2} alt="author thumb" /> */}
          </div>
          {/* /.testimonial-thumb */}
          <div className="testimonial__thumb">
            {/* <img src={thumb3} alt="author thumb" /> */}
          </div>
          {/* /.testimonial-thumb */}
          <div className="testimonial__thumb">
            {/* <img src={thumb2} alt="author thumb" /> */}
          </div>
          {/* /.testimonial-thumb */}
          <div className="testimonial__thumb">
            {/* <img src={thumb3} alt="author thumb" /> */}
          </div>
          {/* /.testimonial-thumb */}
        </Slider>
      </div>
    </div>
  );
};
