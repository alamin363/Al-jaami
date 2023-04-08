import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MultimediaService = () => {
  return (
    <section
      className="multimedia-service-section light-mode"
      style={{ backgroundColor: "#063946" }}
    >
      <div className="container">
        <div className="section-heading">
          <h2 className="text-white">Industries We Serve</h2>{" "}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="multimedia-service-list">
            <div className="single-list">
              <div className="service-icon">
                <i class="fa-solid fa-house"></i>
              </div>
              <span className="title">Finance &amp; Banking</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <FontAwesomeIcon icon="fas fa-building" />
              </div>
              <span className="title">E-commerce</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <i className="fas fa-broadcast-tower"></i>
              </div>
              <span className="title">Telco</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <i className="fas fa-city"></i>
              </div>
              <span className="title">Real Estate</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <span className="title">Software</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <i className="fas fa-walking"></i>
              </div>
              <span className="title">Health &amp; Fitness</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <i className="	fas fa-pizza-slice"></i>
              </div>
              <span className="title">Food &amp; Drink</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <i className="	fas fa-guitar"></i>
              </div>
              <span className="title">Music</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <i className="	fas fa-user-md"></i>
              </div>
              <span className="title">Medical</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <i className="fas fa-pills"></i>
              </div>
              <span className="title">Pharmaceutical</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <i className="fas fa-car-alt"></i>
              </div>
              <span className="title">Automotive</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <span className="title">Education</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <i className="fas fa-globe-asia"></i>
              </div>
              <span className="title">Travel</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <i className="fas fa-hamburger"></i>
              </div>
              <span className="title">Entertainment</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <i className="fas fa-hotel"></i>
              </div>
              <span className="title">Retail</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <span className="title">Business</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <i className="fas fa-photo-video"></i>
              </div>
              <span className="title">Photo &amp; Video</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <span className="title">Non-Profit</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <i className="	fa fa-podcast"></i>
              </div>
              <span className="title">Startup</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <i className="fas fa-turntable"></i>
              </div>
              <span className="title">AR/VR</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                <i className="fas fa-couch"></i>
              </div>
              <span className="title">Furniture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultimediaService;
