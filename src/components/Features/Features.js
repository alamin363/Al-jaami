import Link from "next/link";
import banner from "../../assets/images/banners/3.jpg";

const Features = () => {
  return (
    <section className="features-layout1 pb-0">
      <div className="features-bg" style={{ backgroundColor: "#063946" }}>
        <div className="bg-img">
          {/* <img src="" alt="background" /> */}
        </div>
      </div>
      <div className="container">
        <div className="row heading heading-light mb-30">
          <div className="col-sm-12 col-md-12 col-lg-5">
            <div className="divider divider-primary mb-20"></div>
            <h3 className="heading__title">
              Provides consultative approach on emerging technology.{" "}
            </h3>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1">
            <div className="row">
              <div className="col-sm-6">
                <p className="heading__desc">
                  In today&#39;s highly competitive business world, software
                  development is essential. Al jaami technology s main strategy
                  is to be committed. We are committed to our professional
                  tactics and skills to make things bright for you. As we mean
                  your success.
                </p>
                <a
                  href="request-quote.html"
                  className="btn btn__primary btn__primary-style2 btn__icon mt-30 mb-30"
                >
                  <span>Request Demo</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
              <div className="col-sm-6">
                <p className="heading__desc">
                  SmartData been helping organizations and Providers through the
                  World to manage their IT with our unique approach to
                  technology management and consultancy solutions.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Feature item #1 */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="feature-item text-center">
              <div className="feature__icon">
                <i className="icon-software" />
              </div>
              <h4 className="feature__title">Software Asset</h4>
              <p className="feature__desc">
                All aspects of your software assets including purchasing,
                deployment & maintenance.
              </p>
              <Link href="/" className="btn__link">
                <i className="icon-arrow-right icon-outlined"></i>
              </Link>
            </div>
          </div>
          {/* Feature item #2 */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="feature-item text-center">
              <div className="feature__icon">
                <i className="icon-dos"> </i>
              </div>
              <h4 className="feature__title">Privileged Access</h4>
              <p className="feature__desc">
                Extend proven Tech best practices to HR, finance, and other
                service delivery areas.
              </p>
              <Link href="/" className="btn__link">
                <i className="icon-arrow-right icon-outlined"> </i>
              </Link>
            </div>
          </div>
          {/* Feature item #3 */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="feature-item text-center">
              <div className="feature__icon">
                <i className="icon-operating-system"></i>
              </div>
              <h4 className="feature__title">Software License</h4>
              <p className="feature__desc">
                Build dynamic request templates with associated workflows, and
                tasks.
              </p>
              <Link href="/" className="btn__link">
                <i className="icon-arrow-right icon-outlined"></i>
              </Link>
            </div>
          </div>
          {/* Feature item #4 */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="feature-item text-center">
              <div className="feature__icon">
                <i className="icon-machine-learning" />
              </div>
              <h4 className="feature__title">Enterprise Service</h4>
              <p className="feature__desc">
                Our technology allows you to offer the latest software to your
                possible customers!
              </p>
              <Link href="/" className="btn__link">
                <i className="icon-arrow-right icon-outlined"> </i>
              </Link>
            </div>
          </div>
        </div>
        {/* /.row */}
        <div className="row mt-40">
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-between">
            <div className="row row-no-gutter read-note">
              <div className="col-sm-4">
                <div className="rating mb-10">
                  <i className="fas fa-star color-primary" />
                  <i className="fas fa-star color-primary" />
                  <i className="fas fa-star color-primary" />
                  <i className="fas fa-star color-primary" />
                  <i className="fas fa-star color-primary" />
                </div>
              </div>
              <div className="col-sm-8">
                <p className="read-note__text color-white">
                  <span className="font-weight-bold text-underlined">
                    99.9% Customer Satisfaction
                  </span>
                  based on 750+ reviews and 20,000 Objective Resource
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <p className="mb-30 font-weight-bold sub__desc">
                  As one of the world&#39;s largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </p>
                <Link
                  href="/request-quote"
                  className="btn btn__primary btn__bordered btn__icon mb-30"
                >
                  <span>Request Demo</span>
                  <i className="icon-arrow-right"></i>
                </Link>
              </div>
              <div className="col-sm-6">
                <ul className="list-items list-unstyled mb-30">
                  <li>450,000 client’s interactions </li>
                  <li>Help challenge critical activities</li>
                  <li>Simplify &amp; Automate Workflows</li>
                  <li>Peer perspectives and advice</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <img
              src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849821__340.jpg"
              alt="banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
