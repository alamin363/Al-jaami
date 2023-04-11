import Link from "next/link";
import React from "react";
import logoLight from "./../../assets/images/logo/light-logo.png";
import logoDark from "./../../assets/images/logo/dark-logo.png";
import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [DisplayScroll, setDisplayScroll] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleScrollDisplay = () => {
      if (windowSize.innerWidth >= 992) {
        setDisplayScroll(window.scrollY > 50);
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
  const handelMenu = () => {
    setToggle(!toggle);
  };

  return (
    <header className="header header-transparent">
      <nav
        className={
          DisplayScroll
            ? "navbar navbar-expand-lg sticky-navbar is-sticky"
            : "navbar navbar-expand-lg sticky-navbar"
        }
      >
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image
              src={logoLight}
              height={55}
              width={"100%"}
              className="logo-light"
              alt="logo"
            />
            <Image
              src={logoDark}
              height={55}
              width={"100%"}
              className="logo-dark"
              alt="logo"
            />
          </Link>
          <button
            onClick={() => handelMenu()}
            className="navbar-toggler"
            type="button"
          >
            <span className="menu-lines">
              <span />
            </span>
          </button>
          <div
            className={
              toggle
                ? "collapse navbar-collapse"
                : "collapse navbar-collapse menu-opened"
            }
            id="mainNavigation"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav__item  has-dropdown">
                <Link
                  href="/"
                  data-toggle="dropdown"
                  className="nav__item-link active"
                >
                  Home
                </Link>
              </li>
              <li className="nav__item  has-dropdown">
                <i class="fa-solid fa-angle-down"></i>
                <p
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link iconFlex"
                >
                  Company
                  <FontAwesomeIcon
                    style={{ fontSize: 20, marginLeft: 5 }}
                    icon={faAngleDown}
                  />
                </p>

                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <Link href="/aboutus" className="nav__item-link">
                      About Us
                    </Link>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <Link href="/choose" className="nav__item-link">
                      Why Choose Us
                    </Link>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <Link href="/leadershipe" className="nav__item-link">
                      Leadership Team
                    </Link>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item">
                    <Link href="/awards" className="nav__item-link">
                      Award &amp; Recognition
                    </Link>
                  </li>
                </ul>
                {/* /.dropdown-menu */}
              </li>

              {/* /.nav-item */}
              <li className="nav__item  has-dropdown">
                <Link
                  href="/services"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link iconFlex"
                >
                  <span>Services</span>
                  <FontAwesomeIcon
                    style={{ fontSize: 20, marginLeft: 5 }}
                    icon={faAngleDown}
                  />
                </Link>
                <ul className="dropdown-menu">
                  {/* /.nav-item */}
                  <li className="nav__item has-dropdown">
                    <Link
                      data-toggle="dropdown"
                      className="dropdown-toggle nav__item-link"
                      href="/services/webdevelopment"
                    >
                      Web Development
                    </Link>
                    <ul className="dropdown-menu d-left">
                      <li className="nav__item">
                        <Link
                          href="/services/webdevelopment/websitedesign"
                          className="nav__item-link"
                        >
                          Website Design
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/services/webdevelopment/webapplication"
                          className="nav__item-link"
                        >
                          Web Application
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/services/webdevelopment/mobileapp"
                          className="nav__item-link"
                        >
                          Mobile App Development
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/services/webdevelopment/ecommercedevelopment"
                          className="nav__item-link"
                        >
                          Ecommerce Development
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/services/webdevelopment/cmcdevelopment"
                          className="nav__item-link"
                        >
                          CMS Development
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item has-dropdown">
                    <Link
                      data-toggle="dropdown"
                      className="dropdown-toggle nav__item-link"
                      href="/services/graphicdesign"
                    >
                      Graphics Design
                    </Link>
                    <ul className="dropdown-menu d-left">
                      <li className="nav__item">
                        <Link
                          href="/services/graphicdesign/branddesign"
                          className="nav__item-link"
                        >
                          Brand Design
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/services/graphicdesign/logodesign"
                          className="nav__item-link"
                        >
                          Logo Design
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/services/graphicdesign/uiuxdesign"
                          className="nav__item-link"
                        >
                          UIUX Design
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/services/graphicdesign/socal mediadesign"
                          className="nav__item-link"
                        >
                          Social Media Design
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/services/graphicdesign/packagingdesign"
                          className="nav__item-link"
                        >
                          Packaging Design
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/services/graphicdesign/coverdesign"
                          className="nav__item-link"
                        >
                          Cover Design
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/services/graphicdesign/videoproduction"
                          className="nav__item-link"
                        >
                          Video Production
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item has-dropdown">
                    <Link
                      data-toggle="dropdown"
                      className="dropdown-toggle nav__item-link"
                      href="/services/contentwriting"
                    >
                      Content Writing
                    </Link>
                    <ul className="dropdown-menu d-left">
                      <li className="nav__item">
                        <Link
                          href="/services/contentwriting/ebooks"
                          className="nav__item-link"
                        >
                          E-books
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/services/contentwriting/articalmarketing"
                          className="nav__item-link"
                        >
                          Artical Marketing
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/services/contentwriting/blogcontent"
                          className="nav__item-link"
                        >
                          Blog Content
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/services/contentwriting/Businesswebpage"
                          className="nav__item-link"
                        >
                          Business Webpage
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/services/contentwriting/marketingcollateral"
                          className="nav__item-link"
                        >
                          Marketing Collateral
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/services/contentwriting/emailmarketingcampagins"
                          className="nav__item-link"
                        >
                          Email Marketing Campagins
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav__item has-dropdown">
                    <Link
                      data-toggle="dropdown"
                      className="dropdown-toggle nav__item-link"
                      href="/services/seodigitalmarketing"
                    >
                      SEO & Digital Marketing
                    </Link>
                  </li>
                  <li className="nav__item has-dropdown">
                    <Link
                      data-toggle="dropdown"
                      className="dropdown-toggle nav__item-link"
                      href="/services/appdevelopment"
                    >
                      App Development
                    </Link>
                  </li>
                </ul>
                {/* /.dropdown-menu */}
              </li>

              <li className="nav__item">
                <Link href="/contact-us" className="nav__item-link">
                  Contacts
                </Link>
              </li>
              {/* /.nav-item */}
            </ul>
            {/* /.navbar-nav */}
          </div>
          {/* /.navbar-collapse */}
          <ul className="navbar-actions list-unstyled mb-0 d-flex align-items-center">
            <li>
              <a className="btn action__btn-contact" href="">
                <i className="icon-user mr-2" />
                <span>Login</span>
              </a>
            </li>
          </ul>
          {/* /.navbar-actions */}
        </div>
        {/* /.container */}
      </nav>
      {/* /.navabr */}
    </header>
  );
};

export default Header;
