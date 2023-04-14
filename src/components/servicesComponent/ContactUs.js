import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <section className="commonSection ready">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-sm-8 col-md-9">
            <h2 className="sec_title text-white">
              Let`s Get Your Project Started!
            </h2>
          </div>
          <div className="col-lg-3  col-sm-4 col-md-3 text-right">
            <Link className="common_btn" href="/contact">
              <span>Contact with us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
