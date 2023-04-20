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
                      <li className="list_none" style={{marginTop:"-15px"}}>
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
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                </ul>
                <div>
                  <Link href="#" className="btn btn__white btn__download mr-20">
                    <i className="fab fa-apple"></i>
                    <span>App Store</span>
                  </Link>
                  <Link href="#" className="btn btn__white btn__download">
                    <i className="fab fa-google-play"></i>
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
