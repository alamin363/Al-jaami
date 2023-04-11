import React from "react";

const ContentWritingHeroSection = () => {
  return (
    <section className="slider">
      <div
        className="slide-item align-v-h bg-overlay bg-overlay-gradient content-header-bg"
        style={{
          height: "410px",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(6, 57, 70, 0.8)",
        }}
      >
        {/* <div className="bg-img"><img src="https://images.pexels.com/photos/7353/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="slide img" /></div> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <h2
                style={{
                  fontSize: "54px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                CONTENT WRITING
              </h2>
            </div>
            {/* <!-- /.col-xl-7 --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.slide-item --> */}
    </section>
  );
};

export default ContentWritingHeroSection;
