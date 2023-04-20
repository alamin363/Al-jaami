import Image from "next/image";
import BrochureImg from "../../../assets/images/Brochure/web-design.svg";
import { WebDevelopmentSlide } from "./WebDevelopmentSlider";

const WebDevelopmentMainSection = () => {
  return (
    <section className="services-layout1 bg-gray pt-130 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-50">
              <h2 className="heading__subtitle">Business Savvy UK</h2>
              <h3 className="heading__title">
                Web Development Service Single Category items. Selected your
                affordable Service.
              </h3>
            </div>
            {/* /.heading */}
          </div>
          {/* /.col-lg-8 */}
        </div>
        <>
          <WebDevelopmentSlide />
        </>
        <div className="row mt-60">
          <div className="col-sm-12 col-md-4 col-lg-8 align-self-center">
            {/* /.col-lg-4 */}
            <Image
              style={{ width: "70%", height: "100%" }}
              src={BrochureImg}
              alt="imagess"
              className="BrochureImg"
            />
            {/* /.service-item */}
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 align-self-center">
            <div className="service-item service-item-custom bg-img-page-title-service ">
              <div>
                <h4 className="service__title">
                  450,000 client’s interactions!
                </h4>
                <p className="service__desc mb-30">
                  Provide users with appropriate view access to requests,
                  problems, changes, contracts &amp; solutions with experienced
                  professionals.
                </p>
                <p className="service__desc mb-30">
                  As one of the world&rsquo;s largest ITService Providers, we
                  are ready to help.
                </p>
              </div>
              <a
                href="https://aljaami.co.uk/assets/Broucher.pdf"
                className="btn btn__white btn__bordered btn__icon btn__xl"
              >
                <span>Download Brochure</span>
                <i className="icon-arrow-right" />
              </a>
            </div>
            {/* /.service-item */}
          </div>
          {/* /.col-lg-4 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
};

export default WebDevelopmentMainSection;
