import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const NavHero = () => {
  return (
    <nav>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ marginLeft: 10, fontSize: 15 }}
          />
        </li>
        <li className="breadcrumb-item">
          <Link href="/about-us">Company</Link>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ marginLeft: 10, fontSize: 15 }}
          />
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          about
        </li>
      </ol>
    </nav>
  );
};

export default NavHero;
