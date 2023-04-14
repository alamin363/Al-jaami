import React from "react";

const AppDevelopMentComponentHeroSection = () => {
  return (
    <section className="slider">
      <div
        className="slide-item align-v-h bg-overlay bg-overlay-gradient app-developer-heder-bg app-dev-hero"
      >
        {/* <div className="bg-img"><img src="https://images.pexels.com/photos/2764670/pexels-photo-2764670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="slide img" /></div> */}
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
                APP DEVELOPMENT
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

export default AppDevelopMentComponentHeroSection;
