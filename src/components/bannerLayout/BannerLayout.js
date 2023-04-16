import Image from "next/image";
import banner8 from "../../assets/images/banners/8.jpg";
import banrImag from "../../assets/service/images/pexels-photo-3262878.webp";
import ServicesCarousel from "./bannerSlider/bannerSlider";
import ClientSlider from "./bannerSlider/clientSlider";
import AnimatedSlider from "../AnimationSlider/AnimatedSlider";
const BannerLayout = () => {
  return (
    <section className="banner-layout2 pb-0 bg-overlay bg-overlay-primary">
      {/* <div className="bg-img">
        <Image width={500} height={500} src={banner8} alt="background" />
      </div> */}
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
                {/* <!-- Testimonial slider --> */}
                <ServicesCarousel>
                  <ClientSlider />
                </ServicesCarousel>
                {/* <!-- /. testimonial-slider --> */}
              </div>
              {/* <!-- /.slcik-nav --> */}
            </div>
            {/* <!-- /.testimonials --> */}
            <div className="divider divider-light w-100 mt-60 mb-60"></div>
            <div className="heading heading-light">
              <h3 className="heading__title mb-30">Our Trusted Clients</h3>
            </div>
            <div class="clients"></div>
          </div>
          {/* <!-- /.col-xl-6 --> */}
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div className="contact-panel">
              <form className="contact-panel__form" id="contactForm">
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
                  {/* <!-- /.col-12 --> */}
                </div>
                {/* <!-- /.row --> */}
              </form>
            </div>
          </div>
          {/* !-- /.col-xl-6 --> */}
        </div>
        {/* !-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};

export default BannerLayout;
