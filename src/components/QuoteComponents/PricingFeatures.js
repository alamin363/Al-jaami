import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const PricingFeatures = () => {
  return (
    <section id="faqs" className="faq pt-120 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-50">
              <h2 className="heading__subtitle">Our Pricing Features</h2>
              <h3 className="heading__title">Frequently asked questions</h3>
            </div>
            {/* <!-- /.heading --> */}
          </div>
          {/* <!-- /.col-lg-6 --> */}
        </div>
        {/* <!-- /.row --> */}
        <div className="row" id="accordion">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="accordion-item">
              <div
                className="accordion__header"
                data-toggle="collapse"
                data-target="#collapse1"
              >
                <Link className="accordion__title" href="#">
                  Which Plan Is Right For Me?
                  <FontAwesomeIcon
                    className="accordion__title_after"
                    icon={faPlus}
                  />
                </Link>
              </div>
              {/* <!-- /.accordion-item-header --> */}
              <div id="collapse1" className="collapse" data-parent="#accordion">
                <div className="accordion__body">
                  <p>
                    With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often
                  </p>
                </div>
                {/* <!-- /.accordion-item-body --> */}
              </div>
            </div>
            {/* <!-- /.accordion-item --> */}
            <div className="accordion-item">
              <div
                className="accordion__header"
                data-toggle="collapse"
                data-target="#collapse2"
              >
                <Link className="accordion__title" href="#">
                  Do I have to commit to a contract?
                  <FontAwesomeIcon
                    className="accordion__title_after"
                    icon={faPlus}
                  />
                </Link>
              </div>
              {/* <!-- /.accordion-item-header --> */}
              <div id="collapse2" className="collapse" data-parent="#accordion">
                <div className="accordion__body">
                  <p>
                    With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often
                  </p>
                </div>
                {/* <!-- /.accordion-item-body --> */}
              </div>
            </div>
            {/* <!-- /.accordion-item --> */}
            <div className="accordion-item opened">
              <div
                className="accordion__header"
                data-toggle="collapse"
                data-target="#collapse3"
              >
                <Link className="accordion__title" href="#">
                  What Payment Methods Are Available?
                  <FontAwesomeIcon
                    className="accordion__title_after"
                    icon={faPlus}
                  />
                </Link>
              </div>
              {/* <!-- /.accordion-item-header --> */}
              <div
                id="collapse3"
                className="collapse show"
                data-parent="#accordion"
              >
                <div className="accordion__body">
                  <p>
                    With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often
                  </p>
                </div>
                {/* <!-- /.accordion-item-body --> */}
              </div>
            </div>
            {/* <!-- /.accordion-item --> */}
            <div className="accordion-item">
              <div
                className="accordion__header"
                data-toggle="collapse"
                data-target="#collapse4"
              >
                <Link className="accordion__title" href="#">
                  What if I pick the wrong plan?
                  <FontAwesomeIcon
                    className="accordion__title_after"
                    icon={faPlus}
                  />
                </Link>
              </div>
              {/* <!-- /.accordion-item-header --> */}
              <div id="collapse4" className="collapse" data-parent="#accordion">
                <div className="accordion__body">
                  <p>
                    With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often
                  </p>
                </div>
                {/* <!-- /.accordion-item-body --> */}
              </div>
            </div>
            {/* <!-- /.accordion-item --> */}
            <div className="accordion-item">
              <div
                className="accordion__header"
                data-toggle="collapse"
                data-target="#collapse5"
              >
                <Link className="accordion__title" href="#">
                  Any contracts or commitments?
                  <FontAwesomeIcon
                    className="accordion__title_after"
                    icon={faPlus}
                  />
                </Link>
              </div>
              {/* <!-- /.accordion-item-header --> */}
              <div id="collapse5" className="collapse" data-parent="#accordion">
                <div className="accordion__body">
                  <p>
                    With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often
                  </p>
                </div>
                {/* <!-- /.accordion-item-body --> */}
              </div>
            </div>
            {/* <!-- /.accordion-item --> */}
          </div>
          {/* <!-- /.col-lg-6 --> */}
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="accordion-item">
              <div
                className="accordion__header"
                data-toggle="collapse"
                data-target="#collapse6"
              >
                <Link className="accordion__title" href="#">
                  What are my payment options?
                  <FontAwesomeIcon
                    className="accordion__title_after"
                    icon={faPlus}
                  />
                </Link>
              </div>
              {/* <!-- /.accordion-item-header --> */}
              <div id="collapse6" className="collapse" data-parent="#accordion">
                <div className="accordion__body">
                  <p>
                    With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often
                  </p>
                </div>
                {/* <!-- /.accordion-item-body --> */}
              </div>
            </div>
            {/* <!-- /.accordion-item --> */}
            <div className="accordion-item">
              <div
                className="accordion__header"
                data-toggle="collapse"
                data-target="#collapse7"
              >
                <Link className="accordion__title" href="#">
                  How does the free trial work?
                  <FontAwesomeIcon
                    className="accordion__title_after"
                    icon={faPlus}
                  />
                </Link>
              </div>
              {/* <!-- /.accordion-item-header --> */}
              <div id="collapse7" className="collapse" data-parent="#accordion">
                <div className="accordion__body">
                  <p>
                    With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often
                  </p>
                </div>
                {/* <!-- /.accordion-item-body --> */}
              </div>
            </div>
            {/* <!-- /.accordion-item --> */}
            <div className="accordion-item">
              <div
                className="accordion__header"
                data-toggle="collapse"
                data-target="#collapse8"
              >
                <Link className="accordion__title" href="#">
                  What Payment Methods Are Available?
                  <FontAwesomeIcon
                    className="accordion__title_after"
                    icon={faPlus}
                  />
                </Link>
              </div>
              {/* <!-- /.accordion-item-header --> */}
              <div id="collapse8" className="collapse" data-parent="#accordion">
                <div className="accordion__body">
                  <p>
                    With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often
                  </p>
                </div>
                {/* <!-- /.accordion-item-body --> */}
              </div>
            </div>
            {/* <!-- /.accordion-item --> */}
            <div className="accordion-item">
              <div
                className="accordion__header"
                data-toggle="collapse"
                data-target="#collapse9"
              >
                <Link className="accordion__title" href="#">
                  How does the free trial work?
                  <FontAwesomeIcon
                    className="accordion__title_after"
                    icon={faPlus}
                  />
                </Link>
              </div>
              {/* <!-- /.accordion-item-header --> */}
              <div id="collapse9" className="collapse" data-parent="#accordion">
                <div className="accordion__body">
                  <p>
                    With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often
                  </p>
                </div>
                {/* <!-- /.accordion-item-body --> */}
              </div>
            </div>
            {/* <!-- /.accordion-item --> */}
            <div className="accordion-item opened">
              <div
                className="accordion__header"
                data-toggle="collapse"
                data-target="#collapse10"
              >
                <Link className="accordion__title" href="#">
                  If I have questions, where can I find answers?{" "}
                  <FontAwesomeIcon
                    className="accordion__title_after"
                    icon={faPlus}
                  />
                </Link>
              </div>
              {/* <!-- /.accordion-item-header --> */}
              <div
                id="collapse10"
                className="collapse show"
                data-parent="#accordion"
              >
                <div className="accordion__body">
                  <p>
                    With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often
                  </p>
                </div>
                {/* <!-- /.accordion-item-body --> */}
              </div>
            </div>
            {/* <!-- /.accordion-item --> */}
          </div>
          {/* <!-- /.col-lg-6 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};

export default PricingFeatures;
