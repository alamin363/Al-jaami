import React from "react";

const EmployeesTraining = () => {
  return (
    <section className="commonSection what_wedo_2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">what we do</h4>
            <h2 className="sec_title">Let’s create something</h2>
            <p className="sec_desc text-dark">
              We are committed to providing our customers with exceptional
              service while
              <br /> offering our employees the best training.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-12 mb-2 mb-lg-none col-md-4">
            <div className="single_wedo">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854__340.png"
                alt=""
              />
              <div className="overlay_wedo">
                <a href="#">web development</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mb-2 mb-lg-none col-md-4">
            <div className="single_wedo">
              <img
                src="https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341__340.jpg"
                alt=""
              />
              <div className="overlay_wedo">
                <a href="#">digital marketing</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-4">
            <div className="single_wedo">
              <img
                src="https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090__340.jpg"
                alt=""
              />
              <div className="overlay_wedo">
                <a href="#">product branding</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeesTraining;
