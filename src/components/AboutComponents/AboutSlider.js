import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Computer from "../../assets/images/history/computer-1869306__340.jpg";
import laptop from "../../assets/images/history/laptop-6062423__340.jpg";
import laptop_614213 from "../../assets/images/history/laptop-614213__340.jpg";
import plant from "../../assets/images/history/plant-4208112__340.jpg";
import telework from "../../assets/images/history/telework-6795505__340.jpg";
const AboutSlider = () => {
  const settings = {
    // dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="timeline-carousel-wrapper mb-70">
            <div class="slick-carousel carousel-arrows-light">
              <Slider {...settings}>
                <div class="carousel-block">
                  <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-6">
                      <div class="timeline-item row align-items-end">
                        <div class="timeline__img col-sm-6">
                          <Image
                            height={100}
                            width={100}
                            src={telework}
                            alt="timeline"
                          />
                        </div>
                        <div class="timeline__content col-sm-6">
                          <p class="timeline__desc">
                            Our support works around the clock to ensure your
                            work is secure and monitored safely access to over
                            99 IT professionals working to help you
                          </p>
                          <h4 class="timeline__year mb-0">2005</h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6">
                      <div class="timeline-item row align-items-end">
                        <div class="timeline__img col-sm-6">
                          <Image
                            height={100}
                            width={100}
                            src={Computer}
                            alt="timeline"
                          />
                        </div>
                        <div class="timeline__content col-sm-6">
                          <p class="timeline__desc">
                            Providing consulting expertise on a specific
                            technology, strategizing on IT, providing a security
                            assessment, or managing IT infrastructure.
                          </p>
                          <h4 class="timeline__year mb-0">2010</h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6">
                      <div class="timeline-item row">
                        <div class="timeline__content col-sm-6">
                          <h4 class="timeline__year">2015</h4>
                          <p class="timeline__desc">
                            We partner with you to enable your technology so you
                            mfocus on your organization’s mission leverage our
                            talent, and creativity.
                          </p>
                        </div>
                        <div class="timeline__img col-sm-6">
                          <Image
                            height={100}
                            width={100}
                            src={laptop_614213}
                            alt="timeline"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6">
                      <div class="timeline-item row">
                        <div class="timeline__content col-sm-6">
                          <h4 class="timeline__year">2020</h4>
                          <p class="timeline__desc">
                            Our people are held to the highest level
                            accountability to ensure you are always satisfied
                            with your results and commitment
                          </p>
                        </div>
                        <div class="timeline__img col-sm-6">
                          <Image
                            height={100}
                            width={100}
                            src={plant}
                            alt="timeline"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* slider ----2  */}
                <div class="carousel-block">
                  <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-6">
                      <div class="timeline-item row">
                        <div class="timeline__content col-sm-6">
                          <h4 class="timeline__year">2015</h4>
                          <p class="timeline__desc">
                            We partner with you to enable your technology so you
                            mfocus on your organization’s mission leverage our
                            talent, and creativity.
                          </p>
                        </div>
                        <div class="timeline__img col-sm-6">
                          <Image
                            height={100}
                            width={100}
                            src={Computer}
                            alt="timeline"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6">
                      <div class="timeline-item row">
                        <div class="timeline__content col-sm-6">
                          <h4 class="timeline__year">2020</h4>
                          <p class="timeline__desc">
                            Our people are held to the highest level
                            accountability to ensure you are always satisfied
                            with your results and commitment
                          </p>
                        </div>
                        <div class="timeline__img col-sm-6">
                          <Image
                            height={100}
                            width={100}
                            src={laptop_614213}
                            alt="timeline"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6">
                      <div class="timeline-item row align-items-end">
                        <div class="timeline__img col-sm-6">
                          <Image
                            height={100}
                            width={100}
                            src={plant}
                            alt="timeline"
                          />
                        </div>
                        <div class="timeline__content col-sm-6">
                          <p class="timeline__desc">
                            Our support works around the clock to ensure your
                            work is secure and monitored safely access to over
                            99 IT professionals working to help you
                          </p>
                          <h4 class="timeline__year mb-0">2005</h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6">
                      <div class="timeline-item row align-items-end">
                        <div class="timeline__img col-sm-6">
                          <Image
                            height={100}
                            width={100}
                            src={laptop}
                            alt="timeline"
                          />
                        </div>
                        <div class="timeline__content col-sm-6">
                          <p class="timeline__desc">
                            Providing consulting expertise on a specific
                            technology, strategizing on IT, providing a security
                            assessment, or managing IT infrastructure.
                          </p>
                          <h4 class="timeline__year mb-0">2010</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSlider;
