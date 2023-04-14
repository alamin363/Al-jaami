import Link from 'next/link'
import React from 'react'

const ErrorPage = () => {
  return (
    <>
      <section className="page-404 mt--100 py-0 bg-overlay error-page-bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center vh-100">
            <div className="error-wrapper text-center">
              <h1 className="error-code">404</h1>
              <p className="error__desc">The page requested couldn`t be found. This could be a spelling error in the
                URL or a removed page.
              </p>
              <Link href="/" className="btn btn__primary btn__icon">
                <span>Back To Home</span> <i className="icon-arrow-right"></i>
              </Link>
            </div>
          </div>
          {/* <!-- /.col-12 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
    </>
  )
}

export default ErrorPage