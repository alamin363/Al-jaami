const Overview = ({ OverviewRef }) => {
  return (
    <section
      ref={OverviewRef}
      id="about"
      className="about-layout2 animated-Progressbars"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div className="heading mb-40">
              <div className="d-flex align-items-center mb-20">
                <div className="divider divider-primary mr-30"></div>
                <h2 className="heading__subtitle mb-0">
                  Timely Service Delivery &amp; Incident Resolutions!!
                </h2>
              </div>
              <h3 className="heading__title mb-40">
                Manages service delivery across various business like, HR, Legal
                and other IT departments!!
              </h3>
            </div>
          </div>
          {/* <!-- /.col-xl-5 --> */}
        </div>
        {/* <!-- /.row --> */}
        <div className="row about__Text">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div className="offset-xl-2 position-relative">
              <i className="icon-quote"></i>
              <p>
                SmartData has been helping organizations throughout the World to
                manage their IT with our unique approach to technology
                management and consultancy solutions. Provide users with
                appropriate view and access permissions to requests, problems,
                changes, contracts, assets, solutions, and reports{" "}
              </p>
              <p>
                You need information security services to proactively prevent
                and protect confidential data, as well as detect internal and
                external threats. Protect your business by choosing managed
                security service provider. Our security services can help ensure
                your business Trusted by the world&#39;s best organizations.
              </p>
              <p>
                for 15 years and running, it has been delivering smiles to
                hundreds of IT advisors, developers, users, and business owners.
                Easy solutions for all difficult IT problems to ensure high
                availability.
              </p>
              <p>
                Provide users with appropriate view and access permissions to
                requests, problems, changes, contracts, assets, solutions, and
                reports with our experienced professionals.{" "}
              </p>
              <h5 className="text-dark mt-20">N. Ahamed</h5>
            </div>
            <div className="about__img mt-80 mb-30">
              <img
                src="http://7oroof.com/demos/smartdata/assets/images/about/7.jpg"
                alt="about"
              />
            </div>
            {/* <!-- /.about__img--> */}
          </div>
          {/* <!-- /.col-xl-6 --> */}
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 offset-xl-1">
            <p className="mb-40">
              As one of the world&#39;s largest ITService Providers, our deep
              pool of certified engineers and IT staff are ready to help you to
              keep your IT business safe & ensure high availability.
            </p>
            {/* <!-- progress 1 --> */}
            <div className="progress-item">
              <h5 className="progress__title">Cyber Security</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  role="progressbar"
                >
                  <span className="progress__percentage"></span>
                </div>
              </div>
              {/* <!-- /.progress --> */}
            </div>
            {/* <!-- /.progress-item  --> */}
            {/* <!-- progress 2 --> */}
            <div className="progress-item">
              <h5 className="progress__title">Cloud Computing</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  aria-valuenow="87"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  role="progressbar"
                >
                  <span className="progress__percentage"></span>
                </div>
              </div>
              {/* <!-- /.progress --> */}
            </div>
            {/* <!-- /.progress-item  --> */}
            {/* <!-- progress 3 --> */}
            <div className="progress-item">
              <h5 className="progress__title">Cloud Computing</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  aria-valuenow="81"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  role="progressbar"
                >
                  <span className="progress__percentage"></span>
                </div>
              </div>
              {/* <!-- /.progress --> */}
            </div>
            {/* <!-- /.progress-item  --> */}
            <div className="about__img mt-90">
              <img
                src="http://7oroof.com/demos/smartdata/assets/images/about/3.jpg"
                alt="about"
              />
            </div>
          </div>
          {/* <!-- /.col-xl-5 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};

export default Overview;
