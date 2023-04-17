import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


const ServicePagetitle = () => {
  return (
    <section
      className="page-title page-title-layout9 bg-overlay bg-overlay-gradient bg-parallax itservices-title-bg"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <h1 className="pagetitle__heading">Selling Platforms</h1>
            <p className="pagetitle__desc">
              Our Selling Platforms service helps businesses optimize their
              product listings by creating awareness and marketing on popular
              platforms such as Amazon, eBay, OnBuy, social media, and
              e-campaigners.
            </p>
            <div className="d-flex align-items-center flex-wrap">
              <Link href="contactus" className="btn btn__white mr-30">
                Contact Us
              </Link>
              <a
                className="video__btn video__btn-rounded video__btn-white popup-video"
                href="https://www.youtube.com/watch?v=nrJtHemSPW4"
              >
                <div className="video__player">
                <FontAwesomeIcon icon={faPlay} />
                </div>
                <span className="video__btn-title color-white">Our Video!</span>
              </a>
            </div>
          </div>
          {/* /.col-xl-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
};

export default ServicePagetitle;
