"use client"
import React, { useEffect, useRef, useState } from "react";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    console.log("Height for ", props.title, ": ", height);
  }, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className={`accordion-item ${active && "opened"}`}>
      <div className="accordion__header">
        <div
          className={`accordion ${active ? "active collapse show" : ""}`}
          onClick={toggleAccordion}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className="accordion__title">{props.title}</p>
          <span style={{ marginLeft: "20px" }}>{active ? "-" : "+"}</span>
        </div>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text accordion__body"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
