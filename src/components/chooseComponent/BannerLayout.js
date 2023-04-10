import Image from "next/image";
import banner5 from "../../assets/images/banners/5.jpg";
import BannerSlider from "./bannerSlider/bannerSlider";

const BannerLayout = () => {
  return (
    <section class="banner-layout1 pt-90 pb-90 bg-overlay bg-overlay-primary">
      {/* <div class="bg-img"><img src="assets/images/banners/5.jpg" alt="background" /></div> */}
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-inner d-flex flex-column justify-content-between">
            <div>
              <div class="heading heading-light">
                <h3 class="heading__title mb-30">
                  All Kinds Of IT Services That Vow Future Business Success!
                </h3>
                <p class="heading__desc mb-30">
                  We are experienced professionals who understand that It
                  services is changing, and are partners who care about your
                  success. As one of the world's largest IT Service Providers,
                  our deep pool of certified engineers and IT staff are ready to
                  help.
                </p>
              </div>
              {/* <!-- /.heading --> */}
              <div class="d-flex align-items-center mb-40">
                <a href="#" class="btn btn__white btn__icon mr-30">
                  <span>Get Started</span>
                  <i class="icon-arrow-right"></i>
                </a>
                <a
                  href="request-quote.html"
                  class="btn btn__white btn__bordered"
                >
                  Request Demo
                </a>
              </div>
            </div>
            {/* 
             slider
             */}
            <BannerSlider />
          </div>
          {/* <!-- /.col-xl-6 --> */}
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div class="contact-panel">
              <form
                class="contact-panel__form"
                method="post"
                action="assets/php/contact.php"
                id="contactForm"
              >
                <div class="row">
                  <div class="col-12">
                    <h4 class="contact-panel__title mb-20">Request A Quote</h4>
                    <p class="contact-panel__desc mb-30">
                      Our deep pool of certified engineers and IT staff are
                      ready to help you to keep your IT business safe & ensure
                      high availability.
                    </p>
                  </div>
                  {/* <!-- /.col-12 --> */}
                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                        id="contact-name"
                        name="contact-name"
                        required
                      />
                    </div>
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        id="contact-email"
                        name="contact-email"
                        required
                      />
                    </div>
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="form-group">
                      <select class="form-control">
                        <option value="0">Inquiry</option>
                        <option value="1">IT Management Services 2</option>
                        <option value="2">IT Management Services 3</option>
                      </select>
                    </div>
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Phone"
                        id="contact-Phone"
                        name="contact-phone"
                      />
                    </div>
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                  <div class="col-12">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        placeholder="Additional Details!"
                        id="contact-message"
                        name="contact-message"
                      ></textarea>
                    </div>
                    <div class="custom-control custom-checkbox d-flex align-items-center mb-20">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="acceptTerms"
                      />
                      <label class="custom-control-label" for="acceptTerms">
                        I accept the privacy and terms.
                      </label>
                    </div>
                    <button
                      type="submit"
                      class="btn btn__primary btn__xl btn__block"
                    >
                      Submit Request{" "}
                    </button>
                    <div class="contact-result"></div>
                  </div>
                  {/* <!-- /.col-12 --> */}
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

export default BannerLayout;
