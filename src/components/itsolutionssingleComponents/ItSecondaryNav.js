"use client"
import React, { useEffect, useRef, useState } from "react";

const ItSecondaryNav = ({
  OverviewRef,
  WorksRef,
  QuoteRef
}) => {
  const [DisplayScroll, setDisplayScroll] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const [scroll, setScroll] = useState({
    Overview: false,
    Works: false,
    Quote: false,
  });

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
                    Overview: true,
                    Works: false,
                    Quote: false,
                  });
                  OverviewRef.current.scrollIntoView({ behavior: "smooth" });
                }}
                className={`nav__link ${scroll.Overview ? "active" : ""} `}
              >
                Overview
              </a>
              <a
                onClick={() => {
                  setScroll({
                    Overview: false,
                    Works: true,
                    Quote: false,
                  });
                  WorksRef.current.scrollIntoView({ behavior: "smooth" });
                }}
                className={`nav__link ${scroll.Works ? "active" : ""} `}
              >
                How It Works
              </a>
              <a
                onClick={() => {
                  setScroll({
                    Overview: false,
                    service: false,
                    Quote: true,
                  });
                  QuoteRef.current.scrollIntoView({ behavior: "smooth" });
                }}
                className={`nav__link ${scroll.Quote ? "active" : ""} `}
              >
                Request A Quote
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItSecondaryNav;
