import React from "react";

const QuoteHeader = () => {
  return (
    <section
      className="page-title page-title-layout12 text-center bg-overlay bg-overlay-gradient bg-parallax quoter-bg-header"
      style={{
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(6, 57, 70, 0.8)",
      }}
    >
      {/* <div className="bg-img"><img src="https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="background"></div> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-3">
            <h1 className="pagetitle__heading">Request A Quote</h1>
            <p className="pagetitle__desc">
              As one of the world's largest ITService Providers, our deep pool
              of certified engineers and IT staff are ready to help you to keep
              your IT business safe & ensure high availability.
            </p>
          </div>
          {/* <!-- /.col-xl-6 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};

export default QuoteHeader;
