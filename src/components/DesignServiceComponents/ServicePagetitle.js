import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ServicePagetitle() {
  return (
    <section
      className="page-title page-title-layout9 bg-overlay bg-overlay-gradient bg-parallax services-webdesign-mage"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <h1 className="pagetitle__heading">Web Development</h1>
            <p className="pagetitle__desc">
              Looking for Web Development services to help elevate your business? Look no
              further than Business Savvy UK! Our experienced team offers
              various services to enable enterprises to build a strong brand,
              create a professional image, and engage with customers. In
              addition, our team of experienced designers creates custom designs
              that fit each business&apos;s unique needs.
            </p>
            <div className="d-flex align-items-center flex-wrap">
              <Link href="/contact" className="btn btn__white mr-30">
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
}
