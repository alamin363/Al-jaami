import { faBriefcase, faBuilding, faBurger, faCar, faCity, faCouch, faEarthAsia, faGraduationCap, faGuitar, faHandHoldingDollar, faHome, faHotel, faLaptopCode, faPersonWalking, faPhotoFilm, faPills, faPizzaSlice, faPodcast, faTowerCell, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MultimediaService = () => {

  return (
    <section
      className="multimedia-service-section light-mode"
      style={{ backgroundColor: "#063946" }}
    >
      <div className="container">
        <div className="section-heading">
          <h2 className="text-white">Industries We Serve</h2>{" "}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="multimedia-service-list">
            <div className="single-list">
              <div className="service-icon fa-home">
                 <FontAwesomeIcon icon={faHome} />
              </div>
              <span className="title">Finance &amp; Banking</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
              <FontAwesomeIcon icon={faBuilding} />
          <i className="fa fa-facebook"></i>
              </div>
              <span className="title">E-commerce</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
              <FontAwesomeIcon icon={faTowerCell} />
              </div>
              <span className="title">Telco</span>
            </div>
            <div className="single-list">
              <div className="service-icon">

                <FontAwesomeIcon icon={faCity} />
              </div>
              <span className="title">Real Estate</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
              <FontAwesomeIcon icon={faLaptopCode} />
              </div>
              <span className="title">Software</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
              <FontAwesomeIcon icon={faPersonWalking} />
              </div>
              <span className="title">Health &amp; Fitness</span>
            </div>
            <div className="single-list">
              <div className="service-icon">

                <FontAwesomeIcon icon={faPizzaSlice} />
              </div>
              <span className="title">Food &amp; Drink</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
              <FontAwesomeIcon icon={faGuitar} />
              </div>
              <span className="title">Music</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
              <FontAwesomeIcon icon={faUserDoctor} />
              </div>
              <span className="title">Medical</span>
            </div>
            <div className="single-list">
              <div className="service-icon">

                <FontAwesomeIcon icon={faPills} />
              </div>
              <span className="title">Pharmaceutical</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
              <FontAwesomeIcon icon={faCar} />
              </div>
              <span className="title">Automotive</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
              <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <span className="title">Education</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
                
              <FontAwesomeIcon icon={faEarthAsia} />
              </div>
              <span className="title">Travel</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
              <FontAwesomeIcon icon={faBurger} />
              </div>
              <span className="title">Entertainment</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
              <FontAwesomeIcon icon={faHotel} />
              </div>
              <span className="title">Retail</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
              <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <span className="title">Business</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
              <FontAwesomeIcon icon={faPhotoFilm} />
              </div>
              <span className="title">Photo &amp; Video</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
              <FontAwesomeIcon icon={faHandHoldingDollar} />
              </div>
              <span className="title">Non-Profit</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
              <FontAwesomeIcon icon={faPodcast} />
              </div>
              <span className="title">Startup</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
              <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <span className="title">AR/VR</span>
            </div>
            <div className="single-list">
              <div className="service-icon">
              <FontAwesomeIcon icon={faCouch} />
              </div>
              <span className="title">Furniture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultimediaService;
