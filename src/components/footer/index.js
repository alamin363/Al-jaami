import Image from "next/image";
import upworLogo from "./../../assets/images/icons/upwork-tile.svg";
import skrillLogo from "./../../assets/images/icons/skrill.svg";
import payonLogo from "./../../assets/images/icons/payoneer-icon.svg";
import transLogo from "./../../assets/images/icons/transferwise-icon.svg";
import paypalLogo from "./../../assets/images/icons/paypal-icon.svg";
import stripLogo from "./../../assets/images/icons/stripe-icon.svg";
import logo from "./../../assets/images/logo/big-logo.svg";
import Link from "next/link";

const imageHeiWid = {
  height: 50,
  width: 50,
};

const Footer = () => {
  // its currently annimated to scroole are set this in
  // const topRef = useRef(null);

  function ScrollToTop() {
    // topRef.current.scrollIntoView({ behavior: "smooth" });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <footer className="footer footer-light">
        <div className="footer-primary">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-3 footer-widget footer-widget-about">
                <div className="footer-widget__content">
                  <Image src={logo} alt="logo" height={180} />
                  <p className="mt-3">Privacy, Terms & Conditions</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 footer-widget footer-widget-nav">
                <h6 className="footer-widget__title">Company</h6>
                <div className="footer-widget__content">
                  <nav>
                    <ul className="list-unstyled">
                      <li className="nav__item">
                        <Link href="about-us.html" className="nav__item-link">
                          About Us
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="choose" className="nav__item-link">
                          Why Choose Us
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/leadershipe" className="nav__item-link">
                          Leadership Team
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/awards" className="nav__item-link">
                          Award & Recognition
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="faqs.html" className="nav__item-link">
                          Help & FAQs
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="/careers" className="nav__item-link">
                          Careers
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 footer-widget footer-widget-nav">
                <h6 className="footer-widget__title">Services</h6>
                <div className="footer-widget__content">
                  <nav>
                    <ul className="list-unstyled">
                      <li className="nav__item">
                        <Link
                          href="web_service_details.html"
                          className="nav__item-link"
                        >
                          Web Development
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="graphic_service_details.html"
                          className="nav__item-link"
                        >
                          Graphics Design
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="content_service_details.html"
                          className="nav__item-link"
                        >
                          Content Writing
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="seo_service_details.html"
                          className="nav__item-link"
                        >
                          SEO & Digital Marketing
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="app_service_details.html"
                          className="nav__item-link"
                        >
                          App Development
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 footer-widget footer-widget-nav">
                <h6 className="footer-widget__title">Payment Methods</h6>
                <div className="footer-widget__content">
                  <nav>
                    <ul className="list-unstyled">
                      <div className="row mb-10">
                        <div className="col-md-4">
                          <li className="nav__item">
                            <Image {...imageHeiWid} src={paypalLogo} alt="" />
                          </li>
                        </div>
                        <div className="col-md-4">
                          <li className="nav__item">
                            <Image {...imageHeiWid} src={payonLogo} alt="" />
                          </li>
                        </div>
                        <div className="col-md-4">
                          <li className="nav__item">
                            <Image {...imageHeiWid} src={transLogo} alt="" />
                          </li>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <li className="nav__item">
                            <Image {...imageHeiWid} src={upworLogo} alt="" />
                          </li>
                        </div>
                        <div className="col-md-4">
                          <li className="nav__item">
                            <Image {...imageHeiWid} src={skrillLogo} alt="" />
                          </li>
                        </div>
                        <div className="col-md-4">
                          <li className="nav__item">
                            <Image {...imageHeiWid} src={stripLogo} alt="" />
                          </li>
                        </div>
                      </div>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 footer-widget">
                <h6 className="footer-widget__title text-center">
                  <Link href="/contact">Contact Us</Link>
                </h6>
                <div className="footer-widget__content">
                  <div className="row">
                    <div className="col-md-3">
                      <h6 className="mb-0"> HEAD OFFICE </h6>
                      <p className="m_b_1">Al-jaami Techologies.</p>
                      <p className="m_b_1">Blackburn Road, Houghton Regis, Dunstable LU5 5BQ</p>
                      <p>
                        <svg
                          height={20}
                          style={{ marginRight: "10px" }}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                            fill="#d7b680"
                          />
                        </svg>
                        <a href="tel:+07517 149 156">07517 149 156</a>
                      </p>
                      {/* <p>Blackburn Road, Houghton Regis, Dunstable LU5 5BQ</p>
                      <li className="list_none">
                        <Link href="#">
                          <svg
                            height={20}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                              fill="#d7b680"
                            />
                          </svg>
                          <i className="fab fa-whatsapp"></i> &nbsp; 07517 149
                          156
                        </Link>
                      </li> */}
                      <li className="list_none" style={{ marginTop: "-15px" }}>
                        <Link href="#">
                          {/* <i className="fab fa-telegram-plane"></i> */}
                          <svg
                            height={20}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                          >
                            <path
                              d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
                              fill="#d7b680"
                            />
                          </svg>
                          &nbsp; business@aljaami.com
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-3">
                      <h6 className="mb-0"> DEVELOPMENT OFFICE </h6>
                      <p className="m_b_1">
                        1 No Sonar Bangla Road, Piyaratoa, Kushtia, Khulna,
                        Bangladesh-7000
                      </p>
                      <li className="list_none">
                        <Link href="#">
                          <svg
                            height={20}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                              fill="#d7b680"
                            />
                          </svg>
                          {/* <i className="fab fa-whatsapp"></i> */}
                          &nbsp; +880 1712 112 443
                        </Link>
                      </li>
                      <li className="list_none">
                        <Link href="#">
                          {/* <i className="fab fa-telegram-plane"></i> */}
                          <svg
                            height={20}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                          >
                            <path
                              d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
                              fill="#d7b680"
                            />
                          </svg>{" "}
                          &nbsp; business@aljaami.net
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-3">
                      <h6 className=" mb-0"> DEVELOPMENT OFFICE </h6>
                      <p className="m_b_1">14-Km, Pusroor Road, Sialkot</p>
                      <li className="list_none">
                        <Link href="#">
                          <svg
                            height={20}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                              fill="#d7b680"
                            />
                          </svg>
                          <i className="fab fa-whatsapp"></i> &nbsp; +92 333
                          6610047
                        </Link>
                      </li>
                      <li className="list_none">
                        <Link href="#">
                          {/* <i className="fab fa-telegram-plane"></i> */}
                          <svg
                            height={20}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                          >
                            <path
                              d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
                              fill="#d7b680"
                            />
                          </svg>{" "}
                          &nbsp; business@aljaami.pk
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-3">
                      <h6 className="mb-0"> DEVELOPMENT OFFICE </h6>
                      <p className="m_b_1">
                        G-108, Sector 63 Rd, G Block, Sector 63, Noida, Uttar
                        Pradesh 201301, India
                      </p>
                      <li className="list_none">
                        <Link href="#">
                          <svg
                            height={20}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                              fill="#d7b680"
                            />
                          </svg>
                          &nbsp; +91 120 423 3116
                        </Link>
                      </li>
                      <li className="list_none">
                        <Link href="#">
                          {/* <i className="fab fa-telegram-plane"></i> */}
                          <svg
                            height={20}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                          >
                            <path
                              d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
                              fill="#d7b680"
                            />
                          </svg>
                          &nbsp; business@aljaami.in
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-secondary">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-5 col-lg-5">
                <div className="footer__copyrights">
                  <span className="fz-14">
                    Copyright &copy; 2022 WebPixal. All Rights Reserved.
                  </span>
                </div>
              </div>
              <div className="col-sm-12 col-md-2 col-lg-2 text-center">
                <button
                  onClick={ScrollToTop}
                  id="scrollTopBtn"
                  className="my-2"
                >
                  <i className="icon-arrow-up-2"></i>
                </button>
              </div>
              <div className="col-sm-12 col-md-5 col-lg-5 d-flex flex-wrap justify-content-end align-items-center">
                <ul className="social-icons list-unstyled mb-0 mr-30">
                  <li>
                    <Link href="#">
                      <svg
                        height={18}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                          fill="#0e2b3d"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <svg
                        height={18}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                          fill="#0e2b3d"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <svg
                        height={18}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          fill="#0e2b3d"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
                <div>
                  <Link href="#" className="btn btn__white btn__download mr-20">
                    <svg
                      height={15}
                      style={{ marginRight: "10px", marginTop: "-5px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                        fill="#0e2b3d"
                      />
                    </svg>
                    <span>App Store</span>
                  </Link>
                  <Link href="#" className="btn btn__white btn__download">
                    <svg
                      height={15}
                      style={{ marginRight: "10px", marginTop: "-5px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                        fill="#0e2b3d"
                      />
                    </svg>
                    <span>Google Play</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
