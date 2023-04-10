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
                  href="/company"
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
                      href="/Design-Services"
                    >
                      Design Services
                    </Link>
                    <ul className="dropdown-menu d-left">
                      <li className="nav__item">
                        <Link href="/website-design" className="nav__item-link">
                          Website design
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/Logo-Branding" className="nav__item-link">
                          Logo & Branding
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/advertising" className="nav__item-link">
                          Advertising
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/Social-media" className="nav__item-link">
                          Social Media
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/packaging" className="nav__item-link">
                          Packaging
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/Graphic-Design" className="nav__item-link">
                          Graphic design
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/Copy-writing-Services"
                          className="nav__item-link"
                        >
                          Copywriting Services
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item has-dropdown">
                    <Link
                      data-toggle="dropdown"
                      className="dropdown-toggle nav__item-link"
                      href="/IT-Web-Services"
                    >
                      IT & Web Services
                    </Link>
                    <ul className="dropdown-menu d-left">
                      <li className="nav__item">
                        <Link
                          href="/Website-Building"
                          className="nav__item-link"
                        >
                          Website Building
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/IT-Support" className="nav__item-link">
                          IT Support
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/web-app" className="nav__item-link">
                          Web App Development
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/Mobile-App " className="nav__item-link">
                          Mobile App Development
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/AI-ML" className="nav__item-link">
                          AI & ML
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/Digital-Marketing"
                          className="nav__item-link"
                        >
                          Digital Marketing
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* /.nav-item */}
                  <li className="nav__item has-dropdown">
                    <Link
                      data-toggle="dropdown"
                      className="dropdown-toggle nav__item-link"
                      href="/Selling-Platforms"
                    >
                      Selling Platforms
                    </Link>
                    <ul className="dropdown-menu d-left">
                      <li className="nav__item">
                        <Link href="/Amazon" className="nav__item-link">
                          Amazon
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/eBay" className="nav__item-link">
                          eBay
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/OnBuy" className="nav__item-link">
                          OnBuy
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/Social-Marketing "
                          className="nav__item-link"
                        >
                          Social Marketing
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/E-Campaigners" className="nav__item-link">
                          e-Campaigners
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav__item has-dropdown">
                    <Link
                      data-toggle="dropdown"
                      className="dropdown-toggle nav__item-link"
                      href="/Sales-Marketing"
                    >
                      Sales & Marketing
                    </Link>
                    <ul className="dropdown-menu d-left">
                      <li className="nav__item">
                        <Link href="/Data-Discovery" className="nav__item-link">
                          Data Discovery
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/Product-Sourcing"
                          className="nav__item-link"
                        >
                          Product Sourcing
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/Business-Opportunitie"
                          className="nav__item-link"
                        >
                          Business Opportunities
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/LinkedIn-Services"
                          className="nav__item-link"
                        >
                          LinkedIn Services
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav__item has-dropdown">
                    <Link
                      data-toggle="dropdown"
                      className="dropdown-toggle nav__item-link"
                      href="/Network-Partners"
                    >
                      Network Partners
                    </Link>
                    <ul className="dropdown-menu d-left">
                      <li className="nav__item">
                        <Link href="/Sales-Agents" className="nav__item-link">
                          Sales Agents
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/Accountants" className="nav__item-link">
                          Accountants
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/Solicitorsn" className="nav__item-link">
                          Solicitors
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/Telecommunications"
                          className="nav__item-link"
                        >
                          Telecommunications
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/Video-Production"
                          className="nav__item-link"
                        >
                          Video Production
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav__item has-dropdown">
                    <Link
                      data-toggle="dropdown"
                      className="dropdown-toggle nav__item-link"
                      href="/Recruitment"
                    >
                      Recruitment Services
                    </Link>
                    <ul className="dropdown-menu d-left">
                      <li className="nav__item">
                        <Link href="/Salespeople" className="nav__item-link">
                          Salespeople
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/Technology-Industry"
                          className="nav__item-link"
                        >
                          Technology Industry
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/Education" className="nav__item-link">
                          Education
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/Medical-Healthcare"
                          className="nav__item-link"
                        >
                          Medical & Healthcare
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/Hospitality" className="nav__item-link">
                          Hospitality
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/Finance" className="nav__item-link">
                          Finance
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="/Recruitment-services"
                          className="nav__item-link"
                        >
                          Recruitment services
                        </Link>
                      </li>
                    </ul>
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
              <a className="btn action__btn-contact d-sm-none" href="">
                <i className="icon-user" />
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
