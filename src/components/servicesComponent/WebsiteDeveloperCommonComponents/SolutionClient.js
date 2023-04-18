import AnimatedSlider from "@/components/AnimationSlider/AnimatedSlider";
import Link from "next/link";
import React from "react";

export default function SolutionClient() {
  return (
    <section className="clients pt-50 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="text__link text-center mb-30">
              Trusted By The World&rsquo;s
              <Link
                href="/itsolutions"
                className="btn btn__link btn__primary btn__underlined"
              >
                Best Organizations
              </Link>
            </p>
          </div>
          {/* /.col-12 */}
        </div>
        {/* /.row */}
        <div className="row align-items-center">
          <div className="col-12">
            <AnimatedSlider />
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
