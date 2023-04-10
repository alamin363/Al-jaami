import Link from "next/link";
import React from "react";

const Easy = () => {
  return (
    <section
      class="page-title page-title-layout2 bg-overlay bg-overlay-gradient bg-parallax background-img-3"
      style={{
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(6, 57, 70, 0.8)",
      }}
    >
      {/* <div class="bg-img">
        <img
          src="https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_960_720.jpg"
          alt="background"
        />
      </div> */}
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-12 col-md-12 col-lg-7 col-xl-5">
            <h1 class="pagetitle__heading">
              Easy solutions for all difficult IT problems, keep business safe &
              ensure high availability.
            </h1>
            <Link
              href="service_details.html"
              class="btn btn__white mt-20 mr-30"
            >
              Our Services
            </Link>
            <Link href="/" class="btn btn__white btn__bordered btn__icon mt-20">
              <span>Get Started</span>
              <i class="icon-arrow-right"></i>
            </Link>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-5 col-xl-7 d-flex justify-content-end cta-banner-wrapper">
            <div class="cta-banner">
              <div class="cta__icon">
                <i class="icon-developer"></i>
              </div>
              <h4 class="cta__title">Since 1999</h4>
              <p class="cta__desc mb-25">
                Provide users with appropriate view and access to requests,
                problems, changes and reports.
              </p>
              <Link
                href="/"
                class="btn btn__link btn__secondary btn__icon px-0"
              >
                <span>Find Your Solution</span> <i class="icon-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Easy;
