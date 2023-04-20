import React from "react";
import PortfolioSlider from "./Slider/PortfolioSlider";
export default function CommonPortfolioGridSection({StudiesRef}) {
  return (
    <section ref={StudiesRef} className="portfolio-grid portfolio-grid-carousel pb-40">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="heading mb-50">
              <div className="d-flex align-items-center">
                <div className="divider divider-primary mr-30" />
                <h2 className="heading__subtitle mb-0">OnBuy</h2>
              </div>
              <h3 className="heading__title mb-0">Latest Case Studies</h3>
            </div>
          </div>
          {/* /.col-lg-6 */}
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-12 test">
            <PortfolioSlider />
            {/* /.carousel */}
          </div>
          {/* /.col-12 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
