const ContactForm = ({ setOpenContactFrom }) => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-12 mb-3 p-10 mt-10">
      <form className="contact-form" method="post" id="contactForm">
        <div className="row">
          <div className="col-sm-12">
            <h4 className="contact-panel__title">Get In Touch</h4>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                id="contact-name"
                name="contact-name"
                required=""
              />
            </div>
          </div>
          {/* /.col-lg-6 */}
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="contact-email"
                name="contact-email"
                required=""
              />
            </div>
          </div>
          {/* /.col-lg-6 */}
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Phone"
                id="contact-Phone"
                name="contact-phone"
                required=""
              />
            </div>
          </div>
          {/* /.col-lg-6 */}
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Website"
                id="contact-website"
                name="contact-website"
              />
            </div>
          </div>
          {/* /.col-lg-6 */}
          <div className="col-12">
            <div className="form-group mb-20">
              <textarea
                className="form-control"
                placeholder="Additional Details!"
                id="contact-message"
                name="contact-message"
                defaultValue={""}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                type="submit"
                className="btn btn__primary btn__xhight mt-10"
              >
                Submit Request
              </button>
              <button
                className="btn btn-secondary ml-5 mt-2"
                onClick={() => setOpenContactFrom(false)}
              >
                &times;
              </button>
            </div>
            <div className="contact-result" />
          </div>
          {/* /.col-12 */}
        </div>
        {/* /.row */}
      </form>
    </div>
  );
};

export default ContactForm;
