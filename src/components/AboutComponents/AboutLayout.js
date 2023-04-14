import Image from "next/image";
import React from "react";
import Business from "../../assets/images/about/business-1839191__340.jpg";
import pexels from "../../assets/images/about/pexels-photo-733872.webp";

const AboutLayout = () => {
  return (
    <section className="about-layout1">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="heading mb-30">
              <div className="d-flex align-items-center mb-20">
                <div className="divider divider-primary mr-30"></div>
                <h2 className="heading__subtitle mb-0">
                  Timely Service Delivery & Incident Resolutions!!{" "}
                </h2>
              </div>
              <h3 className="heading__title mb-40">
                Manages service delivery across various business like, HR, Legal
                and other IT departments!!
              </h3>
            </div>
            <div className="position-relative offset-xl-1">
              <i className="icon-quote"></i>
              <p className="mb-40">
                There are three responses to a piece of design – yes, no, and
                WOW! Wow is the one, our company aim for” Our sites are designed
                to each group&apos;s specific needs. We can help your company with
                anything from landing pages, style, photos, graphics, and media
                to branding, marketing, analytics, and sales strategy.
              </p>
              <ul className="list-items list-items-layout2 list-unstyled d-flex flex-wrap list-horizontal mb-50">
                <li>Eliminate Repeat Entry</li>
                <li>Simplify Communication</li>
                <li>Drive Business Process</li>
                <li>Speed Up Transactions</li>
                <li>Structure Data & Docs</li>
                <li>Automate Workflows</li>
              </ul>
              <h5 className="text-dark">N. Ahamed</h5>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
            <div className="about__img mb-40">
              <Image width="100%" height="100%" src={Business} alt="about" />
              <blockquote className="blockquote d-flex align-items-end mb-0">
                <div className="blockquote__avatar">
                  <Image width={100} height={100} src={pexels} alt="thumb" />
                </div>
                <div className="blockquote__content">
                  <h4 className="blockquote__title mb-0">
                    As one of the world&apos;s largest ITService Providers with over
                    120 engineers and IT support staff are ready to help.
                  </h4>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLayout;
