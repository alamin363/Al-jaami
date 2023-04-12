import React from "react";
import ServicesCarousel from "../servicesCarosel";
import BannerSlider from "../bannerLayout/bannerSlider/bannerSlider";
import AnimatedSlider from "../AnimationSlider/AnimatedSlider";

const QuoteBannerLayout = () => {
  return (
    <section className="banner-layout2 pb-0 bg-overlay bg-overlay-primary quote-Banneralyout-bg">
      {/* <div className="bg-img"><img src="assets/images/banners/8.jpg" alt="background"></div> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-inner">
            <div className="heading heading-light">
              <h3 className="heading__title mb-30">
                Satisfied Users Over The Globe
              </h3>
            </div>
            <div className="testimonials testimonials-wrapper">
              <div className="slider-with-navs">
                {/* <!-- Testimonial #1 --> */}
                <BannerSlider />

                {/* <!-- /. testimonial-item --> */}
              </div>
              <div className="slider-nav">
                <div className="testimonial__thumb">
                  <img
                    src="https://images.pexels.com/photos/2896424/pexels-photo-2896424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="author thumb"
                  />
                </div>
                {/* <!-- /.testimonial-thumb --> */}
                <div className="testimonial__thumb">
                  <img
                    src="https://images.pexels.com/photos/3262878/pexels-photo-3262878.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="author thumb"
                  />
                </div>
                {/* <!-- /.testimonial-thumb --> */}
                <div className="testimonial__thumb">
                  <img
                    src="https://images.pexels.com/photos/2806202/pexels-photo-2806202.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="author thumb"
                  />
                </div>
                {/* <!-- /.testimonial-thumb --> */}
                <div className="testimonial__thumb">
                  <img
                    src="https://images.pexels.com/photos/2838597/pexels-photo-2838597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="author thumb"
                  />
                </div>
                {/* <!-- /.testimonial-thumb --> */}
                <div className="testimonial__thumb">
                  <img
                    src="https://images.pexels.com/photos/1390599/pexels-photo-1390599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="author thumb"
                  />
                </div>
                {/* <!-- /.testimonial-thumb --> */}
              </div>
              {/* <!-- /.slcik-nav --> */}
            </div>
            {/* <!-- /.testimonials --> */}
            <div className="divider divider-light w-100 mt-60 mb-60"></div>
            <div className="heading heading-light">
              <h3 className="heading__title mb-30">Our Trusted Clients</h3>
            </div>
            <div className="clients">
              {/* carocell */}
              {/* slider animated */}
              <AnimatedSlider />

              {/* <!-- /.carousel --> */}
            </div>
          </div>
          {/* <!-- /.col-xl-6 --> */}
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div className="contact-panel">
              <form
                className="contact-panel__form"
                method="post"
                action="assets/php/contact.php"
                id="contactForm"
              >
                <div className="row">
                  <div className="col-12">
                    <h4 className="contact-panel__title mb-20">
                      Request A Quote
                    </h4>
                    <p className="contact-panel__desc mb-30">
                      Our deep pool of certified engineers and IT staff are
                      ready to help you to keep your IT business safe & ensure
                      high availability.
                    </p>
                  </div>
                  {/* <!-- /.col-12 --> */}
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        id="contact-name"
                        name="contact-name"
                        required
                      />
                    </div>
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="contact-email"
                        name="contact-email"
                        required
                      />
                    </div>
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <select className="form-control">
                        <option value="0">Inquiry</option>
                        <option value="1">IT Management Services 2</option>
                        <option value="2">IT Management Services 3</option>
                      </select>
                    </div>
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        id="contact-Phone"
                        name="contact-phone"
                      />
                    </div>
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Additional Details!"
                        id="contact-message"
                        name="contact-message"
                      ></textarea>
                    </div>
                    <div className="custom-control custom-checkbox d-flex align-items-center mb-20">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="acceptTerms"
                      />
                      <label className="custom-control-label" for="acceptTerms">
                        I accept the privacy and terms.
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn__primary btn__xl btn__block"
                    >
                      Submit Request{" "}
                    </button>
                    <div className="contact-result"></div>
                  </div>
                  {/* !-- /.col-12 --> */}
                </div>
                {/* <!-- /.row --> */}
              </form>
            </div>
          </div>
          {/* <!-- /.col-xl-6 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};

export default QuoteBannerLayout;
