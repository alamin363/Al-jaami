import React from "react";
import AnimatedSlider from "../AnimationSlider/AnimatedSlider";
import Link from "next/link";

const OurTrustedClients = () => {
  return (
    <section className="clients pt-50 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="text__link text-center mb-30">
              Trusted By The World&#39;s
              <Link
                href="/itsolutions"
                className="btn btn__link btn__primary btn__underlined"
                style={{ margin: "0 5px" }}
              >
                Best Organizations
              </Link>
            </p>
          </div>
          {/* <!-- /.col-12 --> */}
        </div>
        {/* <!-- /.row --> */}
        <div className="row align-items-center">
          <div className="col-12">
            <AnimatedSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTrustedClients;
