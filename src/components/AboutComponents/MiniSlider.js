import Image from "next/image";
import Slider from "react-slick";
import slide1 from "../../assets/images/awards/icons/1.png";
import slide2 from "../../assets/images/awards/icons/2.png";
import slide3 from "../../assets/images/awards/icons/3.png";
import slide4 from "../../assets/images/awards/icons/4.png";
const MiniSlider = () => {
  var settings = {
    
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
  };

  return (
    // <div className="row awards-wrapper">
    //   <div className="col-sm-12">
    //     <div className="awards-carousel-wrapper">
    //       <div className="slick-carousel">
            
            <Slider {...settings}>
              <div style={{height:"400px"}} className="mini-fancybox fancybox-item">
                <div className="fancybox__icon-img">
                  <Image width="auto" height="auto" src={slide1} alt="icon" />
                </div>
                <div className="fancybox__content">
                  <h4 className="fancybox__title">CSS Design Award</h4>
                  <p className="fancybox__desc">
                    A web design & development award platform for digital folk,
                    UI/UX peeps and inspiring leaders of the web.
                  </p>
                </div>
              </div>
              {/* slide --2 */}
              <div className="fancybox-item">
                <span className="pinned-ribbon"></span>
                <div className="fancybox__icon-img">
                  <Image width="auto" height="auto" src={slide2} alt="icon" />
                </div>
                <div className="fancybox__content">
                  <h4 className="fancybox__title">W3 Design Award</h4>
                  <p className="fancybox__desc">
                    Awards celebrates digital by honoring outstanding Websites,
                    Web Marketing, Video, Sites, Apps & Social content.
                  </p>
                </div>
              </div>
              {/* slide ---3 */}
              <div className="fancybox-item">
                <div className="fancybox__icon-img">
                  <Image width="auto" height="auto" src={slide3} alt="icon" />
                </div>
                <div className="fancybox__content">
                  <h4 className="fancybox__title">The FWA Award</h4>
                  <p className="fancybox__desc">
                    Showcasing innovation every day since 2000, our mission is
                    to showcase cutting edge creativity, regardless
                  </p>
                </div>
              </div>
              {/* slide --4 */}
              <div className="fancybox-item">
                <div className="fancybox__icon-img">
                  <Image width="auto" height="auto" src={slide4} alt="icon" />
                </div>
                <div className="fancybox__content">
                  <h4 className="fancybox__title">WWW Awards</h4>
                  <p className="fancybox__desc">
                    The awards that recognize the talent and effort of the best
                    web designers, developers and agencies in the world.
                  </p>
                </div>
              </div>
            </Slider>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MiniSlider;
