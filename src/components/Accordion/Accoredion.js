import Link from "next/link";
import React, { useState } from "react";

const Accordion = ({ value }) => {
  const [values, setValues] = useState({
    webDevelopment: value.webDeveloper || false,
    graphics: value.graphicDesign || false,
    contentWriting: value.contentWriting || false,
  });
  return (
    <div className="accordion" id="accordionExample">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
            <button
              className="custom_btn btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              onClick={() =>
                setValues({
                  webDevelopment: !values.webDevelopment,
                  graphics: false,
                  contentWriting: false,
                })
              }
              name="Web Development"
            >
              Web Development
            </button>
          </h2>
        </div>

        <div
          id="collapseOne"
          className={`${
            values.webDevelopment ? "collapse show active" : "collapse"
          } `}
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ul>
              <li>
                <Link href="/">Web Design</Link>
              </li>
              <li className="nav__item">
                <a href="blog-single-post.html" className="nav__item-link">
                  Web Application
                </a>
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <a href="case-studies-grid.html" className="nav__item-link">
                  Mobile App Development
                </a>
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <a href="case-studies-carousel.html" className="nav__item-link">
                  Ecommerce Development
                </a>
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <a href="case-studies-classic.html" className="nav__item-link">
                  CMS Development
                </a>
              </li>
              {/* <!-- /.nav-item --> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h2 className="mb-0">
            <button
              className="custom_btn  btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              onClick={() =>
                setValues({
                  webDevelopment: false,
                  graphics: !values.graphics,
                  contentWriting: false,
                })
              }
              name="Graphics Design"
            >
              Graphics Design
            </button>
          </h2>
        </div>
        <div
          id="collapseTwo"
          className={`${values.graphics ? "collapse show" : "collapse"}`}
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ul>
              <li className="nav__item">
                <a href="blog.html" className="nav__item-link">
                  Brand Design
                </a>
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <a href="blog-single-post.html" className="nav__item-link">
                  Logo Design
                </a>
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <a href="case-studies-grid.html" className="nav__item-link">
                  UIUX Design
                </a>
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <a href="case-studies-carousel.html" className="nav__item-link">
                  Social Media Design
                </a>
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <a href="case-studies-classic.html" className="nav__item-link">
                  Packaging Design
                </a>
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <a href="case-studies-single.html" className="nav__item-link">
                  Cover Design
                </a>
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <a href="case-studies-single.html" className="nav__item-link">
                  Video Production
                </a>
              </li>
              {/* <!-- /.nav-item --> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h2 className="mb-0">
            <button
              className={`${
                values.contentWriting
                  ? "custom_btn btn-block text-left"
                  : "custom_btn  btn-block text-left collapsed"
              }`}
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              onClick={() =>
                setValues({
                  webDevelopment: false,
                  graphics: false,
                  contentWriting: !values.contentWriting,
                })
              }
              name="Content Writing"
            >
              Content Writing
            </button>
          </h2>
        </div>
        <div
          id="collapseThree"
          className={`${values.contentWriting ? "collapse show" : "collapse"}`}
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ul>
              <li className="nav__item">
                <a href="blog.html" className="nav__item-link">
                  E-books
                </a>
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <a href="blog-single-post.html" className="nav__item-link">
                  Artical Marketing
                </a>
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <a href="case-studies-grid.html" className="nav__item-link">
                  Blog Content
                </a>
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <a href="case-studies-carousel.html" className="nav__item-link">
                  Business Webpage
                </a>
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <a href="case-studies-classic.html" className="nav__item-link">
                  Marketing Collateral
                </a>
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <a href="case-studies-single.html" className="nav__item-link">
                  Email Marketing Campagins
                </a>
              </li>
              {/* <!-- /.nav-item --> */}
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="headingfour">
          <h2 className="mb-0">
            <button
              className="custom_btn  btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapsefour"
              aria-expanded="false"
              aria-controls="collapsefour"
            >
              SEO & Digital Marketing
            </button>
          </h2>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="headingfour">
          <h2 className="mb-0">
            <button
              className="custom_btn  btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapsefour"
              aria-expanded="false"
              aria-controls="collapsefour"
            >
              App Development
            </button>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
