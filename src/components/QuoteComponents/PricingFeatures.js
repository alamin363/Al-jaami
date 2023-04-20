import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Accordion from "./Accordion";

const PricingFeatures = ({QuestionsRef}) => {
  return (
    <section ref={QuestionsRef} id="faqs" className="faq pt-120 pb-70">
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
            <Accordion
              title="Which Plan Is Right For Me?"
              content="With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often"
            />

            <Accordion
              title="Do I have to commit to a contract?
"
              content=" With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often"
            />

            <Accordion
              title="What Payment Methods Are Available?"
              content=" With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often"
            />
            <Accordion
              title="What if I pick the wrong plan?"
              content="With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often"
            />
            <Accordion
              title="Any contracts or commitments?"
              content="With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often"
            />
          </div>
          {/* <!-- /.col-lg-6 --> */}
          <div className="col-sm-12 col-md-12 col-lg-6">
            <Accordion
              title=" What are my payment options?"
              content=" With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often"
            />
            {/* <!-- /.accordion-item --> */}
            <Accordion
              title="How does the free trial work?"
              content=" With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often"
            />
            {/* <!-- /.accordion-item --> */}
            <Accordion
              title="What Payment Methods Are Available?"
              content="With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often"
            />
            {/* <!-- /.accordion-item --> */}
            <Accordion
              title="How does the free trial work?"
              content="With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often"
            />
            {/* <!-- /.accordion-item --> */}
            <Accordion
              title="If I have questions, where can I find answers?"
              content="With any financial product that you buy, it is important
                    that you know you are getting the best advice from a
                    reputable company as often"
            />

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
