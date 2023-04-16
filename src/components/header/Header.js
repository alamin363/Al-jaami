import Link from "next/link";
import React from "react";
import logoLight from "./../../assets/images/logo/light-logo.png";
import logoDark from "./../../assets/images/logo/dark-logo.png";
import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Login from "../LoginRegisterModal/LoginRegisterModal";

const Header = () => {
  const [hidelogin, setHidelogin] = useState(false);
  const [DisplayScroll, setDisplayScroll] = useState(false);
  const [modalopen, setModalOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [QuoteHide, setQuote] = useState(false);
  const [openSlideNavItem, setOpenSlideItem] = useState({
    company: false,
    services: false,
  });
  const router = useRouter();

  // scroll display y  <=> / add and hide class "is-sticky" to display position sticky
  useEffect(() => {
    const handleScrollDisplay = (e) => {
      if (windowSize.innerWidth >= 1080) {
        setDisplayScroll(window.scrollY > 50);
      }
      // console.log(e)
    };
    window.addEventListener("scroll", handleScrollDisplay);
    return () => {
      window.removeEventListener("scroll", handleScrollDisplay);
    };
  }, []);

  // hide login and quote in conditional
  useEffect(() => {
    switch (router.pathname) {
      case "/":
        setQuote(true);
        setHidelogin(false);
        break;
      default:
        setQuote(false);
        setHidelogin(true);
        break;
    }
  }, []);
  function getWindowSize() {
    if (typeof window !== "undefined") {
      const { innerWidth, innerHeight } = window;
      return { innerWidth, innerHeight };
    }
  }
  const handelMenu = () => {
    setToggle((Pre) => !Pre);
  };
  console.log(toggle);

  return (
    <header className="header header-transparent">
      {modalopen ? (
        <Login modalopen={modalopen} setModalOpen={setModalOpen} />
      ) : (
        <></>
      )}
      <nav
        className={` navbar navbar-expand-lg sticky-navbar ${
          DisplayScroll ? "is-sticky" : ""
        }`}
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
            className={`navbar-toggler ${toggle ? "actived" : ""}`}
            type="button"
          >
            <span className="menu-lines">
              <span></span>
            </span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              toggle ? "menu-opened" : ""
            }`}
            id="mainNavigation"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav__item  has-dropdown">
                <Link
                  href="/"
                  style={{ marginRight: "10px" }}
                  className="nav__item-link active"
                >
                  Home
                </Link>
              </li>
              <li className="nav__item  has-dropdown">
                {/* <i className="fa-solid fa-angle-down"></i> */}
                <a
                  onClick={() =>
                    setOpenSlideItem({
                      company: !openSlideNavItem.company,
                      services: false,
                    })
                  }
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link iconFlex"
                >
                  Company
                  <FontAwesomeIcon
                    style={{ fontSize: 15, marginLeft: 5 }}
                    icon={faAngleDown}
                  />
                </a>

                <ul
                  className={`dropdown-menu ${
                    openSlideNavItem.company ? "show" : ""
                  }`}
                >
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
                  <li className="nav__item">
                    <Link href="/careers" className="nav__item-link">
                      Careers
                    </Link>
                  </li>
                </ul>
                {/* /.dropdown-menu */}
              </li>

              {/* /.nav-item */}
              <li className="nav__item  has-dropdown">
                <p
                  onClick={() =>
                    setOpenSlideItem({
                      company: false,
                      services: !openSlideNavItem.services,
                    })
                  }
                  href="/"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link iconFlex"
                >
                  <span>Services</span>
                  <FontAwesomeIcon
                    style={{ fontSize: 15, marginLeft: 5 }}
                    icon={faAngleDown}
                  />
                </p>
                <ul
                  className={`dropdown-menu ${
                    openSlideNavItem.services ? "show" : ""
                  }`}
                >
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
                <Link href="/contact" className="nav__item-link">
                  Contacts
                </Link>
              </li>
              {/* /.nav-item */}
            </ul>
            {/* /.navbar-nav */}
          </div>
          {/* /.navbar-collapse */}
          <ul className="navbar-actions list-unstyled mb-0 d-sm-none d-xl-flex align-items-center">
            <li className={`${QuoteHide ? "d-none" : "d-block"}`}>
              <Link className="btn action__btn-contact" href="/quote">
                <span>Request A Quote</span>
              </Link>
            </li>
            <li className={`${hidelogin ? "d-none" : "d-block"}`}>
              <a
                onClick={() => setModalOpen((Pre) => !Pre)}
                className="btn action__btn-contact"
              >
                Login
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
