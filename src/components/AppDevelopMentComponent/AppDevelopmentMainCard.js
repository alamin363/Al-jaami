import React from "react";
import CommonServices from "../servicesComponent/CommonServices";
import Accordion from "../Accordion/Accoredion";

const AppDevelopmentMainCard = () => {
  let value = {
    webDeveloper: false,
    graphicDesign: false,
    contentWriting: false,
  };
  return (
    <section className="service">
      <div className="container">
        <div className="row">
          <br />
          <div className="col-md-8">
            <img
              className="h-img"
              src="https://images.pexels.com/photos/8636611/pexels-photo-8636611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h2 className="mt-3"> APP DEVELOPMENT</h2>
            <p style={{ fontSize: "17px" }}>
              The best mobile application development businesses are developing
              digitally transformational, high-performance, feature-rich native
              mobile platforms such as iOS, BlackBerry OS, Android, and Windows
              Mobile. The distinction between the infrastructure of a mobile
              application and the services that augment it is becoming
              increasingly blurred as technology advances toward application
              development.
            </p>

            <p style={{ fontSize: "17px" }}>
              Mobile Application Development is a technique for developing
              software applications that may operate on mobile devices. A
              typical mobile application takes advantage of a network connection
              to compute and interact with various remote computing resources
              quickly. Thus, the process of developing a mobile application
              entails providing backend services such as data access through
              API, installable software bundles, and testing the program on
              target devices.
            </p>
            <br />
            <br />
            <div className="row">
              <div className="col-md-6 image">
                <img
                  src="http://7oroof.com/demos/smartdata/assets/images/blog/author/4.png"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <h3>PLANNING & STRATEGY</h3>
                <p style={{ fontSize: "17px" }} className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <br />
                <ul>
                  <li>
                    <i className="fa fa-check-square"></i>Research beyond the
                    business plan
                  </li>
                  <li>
                    <i className="fa fa-check-square"></i>Marketing options and
                    rates
                  </li>
                  <li>
                    <i className="fa fa-check-square"></i>The ability to
                    turnaround consulting
                  </li>
                  <li>
                    <i className="fa fa-check-square"></i>Help companies into
                    more profitable
                  </li>
                  <li>
                    <i className="fa fa-check-square"></i>Customer engagement
                    matters
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <br />
            <p style={{ fontSize: "17px" }}>
              Need something changed or is there something not quite working the
              way you envisaged? Is your van a little old and tired and need
              refreshing? Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry&#39;s standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="col-md-4">
          <Accordion value={value}/>
            <aside className="mt-4 categories">
              <div className="meipaly_services_help">
                <h4>need webpixal help?</h4>
                <p>
                  Prefer speaking with a human to filling out a form? call
                  corporate office and we will connect you with a team member
                  who can help.
                </p>
                <h2>666 888 000</h2>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevelopmentMainCard;
