import React from "react";
import Slider from "react-slick";
import Two from "../../../../assets/images/portfolio/grid/1.jpg";
import Image from "next/image";

export default function PortfolioSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="portfolio-item">
          <div className="portfolio__img">
            <Image
              style={{ height: "100%", width: "100%" }}
              src={Two}
              alt="portfolio img"
            />
          </div>
          <div className="portfolio__content">
            <div className="portfolio__cat">
              <a href="#">Building</a>
              <a href="#">Interior</a>
            </div>
            <h4 className="portfolio__title">
              <a href="#">Financial’s Need For Strategic Advisor</a>
            </h4>
            <p className="portfolio__desc">
              We delivered solutions at every step, and moved seamlessly into a
              more proactive role as a strategic advisor, providing support and
              guidance across all IT topics.
            </p>
            <a
              href="blog-single-post.html"
              className="btn btn__secondary btn__link"
            >
              <span>Read More</span>
              <i className="icon-arrow-right" />
            </a>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio__img">
            <Image
              style={{ height: "100%", width: "100%" }}
              src={Two}
              alt="portfolio img"
            />
          </div>
          <div className="portfolio__content">
            <div className="portfolio__cat">
              <a href="#">Software</a>
              <a href="#">Support</a>
            </div>
            <h4 className="portfolio__title">
              <a href="#">24x7 System Monitoring and Alert Response</a>
            </h4>
            <p className="portfolio__desc">
              This single, unified platform integrates all operational phases of
              selling and activation of their wireless services and devices, and
              serves as the backbone of the operations.
            </p>
            <a
              href="blog-single-post.html"
              className="btn btn__secondary btn__link"
            >
              <span>Read More</span>
              <i className="icon-arrow-right" />
            </a>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio__img">
            <Image
              style={{ height: "100%", width: "100%" }}
              src={Two}
              alt="portfolio img"
            />
          </div>
          <div className="portfolio__content">
            <div className="portfolio__cat">
              <a href="#">Management</a>
              <a href="#">Cloud</a>
            </div>
            <h4 className="portfolio__title">
              <a href="#">Nonprofit Organization Utilized Security</a>
            </h4>
            <p className="portfolio__desc">
              Servers going down on a weekly basis had become the organization’s
              “normal.” We came on board with the objective of stabilizing the
              environment, assisting{" "}
            </p>
            <a
              href="blog-single-post.html"
              className="btn btn__secondary btn__link"
            >
              <span>Read More</span>
              <i className="icon-arrow-right" />
            </a>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio__img">
            <Image
              style={{ height: "100%", width: "100%" }}
              src={Two}
              alt="portfolio img"
            />
          </div>
          <div className="portfolio__content">
            <div className="portfolio__cat">
              <a href="#">Digital</a>
              <a href="#">HR</a>
            </div>
            <h4 className="portfolio__title">
              <a href="#">Powerful IT Upgrade Aligns With Your Objectives</a>
            </h4>
            <p className="portfolio__desc">
              They needed a robust management solution to organize archive
              critical documents for client cases, and wanted to determine
              solutions at every step, and moved{" "}
            </p>
            <a
              href="blog-single-post.html"
              className="btn btn__secondary btn__link"
            >
              <span>Read More</span>
              <i className="icon-arrow-right" />
            </a>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio__img">
            <Image
              style={{ height: "100%", width: "100%" }}
              src={Two}
              alt="portfolio img"
            />
          </div>
          <div className="portfolio__content">
            <div className="portfolio__cat">
              <a href="#">Digital</a>
              <a href="#">HR</a>
            </div>
            <h4 className="portfolio__title">
              <a href="#">Powerful IT Upgrade Aligns With Your Objectives</a>
            </h4>
            <p className="portfolio__desc">
              They needed a robust management solution to organize archive
              critical documents for client cases, and wanted to determine
              solutions at every step, and moved{" "}
            </p>
            <a
              href="blog-single-post.html"
              className="btn btn__secondary btn__link"
            >
              <span>Read More</span>
              <i className="icon-arrow-right" />
            </a>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio__img">
            <Image
              style={{ height: "100%", width: "100%" }}
              src={Two}
              alt="portfolio img"
            />
          </div>
          <div className="portfolio__content">
            <div className="portfolio__cat">
              <a href="#">Digital</a>
              <a href="#">HR</a>
            </div>
            <h4 className="portfolio__title">
              <a href="#">Powerful IT Upgrade Aligns With Your Objectives</a>
            </h4>
            <p className="portfolio__desc">
              They needed a robust management solution to organize archive
              critical documents for client cases, and wanted to determine
              solutions at every step, and moved{" "}
            </p>
            <a
              href="blog-single-post.html"
              className="btn btn__secondary btn__link"
            >
              <span>Read More</span>
              <i className="icon-arrow-right" />
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
}
