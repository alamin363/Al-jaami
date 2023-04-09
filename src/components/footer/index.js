import React from 'react';
import Image from 'next/image'
import upworLogo from './../../assets/images/icons/upwork-tile.svg';
import skrillLogo from './../../assets/images/icons/skrill.svg';
import payonLogo from './../../assets/images/icons/payoneer-icon.svg';
import transLogo from './../../assets/images/icons/transferwise-icon.svg';
import paypalLogo from './../../assets/images/icons/paypal-icon.svg';
import stripLogo from './../../assets/images/icons/stripe-icon.svg';
import logo from './../../assets/images/logo/big-logo.svg';

const imageHeiWid = {
  height: 50,
  width: 50
}

const Footer = () => {
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
                      <a href="about-us.html" className="nav__item-link">About Us</a>
                    </li>
                    <li className="nav__item">
                      <a href="why-us.html" className="nav__item-link">Why Choose Us</a>
                    </li>
                    <li className="nav__item">
                      <a href="leadership-team.html" className="nav__item-link">Leadership Team</a>
                    </li>
                    <li className="nav__item">
                      <a href="awards.html" className="nav__item-link">Award & Recognition</a>
                    </li>
                    <li className="nav__item">
                      <a href="faqs.html" className="nav__item-link">Help & FAQs</a>
                    </li> 
                    <li className="nav__item">
                      <a href="careers.html" className="nav__item-link">Careers</a>
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
                      <a href="web_service_details.html" className="nav__item-link">Web Development</a>
                    </li>
                    <li className="nav__item">
                      <a href="graphic_service_details.html" className="nav__item-link">Graphics Design</a>
                    </li>
                    <li className="nav__item">
                      <a href="content_service_details.html" className="nav__item-link">Content Writing</a>
                    </li>
                    <li className="nav__item">
                      <a href="seo_service_details.html" className="nav__item-link">SEO & Digital Marketing</a>
                    </li>
                    <li className="nav__item">
                      <a href="app_service_details.html" className="nav__item-link">App Development</a>
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
              <h6 className="footer-widget__title text-center">Contact Us</h6>
              <div className="footer-widget__content">
                <div className="row">
                  <div className="col-md-3">
                    <h6 className="mb-0"> HEAD OFFICE </h6>
                    <p className="m_b_1">London Luton Airport
                      Aljaami techologies UK ltd </p>
                      <p>Signature Flight Support Terminal 2, Frank Lester Way LU2 9NQ</p>
                    <li className="list_none"><a href="#"><i className="fab fa-whatsapp"></i> &nbsp;  07772 053 605</a></li>
                    <li className="list_none"><a href="#"><i className="fab fa-telegram-plane"></i>  &nbsp;  
                      business@aljaami.co.uk</a></li>
                  </div>
                  <div className="col-md-3">
                    <h6 className="mb-0"> DEVELOPMENT OFFICE </h6>
                    <p className="m_b_1">1 No Sonar Bangla  Road, Piyaratoa,   Kushtia, Khulna, Bangladesh-7000</p>
                    <li className="list_none"><a href="#"><i className="fab fa-whatsapp"></i> &nbsp;   +880 1712 112 443</a></li>
                    <li className="list_none"><a href="#"><i className="fab fa-telegram-plane"></i>  &nbsp;  business@aljaami.net</a></li>
                  </div>
                  <div className="col-md-3">
                    <h6 className=" mb-0"> DEVELOPMENT OFFICE </h6>
                    <p className="m_b_1">14-Km, Pusroor Road, Sialkot</p>
                    <li className="list_none"><a href="#"><i className="fab fa-whatsapp"></i> &nbsp;   +92 333 6610047</a></li>
                    <li className="list_none"><a href="#"><i className="fab fa-telegram-plane"></i>  &nbsp;  business@aljaami.pk</a></li>
                  </div>
                  <div className="col-md-3">
                    <h6 className="mb-0"> DEVELOPMENT OFFICE </h6>
                    <p className="m_b_1">G-108, Sector 63 Rd, G Block, Sector 63, Noida, Uttar Pradesh 201301, India</p>
                    <li className="list_none"><a href="#"><i className="fab fa-whatsapp"></i> &nbsp;   +91 120 423 3116</a></li>
                    <li className="list_none"><a href="#"><i className="fab fa-telegram-plane"></i>  &nbsp;  business@aljaami.in</a></li>
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
                <span className="fz-14">Copyright &copy; 2022 WebPixal. All Rights Reserved.</span>
              </div>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-2 text-center">
              <button id="scrollTopBtn" className="my-2"><i className="icon-arrow-up-2"></i></button>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-5 d-flex flex-wrap justify-content-end align-items-center">
              <ul className="social-icons list-unstyled mb-0 mr-30">
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              </ul>
              <div>
                <a href="#" className="btn btn__white btn__download mr-20">
                  <i className="fab fa-apple"></i>
                  <span>App Store</span>
                </a>
                <a href="#" className="btn btn__white btn__download">
                  <i className="fab fa-google-play"></i>
                  <span>Google Play</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer