import Link from "next/link";
import { useState } from "react";

const ContactFrom = () => {
  const [userData, setUserData] = useState({});

  const handelChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  // send user data
  const handelFrom = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <section className="contact-layout1 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-7 mb-3">
            <form
              className="contact-form"
              id="contactForm"
              onSubmit={handelFrom}
            >
              <div className="row">
                <div className="col-sm-12">
                  <h4 className="contact-panel__title">Get In Touch</h4>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group">
                    <input
                      onChange={handelChange}
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      id="contact-name"
                      name="contact-name"
                      required
                    />
                  </div>
                </div>
                {/* <!-- /.col-lg-6 --> */}
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group">
                    <input
                      onChange={handelChange}
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      id="contact-email"
                      name="contact-email"
                      required
                    />
                  </div>
                </div>
                {/* <!-- /.col-lg-6 --> */}
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group">
                    <input
                      onChange={handelChange}
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                      id="contact-Phone"
                      name="contact-phone"
                      required
                    />
                  </div>
                </div>
                {/* <!-- /.col-lg-6 --> */}
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group">
                    <input
                      onChange={handelChange}
                      type="text"
                      className="form-control"
                      placeholder="Website"
                      id="contact-website"
                      name="contact-website"
                    />
                  </div>
                </div>
                {/* <!-- /.col-lg-6 --> */}
                <div className="col-12">
                  <div className="form-group mb-20">
                    <textarea
                      onChange={handelChange}
                      className="form-control"
                      placeholder="Additional Details!"
                      id="contact-message"
                      name="contact-message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn__primary btn__xhight mt-10"
                  >
                    Submit Request
                  </button>
                  <div className="contact-result"></div>
                </div>
                {/* <!-- /.col-12 --> */}
              </div>
              {/* <!-- /.row --> */}
            </form>
          </div>
          {/* <!-- /.col-lg-6 --> */}
          <div className="col-sm-12 col-md-12 col-lg-4 offset-lg-1 mb-3">
            <div
              className="contact-info d-flex flex-column justify-content-between"
              style={{ backgroundColor: " #063946" }}
            >
              {/* <div className="bg-img"><img src="" alt="banner" /></div> */}
              <div>
                <h4 className="contact-info__title">
                  450,000 client’s interactions!
                </h4>
                <p className="contact-info__desc">
                  Provide users with appropriate view access to requests,
                  problems, changes, contracts & solutions with experienced
                  professionals.
                </p>
                <p className="contact-info__desc">
                  As one of the world&#39;s largest ITService Providers, we are
                  ready to help.
                </p>
              </div>
              <Link
                href=""
                target="_blank"
                className="btn btn__white btn__bordered btn__icon"
              >
                <span>Download Brochure</span>
                <i className="icon-arrow-right"></i>
              </Link>
            </div>
            {/* <!-- /.contact-info --> */}
          </div>
          {/* <!-- /.col-lg-4 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};

export default ContactFrom;
