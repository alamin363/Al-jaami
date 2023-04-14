import Link from "next/link";
import NavHero from "../header/NavHero";

const HeroSection = () => {
  return (
    <section
      className="page-title page-title-layout4 text-center bg-overlay bg-overlay-gradient bg-parallax award_backgroun_color bg-color-blend-mode"
    >
      {/* <div className="bg-img"><img src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849826_960_720.jpg" alt="background" /></div> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-3">
            <h1 className="pagetitle__heading mb-10">Awards</h1>
            <p className="pagetitle__desc">
              Trusted by the world&#39;s best organizations, for 15 years and
              running, it has been delivering smiles to hundreds of IT advisors,
              developers, users, and business owners.
            </p>
            <NavHero />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
