import Link from "next/link";
import aboutImg from "../../assets/images/about/1.jpg";
import Image from "next/image";
import AnimatedSlider from "../AnimationSlider";
const About = () => {
  return (
    <div>
      <section className="about-layout4 pt-130 pb-0">
        <div className="container">
          <div className="row heading">
            <div className="col-12">
              <div className="d-flex align-items-center mb-20">
                <div className="divider divider-primary mr-30" />
                <h2 className="heading__subtitle mb-0">
                  Timely Service Delivery & Incident Resolutions!
                </h2>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <h3 className="heading__title mb-40">
                Manages service delivery across various business like, HR, Legal
                and other IT departments!!
              </h3>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
            <p>Al jaami's unique approach to technology management and advisory solutions has helped enterprises worldwide manage their IT. With the help of our skilled professionals, give appropriate access and view permissions to requests, issues, revisions, contracts, assets, solutions, and reports.</p>
            <p>Our job as one of the world's leading IT service providers is to assist you in keeping your IT business secure while ensuring high availability.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="about__img">
                <Image src={aboutImg} alt="about" height={300} width={500} />
              </div>
            </div>
            {/* /.col-lg-6 */}
            <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-between">
              <ul className="list-items list-items-layout2 list-horizontal list-unstyled d-flex flex-wrap mt-40">
                <li>Eliminate Repeat Entry</li>
                <li>Simplify Communicationrms </li>
                <li>Drive Business Process </li>
                <li>Speed Up Transactions</li>
                <li>Structure Data & Docs</li>
              </ul>
              <div className="clients">
                <p className="text__link text-center">Trusted By The World's</p>
                <Link href="/it-solutions.html" class="btn btn__link btn__primary btn__underlined">Best Organizations</Link>
                <AnimatedSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
