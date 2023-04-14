import Link from "next/link";
import React, { useEffect, useState } from "react";

const SecondaryNav = () => {
  const [DisplayScroll, setDisplayScroll] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());
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
              <Link href="about-us.html" className="nav__link active">
                About Us
              </Link>
              <Link href="/choose" className="nav__link">
                Why Choose Us
              </Link>
              <Link href="/leadershipe" className="nav__link">
                Leadership Team
              </Link>
              <Link href="/awards" className="nav__link">
                Awards & Recognition
              </Link>
              <Link href="/careers" className="nav__link">
                Careers
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryNav;
