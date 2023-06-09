import {
  faBrain,
  faGear,
  faMobile,
  faMobileAlt,
  faPencil,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const MyMainServices = () => {
  return (
    <section className="service_section_2 commonSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="icon_box_2-services text-center">
              <h3>Web Development</h3>
              <p>
                Phaseus sit amet tristique lorem ipsum is simply free text ligua
                donec culis leo sus cipit.
              </p>
              <div className="iconWrap">
                <FontAwesomeIcon icon={faGear} />
              </div>
              <Link href="/services/webdevelopment"> discover more</Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="icon_box_2-services text-center">
              <h3>Graphics Design</h3>
              <p>
                Phaseus sit amet tristique lorem ipsum is simply free text ligua
                donec culis leo sus cipit.
              </p>
              <div className="iconWrap">
                <FontAwesomeIcon icon={faPencil} />
              </div>
              <Link href="/services/graphicdesign">discover more</Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-6 mt-md-1 mt-lg-none">
            <div className="icon_box_2-services text-center">
              <h3>Content Writing</h3>
              <p>
                Phaseus sit amet tristique lorem ipsum is simply free text ligua
                donec culis leo sus cipit.
              </p>
              <div className="iconWrap">
                <FontAwesomeIcon icon={faPeopleArrows} />
              </div>
              <Link href="/services/contentwriting">discover more</Link>
            </div>
          </div>
          <div className="col-lg-2 d-md-none"></div>
          <div className="col-lg-4 col-sm-12 col-md-6 mt-lg-3 mt-md-none">
            <div className="icon_box_2-services text-center">
              <h3>seo & digital marketting</h3>
              <p>Phaseus sit amet tristique lorem ipsum is simply free</p>
              <div className="iconWrap">
                <FontAwesomeIcon icon={faBrain} />
              </div>
              <Link href="/services/seodigitalmarketing">discover more</Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-6 mt-3 mt-lg-none">
            <div className="icon_box_2-services text-center">
              <h3>App development</h3>
              <p>
                Phaseus sit amet tristique lorem ipsum is simply free text ligua
                donec culis leo sus cipit.
              </p>
              <div className="iconWrap">
                <FontAwesomeIcon icon={faMobileAlt} />
              </div>
              <Link href="/services/appdevelopment">discover more</Link>
            </div>
          </div>
          <div className="col-lg-2 d-md-none"></div>
        </div>
      </div>
    </section>
  );
};

export default MyMainServices;
