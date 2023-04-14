import Link from "next/link";
import React from "react";

const Easy = () => {
  return (
        <section
          className="page-title page-title-layout2 bg-overlay bg-overlay-gradient bg-parallax background-img-3"
          style={{
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(6, 57, 70, 0.8)",
          }}
        >
          {/* <div className="bg-img">
        <img
          src="https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_960_720.jpg"
          alt="background"
        />
      </div> */}
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-7 col-xl-5">
                <h1 className="pagetitle__heading">
                  Easy solutions for all difficult IT problems, keep business
                  safe & ensure high availability.
                </h1>
                <Link
                  href="service_details.html"
                  className="btn btn__white mt-20 mr-30"
                >
                  Our Services
                </Link>
                <Link
                  href="/"
                  className="btn btn__white btn__bordered btn__icon mt-20"
                >
                  <span>Get Started</span>
                  <i className="icon-arrow-right"></i>
                </Link>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-5 col-xl-7 d-flex justify-content-end cta-banner-wrapper">
                <div className="cta-banner">
                  <div className="cta__icon">
                    <i className="icon-developer"></i>
                  </div>
                  <h4 className="cta__title">Since 1999</h4>
                  <p className="cta__desc mb-25">
                    Provide users with appropriate view and access to requests,
                    problems, changes and reports.
                  </p>
                  <Link
                    href="/"
                    className="btn btn__link btn__secondary btn__icon px-0"
                  >
                    <span>Find Your Solution</span>{" "}
                    <i className="icon-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
};

export default Easy;
