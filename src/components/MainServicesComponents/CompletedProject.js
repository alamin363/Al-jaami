import Link from "next/link";
import React from "react";

const CompletedProject = () => {
  return (
    <>
      <section className="commonSection funfact">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-3 noPadding BR">
              <div className="singlefunfact text-center">
                <h1 data-counter="8705" className="counter">
                  <span className="countSpan">8</span>705
                </h1>
                <h3>Projects Completed</h3>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3 noPadding BR">
              <div className="singlefunfact text-center">
                <h1 data-counter="480" className="counter">
                  <span className="countSpan"></span>480
                </h1>
                <h3>Active Clients</h3>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3 noPadding BR">
              <div className="singlefunfact text-center">
                <h1 data-counter="626" className="counter">
                  <span className="countSpan"></span>626
                </h1>
                <h3>Cups of Coffee</h3>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3 noPadding">
              <div className="singlefunfact text-center">
                <h1 data-counter="9774" className="counter">
                  <span className="countSpan">9</span>774
                </h1>
                <h3>Happy Clients</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // trasted clieded */}
      <section className="commonSection trustClient pb_120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="CL_content">
                <img
                  src="https://images.pexels.com/photos/4050468/pexels-photo-4050468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className="abc_inner">
                  <div className="row ">
                    <div className="col-lg-5 col-sm-5 col-md-5"></div>
                    <div className="col-lg-7 col-sm-12 col-md-7">
                      <div className="abci_content">
                        <h2>We are trusted by more than 8900 clients</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incidi-dunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercita-tion ullamco laboris nisi ut aliquip
                          ex ea commodo.
                        </p>
                        <Link className="common_btn red_bg" href="#">
                          <span className="text-white">Learn More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompletedProject;
