import Image from "next/image";
import React, { useEffect, useState } from "react";
import navLogo1 from "./../../assets/images/logo/light-logo.png";
import navLogo2 from "./../../assets/images/logo/dark-logo.png";
import navLogo3 from "./../../assets/images/logo/al Jaami-04.png";
import Link from "next/link";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [scroll, setScroll] = useState(false);
  const [Toggle, setToggle] = useState(false);
  console.log(scroll);
  useEffect(() => {
    function handleScroll() {
      if (windowSize.width >= 1000) {
        setScroll(window.scrollY > 50);
      }
      setScrollPosition(window.pageYOffset);
    }
    console.log(window.scrollY);
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const MenuClick = () => {
    setToggle(!Toggle);
  };

  return (
    <header className="header header-transparent">
      <nav
        className={
          scroll
            ? "navbar navbar-expand-lg sticky-navbar is-sticky"
            : "navbar navbar-expand-lg sticky-navbar"
        }
      >
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image
              width={200}
              height={55}
              src={navLogo1}
              className="logo-light"
              alt="logo"
            />
            <Image
              src={navLogo2}
              width={200}
              height={55}
              className="logo-dark"
              alt="logo"
            />
          </Link>
          <button onClick={MenuClick} className="navbar-toggler" type="button">
            <span className="menu-lines">
              <span></span>
            </span>
          </button>
          <div
            className={
              Toggle
                ? "collapse navbar-collapse"
                : "collapse navbar-collapse menu-opened"
            }
            id="mainNavigation"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav__item">
                <Link href="/" className=" nav__item-link active">
                  Home
                </Link>
              </li>
              <li className="nav__item  has-dropdown">
                <Link
                  href="/company"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link"
                >
                  Company
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <Link href="/about-us" className="nav__item-link">
                      About Us
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link href="/why-us" className="nav__item-link">
                      Why Choose Us
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link href="/leadership-team" className="nav__item-link">
                      Leadership Team
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link href="awards.html" className="nav__item-link">
                      Award & Recognition
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link href="careers.html" className="nav__item-link">
                      Careers
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav__item  has-dropdown">
                <Link
                  href="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link"
                >
                  Services
                </Link>
                <ul className="dropdown-menu ">
                  <li className="nav__item p-0">
                    <div className="row">
                      <div className="dropdown-menu-col">
                        <ul className="nav flex-column">
                          <li className="nav__item  has-dropdown">
                            <Link
                              href="web_service_details.html"
                              className="dropdown-toggle nav__item-link"
                            >
                              Web Development
                            </Link>
                            <ul className="dropdown-menu m_l_237 m_t-60">
                              <li className="nav__item">
                                <Link
                                  href="web_service_details.html"
                                  className="nav__item-link"
                                >
                                  Website Design
                                </Link>
                              </li>
                              <li className="nav__item">
                                <Link
                                  href="web_service_details.html"
                                  className="nav__item-link"
                                >
                                  Web Application
                                </Link>
                              </li>
                              <li className="nav__item">
                                <Link
                                  href="web_service_details.html"
                                  className="nav__item-link"
                                >
                                  Mobbile App Development
                                </Link>
                              </li>
                              <li className="nav__item">
                                <Link
                                  href="web_service_details.html"
                                  className="nav__item-link"
                                >
                                  Ecommerce Development
                                </Link>
                              </li>
                              <li className="nav__item">
                                <Link
                                  href="web_service_details.html"
                                  className="nav__item-link"
                                >
                                  CMS Development
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav__item  has-dropdown">
                            <Link
                              href="graphic_service_details.html"
                              className="dropdown-toggle nav__item-link"
                            >
                              Graphics Design
                            </Link>
                            <ul className="dropdown-menu m_l_237 m_t-38">
                              <li className="nav__item">
                                <Link
                                  href="graphic_service_details.html"
                                  className="nav__item-link"
                                >
                                  Brand Design
                                </Link>
                              </li>
                              <li className="nav__item">
                                <Link
                                  href="graphic_service_details.html"
                                  className="nav__item-link"
                                >
                                  Logo Design
                                </Link>
                              </li>
                              <li className="nav__item">
                                <Link
                                  href="graphic_service_details.html"
                                  className="nav__item-link"
                                >
                                  UIUX Design
                                </Link>
                              </li>
                              <li className="nav__item">
                                <Link
                                  href="graphic_service_details.html"
                                  className="nav__item-link"
                                >
                                  Social Media Design
                                </Link>
                              </li>
                              <li className="nav__item">
                                <Link
                                  href="graphic_service_details.html"
                                  className="nav__item-link"
                                >
                                  Packaging Design
                                </Link>
                              </li>
                              <li className="nav__item">
                                <Link
                                  href="graphic_service_details.html"
                                  className="nav__item-link"
                                >
                                  Cover Design
                                </Link>
                              </li>
                              <li className="nav__item">
                                <Link
                                  href="graphic_service_details.html"
                                  className="nav__item-link"
                                >
                                  Video Production
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav__item  has-dropdown">
                            <Link
                              href="content_service_details.html"
                              className="dropdown-toggle nav__item-link"
                            >
                              Content Writing
                              <i className="icon icon-down-arrow1 elementskit-submenu-indicator"></i>
                            </Link>
                            <ul className="dropdown-menu m_l_237 m_t-32">
                              <li className="nav__item">
                                <Link
                                  href="content_service_details.html"
                                  className="nav__item-link"
                                >
                                  E-books
                                </Link>
                              </li>
                              <li className="nav__item">
                                <Link
                                  href="content_service_details.html"
                                  className="nav__item-link"
                                >
                                  Artical Marketing
                                </Link>
                              </li>
                              <li className="nav__item">
                                <Link
                                  href="content_service_details.html"
                                  className="nav__item-link"
                                >
                                  Blog Content
                                </Link>
                              </li>
                              <li className="nav__item">
                                <Link
                                  href="content_service_details.html"
                                  className="nav__item-link"
                                >
                                  Business Webpage
                                </Link>
                              </li>
                              <li className="nav__item">
                                <Link
                                  href="content_service_details.html"
                                  className="nav__item-link"
                                >
                                  Marketing Collateral
                                </Link>
                              </li>
                              <li className="nav__item">
                                <Link
                                  href="content_service_details.html"
                                  className="nav__item-link"
                                >
                                  Email Marketing Campagins
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav__item  has-dropdown">
                            <Link
                              href="seo_service_details.html"
                              className="dropdown-toggle nav__item-link"
                            >
                              SEO & Digital Marketing
                              <i className="icon icon-down-arrow1 elementskit-submenu-indicator"></i>
                            </Link>
                          </li>
                          <li className="nav__item  has-dropdown">
                            <Link
                              href="app_service_details.html"
                              className="dropdown-toggle nav__item-link"
                            >
                              App Development
                              <i className="icon icon-down-arrow1 elementskit-submenu-indicator"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              {/* <!-- <li className="nav__item  has-dropdown">
              <Link href="#" data-toggle="dropdown" className="dropdown-toggle nav__item-link">Features</Link>
              <ul className="dropdown-menu">
                <li className="nav__item">
                  <Link href="coming-soon.html" className="nav__item-link">Coming Soon</Link>
                </li>
                <li className="nav__item">
                  <Link href="404.html" className="nav__item-link">404 Page</Link>
                </li>
                <li className="nav__item">
                  <Link href="#" className="nav__item-link  open-register-popup">Register</Link>
                </li>
                <li className="nav__item">
                  <Link href="#" className="nav__item-link  open-login-popup">Login</Link>
                </li>
              </ul>
            </li> --> */}
              <li className="nav__item">
                <Link href="contact-us.html" className="nav__item-link">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <ul className="navbar-actions list-unstyled mb-0 d-flex align-items-center">
            <li className="d-none d-xl-block">
              <Link
                href="https://crm.aljaami.net/?ng=client/login/"
                className="btn action__btn-contact"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
