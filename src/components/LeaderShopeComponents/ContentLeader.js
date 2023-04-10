import Image from "next/image";
import OurLeader1 from "../../assets/images/contentImg/1.jpg";
import OurLeader2 from "../../assets/images/contentImg/2.jpg";
import OurLeader3 from "../../assets/images/contentImg/3.jpg";
import OurLeader4 from "../../assets/images/contentImg/4.jpg";
import OurLeader5 from "../../assets/images/contentImg/5.jpg";
import OurLeader6 from "../../assets/images/contentImg/6.jpg";
import OurLeader7 from "../../assets/images/contentImg/7.jpg";

import HoverComponent from "./HoverComponent/HoverComponent";
const ContentLeader = () => {
  return (
    <section className="team-layout1 text-center pb-40">
      <div className="container">
        <div className="row">
          {/* <!-- Member #1 --> */}
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="member">
              <div className="member__img">
                <Image
                  src={OurLeader1}
                  width={370}
                  height={450}
                  alt="member img"
                />

                <HoverComponent />

                {/* <!-- /.member-hover --> */}
              </div>
              {/* <!-- /.member-img --> */}
              <div className="member__info">
                <h5 className="member__name">Mike Dooley</h5>
                <p className="member__desc">Chief Executive</p>
              </div>
              {/* <!-- /.member-info --> */}
            </div>
            {/* <!-- /.member --> */}
          </div>
          {/* <!-- /.col-lg-4 --> */}
          {/* <!-- Member #2 --> */}
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="member">
              <div className="member__img">
                <Image
                  src={OurLeader2}
                  width={370}
                  height={450}
                  alt="member img"
                />
                <HoverComponent />
                {/* <!-- /.member-hover --> */}
              </div>
              {/* <!-- /.member-img --> */}
              <div className="member__info">
                <h5 className="member__name">Michael Brian</h5>
                <p className="member__desc">Managing Director</p>
              </div>
              {/* <!-- /.member-info --> */}
            </div>
            {/* <!-- /.member --> */}
          </div>
          {/* <!-- /.col-lg-4 --> */}
          {/* <!-- Member #3 --> */}
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="member">
              <div className="member__img">
                <Image
                  src={OurLeader3}
                  width={370}
                  height={450}
                  alt="member img"
                />
                <HoverComponent />
                {/* <!-- /.member-hover --> */}
              </div>
              {/* <!-- /.member-img --> */}
              <div className="member__info">
                <h5 className="member__name">Chris Wensel</h5>
                <p className="member__desc">Vice President</p>
              </div>
              {/* <!-- /.member-info --> */}
            </div>
            {/* <!-- /.member --> */}
          </div>
          {/* <!-- /.col-lg-4 --> */}
        </div>
        {/* <!-- /.row --> */}
        <div className="row">
          {/* <!-- Member #1 --> */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="member">
              <div className="member__img">
                <Image
                  src={OurLeader4}
                  width={370}
                  height={450}
                  alt="member img"
                />
                <HoverComponent />
                {/* <!-- /.member-hover --> */}
              </div>
              {/* <!-- /.member-img --> */}
              <div className="member__info">
                <h5 className="member__name">Richard Muldoone</h5>
                <p className="member__desc">Legal Officer</p>
              </div>
              {/* <!-- /.member-info --> */}
            </div>
            {/* <!-- /.member --> */}
          </div>
          {/* <!-- /.col-lg-3 --> */}
          {/* <!-- Member #2 --> */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="member">
              <div className="member__img">
                <Image
                  src={OurLeader5}
                  width={370}
                  height={450}
                  alt="member img"
                />
                <HoverComponent />
                {/* <!-- /.member-hover --> */}
              </div>
              {/* <!-- /.member-img --> */}
              <div className="member__info">
                <h5 className="member__name">Maria Andaloro</h5>
                <p className="member__desc">HR Officer</p>
              </div>
              {/* <!-- /.member-info --> */}
            </div>
            {/* <!-- /.member --> */}
          </div>
          {/* <!-- /.col-lg-3 --> */}
          {/* <!-- Member #3 --> */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="member">
              <div className="member__img">
                <Image
                  src={OurLeader6}
                  width={370}
                  height={450}
                  alt="member img"
                />
                <HoverComponent />
                {/* <!-- /.member-hover --> */}
              </div>
              {/* <!-- /.member-img --> */}
              <div className="member__info">
                <h5 className="member__name">Marian Chris</h5>
                <p className="member__desc">Global Sales</p>
              </div>
              {/* <!-- /.member-info --> */}
            </div>
            {/* <!-- /.member --> */}
          </div>
          {/* <!-- /.col-lg-3 --> */}
          {/* <!-- Member #4 --> */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="member">
              <div className="member__img">
                <Image
                  src={OurLeader7}
                  width={370}
                  height={450}
                  alt="member img"
                />
                <HoverComponent />
                {/* <!-- /.member-hover --> */}
              </div>
              {/* <!-- /.member-img --> */}
              <div className="member__info">
                <h5 className="member__name">Jack Mudson</h5>
                <p className="member__desc">Manager</p>
              </div>
              {/* <!-- /.member-info --> */}
            </div>
            {/* <!-- /.member --> */}
          </div>
          {/* <!-- /.col-lg-3 --> */}
        </div>
      </div>
    </section>
  );
};

export default ContentLeader;
