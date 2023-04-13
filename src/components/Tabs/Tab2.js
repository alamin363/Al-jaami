import React, { useEffect, useState } from "react";
import firebase from "../../assets/images/icons/firebase-1.svg";
import aspnet from "../../assets/images/icons/aspnet.svg";
import apache from "../../assets/images/icons/apache-13.svg";
import apple_objectivec from "../../assets/images/icons/apple_objectivec-ar21.svg";
import augmented from "../../assets/images/icons/augmented-reality-svgrepo-com.svg";
import Aws from "../../assets/images/icons/aws-dynamodb.svg";
import c_seeklogo from "../../assets/images/icons/c-sharp-c-seeklogo.com.svg";
import c from "../../assets/images/icons/c.svg";
import codeigniter from "../../assets/images/icons/codeigniter.svg";
import couchbase from "../../assets/images/icons/couchbase-1.svg";
import django from "../../assets/images/icons/django.svg";
import dotnet from "../../assets/images/icons/dotnet-vertical (1).svg";
import expressjs from "../../assets/images/icons/expressjs-ar21.svg";
import flask from "../../assets/images/icons/flask.svg";
import Flutter from "../../assets/images/icons/Flutter.svg";
import graphql from "../../assets/images/icons/graphql.svg";
import heroku from "../../assets/images/icons/heroku-icon.svg";
import ionic from "../../assets/images/icons/ionic-vector-logo.svg";
import java from "../../assets/images/icons/java-4.svg";
import jquery from "../../assets/images/icons/jquery-1.svg";
import koajs from "../../assets/images/icons/koajs-ar21.svg";
import kotlin from "../../assets/images/icons/kotlin.svg";
import mean from "../../assets/images/icons/mean-seeklogo.com.svg";
import mongodb from "../../assets/images/icons/mongodb-icon-1.svg";
import mysql from "../../assets/images/icons/mysql-6.svg";
import nodejs from "../../assets/images/icons/nodejs-icon.svg";
import oracle from "../../assets/images/icons/oracle-corporation-logo.svg";
import payoneer from "../../assets/images/icons/payoneer-icon.svg";
import paypal from "../../assets/images/icons/paypal-icon.svg";
import postgresql from "../../assets/images/icons/postgresql-ar21.svg";
import postgresqicon from "../../assets/images/icons/postgresql-icon.svg";
import react from "../../assets/images/icons/react-native-1.svg";
import skrill from "../../assets/images/icons/skrill.svg";
import sqlite from "../../assets/images/icons/sqlite.svg";
import stripe from "../../assets/images/icons/stripe-icon.svg";
import transferwise from "../../assets/images/icons/transferwise-icon.svg";
import typescript from "../../assets/images/icons/typescript.svg";
import unreal from "../../assets/images/icons/unreal-1.svg";
import upwork from "../../assets/images/icons/upwork-tile.svg";
import VR_Logo from "../../assets/images/icons/VR_Logo_Virtual_Reality_Logo.svg";
import unity from "../../assets/images/icons/unity-technologies-logo.svg";
import ReactLogo from "../../assets/images/icons/react-native-1.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleAlt,
  faBookAtlas,
  faC,
  faK,
  faPersonWalkingArrowLoopLeft,
  faRobot,
  faSquare,
  faVectorSquare,
} from "@fortawesome/free-solid-svg-icons";

const Tab2 = () => {
  const [clickedValue, setClickedValue] = useState("mobile");

  return (
    <>
      <section className="fw-main-row ">
        <div className="fw-container-fluid rull-container">
          <section className="tech-used-section light-mode gray-mode">
            <div className="container">
              <div className="row">
                <div className="d-flex align-items-center">
                  <div className="divider divider-primary mr-30"></div>
                  <h2 className="heading__subtitle">
                    Technologies We Work With
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="technologies">
                  <div className="tech-list-wrapper">
                    <ul className="nav tech-list" id="myTab">
                      <li className=" nav-item">
                        <a
                          onClick={(e) => setClickedValue(e.target.name)}
                          name="mobile"
                          className={`nav-link cursor-pointer ${
                            clickedValue == "mobile" && "active"
                          }`}
                        >
                          Mobile
                        </a>
                      </li>
                      <li className=" nav-item">
                        <a
                          onClick={(e) => setClickedValue(e.target.name)}
                          className={`nav-link cursor-pointer ${
                            clickedValue == "Frontend" && "active"
                          }`}
                          name="Frontend"
                        >
                          Frontend
                        </a>
                      </li>
                      <li className=" nav-item">
                        <a
                          onClick={(e) => setClickedValue(e.target.name)}
                          className={`nav-link cursor-pointer ${
                            clickedValue == "backend" && "active"
                          }`}
                          name="backend"
                        >
                          Backend
                        </a>
                      </li>
                      <li className=" nav-item">
                        <a
                          onClick={(e) => setClickedValue(e.target.name)}
                          className={`nav-link cursor-pointer ${
                            clickedValue == "Database" && "active"
                          }`}
                          name="Database"
                        >
                          Database
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div
                      className={`single-row tab-pane fade ${
                        clickedValue === "mobile" ? "show active" : ""
                      }`}
                      id="id-0"
                    >
                      <div className="single-item">
                        <FontAwesomeIcon icon={faAppleAlt} />
                        <span>iOS</span>{" "}
                      </div>
                      <div className="single-item">
                        <FontAwesomeIcon icon={faRobot} />
                        <span>Android</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          src="https://t2.gstatic.com/images?q=tbn:ANd9GcSR-iMcVUZ-QafqgMszbRnqUj_KdqSzob_EYerPvqbYRD5gU-_5"
                          alt=""
                        />
                        <span style={{ marginTop: "-40px" }}>Flutter</span>{" "}
                      </div>
                      <div className="single-item">
                        <FontAwesomeIcon icon={faSquare} />
                        <span>JAVA</span>{" "}
                      </div>
                      <div className="single-item">
                        <FontAwesomeIcon icon={faC} />
                        <span>Objective-C</span>{" "}
                      </div>
                      <div className="single-item">
                        <FontAwesomeIcon icon={faC} /> <span>C#</span>{" "}
                      </div>
                      <div className="single-item">
                        <FontAwesomeIcon icon={faC} />
                        <span>C++</span>{" "}
                      </div>
                      <div className="single-item">
                        <FontAwesomeIcon icon={faPersonWalkingArrowLoopLeft} />
                        <span>Swift</span>{" "}
                      </div>
                      <div className="single-item">
                        <FontAwesomeIcon icon={faVectorSquare} />
                        <span style={{ marginTop: "-3px" }}>Ionic</span>{" "}
                      </div>
                      <div className="single-item">
                        <span>Kotlin</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image width={50} height={50} src={augmented} alt="" />
                        <span style={{ marginTop: "-40px" }}>
                          Augmented Reality
                        </span>{" "}
                      </div>
                      <div className="single-item">
                        <Image width={50} height={50} src={VR_Logo} alt="" />
                        <span style={{ marginTop: "-40px" }}>
                          Virtual Reality
                        </span>{" "}
                      </div>
                    </div>
                    <div
                      className={`single-row tab-pane fade ${
                        clickedValue === "Frontend" ? "show active" : ""
                      }`}
                      id="id-1"
                    >
                      <div className="single-item">
                        <Image width={50} height={50} src={ReactLogo} alt="" />
                        <span>Angular</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image width={50} height={50} src={ReactLogo} alt="" />
                        <span>ReactJs</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image width={50} height={50} src={ReactLogo} alt="" />
                        <span>VueJS</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image width={50} height={50} src={react} alt="" />
                        <span>HTML</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image width={50} height={50} src={react} alt="" />
                        <span>CSS</span>{" "}
                      </div>
                      <div className="single-item">
                        <FontAwesomeIcon icon={faBookAtlas} />
                        <span>Bootstrap</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={mean}
                          alt=""
                        />
                        <span style={{ marginTop: "-40px" }}>MEAN</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={typescript}
                          alt=""
                        />
                        <span style={{ marginTop: "-42px" }}>TypeScript</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={aspnet}
                          alt=""
                        />
                        <span style={{ marginTop: "-42px" }}>ASP.NET</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={react}
                          alt=""
                        />
                        <span>ReactJS</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={jquery}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>jQuery</span>{" "}
                      </div>
                    </div>
                    <div
                      className={`single-row tab-pane fade ${
                        clickedValue === "backend" ? "show active" : ""
                      }`}
                      id="id-2"
                    >
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={jquery}
                          alt=""
                        />
                        <span>Laravel</span>{" "}
                      </div>
                      <div className="single-item">
                        <i className="fab fa-php"></i>
                        <span>PHP</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={aspnet}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>ASP.NET MVC</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={django}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Django</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={java}
                          alt=""
                        />
                        <span>JAVA</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={ReactLogo}
                          alt=""
                        />
                        <span>React Native</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={nodejs}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Node.js</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={codeigniter}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Codeigniter</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={koajs}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Koa.js</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={kotlin}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Flask</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={expressjs}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Express.js</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={graphql}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>GraphQL</span>{" "}
                      </div>
                    </div>
                    <div
                      className={`single-row tab-pane fade ${
                        clickedValue === "Database" ? "show active" : ""
                      }`}
                      id="id-3"
                    >
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={mysql}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>MySQL</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/apache_couchdb-icon.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Apache</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={firebase}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Firebase</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={sqlite}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>SQLite</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={oracle}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Oracle</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={sqlite}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>
                          Microsoft SQL Server
                        </span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={Aws}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>
                          Amazon DynamoDB
                        </span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={mongodb}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>MongoDB</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={apache}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>
                          Apache CouchDB
                        </span>
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={postgresqicon}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>PostgreSQL</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={couchbase}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Couchbase</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={50}
                          height={50}
                          style={{ marginTop: "-42px" }}
                          src={Aws}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>RavenDB</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Tab2;
