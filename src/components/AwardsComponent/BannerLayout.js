import React from 'react'

const BannerLayout = () => {
  return (
    <section className="banner-layout5 pt-130 pb-0 bg-la bg-layout-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 d-flex flex-column justify-content-between pb-80">
            <div className="heading heading-light mb-50">
              <div className="divider divider-white"></div>
              <h3 className="heading__title mb-30">Easy solutions for all difficult IT problems, keep business safe &
                ensure high availability.
              </h3>
            </div>
            {/* <!-- /.heading --> */}
            <div className="row">
              <div className="col-sm-6">
                <div className="contact-info">
                  <div className="contact__icon"><i className="icon-map-marker"></i></div>
                  <ul className="contact__list list-unstyled">
                    <li>2307 Beverley Rd Brooklyn, New York 11226 United States.</li>
                  </ul>
                </div>
                {/* <!-- /.contact-item--> */}
              </div>
              {/* <!-- /.col-sm-6 --> */}
              <div className="col-sm-6">
                <div className="contact-item">
                  <div className="contact__icon"><i className="icon-mail"></i></div>
                  <ul className="contact__list list-unstyled">
                    <li><a href="mailto:SmartData@7oroof.com">Email: SmartData@7oroof.com</a></li>
                    <li><a href="tel:5565454117">Phone: +55 654 541 17</a></li>
                  </ul>
                </div>
                {/* <!-- /.contact-item--> */}
              </div>
              {/* <!-- /.col-sm-6 --> */}
              <div className="col-sm-6"></div>
              {/* <!-- /.col-sm-6 --> */}
            </div>
            {/* <!-- /.row--> */}
          </div>
          {/* <!-- /.col-xl-6 --> */}
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-1">
            <div className="banner__content" style={{backgroundColor: "#063946"}}>

              {/* <div className="bg-img">
              <img src="" alt="background" />
              </div> */}

              <div className="quote__icon"><i className="icon-quote"></i></div>
              <div className="row heading heading-light">
                <div className="col-sm-6">
                  <h3 className="heading__title mb-30">450,000 client’s interactions!</h3>
                </div>
                {/* <!-- /.col-sm-6 --> */}
                <div className="col-sm-6">
                  <p className="heading__desc mb-20">Provide users with appropriate view access to requests, problems,
                    changes, contracts & solutions with experienced professionals.</p>
                  <p className="heading__desc mb-20">As one of the world&#39;s largest ITService Providers, we are ready to
                    help.
                  </p>
                  <a href="" target="_blank" className="btn btn__white btn__bordered btn__xl btn__icon">
                    <span>Download Brochure</span>
                    <i className="icon-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="row counters-wrapper counters-light mt-70">
                
                <div className="col-sm-4">
                  <div className="counter-item">
                    <h4 className="counter">6,154</h4>
                    <p className="counter__desc">Projects And Software Developed in 2021</p>
                  </div>
                </div>
                
                <div className="col-sm-4">
                  <div className="counter-item">
                    <h4 className="counter">2,512</h4>
                    <p className="counter__desc">Qualified Employees And Developers With Us</p>
                  </div>
                </div>
                
                <div className="col-sm-4">
                  <div className="counter-item">
                    <h4 className="counter">1,784</h4>
                    <p className="counter__desc">Satisfied Clients We Have Served Globally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerLayout