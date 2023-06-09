"use client"
import React, { useEffect, useState } from "react";
import firebase from "../../assets/images/icons/firebase-1.svg";
import aspnet from "../../assets/images/icons/aspnet.svg";
import apache from "../../assets/images/icons/apache-13.svg";
import fluttersvg from "../../assets/images/icons/flutter_logo.svg";
import apache1 from "../../assets/images/icons/apache_couchdb-icon.svg";
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
import CPlus from "../../assets/images/icons/c-sharp-c-seeklogo.com.svg";
import unity from "../../assets/images/icons/unity-technologies-logo.svg";
import CHase from "../../assets/images/icons/c-sharp-c-seeklogo.com.svg";
import ReactLogo from "../../assets/images/icons/react-native-1.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt, faRobot } from "@fortawesome/free-solid-svg-icons";

const Tab2 = () => {
  const [clickedValue, setClickedValue] = useState("mobile");
  const heightAndWidth = {
    height: "75",
    width: "150",
  };

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
                        <svg
                          height={75}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path
                            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                            fill="#0a2d43"
                          />
                        </svg>
                        <span>iOS</span>
                      </div>
                      <div className="single-item">
                        <svg
                          height={75}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                        >
                          <path
                            d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"
                            fill="#0a2d43"
                          />
                        </svg>
                        <span>Android</span>
                      </div>
                      <div className="single-item">
                        <Image
                          {...heightAndWidth}
                          style={{ marginBottom: "-20px" }}
                          src={Flutter}
                          alt=""
                        />
                        <span style={{ marginTop: "-25px" }}>Flutter</span>
                      </div>
                      <div className="single-item">
                        <svg
                          height={75}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path
                            d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"
                            fill="#0a2d43"
                          />
                        </svg>
                        <span>JAVA</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          {...heightAndWidth}
                          src={apple_objectivec}
                          style={{marginBottom:"-40px"}}
                          alt=""
                        />
                        <span style={{marginTop:"-25px"}}>Objective-C</span>
                      </div>
                      <div className="single-item">
                        <Image {...heightAndWidth} src={CHase} style={{marginBottom:"-30px"}} alt="" />
                        <span style={{marginTop:"-25px"}}>C#</span>
                      </div>
                      <div className="single-item">
                        <Image
                          style={{ marginRight: "-75px", marginBottom:"-30px" }}
                          {...heightAndWidth}
                          src={c}
                          alt=""
                        />
                        <span className="mt--30">C++</span>
                      </div>
                      <div className="single-item">
                        <svg
                          {...heightAndWidth}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            d="M448 156.09c0-4.51-.08-9-.2-13.52a196.31 196.31 0 0 0-2.58-29.42 99.62 99.62 0 0 0-9.22-28A94.08 94.08 0 0 0 394.84 44a99.17 99.17 0 0 0-28-9.22 195 195 0 0 0-29.43-2.59c-4.51-.12-9-.17-13.52-.2H124.14c-4.51 0-9 .08-13.52.2-2.45.07-4.91.15-7.37.27a171.68 171.68 0 0 0-22.06 2.32 103.06 103.06 0 0 0-21.21 6.1q-3.46 1.45-6.81 3.12a94.66 94.66 0 0 0-18.39 12.32c-1.88 1.61-3.69 3.28-5.43 5A93.86 93.86 0 0 0 12 85.17a99.45 99.45 0 0 0-9.22 28 196.31 196.31 0 0 0-2.54 29.4c-.13 4.51-.18 9-.21 13.52v199.83c0 4.51.08 9 .21 13.51a196.08 196.08 0 0 0 2.58 29.42 99.3 99.3 0 0 0 9.22 28A94.31 94.31 0 0 0 53.17 468a99.47 99.47 0 0 0 28 9.21 195 195 0 0 0 29.43 2.59c4.5.12 9 .17 13.52.2H323.91c4.51 0 9-.08 13.52-.2a196.59 196.59 0 0 0 29.44-2.59 99.57 99.57 0 0 0 28-9.21A94.22 94.22 0 0 0 436 426.84a99.3 99.3 0 0 0 9.22-28 194.79 194.79 0 0 0 2.59-29.42c.12-4.5.17-9 .2-13.51V172.14c-.01-5.35-.01-10.7-.01-16.05zm-69.88 241c-20-38.93-57.23-29.27-76.31-19.47-1.72 1-3.48 2-5.25 3l-.42.25c-39.5 21-92.53 22.54-145.85-.38A234.64 234.64 0 0 1 45 290.12a230.63 230.63 0 0 0 39.17 23.37c56.36 26.4 113 24.49 153 0-57-43.85-104.6-101-141.09-147.22a197.09 197.09 0 0 1-18.78-25.9c43.7 40 112.7 90.22 137.48 104.12-52.57-55.49-98.89-123.94-96.72-121.74 82.79 83.42 159.18 130.59 159.18 130.59 2.88 1.58 5 2.85 6.73 4a127.44 127.44 0 0 0 4.16-12.47c13.22-48.33-1.66-103.58-35.31-149.2C329.61 141.75 375 229.34 356.4 303.42c-.44 1.73-.95 3.4-1.44 5.09 38.52 47.4 28.04 98.17 23.13 88.59z"
                            fill="#0a2d43"
                          />
                        </svg>
                        <span style={{marginTop:"-5px"}}>Swift</span>
                      </div>
                      <div className="single-item">
                        <Image
                          style={{ height: "150px", marginBottom:"-30px" }}
                          {...heightAndWidth}
                          src={ionic}
                          alt=""
                        />
                        <span>Ionic</span>
                      </div>
                      <div className="single-item">
                        <Image {...heightAndWidth} src={kotlin} alt="" />
                        <span style={{marginTop:"-20px"}}>Kotlin</span>
                      </div>
                      <div className="single-item">
                        <Image {...heightAndWidth} src={augmented} alt="" />
                        <span style={{ marginTop: "-20px" }}>
                          Augmented Reality
                        </span>
                      </div>
                      <div className="single-item">
                        <Image {...heightAndWidth} style={{marginBottom:"-20px"}} src={VR_Logo} alt="" />
                        <span style={{ marginTop: "-25px" }}>
                          Virtual Reality
                        </span>
                      </div>
                    </div>
                    <div
                      className={`single-row tab-pane fade ${
                        clickedValue === "Frontend" ? "show active" : ""
                      }`}
                      id="id-1"
                    >
                      <div className="single-item">
                        <svg
                          {...heightAndWidth}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"
                            fill="#0a2d43"
                          />
                        </svg>
                        <span>Angular</span>{" "}
                      </div>
                      <div className="single-item">
                        <svg
                          {...heightAndWidth}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
                            fill="#0a2d43"
                          />
                        </svg>
                        <span>ReactJs</span>
                      </div>
                      <div className="single-item">
                        <svg
                          {...heightAndWidth}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"
                            fill="#0a2d43"
                          />
                        </svg>

                        <span>VueJS</span>
                      </div>
                      <div className="single-item">
                        <svg
                          {...heightAndWidth}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          {" "}
                          <path
                            d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
                            fill="#0a2d43"
                          />
                        </svg>
                        <span>HTML</span>{" "}
                      </div>
                      <div className="single-item">
                        <svg
                          {...heightAndWidth}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path
                            d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"
                            fill="#0a2d43"
                          />
                        </svg>
                        <span>CSS</span>
                      </div>
                      <div className="single-item">
                        <svg
                          {...heightAndWidth}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"
                            fill="#0a2d43"
                          />
                        </svg>
                        <span>Bootstrap</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image {...heightAndWidth} src={mean} alt="" />
                        <span style={{ marginTop: "-30px" }}>MEAN</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          {...heightAndWidth}
                          style={{ marginTop: "-42px" }}
                          src={typescript}
                          alt=""
                        />
                        <span style={{ marginTop: "-42px" }}>TypeScript</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          {...heightAndWidth}
                          style={{ marginTop: "-42px" }}
                          src={aspnet}
                          alt=""
                        />
                        <span style={{ marginTop: "-42px" }}>ASP.NET</span>
                      </div>
                      <div className="single-item">
                        <Image {...heightAndWidth} src={jquery} alt="" />
                        <span className="mt--40">jQuery</span>{" "}
                      </div>
                    </div>
                    <div
                      className={`single-row tab-pane fade ${
                        clickedValue === "backend" ? "show active" : ""
                      }`}
                      id="id-2"
                    >
                      <div className="single-item">
                        <svg
                          {...heightAndWidth}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M504.4,115.83a5.72,5.72,0,0,0-.28-.68,8.52,8.52,0,0,0-.53-1.25,6,6,0,0,0-.54-.71,9.36,9.36,0,0,0-.72-.94c-.23-.22-.52-.4-.77-.6a8.84,8.84,0,0,0-.9-.68L404.4,55.55a8,8,0,0,0-8,0L300.12,111h0a8.07,8.07,0,0,0-.88.69,7.68,7.68,0,0,0-.78.6,8.23,8.23,0,0,0-.72.93c-.17.24-.39.45-.54.71a9.7,9.7,0,0,0-.52,1.25c-.08.23-.21.44-.28.68a8.08,8.08,0,0,0-.28,2.08V223.18l-80.22,46.19V63.44a7.8,7.8,0,0,0-.28-2.09c-.06-.24-.2-.45-.28-.68a8.35,8.35,0,0,0-.52-1.24c-.14-.26-.37-.47-.54-.72a9.36,9.36,0,0,0-.72-.94,9.46,9.46,0,0,0-.78-.6,9.8,9.8,0,0,0-.88-.68h0L115.61,1.07a8,8,0,0,0-8,0L11.34,56.49h0a6.52,6.52,0,0,0-.88.69,7.81,7.81,0,0,0-.79.6,8.15,8.15,0,0,0-.71.93c-.18.25-.4.46-.55.72a7.88,7.88,0,0,0-.51,1.24,6.46,6.46,0,0,0-.29.67,8.18,8.18,0,0,0-.28,2.1v329.7a8,8,0,0,0,4,6.95l192.5,110.84a8.83,8.83,0,0,0,1.33.54c.21.08.41.2.63.26a7.92,7.92,0,0,0,4.1,0c.2-.05.37-.16.55-.22a8.6,8.6,0,0,0,1.4-.58L404.4,400.09a8,8,0,0,0,4-6.95V287.88l92.24-53.11a8,8,0,0,0,4-7V117.92A8.63,8.63,0,0,0,504.4,115.83ZM111.6,17.28h0l80.19,46.15-80.2,46.18L31.41,63.44Zm88.25,60V278.6l-46.53,26.79-33.69,19.4V123.5l46.53-26.79Zm0,412.78L23.37,388.5V77.32L57.06,96.7l46.52,26.8V338.68a6.94,6.94,0,0,0,.12.9,8,8,0,0,0,.16,1.18h0a5.92,5.92,0,0,0,.38.9,6.38,6.38,0,0,0,.42,1v0a8.54,8.54,0,0,0,.6.78,7.62,7.62,0,0,0,.66.84l0,0c.23.22.52.38.77.58a8.93,8.93,0,0,0,.86.66l0,0,0,0,92.19,52.18Zm8-106.17-80.06-45.32,84.09-48.41,92.26-53.11,80.13,46.13-58.8,33.56Zm184.52,4.57L215.88,490.11V397.8L346.6,323.2l45.77-26.15Zm0-119.13L358.68,250l-46.53-26.79V131.79l33.69,19.4L392.37,178Zm8-105.28-80.2-46.17,80.2-46.16,80.18,46.15Zm8,105.28V178L455,151.19l33.68-19.4v91.39h0Z"
                            fill="#0a2d43"
                          />
                        </svg>
                        <span>Laravel</span>
                      </div>
                      <div className="single-item">
                        <svg
                          {...heightAndWidth}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                        >
                          <path
                            d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"
                            fill="#0a2d43"
                          />
                        </svg>
                        <span>PHP</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image {...heightAndWidth} style={{marginBottom:"-42px"}} src={aspnet} alt="" />
                        <span style={{ marginTop: "-22px" }}>ASP.NET</span>
                      </div>
                      <div className="single-item">
                        <Image
                          {...heightAndWidth}
                          style={{ marginBottom:"-42px", marginRight: "-50px" }}
                          src={django}
                          alt=""
                        />
                        <span style={{ marginTop: "-22px" }}>Django</span>
                      </div>

                      <div className="single-item">
                        <svg
                          {...heightAndWidth}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path
                            d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"
                            fill="#0a2d43"
                          />
                        </svg>
                        <span>JAVA</span>
                      </div>

                      <div className="single-item">
                        <Image
                          {...heightAndWidth}
                          style={{ marginBottom:"-42px", marginRight: "-70px" }}
                          src={nodejs}
                          alt=""
                        />
                        <span style={{ marginTop: "-22px" }}>Node.js</span>
                      </div>
                      <div className="single-item">
                        <Image
                          {...heightAndWidth}
                          style={{ marginTop: "-42px", marginRight: "-70px" }}
                          src={codeigniter}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Codeigniter</span>
                      </div>
                      <div className="single-item">
                        <Image
                          {...heightAndWidth}
                          style={{ marginTop: "-42px" }}
                          src={koajs}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Koa.js</span>
                      </div>
                      <div className="single-item">
                        <Image
                          {...heightAndWidth}
                          style={{ marginTop: "-42px" }}
                          src={kotlin}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Flask</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image {...heightAndWidth} src={expressjs} alt="" />
                        <span style={{ marginTop: "-45px" }}>
                          Express.js
                        </span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          {...heightAndWidth}
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
                          {...heightAndWidth}
                          style={{ marginTop: "-42px", marginRight: "-60px" }}
                          src={mysql}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>MySQL</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          height={75}
                          width={80}
                          style={{ marginTop: "-42px" }}
                          src={apache1}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Apache</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          {...heightAndWidth}
                          style={{ marginTop: "-42px" }}
                          src={firebase}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Firebase</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          {...heightAndWidth}
                          style={{ marginTop: "-42px" }}
                          src={sqlite}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>SQLite</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          height={75}
                          width={80}
                          style={{ marginTop: "-42px" }}
                          src={oracle}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Oracle</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          {...heightAndWidth}
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
                          {...heightAndWidth}
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
                          {...heightAndWidth}
                          style={{ marginTop: "-42px" }}
                          src={mongodb}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>MongoDB</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          width={70}
                          height={75}
                          style={{ marginTop: "-42px" }}
                          src={apache1}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>
                          Apache CouchDB
                        </span>
                      </div>
                      <div className="single-item">
                        <Image
                          {...heightAndWidth}
                          style={{ marginTop: "-42px" }}
                          src={postgresqicon}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>PostgreSQL</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          {...heightAndWidth}
                          style={{ marginTop: "-42px" }}
                          src={couchbase}
                          alt=""
                        />
                        <span style={{ marginTop: "-45px" }}>Couchbase</span>{" "}
                      </div>
                      <div className="single-item">
                        <Image
                          {...heightAndWidth}
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
