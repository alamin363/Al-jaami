"use client"
import Link from "next/link";
import React, { useState } from "react";

const MyServices = () => {
  const [showTab, setShowTab] = useState({
    WebDevelopment: true,
    GraphicsDesign: false,
    ContentWriting: false,
    SEODigitalMarketing: false,
    AppDevelopment: false,
  });
  // console.log(showTab);
  return (
    <section className="service_section commonSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title red_color">Services we are offering</h4>
            <h2 className="sec_title text-white">
              We design digital products that
              <br /> help grow businesses.
            </h2>
            <p className="sec_desc color_aaa">
              We are committed to providing our customers with exceptional
              service
              <br /> while offering our employees the best training.
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="technologies">
            <div className="tech-list-wrapper mt-20">
              <ul className="nav tech-list" id="myTab">
                <li className="nav-item">
                  <a
                    data-target="#id-0"
                    className={`nav-link text-white ${
                      showTab.WebDevelopment ? "active" : ""
                    }`}
                    data-toggle="tab"
                    onClick={() =>
                      setShowTab({
                        WebDevelopment: !showTab.WebDevelopment,
                        GraphicsDesign: false,
                        ContentWriting: false,
                        SEODigitalMarketing: false,
                        AppDevelopment: false,
                      })
                    }
                  >
                    Web Development
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    data-target="#id-1"
                    className={`nav-link text-white ${
                      showTab.GraphicsDesign ? "active" : ""
                    }`}
                    data-toggle="tab"
                    onClick={() =>
                      setShowTab({
                        WebDevelopment: false,
                        GraphicsDesign: !showTab.GraphicsDesign,
                        ContentWriting: false,
                        SEODigitalMarketing: false,
                        AppDevelopment: false,
                      })
                    }
                  >
                    Graphics Design
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    data-target="#id-2"
                    className={`nav-link text-white ${
                      showTab.ContentWriting ? "active" : ""
                    }`}
                    data-toggle="tab"
                    onClick={() =>
                      setShowTab({
                        WebDevelopment: false,
                        GraphicsDesign: false,
                        ContentWriting: !showTab.ContentWriting,
                        SEODigitalMarketing: false,
                        AppDevelopment: false,
                      })
                    }
                  >
                    Content Writing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    data-target="#id-3"
                    className={`nav-link text-white ${
                      showTab.SEODigitalMarketing ? "active" : ""
                    }`}
                    data-toggle="tab"
                    onClick={() =>
                      setShowTab({
                        WebDevelopment: false,
                        GraphicsDesign: false,
                        ContentWriting: false,
                        SEODigitalMarketing: !showTab.SEODigitalMarketing,
                        AppDevelopment: false,
                      })
                    }
                  >
                    SEO & Digital Marketing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    data-target="#id-4"
                    className={`nav-link text-white ${
                      showTab.AppDevelopment ? "active" : ""
                    }`}
                    data-toggle="tab"
                    onClick={() =>
                      setShowTab({
                        WebDevelopment: false,
                        GraphicsDesign: false,
                        ContentWriting: false,
                        SEODigitalMarketing: false,
                        AppDevelopment: !showTab.AppDevelopment,
                      })
                    }
                  >
                    App Development
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div
                className={`single-row tab-pane fade ${
                  showTab.WebDevelopment ? "show active" : ""
                }`}
                id="id-0"
              >
                <div className="row">
                  <div className="col-lg-4 col-sm-12 col-md-6">
                    <div className="icon_box_2-services text-center">
                      <h3>Website Design</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec culis leo sus cipit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-md-6">
                    <div className="icon_box_2-services text-center">
                      <h3>Web Application</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec culis leo sus cipit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-md-6 mt-md-1 mt-lg-none">
                    <div className="icon_box_2-services text-center">
                      <h3>Mobbile App Development</h3>
                      <p>Phaseus sit amet tristique lorem ipsum</p>
                    </div>
                  </div>
                  <div className="col-lg-2 d-md-none"></div>
                  <div
                    className="col-lg-4 col-sm-12 col-md-6 mt-lg-3 mt-md-none"
                    style={{ marginBottom: "50px" }}
                  >
                    <div className="icon_box_2-services text-center">
                      <h3>Ecommerce Development</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-md-6 mt-3 mt-lg-none">
                    <div className="icon_box_2-services text-center">
                      <h3>CMS Development</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec culis leo sus cipit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-2"></div>
                </div>
              </div>
              <div
                className={`single-row tab-pane fade ${
                  showTab.GraphicsDesign ? "show active" : ""
                }`}
                id="id-1"
              >
                <div className="row">
                  <div className="col-lg-4 col-sm-12 col-md-6">
                    <div className="icon_box_2-services text-center">
                      <h3>Brand Design</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec culis leo sus cipit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-md-6">
                    <div className="icon_box_2-services text-center">
                      <h3>Logo Design</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec culis leo sus cipit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-md-6 mt-md-1 mt-lg-none">
                    <div className="icon_box_2-services text-center">
                      <h3>UIUX Design</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec culis leo sus cipit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-md-6 mt-3 mt-lg-none">
                    <div className="icon_box_2-services text-center">
                      <h3>Social Media Design</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec culis leo sus cipit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-md-6 mt-3 mt-lg-none">
                    <div className="icon_box_2-services text-center">
                      <h3>Packaging Design</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec culis leo sus cipit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-md-6 mt-3 mt-lg-none">
                    <div className="icon_box_2-services text-center">
                      <h3>Cover Design</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec culis leo sus cipit.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4"></div>
                  <div className="col-lg-4 col-sm-12 col-md-6 mt-3 mt-lg-none">
                    <div className="icon_box_2-services text-center">
                      <h3>Cover Design</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec culis leo sus cipit.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4"></div>
                </div>
              </div>
              <div
                className={`single-row tab-pane fade ${
                  showTab.ContentWriting ? "show active" : ""
                }`}
                id="id-2"
              >
                <div className="row">
                  <div className="col-lg-4 col-sm-12 col-md-6">
                    <div className="icon_box_2-services text-center">
                      <h3>E-Books</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec culis leo sus cipit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-md-6">
                    <div className="icon_box_2-services text-center">
                      <h3>Artical Marketing</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec culis leo sus cipit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-md-6 mt-md-1 mt-lg-none">
                    <div className="icon_box_2-services text-center">
                      <h3>Blog Content</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec culis leo sus cipit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-md-6 mt-3 mt-lg-none">
                    <div className="icon_box_2-services text-center">
                      <h3>Business Webpage</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec culis leo sus cipit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-md-6 mt-3 mt-lg-none">
                    <div className="icon_box_2-services text-center">
                      <h3>Marketing Collateral</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-md-6 mt-3 mt-lg-none">
                    <div className="icon_box_2-services text-center">
                      <h3>Email Marketing Campagins</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`single-row tab-pane fade ${
                  showTab.AppDevelopment ? "show active" : ""
                }`}
                id="id-3"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
