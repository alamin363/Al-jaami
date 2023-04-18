import NavHero from "@/components/header/NavHero";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export const WebDesignHeroSection = ({
  title,
  description,
  servicesName,
  className,
  page,
}) => {
  return (
    <section
      className={`page-title page-title-layout9 bg-overlay bg-overlay-gradient bg-parallax ${
        className || ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <h1 className="pagetitle__heading">{title}</h1>
            <p className="pagetitle__desc">{description}</p>
            <div className="d-flex align-items-center flex-wrap">
              <Link
                href="/requestquote"
                className="btn btn__white btn__icon mr-30"
              >
                <span>Get Started</span>
                <i className="icon-arrow-right" />
              </Link>
              <Link
                className="video__btn video__btn-rounded video__btn-white popup-video"
                href="https://www.youtube.com/watch?v=nrJtHemSPW4"
              >
                <div className="video__player">
                  <FontAwesomeIcon icon={faPlay} />
                </div>
                <span className="video__btn-title color-white">Our Video!</span>
              </Link>
            </div>
            <nav>
              <ol className="breadcrumb mb-0">
                <NavHero
                  home="Home"
                  services="services"
                  page={page || "webDeveloper"}
                />
              </ol>
            </nav>
          </div>
          {/* /.col-xl-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
};
