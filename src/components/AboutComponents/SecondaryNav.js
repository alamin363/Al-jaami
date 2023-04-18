import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SecondaryNav = () => {
  const [DisplayScroll, setDisplayScroll] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const Route = useRouter();
  const [activeSecondaryNav, SetActiveSecondaryNav] = useState({
    about: Route.pathname == "/aboutus",
    choose: Route.pathname == "/choose",
    leadership: Route.pathname == "/leadershipe",
    awards: Route.pathname == "/awards",
    careers: Route.pathname == "/careers",
  });
  console.log(Route);
  console.log("activeSecondaryNav", activeSecondaryNav);

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
              <Link
                onClick={() => {
                  SetActiveSecondaryNav({
                    about: true,
                    choose: false,
                    leadership: false,
                    awards: false,
                    careers: false,
                  });
                }}
                href="/aboutus"
                className={`nav__link ${
                  activeSecondaryNav.about ? "active" : ""
                } `}
              >
                About Us
              </Link>
              <Link
                onClick={() => {
                  SetActiveSecondaryNav({
                    about: false,
                    choose: true,
                    leadership: false,
                    awards: false,
                    careers: false,
                  });
                }}
                href="/choose"
                className={`nav__link ${
                  activeSecondaryNav.choose ? "active" : ""
                } `}
              >
                Why Choose Us
              </Link>
              <Link
                onClick={() => {
                  SetActiveSecondaryNav({
                    about: false,
                    choose: false,
                    leadership: true,
                    awards: false,
                    careers: false,
                  });
                }}
                href="/leadershipe"
                className={`nav__link ${
                  activeSecondaryNav.leadership ? "active" : ""
                } `}
              >
                Leadership Team
              </Link>
              <Link
                onClick={() => {
                  SetActiveSecondaryNav({
                    about: false,
                    choose: false,
                    leadership: false,
                    awards: true,
                    careers: false,
                  });
                }}
                href="/awards"
                className={`nav__link ${
                  activeSecondaryNav.awards ? "active" : ""
                } `}
              >
                Awards & Recognition
              </Link>
              <Link
                onClick={() => {
                  SetActiveSecondaryNav({
                    about: false,
                    choose: false,
                    leadership: false,
                    awards: false,
                    careers: true,
                  });
                }}
                href="/careers"
                className={`nav__link ${
                  activeSecondaryNav.careers ? "active" : ""
                } `}
              >
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
