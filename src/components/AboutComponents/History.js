import Image from "next/image";
import React from "react";
import Computer from "../../assets/images/history/computer-1869306__340.jpg";
import laptop from "../../assets/images/history/laptop-6062423__340.jpg";
import laptop_614213 from "../../assets/images/history/laptop-614213__340.jpg";
import plant from "../../assets/images/history/plant-4208112__340.jpg";
import telework from "../../assets/images/history/telework-6795505__340.jpg";
import AboutSlider from "./AboutSlider";
import Link from "next/link";
const History = () => {
  return (
    <section className="history-timeline pb-0">
      <div className="history-timeline-bg bg-color-aboutLayout">
        <div className="bg-img"></div>
      </div>
      <div className="container">
        <div className="row heading mb-50">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="d-flex align-items-center mb-20">
              <div className="divider divider-primary mr-30"></div>
              <h2 className="heading__subtitle mb-0">
                Explore Our Great History!!
              </h2>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h3 className="heading__title color-white">
              One of the worlds largest IT Providers since 2005.
            </h3>
          </div>
        </div>
      </div>
      <div className="position-relative">
        <div className="timeline-bar">
          <div className="container d-flex">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>

        {/* slider */}
        <AboutSlider />
        {/* slider */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-between">
            <div className="row row-no-gutter read-note">
              <div className="col-sm-4">
                <div className="rating mb-10">
                  <i className="fas fa-star color-primary"></i>
                  <i className="fas fa-star color-primary"></i>
                  <i className="fas fa-star color-primary"></i>
                  <i className="fas fa-star color-primary"></i>
                  <i className="fas fa-star color-primary"></i>
                </div>
              </div>
              <div className="col-sm-8">
                <p className="read-note__text color-white">
                  <span className="font-weight-bold text-underlined">
                    99.9% Customer Satisfaction
                  </span>
                  based on 750+ reviews and 20,000 Objective Resource
                </p>
              </div>
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-sm-12 col-md-6">
                <p className="mb-30 font-weight-bold sub__desc">
                  As one of the worlds largest ITService Providers with over 120
                  engineers and IT support staff are ready to help.
                </p>
                <Link
                  href="/quote"
                  className="btn btn__primary btn__bordered btn__icon mb-30"
                >
                  <span>Request Demo</span>
                  <i className="icon-arrow-right"></i>
                </Link>
              </div>
              <div className="col-sm-12 col-md-6">
                <ul className="list-items list-unstyled mb-30">
                  <li>450,000 client’s interactions </li>
                  <li>Help challenge critical activities</li>
                  <li>Simplify & Automate Workflows</li>
                  <li>Peer perspectives and advice</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <Image width="100%" height="100%" src={laptop} alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
