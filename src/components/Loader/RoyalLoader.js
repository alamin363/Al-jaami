import React from "react";

const RoyalLoader = () => {
  return (
    // <div style={{background:"#000000", color:"#fff", height:"80px", width:"80px"}}
    //   id="royal_preloader"
    //   className="royal_preloader_number royal_preloader_"
    // >
    //   <div className="complete"></div>
    // </div>
    <div id="royal_preloader" class="royal_preloader">
      <div class="wrapper">
        <div class="preloader">
          <div class="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoyalLoader;
