const HeroSection = () => {
  return (
  <>
      <section className="slider">
      <div
        className="slide-item align-v-h bg-overlay bg-overlay-gradient bg-service-header-images services-web-dev-bg"
        style={{
          height: "410px",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(6, 57, 70, 0.8)",
        }}
      >
        {/* <div className="bg-img">
          <img
            src="https://cdn.pixabay.com/photo/2015/07/17/22/42/typing-849806__340.jpg"
            alt="slide img"
          />
        </div> */}
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
                WEB DEVELOPMENT
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
  </>
  );
};

export default HeroSection;
