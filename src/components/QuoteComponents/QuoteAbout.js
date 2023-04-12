import React from "react";

const QuoteAbout = () => {
  return (
    <section className="about-layout1">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="heading mb-30">
              <div className="d-flex align-items-center mb-20">
                <div className="divider divider-primary mr-30"></div>
                <h2 className="heading__subtitle mb-0">
                  Timely Service Delivery & Incident Resolutions!!{" "}
                </h2>
              </div>
              <h3 className="heading__title mb-40">
                Manages service delivery across various business like, HR, Legal
                and other IT departments!!
              </h3>
            </div>
            {/* <!-- /heading --> */}
            <div className="position-relative offset-xl-1">
              <i className="icon-quote"></i>
              <p className="mb-30">
                SmartData has been helping organizations throughout the World to
                manage their IT with our unique approach to technology
                management and consultancy solutions with appropriate view and
                permissions to requests, problems, changes, contracts, assets..
              </p>
              <p className="mb-30">
                You need information security services to proactively prevent
                and protect confidential data, as well as detect internal and
                external threats. Protect your business by choosing managed
                security service provider. Our security services can help ensure
                your business Trusted by the world's best organizations.
              </p>
              <p className="mb-30">
                for 15 years and running, it has been delivering smiles to
                hundreds of IT advisors, developers, users, and business owners.
                Easy solutions for all difficult IT problems to ensure high
                availability.
              </p>
              <p className="mb-30">
                Provide users with appropriate view and access permissions to
                requests, problems, changes, contracts, assets, solutions, and
                reports with our experienced professionals.{" "}
              </p>
              <ul className="list-items list-items-layout2 list-unstyled d-flex flex-wrap list-horizontal mb-50">
                <li>Eliminate Repeat Entry</li>
                <li>Simplify Communication</li>
                <li>Drive Business Process</li>
                <li>Speed Up Transactions</li>
                <li>Structure Data & Docs</li>
                <li>Automate Workflows</li>
              </ul>
              <h5 className="text-dark mb-20">N. Ahamed</h5>
            </div>
          </div>
          {/* <!-- /.col-lg-6 --> */}
          <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
            <div className="about__img mb-40">
              <img
                src="https://images.pexels.com/photos/3747115/pexels-photo-3747115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="about"
              />
              <blockquote className="blockquote d-flex align-items-end mb-0">
                <div className="blockquote__avatar">
                  <img
                    src="http://7oroof.com/demos/smartdata/assets/images/blog/author/1.jpg"
                    alt="thumb"
                  />
                </div>
                <div className="blockquote__content">
                  <h4 className="blockquote__title mb-0">
                    As one of the world's largest ITService Providers with over
                    120 engineers and IT support staff are ready to help.
                  </h4>
                </div>
                {/* <!-- /.blockquote__content --> */}
              </blockquote>
              {/* <!-- /.blockquote --> */}
            </div>
            {/* <!-- /.about-img --> */}
          </div>
          {/* <!-- /.col-lg-6 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};

export default QuoteAbout;
