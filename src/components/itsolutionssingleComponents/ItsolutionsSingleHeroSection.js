import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const ItsolutionsSingleHeroSection = () => {
  return (
    <section
      className="page-title page-title-layout9 bg-overlay bg-overlay-gradient bg-parallax bg-image-itsolution-herosection"
      style={{
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(6, 57, 70, 0.8)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <h1 className="pagetitle__heading">Software Dev Services</h1>
            <p className="pagetitle__desc">
              With shorter product cycles, innovation, and mergers contributing
              to constant change, you are faced making business decisions every
              day.
            </p>
            <div className="d-flex align-items-center flex-wrap">
              <Link href="/quote" className="btn btn__white btn__icon mr-30">
                <span>Get Started</span>
                <i className="icon-arrow-right"></i>
              </Link>
            </div>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <FontAwesomeIcon
                  style={{
                    margin: "0 10",
                    fontSize: 20,
                    color: "white",
                  }}
                  icon={faAngleRight}
                />
                <li className="breadcrumb-item active" aria-current="page">
                  Software Dev
                </li>
              </ol>
            </nav>
          </div>
          {/* <!-- /.col-xl-6 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};

export default ItsolutionsSingleHeroSection;
