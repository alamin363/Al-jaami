import React from "react";
import ServicesCarousel from "../servicesCarosel";
import Link from "next/link";

const OurServices = () => {
  return (
    <section className="services-layout2 services-carousel pt-0 pb-0 bg-gray">
      <div className="container">
        <div className="row heading mb-40">
          <div className="col-12">
            <div className="d-flex align-items-center">
              <div className="divider divider-primary mr-30" />
              <h2 className="heading__subtitle mb-0">
                Nationwide Service, Local Expertise
              </h2>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 ">
            <h3 className="heading__title">
              Nationwide Service, Local Expertise Offering The Latest Software
              And IT Services To Our Customers!
            </h3>
            <p className="heading__desc">
              Increase productivity, leverage tech, and deliver superior
              customer experiences by utilizing current technology services
              available globally. Our highly experienced professionals, utilize
              cutting-edge processing software and ages of expertise.
            </p>
          </div>
        </div>
        {/* <div className="row"> */}
          {/* <div className="col-12"> */}
            <div className="slick-carousel">
              <ServicesCarousel />
            {/* </div> */}
          {/* </div> */}
        </div>
        <div class="row">
          <div class="col-12 btn-wrapper btn_Slider_wrapper">
            <Link
              href="services.html"
              class="btn btn__secondary btn__bordered btn__icon"
            >
              <span>Explore All Services</span>
              <i class="icon-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
