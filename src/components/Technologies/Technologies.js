import Link from "next/link";
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
import Tabs from "../Tabs/Tabs";
const Technologies = () => {
  return (
    <section className="fw-main-row ">
      <div className="fw-container-fluid rull-container">
        <section className="tech-used-section light-mode gray-mode">
          <div className="container">
            <div className="row">
              <div className="d-flex align-items-center">
                <div className="divider divider-primary mr-30"></div>
                <h2 className="heading__subtitle">Technologies We Work With</h2>
              </div>
            </div>
              <Tabs />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Technologies;
