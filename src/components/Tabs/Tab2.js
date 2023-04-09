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
import Image from "next/image";

const Tab2 = () => {
  const [clickedValue, setClickedValue] = useState("");
  const handelClick = (e) => {
    console.log((e.target.className.add = "active"));
  };
  useEffect(() => {}, []);
  return (
    <>
      <section class="multimedia-service-section light-mode">
        <div class="container">
          <div class="section-heading">
            <h2 class="text-white">Industries We Serve</h2>{" "}
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="multimedia-service-list">
              <div class="single-list">
                <div class="service-icon">
                  <i class="fa fa-home "></i>
                </div>
                <span class="title">Finance &amp; Banking</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="fas fa-building"></i>
                </div>
                <span class="title">E-commerce</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="fas fa-broadcast-tower"></i>
                </div>
                <span class="title">Telco</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="fas fa-city"></i>
                </div>
                <span class="title">Real Estate</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="fas fa-laptop-code"></i>
                </div>
                <span class="title">Software</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="fas fa-walking"></i>
                </div>
                <span class="title">Health &amp; Fitness</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="	fas fa-pizza-slice"></i>
                </div>
                <span class="title">Food &amp; Drink</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="	fas fa-guitar"></i>
                </div>
                <span class="title">Music</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="	fas fa-user-md"></i>
                </div>
                <span class="title">Medical</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="fas fa-pills"></i>
                </div>
                <span class="title">Pharmaceutical</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="fas fa-car-alt"></i>
                </div>
                <span class="title">Automotive</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="fas fa-graduation-cap"></i>
                </div>
                <span class="title">Education</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="fas fa-globe-asia"></i>
                </div>
                <span class="title">Travel</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="fas fa-hamburger"></i>
                </div>
                <span class="title">Entertainment</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="fas fa-hotel"></i>
                </div>
                <span class="title">Retail</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="fas fa-briefcase"></i>
                </div>
                <span class="title">Business</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="fas fa-photo-video"></i>
                </div>
                <span class="title">Photo &amp; Video</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="fas fa-hand-holding-usd"></i>
                </div>
                <span class="title">Non-Profit</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="	fa fa-podcast"></i>
                </div>
                <span class="title">Startup</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="fas fa-turntable"></i>
                </div>
                <span class="title">AR/VR</span>
              </div>
              <div class="single-list">
                <div class="service-icon">
                  <i class="fas fa-couch"></i>
                </div>
                <span class="title">Furniture</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="fw-main-row ">
        <div class="fw-container-fluid rull-container">
          <section class="tech-used-section light-mode gray-mode">
            <div class="container">
              <div class="row">
                <div class="d-flex align-items-center">
                  <div class="divider divider-primary mr-30"></div>
                  <h2 class="heading__subtitle">Technologies We Work With</h2>
                </div>
              </div>
              <div class="row">
                <div class="technologies">
                  <div class="tech-list-wrapper">
                    <ul class="nav tech-list" id="myTab">
                      <li class=" nav-item">
                        <a
                          onClick={handelClick}
                          name="mobile"
                          class="nav-link active cursor-pointer"
                        >
                          Mobile
                        </a>
                      </li>
                      <li class=" nav-item">
                        <a
                          onClick={handelClick}
                          class="nav-link cursor-pointer"
                          name="Frontend"
                        >
                          Frontend
                        </a>
                      </li>
                      <li class=" nav-item">
                        <a
                          onClick={handelClick}
                          class="nav-link cursor-pointer"
                          name="backend"
                        >
                          Backend
                        </a>
                      </li>
                      <li class=" nav-item">
                        <a
                          onClick={handelClick}
                          class="nav-link cursor-pointer"
                          name="Database"
                        >
                          Database
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <div class="tab-content">
                    <div class="single-row tab-pane fade show active" id="id-0">
                      <div class="single-item">
                        <i class="fab fa-apple"></i>
                        <span>iOS</span>{" "}
                      </div>
                      <div class="single-item">
                        <i class="fas fa-robot"></i>
                        <span>Android</span>{" "}
                      </div>
                      <div class="single-item">
                        <img src="assets/images/icons/Flutter.svg" alt="" />
                        <span style={{ marginTop: "-40px" }}>Flutter</span>{" "}
                      </div>
                      <div class="single-item">
                        <i class="fab fa-java"></i>
                        <span>JAVA</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          src="assets/images/icons/apple_objectivec-ar21.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-40px" }}>Objective-C</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          src="assets/images/icons/c-sharp-c-seeklogo.com.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-40px" }}>C#</span>{" "}
                      </div>
                      <div class="single-item">
                        <img src="assets/images/icons/c.svg" alt="" />
                        <span style={{ marginTop: "-40px" }}>C++</span>{" "}
                      </div>
                      <div class="single-item">
                        <i class="fab fa-swift"></i>
                        <span>Swift</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ height: "150px" }}
                          src="assets/images/icons/ionic-vector-logo.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-3px" }}>Ionic</span>{" "}
                      </div>
                      <div class="single-item">
                        <img src="assets/images/icons/kotlin.svg" alt="" />
                        <span style={{ marginTop: "-40px" }}>Kotlin</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          src="assets/images/icons/augmented-reality-svgrepo-com.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-40px" }}>
                          Augmented Reality
                        </span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          src="assets/images/icons/VR_Logo_Virtual_Reality_Logo.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-40px" }}>
                          Virtual Reality
                        </span>{" "}
                      </div>
                    </div>
                    <div class="single-row tab-pane fade" id="id-1">
                      <div class="single-item">
                        <i class="fab fa-angular"></i>
                        <span>Angular</span>{" "}
                      </div>
                      <div class="single-item">
                        <i class="fab fa-react"></i>
                        <span>ReactJs</span>{" "}
                      </div>
                      <div class="single-item">
                        <i class="fab fa-vuejs"></i>
                        <span>VueJS</span>{" "}
                      </div>
                      <div class="single-item">
                        <i class="fab fa-html5"></i>
                        <span>HTML</span>{" "}
                      </div>
                      <div class="single-item">
                        <i class="fab fa-css3-alt"></i>
                        <span>CSS</span>{" "}
                      </div>
                      <div class="single-item">
                        <i class="fab fa-bootstrap"></i>
                        <span>Bootstrap</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/mean-seeklogo.com.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-40px" }}>MEAN</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/typescript.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-42px" }}>TypeScript</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/aspnet.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-42px" }}>ASP.NET</span>{" "}
                      </div>
                      <div class="single-item">
                        <i class="fab fa-react"></i>
                        <span>ReactJS</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/jquery-1.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>jQuery</span>{" "}
                      </div>
                    </div>
                    <div class="single-row tab-pane fade" id="id-2">
                      <div class="single-item">
                        <i class="fab fa-laravel"></i>
                        <span>Laravel</span>{" "}
                      </div>
                      <div class="single-item">
                        <i class="fab fa-php"></i>
                        <span>PHP</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/aspnet.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>ASP.NET MVC</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/django.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Django</span>{" "}
                      </div>
                      <div class="single-item">
                        <i class="fab fa-java"></i>
                        <span>JAVA</span>{" "}
                      </div>
                      <div class="single-item">
                        <i class="fab fa-react"></i>
                        <span>React Native</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/nodejs-icon.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Node.js</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/codeigniter.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Codeigniter</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/koajs-ar21.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Koa.js</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/koajs-ar21.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Flask</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/expressjs-ar21.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Express.js</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/graphql.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>GraphQL</span>{" "}
                      </div>
                    </div>
                    <div class="single-row tab-pane fade" id="id-3">
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/mysql-6.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>MySQL</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/apache_couchdb-icon.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Apache</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/firebase-1.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Firebase</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/sqlite.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>SQLite</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/oracle-corporation-logo.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Oracle</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/sqlite.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>
                          Microsoft SQL Server
                        </span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/aws-dynamodb.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>
                          Amazon DynamoDB
                        </span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/mongodb-icon-1.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>MongoDB</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/apache_couchdb-icon.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>
                          Apache CouchDB
                        </span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/postgresql-ar21.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>PostgreSQL</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/couchbase-1.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Couchbase</span>{" "}
                      </div>
                      <div class="single-item">
                        <img
                          style={{ marginTop: "-42px" }}
                          src="assets/images/icons/aws-dynamodb.svg"
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>RavenDB</span>{" "}
                      </div>
                    </div>
                  </div> */}
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
