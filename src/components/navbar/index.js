import Image from "next/image";
import Light from "../../assets/images/logo/al Jaami-02.png";
import logo from "../../assets/images/logo/al-Jaami-03.png";
const { default: Link } = require("next/link");

const Navbar = () => {
  return (
    <header classNameName="header header-transparent">
      <nav className="navbar navbar-expand-lg sticky-navbar">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image src={logo} width={100} height={80} alt="" />
          </Link>
          <button className="navbar-toggler" type="button">
            <span className="menu-lines">
              <span></span>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavigation">
            <ul className="navbar-nav ml-auto">
              <li className="nav__item has-dropdown">
                <a
                  href="index.html"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link"
                >
                  Home
                </a>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <a href="index.html" className="nav__item-link">
                      Home Main
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="home-modern.html" className="nav__item-link">
                      Home Modern
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="home-classNameic.html" className="nav__item-link">
                      Home classNameic
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav__item has-dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link"
                >
                  Company
                </a>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <a href="about-us.html" className="nav__item-link">
                      About Us
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="why-us.html" className="nav__item-link">
                      Why Choose Us
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="leadership-team.html" className="nav__item-link">
                      Leadership Team
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="awards.html" className="nav__item-link">
                      Award & Recognition
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="pricing.html" className="nav__item-link">
                      Pricing & Plans
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="faqs.html" className="nav__item-link">
                      Help & FAQs
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="careers.html" className="nav__item-link">
                      Careers
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav__item has-dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link"
                >
                  IT Solutions
                </a>
                <ul className="dropdown-menu wide-dropdown-menu">
                  <li className="nav__item">
                    <div className="row mx-0">
                      <div className="col-sm-6 dropdown-menu-col">
                        <a
                          href="it-solutions.html"
                          className="nav__item-link dropdown-menu-title"
                        >
                          IT Solutions
                        </a>
                        <ul className="nav flex-column">
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="it-solutions-single.html"
                            >
                              IT Management
                            </a>
                          </li>
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="it-solutions-single.html"
                            >
                              Cyber Security
                            </a>
                          </li>
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="it-solutions-single.html"
                            >
                              Cloud Computing
                            </a>
                          </li>
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="it-solutions-single.html"
                            >
                              IT Consulting
                            </a>
                          </li>
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="it-solutions-single.html"
                            >
                              Software Dev
                            </a>
                          </li>
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="it-solutions-single.html"
                            >
                              IT Support
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6 dropdown-menu-col">
                        <a
                          href="industries.html"
                          className="nav__item-link dropdown-menu-title"
                        >
                          Industries
                        </a>
                        <ul className="nav flex-column">
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="industries-single-industry.html"
                            >
                              Education, Non-Profit
                            </a>
                          </li>
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="industries-single-industry.html"
                            >
                              Accounting, Finance
                            </a>
                          </li>
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="industries-single-industry.html"
                            >
                              Government & Public
                            </a>
                          </li>
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="industries-single-industry.html"
                            >
                              Energy & Utilities
                            </a>
                          </li>
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="industries-single-industry.html"
                            >
                              Legal, Law Firms
                            </a>
                          </li>
                          <li className="nav__item">
                            <a
                              className="nav__item-link"
                              href="industries-single-industry.html"
                            >
                              Manufacturing
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav__item has-dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link"
                >
                  News&Media
                </a>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <a href="blog.html" className="nav__item-link">
                      Our Blog
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="blog-single-post.html" className="nav__item-link">
                      Single Blog Post
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="case-studies-grid.html" className="nav__item-link">
                      Case Studies Grid
                    </a>
                  </li>
                  <li className="nav__item">
                    <a
                      href="case-studies-carousel.html"
                      className="nav__item-link"
                    >
                      Case Studies Carousel
                    </a>
                  </li>
                  <li className="nav__item">
                    <a
                      href="case-studies-classNameic.html"
                      className="nav__item-link"
                    >
                      Case Studies classNameic
                    </a>
                  </li>
                  <li className="nav__item">
                    <a
                      href="case-studies-single.html"
                      className="nav__item-link"
                    >
                      Single Case Study
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav__item has-dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link"
                >
                  Features
                </a>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <a href="coming-soon.html" className="nav__item-link">
                      Coming Soon
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="404.html" className="nav__item-link">
                      404 Page
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="#" className="nav__item-link  open-register-popup">
                      Register
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="#" className="nav__item-link  open-login-popup">
                      Login
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav__item">
                <a href="contact-us.html" className="nav__item-link">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          <ul className="navbar-actions list-unstyled mb-0 d-flex align-items-center">
            <li className="d-none d-xl-block">
              <a href="request-quote.html" className="btn action__btn-contact">
                Request A Quote
              </a>
            </li>
            <li>
              <button className="action__btn action__btn-login open-login-popup">
                <i className="icon-user"></i>
                <span>Login</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
