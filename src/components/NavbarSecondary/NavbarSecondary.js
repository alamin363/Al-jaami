import Link from "next/link";
import React from "react";

const NavbarSecondary = () => {
  return (
    <section className="secondary-nav secondary-nav-layout2 sticky-top py-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="nav nav-tabs justify-content-center">
              <Link href="/aboutus" className="nav__link">
                About Us
              </Link>
              <Link href="/choose" className="nav__link active">
                Why Choose Us
              </Link>
              <Link href="/leadershipteaml" className="nav__link">
                Leadership Team
              </Link>
              <Link href="/awards" className="nav__link">
                Awards & Recognition
              </Link>
              <Link href="/careers" className="nav__link">
                Careers
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavbarSecondary;
