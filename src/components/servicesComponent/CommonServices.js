import Image from "next/image";
import { useState } from "react";
import Accordion from "../Accordion/Accoredion";

const CommonServices = ({ value }) => {
  return (
    <section className="service">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {/* <!-- <img className="h-img" src="https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500__480.jpg" alt=""> --> */}
            <div className="row">
              <div className="col-lg-6 col-md-12 pr-lg-0">
                <div className="icon_box_2 text-center">
                  <div className="flipper">
                    <div className="front">
                      <h3>Web Design</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec culis leo sus cipit.
                      </p>
                    </div>
                    <div className="back">
                      <img
                        style={{ height: "219px", width: "100%" }}
                        src="https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500__480.jpg"
                        alt=""
                      />
                      {/* <Image
                        priority
                        src="https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500__480.jpg"
                        width={100} height={100}
                      /> */}
                      <div className="centered">
                        <h3>Web Design</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 pl-lg-0">
                <div className="icon_box_2 text-center">
                  <div className="flipper">
                    <div className="front">
                      <h3>Web Application</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec culis leo sus cipit.
                      </p>
                    </div>
                    <div className="back">
                      <img
                        src="https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                      />

                      {/* <Image
                        priority
                        src="https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        layout="fill"
                        objectFit="contain"
                      /> */}
                      <div className="centered">
                        <h3>Web Application</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 pr-lg-0">
                <div className="icon_box_2 text-center">
                  <div className="flipper">
                    <div className="front">
                      <h3>Mobbile App Development</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec culis leo sus cipit.
                      </p>
                    </div>
                    <div className="back ">
                      <img
                        src="https://images.pexels.com/photos/3584969/pexels-photo-3584969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                      />
                      {/* <Image
                        priority
                        src="https://images.pexels.com/photos/3584969/pexels-photo-3584969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        layout="fill"
                        objectFit="contain"
                      /> */}
                      <div className="centered">
                        <h3>Mobbile App Development</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 pl-lg-0">
                <div className="icon_box_2 text-center">
                  <div className="flipper">
                    <div className="front">
                      <h3>Ecommerce Development</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec culis leo sus cipit.
                      </p>
                    </div>
                    <div className="back ">
                      <img
                        src="https://images.pexels.com/photos/4078343/pexels-photo-4078343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                      />

                      {/* <Image
                        priority
                        src="https://images.pexels.com/photos/4078343/pexels-photo-4078343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        layout="fill"
                        objectFit="contain"
                      /> */}

                      <div className="centered">
                        <h3>Ecommerce Development</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-12 col-lg-6">
                <div className="icon_box_2 text-center">
                  <div className="flipper">
                    <div className="front">
                      <h3>CMS Development</h3>
                      <p>
                        Phaseus sit amet tristique lorem ipsum is simply free
                        text ligua donec culis leo sus cipit.
                      </p>
                    </div>
                    <div className="back ">
                      <img
                        src="https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                      />
                      {/* <Image
                        priority
                        src="https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&w=600"
                        layout="fill"
                        objectFit="contain"
                      /> */}
                      <div className="centered">
                        <h3>CMS Development</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
            <h2 className="mt-3"> WEB DEVELOPMENT</h2>
            <p style={{ fontSize: "17px" }}>
              We provide practical marketing tools that generate a high return
              on investment. We are devoted to offering affordable,
              custom-designed packages that meet our customers expectations.
            </p>

            <p style={{ fontSize: "17px" }}>
              Our site designers and programmers are very creative and have
              years of expertise. They are strategic thinkers who are willing to
              work additional shifts.
            </p>

            <p style={{ fontSize: "17px" }}>
              We think that to have a successful internet business, you must
              have an ideal combination of these three criteria. We seek to
              assist our clients in achieving the highest potential degree of
              online success by using our extensive knowledge in critical web
              design success areas. Our site designers and programmers are
              highly skilled and highly creative. They are strategic thinkers
              with a strong work ethic who are loyal to their clients and
              dependable, enabling us to keep our satisfaction guarantee policy
              and be proud of our good track record.
            </p>
            <br />
            <br />
            <div className="row">
              <div className="col-md-6 image ">
                <img
                  src="https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804_960_720.jpg"
                  alt=""
                />
                {/* <Image
                  priority
                  src="https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804_960_720.jpg"
                  layout="fill"
                  objectFit="contain"
                /> */}
              </div>
              <div className="col-md-6">
                <h3>PLANNING & STRATEGY</h3>
                <p style={{ fontSize: "17px" }} className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <br />
                <ul>
                  <li>
                    <i className="fa fa-check-square"></i>Research beyond the
                    business plan
                  </li>
                  <li>
                    <i className="fa fa-check-square"></i>Marketing options and
                    rates
                  </li>
                  <li>
                    <i className="fa fa-check-square"></i>The ability to
                    turnaround consulting
                  </li>
                  <li>
                    <i className="fa fa-check-square"></i>Help companies into
                    more profitable
                  </li>
                  <li>
                    <i className="fa fa-check-square"></i>Customer engagement
                    matters
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <br />
            <p style={{ fontSize: "17px" }}>
              Need something changed or is there something not quite working the
              way you envisaged? Is your van a little old and tired and need
              refreshing? Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="col-md-4">
            <Accordion value={value} />
            <aside className="mt-4 categories">
              <div className="meipaly_services_help">
                <h4>need Al-jaami help?</h4>
                <p>
                  Prefer speaking with a human to filling out a form? call
                  corporate office and we will connect you with a team member
                  who can help.
                </p>
                <h2>666 888 000</h2>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonServices;
