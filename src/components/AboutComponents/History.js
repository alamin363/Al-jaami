import Image from "next/image";
import React from "react";
import Computer from "../../assets/images/history/computer-1869306__340.jpg";
import laptop from "../../assets/images/history/laptop-6062423__340.jpg";
import laptop_614213 from "../../assets/images/history/laptop-614213__340.jpg";
import plant from "../../assets/images/history/plant-4208112__340.jpg";
import telework from "../../assets/images/history/telework-6795505__340.jpg";
import AboutSlider from "./AboutSlider";
const History = () => {
  return (
    <section class="history-timeline pb-0">
      <div
        class="history-timeline-bg"
        style={{ backgroundColor: "rgb(6, 57, 70)" }}
      >
        <div class="bg-img"></div>
      </div>
      <div class="container">
        <div class="row heading mb-50">
          <div class="col-sm-12 col-md-12 col-lg-6">
            <div class="d-flex align-items-center mb-20">
              <div class="divider divider-primary mr-30"></div>
              <h2 class="heading__subtitle mb-0">
                Explore Our Great History!!
              </h2>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-6">
            <h3 class="heading__title color-white">
              One of the world's largest IT Providers since 2005.
            </h3>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="timeline-bar">
          <div class="container d-flex">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
          </div>
        </div>

        {/* slider */}
        <AboutSlider />
        {/* slider */}
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-between">
            <div class="row row-no-gutter read-note">
              <div class="col-sm-4">
                <div class="rating mb-10">
                  <i class="fas fa-star color-primary"></i>
                  <i class="fas fa-star color-primary"></i>
                  <i class="fas fa-star color-primary"></i>
                  <i class="fas fa-star color-primary"></i>
                  <i class="fas fa-star color-primary"></i>
                </div>
              </div>
              <div class="col-sm-8">
                <p class="read-note__text color-white">
                  <span class="font-weight-bold text-underlined">
                    99.9% Customer Satisfaction
                  </span>
                  based on 750+ reviews and 20,000 Objective Resource
                </p>
              </div>
            </div>
            <div class="row" style={{marginTop:"10px"}}>
              <div class="col-sm-12 col-md-6">
                <p class="mb-30 font-weight-bold sub__desc">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </p>
                <a
                  href="request-quote.html"
                  class="btn btn__primary btn__bordered btn__icon mb-30"
                >
                  <span>Request Demo</span>
                  <i class="icon-arrow-right"></i>
                </a>
              </div>
              <div class="col-sm-12 col-md-6">
                <ul class="list-items list-unstyled mb-30">
                  <li>450,000 client’s interactions </li>
                  <li>Help challenge critical activities</li>
                  <li>Simplify & Automate Workflows</li>
                  <li>Peer perspectives and advice</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-6">
            <Image width="100%" height="100%" src={laptop} alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
