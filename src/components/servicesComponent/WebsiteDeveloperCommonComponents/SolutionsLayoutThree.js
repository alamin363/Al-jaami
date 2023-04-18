import React from "react";
import img from "../../../assets/images/about/7.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import CommonServices from "../CommonServices";
import Image from "next/image";
import Accordion from "@/components/Accordion/Accoredion";
import AccordionTwo from "@/components/Accordion/AccoredionTwo";

export default function WebDeveloperLayout() {
  let value = {
    webDeveloper: true,
    graphicDesign: false,
    contentWriting: false,
  };
  return (
    <section id="about" className="about-layout2 animated-Progressbars">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div className="heading mb-40">
              <div className="d-flex align-items-center mb-20">
                <div className="divider divider-primary mr-30" />
                <h2 className="heading__subtitle mb-0">
                  Accurate and efficient solution of website design
                </h2>
              </div>
              <h3 className="heading__title mb-40">
                Why our team for website design is suitable for your business.
              </h3>
            </div>
          </div>
          {/* /.col-xl-5 */}
        </div>
        {/* /.row */}
        <div className="row about__Text">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div className="offset-xl-2 position-relative">
              <i className="icon-quote" />
              <p>
                We know a website isn&apos;t just a static page; it&apos;s your
                business&apos;s virtual storefront, open 24/7. That&apos;s why
                our team of expert designers takes the time to understand your
                business, target audience, and goals, so we can create a custom
                website that speaks directly to your ideal customers.
              </p>
              <p>
                We focus on creating a seamless user experience with intuitive
                navigation, responsive design, and compelling visuals that make
                a lasting impression. And because we know that search engine
                visibility is crucial, we optimize every aspect of your site to
                help it rank higher and reach your target audience more
                effectively.
              </p>
            </div>
            <div className="about__img mt-80 mb-30">
              <Image
                style={{ width: "100%", height: "auto" }}
                src={img}
                alt="about"
              />
            </div>
            {/* /.about__img*/}
            <div className="video__btn-wrapper">
              <a
                className="video__btn video__btn-white popup-video"
                href="https://www.youtube.com/watch?v=nrJtHemSPW4"
              >
                <div className="video__player">
                  <FontAwesomeIcon icon={faPlay} />
                </div>
                <span className="video__btn-title">
                  Watch Our Presentation!
                </span>
              </a>
            </div>
            {/* /.video__btn-wrapper*/}
          </div>
          {/* /.col-xl-6 */}
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 offset-xl-1 mt--100">
            <AccordionTwo value={value} />
            <div className="about__img mt-90">
              <div class="meipaly_services_help">
                <h4>need Business Savvy help?</h4>
                <p>
                  Prefer speaking with a human to filling out a form? call
                  corporate office and we will connect you with a team member
                  who can help.
                </p>
                <h2>666 888 000</h2>
              </div>
            </div>
          </div>
          {/* /.col-xl-5 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
