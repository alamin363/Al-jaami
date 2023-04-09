import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Challenge = () => {
  return (
    <div className="banner_img-2">
      <section
        className="page-title page-title-layout1 text-center bg-overlay bg-overlay-gradient bg-parallax"
        style={{
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(6, 57, 70, 0.8)",
        }}
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
              <nav>
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      style={{ marginLeft: 10, fontSize: 15 }}
                    />
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/about-us">Company</Link>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      style={{ marginLeft: 10, fontSize: 15 }}
                    />
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    about
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenge;
