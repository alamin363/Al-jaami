import Image from "next/image";
import bannerimg5 from "../../assets/images/banners/5.jpg";
import Link from "next/link";
import { useRouter } from "next/router";
const Business = ({ WorksRef }) => {
  const path = useRouter();
  return (
    <section
      ref={WorksRef}
      className="banner-layout3 pb-70"
      style={{ backgroundColor: "#063946" }}
    >
      {/* <div className="bg-img"><img src="" alt="background" /></div> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 fancybox-light">
            <div className="heading heading-light mb-60">
              <h3 className="heading__title mb-30">
                Keep business safe & ensure high availability.
              </h3>
              <p className="heading__desc">
                As one of the world&#39;s largest ITService Providers, our deep
                pool of certified engineers and IT staff are ready to help you
                to keep your IT business safe & ensure high availability.
              </p>
            </div>
            <div
              className="fancybox-item d-flex flex-wrap mb-lg-5"
              style={{ marginBottom: "20px" }}
            >
              <div className="fancybox__icon">
                <i className="icon-coding"></i>
              </div>
              <div className="fancybox__content">
                <h4 className="fancybox__title">Knowledge Base</h4>
                <p className="fancybox__desc">
                  Software assets including purchasing, deployment &
                  maintenance. Manage all aspects of your software assets
                  including purchasing, deployment, maintenance, utilization,
                  and disposal.
                </p>
                <Link href="#" className="btn btn__white btn__link">
                  <span>Read More</span>
                  <i className="icon-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div
              className="fancybox-item d-flex flex-wrap mb-lg-5"
              style={{ marginBottom: "20px" }}
            >
              <div className="fancybox__icon">
                <i className="icon-programming2"></i>
              </div>
              <div className="fancybox__content">
                <h4 className="fancybox__title">Custom Requests</h4>
                <p className="fancybox__desc">
                  Build and publish dynamic request templates with associated
                  workflows, all aspects of your software assets including
                  purchasing, deployment, maintenance, utilization, and
                  disposal.
                </p>
                <Link href="#" className="btn btn__white btn__link">
                  <span>Read More</span>
                  <i className="icon-arrow-right"></i>
                </Link>
              </div>
            </div>
            {/* <!-- fancybox item #3 --> */}
            <div
              className="fancybox-item d-flex flex-wrap mb-lg-5"
              style={{ marginBottom: "20px" }}
            >
              <div className="fancybox__icon">
                <i className="icon-script"></i>
              </div>
              <div className="fancybox__content">
                <h4 className="fancybox__title">License Management</h4>
                <p className="fancybox__desc">
                  Build and publish dynamic request templates with associated
                  workflows, all aspects of your software assets including
                  purchasing, deployment, maintenance, utilization, and
                  disposal.
                </p>
                <Link href="#" className="btn btn__white btn__link">
                  <span>Read More</span>
                  <i className="icon-arrow-right"></i>
                </Link>
              </div>
            </div>
            {/* <!-- /.fancybox-item --> */}
          </div>
          {/* <!-- /.col-xl-5 --> */}
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
            <div className="sticky-top">
              <div className="banner-img">
                {path.asPath === "/itsolutionssingle" ? (
                  <Image
                    src="https://cdn.pixabay.com/photo/2014/12/30/11/55/office-583841__340.jpg"
                    width={510}
                    height={340}
                    alt="banner"
                  />
                ) : (
                  <Image
                    src={bannerimg5}
                    width={670}
                    height={450}
                    alt="banner"
                  />
                )}
              </div>
              <div className="d-flex flex-wrap justify-content-end read-note mt-40">
                <div className="rating mb-10 mr-50">
                  <i className="fas fa-star color-primary"></i>
                  <i className="fas fa-star color-primary"></i>
                  <i className="fas fa-star color-primary"></i>
                  <i className="fas fa-star color-primary"></i>
                  <i className="fas fa-star color-primary"></i>
                </div>
                <p className="read-note__text color-white">
                  <span className="font-weight-bold text-underlined">
                    99.9% Customer Satisfaction
                  </span>
                  based on 750+ reviews and 20,000 Objective Resource
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};

export default Business;
