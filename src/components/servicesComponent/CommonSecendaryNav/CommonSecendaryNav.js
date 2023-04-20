import React, { useEffect, useRef, useState } from "react";

const CommonSecondaryNav = ({
  OurTeamRef,
  serviceRef,
  StudiesRef,
  PricingRef,
  FutureRef,
  QuestionsRef,
}) => {
  const [DisplayScroll, setDisplayScroll] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const [scroll, setScroll] = useState({
    OurTeam: false,
    service: false,
    SocialMedia: false,
    Studies: false,
    Pricing: false,
    Future: false,
    Questions: false,
  });

  // useEffect(() => {
  //   if (OurTeamRef.current) {
  //     OurTeamRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  //   if (serviceRef.current) {
  //     serviceRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  //   if (StudiesRef.current) {
  //     StudiesRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  //   if (PricingRef.current) {
  //     PricingRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  //   if (FutureRef.current) {
  //     FutureRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  //   if (QuestionsRef.current) {
  //     QuestionsRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, []);

  useEffect(() => {
    const handleScrollDisplay = () => {
      if (windowSize.innerWidth >= 1000) {
        setDisplayScroll(window.scrollY > 450);
      }
    };
    window.addEventListener("scroll", handleScrollDisplay);
    return () => {
      window.removeEventListener("scroll", handleScrollDisplay);
    };
  }, []);

  function getWindowSize() {
    if (typeof window !== "undefined") {
      const { innerWidth, innerHeight } = window;
      return { innerWidth, innerHeight };
    }
  }
  return (
    <section
      className={`secondary-nav sticky-top py-0 ${
        DisplayScroll && "secondary-nav-sticky"
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="nav nav-tabs justify-content-center">
              <a
                onClick={() => {
                  setScroll({
                    OurTeam: true,
                    service: false,
                    SocialMedia: false,
                    Studies: false,
                    Pricing: false,
                    Future: false,
                    Questions: false,
                  });
                  OurTeamRef.current.scrollIntoView({ behavior: "smooth" });
                }}
                className={`nav__link ${scroll.OurTeam ? "active" : ""} `}
              >
                Our Team
              </a>
              <a
                onClick={() => {
                  setScroll({
                    OurTeam: false,
                    service: true,
                    SocialMedia: false,
                    Studies: false,
                    Pricing: false,
                    Future: false,
                    Questions: false,
                  });
                  serviceRef.current.scrollIntoView({ behavior: "smooth" });
                }}
                className={`nav__link ${scroll.service ? "active" : ""} `}
              >
                Services
              </a>
              <a
                onClick={() => {
                  setScroll({
                    OurTeam: false,
                    service: false,
                    SocialMedia: false,
                    Studies: true,
                    Pricing: false,
                    Future: false,
                    Questions: false,
                  });
                  StudiesRef.current.scrollIntoView({ behavior: "smooth" });
                }}
                className={`nav__link ${scroll.Studies ? "active" : ""} `}
              >
                Studies
              </a>
              <a
                onClick={() => {
                  setScroll({
                    OurTeam: false,
                    service: false,
                    SocialMedia: false,
                    Studies: false,
                    Pricing: true,
                    Future: false,
                    Questions: false,
                  });
                  PricingRef.current.scrollIntoView({ behavior: "smooth" });
                }}
                className={`nav__link ${scroll.Pricing ? "active" : ""} `}
              >
                Awards & Recognition
              </a>
              <a
                onClick={() => {
                  setScroll({
                    OurTeam: false,
                    service: false,
                    SocialMedia: false,
                    Studies: false,
                    Pricing: false,
                    Future: true,
                    Questions: false,
                  });
                  FutureRef.current.scrollIntoView({ behavior: "smooth" });
                }}
                className={`nav__link ${scroll.Future ? "active" : ""} `}
              >
                Future
              </a>
              <a
                onClick={() => {
                  setScroll({
                    OurTeam: false,
                    service: false,
                    SocialMedia: false,
                    Studies: false,
                    Pricing: false,
                    Future: false,
                    Questions: true,
                  });
                  QuestionsRef.current.scrollIntoView({ behavior: "smooth" })
                }}
                className={`nav__link ${scroll.Questions ? "active" : ""} `}
              >
                Questions
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonSecondaryNav;
