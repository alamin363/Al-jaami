import React, { useContext, useState } from "react";
import { GlobalContextAPI } from "@/components/ContextAPI/ContextAPI";
import ContactForm from "./Form/ContactForm";
import Link from "next/link";
export default function PricingContent({ PricingRef }) {
  const { PriceTable } = useContext(GlobalContextAPI);
  const [openContactFrom, setOpenContactFrom] = useState(false);
  return (
    <section
      ref={PricingRef}
      id="pricing"
      className="pricing pt-130 bg-top-center bg-slider-img-Banner-Pricing"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-50">
              <h2 className="heading__subtitle">
                Suitable For Small To Midsize Businesses
              </h2>
              <h3 className="heading__title">
                Effective &amp; flexible pricing that adapts your needs!
              </h3>
            </div>
            {/* /.heading */}
          </div>
          {/* /.col-lg-6 */}
        </div>
        <div
          className="row row-no-gutter pricing-wrapper "
          style={{ position: "relative" }}
        >
          {/* pricing item #1*/}
          {PriceTable?.map((PriceTables) => (
            <>
              <div className="col-sm-12 col-md-4 col-lg-4 ">
                <div className="pricing-item d-flex flex-column justify-content-between mr-5">
                  <div>
                    <div className="pricing__header">
                      <h2 className="pricing__title">{PriceTables.title}</h2>
                      <div className="pricing__price">
                        <span className="pricing__currency">$</span>
                        <span>{PriceTables.price}</span>
                        <span className="pricing__time">/Monthly</span>
                      </div>
                    </div>
                    {/* /.pricing__header  */}
                    <div className="pricing__content">
                      <p className="pricing__desc">{PriceTables.desc}</p>
                      <ul className="pricing__list list-items list-items-layout2 list-unstyled">
                        <li>{PriceTables.list01}</li>
                        <li>{PriceTables.list02}</li>
                        <li>{PriceTables.list03}</li>
                        <li>{PriceTables.list04}</li>
                        <li>{PriceTables.list05}</li>
                        <li>{PriceTables.list06}</li>
                        <li>{PriceTables.list07}</li>
                        <li>{PriceTables.list08}</li>
                      </ul>
                    </div>
                    {/* /.pricing__content  */}
                  </div>
                  <div className="pricing__footer">
                    <a
                      onClick={() => setOpenContactFrom((Pre) => !Pre)}
                      className="btn "
                    >
                      <span>Contact Us</span>
                    </a>
                  </div>
                  {/* /.pricing__footer  */}
                </div>
                {/* /.pricing-item */}
              </div>
            </>
          ))}
          <div>
            {openContactFrom ? (
              <div
                style={{
                  position: "absolute",
                  top: 60,
                  right: 70,
                  background: "white",
                }}
              >
                <ContactForm setOpenContactFrom={setOpenContactFrom} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
