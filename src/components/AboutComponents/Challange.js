
import Link from "next/link";
import React from "react";
import NavHero from "../header/NavHero";

const Challenge = () => {
  return (
    <section
      className="page-title page-title-layout1 text-center bg-overlay bg-overlay-gradient bg-parallax banner_img-2 bg-color-blend-mode"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-3">
            <h1 className="pagetitle__heading">
              Help Challenge Critical Activities
            </h1>
            <p className="pagetitle__desc">
              We are experienced professionals who understand that It services
              is changing, and are true partners who care about your success.
            </p>
            <div className="d-flex justify-content-center align-items-center flex-wrap">
              <Link
                href="service_details.html"
                className="btn btn__primary mx-3"
              >
                Our Services
              </Link>
            </div>
            <NavHero />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
