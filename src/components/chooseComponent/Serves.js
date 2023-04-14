import Image from "next/image";
import service1 from "../../assets/images/services/2.jpg";
import service2 from "../../assets/images/services/4.jpg";
const Serves = () => {
  return (
    <section id="about" className="about-layout3 pt-130 pb-40">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div className="heading mb-30">
              <div className="d-flex align-items-center mb-20">
                <div className="divider divider-primary mr-30"></div>
                <h2 className="heading__subtitle mb-0">
                  Timely Service Delivery &amp; Incident Resolutions!!{" "}
                </h2>
              </div>
              <h3 className="heading__title mb-40">
                Manages service delivery across various business like, HR, Legal
                and other IT departments!!
              </h3>
            </div>
          </div>
        </div>
        <div className="row about__Text">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 offset-xl-1">
            <i className="icon-quote"></i>
            <p>
              In today&#39;s highly competitive business world, software development
              is essential. Al jaami technologies ‘s main strategy is to being
              commited. We are commited for our professional tactics and skills
              to make things bright for you. As we mean your success
            </p>
            <h5 className="text-dark mb-20">N. Ahamed</h5>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 offset-xl-1">
            <p>
              As one of the world&#39;s largest ITService Providers, our deep pool
              of certified engineers and IT staff are ready to help you to keep
              your IT business safe & ensure high availability.
            </p>
            <ul className="list-items list-items-layout2 list-horizontal list-unstyled d-flex flex-wrap mt-40">
              <li>Eliminate Repeat Entry</li>
              <li>Simpliy Communication</li>
              <li>Drive Business Process</li>
              <li>Speed Up Transactions</li>
              <li>Structure Data & Docs</li>
              <li>Automate Workflows</li>
            </ul>
          </div>
        </div>
        <div className="row align-items-center mt-60">
          <div className="col-sm-12 col-md-12 col-lg-7">
            <div className="about__img about__img-1">
              <Image src={service1} width={500} height={500} alt="about" />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5">
            <div className="about__img" style={{ marginTop: "10px" }}>
              <Image src={service2} width={500} height={500} alt="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Serves;
