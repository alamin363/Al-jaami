import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function ServicePagetitle() {
  return (
    <section className="page-title page-title-layout9 bg-overlay bg-overlay-gradient bg-parallax it-web-header-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <h1 className="pagetitle__heading">Graphics Design</h1>
            <p className="pagetitle__desc">
              At Business Savvy UK, we understand the importance of technology
              for businesses, and our Graphics Design services provide tailored
              solutions that meet each business&apos;s specific needs.
            </p>
            <div className="d-flex align-items-center flex-wrap">
              <Link href="/contactus" className="btn btn__white mr-30">
                Contact Us
              </Link>
              <a
                className="video__btn video__btn-rounded video__btn-white popup-video"
                href="https://www.youtube.com/watch?v=nrJtHemSPW4"
              >
                <div className="video__player">
                  <FontAwesomeIcon icon={faPlay} />
                </div>
                <span className="video__btn-title color-white">Our Video!</span>
              </a>
            </div>
          </div>
          {/* /.col-xl-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
