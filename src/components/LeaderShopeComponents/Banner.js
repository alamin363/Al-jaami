import Link from "next/link";
import React from "react";
import NavHero from "../header/NavHero";
const Banner = () => {
  return (
    <section
      className="page-title page-title-layout3 bg-overlay bg-overlay-gradient bg-parallax"
      style={{
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(6, 57, 70, 0.8)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <h1 className="pagetitle__heading">Leadership</h1>
            <p className="pagetitle__desc">
              Our team provides a consultative approach on emerging technology,
              experienced professionals who understand that true partners who
              care about your success.
            </p>
            <div className="d-flex align-items-center">
              <Link href="/contact" className="btn btn__white mr-30">
                Contact Us
              </Link>
              <Link
                href="request-quote"
                className="btn btn__white btn__bordered btn__icon"
              >
                <span>Get Started</span>
                <i className="icon-arrow-right"></i>
              </Link>
            </div>
            <div className="responsive-mini-nav">
              <NavHero />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
