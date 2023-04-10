import Link from "next/link";
import React from "react";

const NavbarSecondary = () => {
  return (
    <section class="secondary-nav secondary-nav-layout2 sticky-top py-0">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="nav nav-tabs justify-content-center">
              <Link href="/aboutus" class="nav__link">
                About Us
              </Link>
              <Link href="why-us.html" class="nav__link active">
                Why Choose Us
              </Link>
              <Link href="/leadershipteaml" class="nav__link">
                Leadership Team
              </Link>
              <Link href="/awards" class="nav__link">
                Awards & Recognition
              </Link>
              <Link href="/careers" class="nav__link">
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
