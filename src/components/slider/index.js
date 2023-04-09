import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import slider1 from "../../assets/images/sliders/student-849825__480.jpg";
import slider2 from "../../assets/images/sliders/student-849825__480.jpg";
import Link from "next/link";
const Sliders = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <div className="slick-carousel carousel-arrows-light carousel-dots-light m-slides-0">
        <Slider {...settings}>
          <div className="bg-slider-img">
            <div
              className="slide-item align-v-h bg-overlay bg-overlay-gradient"
              style={{
                backgroundBlendMode: "multiply",
                backgroundColor: "rgba(6, 57, 70, 0.8)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                    <div className="slide__content">
                      <h4 className="slide__title" style={{ fontSize: "56px" }}>
                        We can help your business In reducing labor costs
                        Increasing profit, and eclipsing your competitors.
                      </h4>
                      <p className="slide__desc">
                        Our sites are designed to each group's specific needs.
                        We can help your company with anything from landing
                        pages, style, photos, graphics, and media to branding,
                        marketing, analytics, and sales strategy. We can make it
                        happen.
                      </p>
                      <Link
                        href="/about_us"
                        className="btn btn__primary btn__icon mr-30"
                      >
                        <span>More About Us</span>
                        <i className="icon-arrow-right" />
                      </Link>
                      <Link href="projects_grid" className="btn btn__white">
                        Our Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* slide_2 */}
          <div className="bg-slider-img-2">
            <div
              className="slide-item align-v-h bg-overlay bg-overlay-gradient"
              style={{
                backgroundBlendMode: "multiply",
                backgroundColor: "rgba(6, 57, 70, 0.8)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                    <div className="slide__content">
                      <h2 className="slide__title">
                        We love dealing with companies who have innovative
                        ideas.
                      </h2>
                      <p className="slide__desc">
                        We are experienced professionals who understand that IT
                        services are changing, and are true partners who care
                        about your success. Our team provides a consultative
                        approach to emerging technology.
                      </p>
                      <Link
                        href="/"
                        className="btn btn__primary btn__icon mr-30"
                      >
                        <span>More About Us</span>
                        <i className="icon-arrow-right"> </i>
                      </Link>
                      <Link href="/project_grid" className="btn btn__white">
                        Our Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
