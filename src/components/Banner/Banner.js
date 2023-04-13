import bannerImg2 from "../../assets/images/banners/11.jpg";
import signature from "../../assets/images/about/singnture.png";
import bannerImg1 from "../../assets/images/banners/office-620822__340.jpg";
import bannerImgHeader from "../../assets/images/banners/pexels-photo-5473337.webp";
import VerticalSlider from "./VerticalSlider/VerticalSlider";
import Image from "next/image";
const Banner = () => {
  return (
    <section class="banner-layout5 banner-layout5-sticky bg-parallax pt-130 pb-0 banner_img">
      {/* <div class="bg-img">
        <Image src={bannerImgHeader} alt="background" /> 
       </div> */}
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-5 d-flex flex-column justify-content-between pb-80">
            <div class="heading heading-light mb-50 sticky-top">
              <div class="divider divider-white"></div>
              <h3 class="heading__title mb-30">
                Easy solutions for all difficult IT problems, keep business safe
                & ensure high availability.
              </h3>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="contact-info">
                  <div class="contact__icon">
                    <i class="icon-map-marker"></i>
                  </div>
                  <ul class="contact__list list-unstyled">
                    <li>
                      2307 Beverley Rd Brooklyn, New York 11226 United States.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="contact-item">
                  <div class="contact__icon">
                    <i class="icon-mail"></i>
                  </div>
                  <ul class="contact__list list-unstyled">
                    <li>
                      <a href="mailto:SmartData@7oroof.com">
                        Email: SmartData@7oroof.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:5565454117">Phone: +55 654 541 17</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6"></div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-1">
            <div class="banner__content" style={{ backgroundColor: "#063946" }}>
              <div class="scroll__icon">
                <i class="icon-mouse"></i>
              </div>
              <div class="row heading heading-light">
                <div class="col-sm-6">
                  <h3 class="heading__title mb-30">
                    450,000 client’s interactions!
                  </h3>
                </div>
                <div class="col-sm-6">
                  <p class="heading__desc mb-20">
                    As a company, we are well aware of the importance of
                    providing exceptional customer service in achieving success.
                    Businesses may receive a real-time image of their customers
                    and processes with our CRM solution.
                  </p>
                  <p class="heading__desc mb-20">
                    As one of the world's largest ITService Providers, we are
                    ready to help.
                  </p>
                  <a
                    href=""
                    target="_blank"
                    class="btn btn__white btn__bordered btn__xl btn__icon"
                  >
                    <span>Download Brochure</span>
                    <i class="icon-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div class="row counters-wrapper counters-light mt-70">
                <div class="col-sm-4">
                  <div class="counter-item">
                    <h4 class="counter">6,154</h4>
                    <p class="counter__desc">
                      Projects And Software Developed in 2021
                    </p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="counter-item">
                    <h4 class="counter">2,512</h4>
                    <p class="counter__desc">
                      Qualified Employees And Developers With Us
                    </p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="counter-item">
                    <h4 class="counter">1,784</h4>
                    <p class="counter__desc">
                      Satisfied Clients We Have Served Globally
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="semi-banner bg-gray">
              <div class="row row-no-gutter">
                <div class="col-sm-6">
                  <div class="semi-banner__content">
                    <div class="heading">
                      <h3 class="heading__title mb-30">
                        Timely Service, and incident resolutions!!
                      </h3>
                      <p class="heading_desc mb-30">
                        Using Well-Architected Solutions & Services, We Aim To
                        Increase Efficiency, Profitability, And ROI For Our
                        Clients. With a strong leadership team, Al Jaami has a
                        large team of certified technical experts. Who delivers
                        their tasks on time.{" "}
                      </p>
                      <p class="heading_desc mb-30">
                        Our skilled personnel, utilising the latest processing
                        software, combined with decades of experience.
                      </p>
                    </div>
                    <h5 class="text-dark">N. Ahamed</h5>
                    <Image src={signature} alt="singnture" />
                  </div>
                </div>
                <div class="col-sm-6 d-none d-md-block">
                  <Image src={bannerImg1} class="w-100" alt="banner logo" />
                </div>
              </div>
            </div>
            <div class="semi-banner bg-gray">
              <div class="row row-no-gutter">
                <div class="col-sm-6">
                  <div class="cta-banner bg-primary">
                    <div class="cta__icon color-white">
                      <i class="icon-developer"></i>
                    </div>
                    <h4 class="cta__title color-white">Since 1999</h4>
                    <p class="cta__desc color-white mb-25">
                      Provide users with appropriate view and access to
                      requests, problems, changes, contracts, solutions, and
                      reports.
                    </p>
                    <a href="#" class="btn btn__link btn__white btn__icon px-0">
                      <span>Find Your Solution</span>{" "}
                      <i class="icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="semi-banner__content pb-0">
                    <div class="heading">
                      <h3 class="heading__title mb-30">
                        We have decades of work experience!
                      </h3>
                    </div>
                    <h4 class="banner__subheading">Consulting & Insights</h4>
                    <p class="heading_desc">
                      Our honest views guide you toward making the best choices
                      possible on critical issues.
                    </p>
                    <h4 class="banner__subheading">Research & Advisory</h4>
                    <p class="heading_desc">
                      The amount of technology in buildings homes is rapidly
                      growing changing. The most change is that everything is
                      now on the network.
                    </p>
                    <h4 class="banner__subheading">Strategic Advice</h4>
                    <p class="heading_desc">
                      TTools that help turn strategy to turn ideas and achieve
                      quantifiable outcomes.
                    </p>
                  </div>
                </div>
                {/* col-sm-6 ends */}
              </div>
            </div>
            <section class="awards" style={{ backgroundColor: "#063946" }}>
              <div class="row heading heading-light mb-60">
                <div class="col-sm-6">
                  <h3 class="heading__title">Our awards and recognitions</h3>
                </div>
                <div class="col-sm-6">
                  <p class="heading__desc">
                    Trusted by the world,s best organizations, for 21 years and
                    running, it has been delivering smiles to hundreds of IT
                    advisors, developers, users, and business owners.
                  </p>
                </div>
              </div>
              <div class="row awards-wrapper">
                <div class="col-sm-12">
                  <div class="awards-carousel-wrapper">
                    <VerticalSlider />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
