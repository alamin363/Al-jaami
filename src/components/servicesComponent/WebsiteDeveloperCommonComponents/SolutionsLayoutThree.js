import React from "react";
import img from "../../../assets/images/about/7.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import CommonServices from "../CommonServices";
import Image from "next/image";
import Accordion from "@/components/Accordion/Accoredion";
import AccordionTwo from "@/components/Accordion/AccoredionTwo";

export default function WebDeveloperLayout({value,OurTeamRef}) {
 
  return (
    <section ref={OurTeamRef} id="about" className="about-layout2 animated-Progressbars">
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
                <h4>NEED AL-JAAMI HELP?</h4>
                <p>
                  Prefer speaking with a human to filling out a form? call
                  corporate office and we will connect you with a team member
                  who can help.
                </p>
                <h2>
                  <svg
                    height={50}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                      fill="white"
                    />
                  </svg>{" "}
                  <a style={{color:"white"}} href="tel:++44 (0) 7517 149 156">+44 (0) 7517 149 156</a>
                </h2>
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
