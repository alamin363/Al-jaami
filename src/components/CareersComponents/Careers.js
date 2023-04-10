
const Careers = () => {
  return (
    <section className="careers">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
          <div className="heading text-center mb-50">
            <h2 className="heading__subtitle color-body">We Prepare For The Future.</h2>
            <h3 className="heading__title">Inspire And Get Inspired By Professional Experts</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {/* <!-- career item #1 --> */}
          <div className="job-item">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="job-item__meta">
                  <span className="job-item__type">Full Time</span>
                  <span className="job-item__location">New York</span>
                </div>
                <h4 className="job-item__title">Chief Executive Officer</h4>
              </div>
              
              <div className="col-sm-12 col-md-12 col-lg-5">
                <p className="job-item__desc">A chief executive officer (CEO) is the highest-ranking executive in a
                  company, and their primary responsibilities include making major corporate decisions.</p>
              </div>
              {/* <!-- /.col-lg-5 --> */}
              <div className="col-sm-12 col-md-12 col-lg-3 d-flex align-items-center justify-content-end btn-wrap">
                <a href="#" className="btn btn__secondary btn__icon">
                  <span>Apply Now</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- career item #2 --> */}
          <div className="job-item">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="job-item__meta">
                  <span className="job-item__type">Full Time</span>
                  <span className="job-item__location">San Francisco</span>
                </div>
                <h4 className="job-item__title">Chief Financial Officer</h4>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-5">
                <p className="job-item__desc">A chief executive officer (CEO) is the highest-ranking executive in a
                  company, and their primary responsibilities include making major corporate decisions.</p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-3 d-flex align-items-center justify-content-end btn-wrap">
                <a href="#" className="btn btn__secondary btn__icon">
                  <span>Apply Now</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="job-item">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="job-item__meta">
                  <span className="job-item__type">Full Time</span>
                  <span className="job-item__location">New York</span>
                </div>
                <h4 className="job-item__title">Global Sales & Marketing</h4>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-5">
                <p className="job-item__desc">A chief executive officer (CEO) is the highest-ranking executive in a
                  company, and their primary responsibilities include making major corporate decisions.</p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-3 d-flex align-items-center justify-content-end btn-wrap">
                <a href="#" className="btn btn__secondary btn__icon">
                  <span>Apply Now</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- /.container --> */}
  </section>
  )
}

export default Careers