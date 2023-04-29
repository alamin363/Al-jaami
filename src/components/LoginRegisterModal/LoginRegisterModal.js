"use client";
import Loader from "@/components/Loader/Loader";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useTitle from "../hooks/useTitle";
const Login = ({ modalopen, setModalOpen }) => {
  const [open, setOpen] = useState({
    login: true,
    register: false,
  });
  // get the path name
  const router = useRouter();

  const onOpenLogin = () => {
    setOpen({
      login: true,
      register: false,
    });
  };
  
  // // Register
  const onOpenRegister = () => {
    setOpen({
      login: false,
      register: true,
    });
  };
  useEffect(() => {
    //   if (router.pathname == "/login") {
    //     onOpenLogin();
    //   }
    if (modalopen) {
      onOpenLogin();
    }
  }, []);
  return (
    <div>
      <div
        className={`login-popup ${open.login ? "active" : "inActive"}`}
        id="login-popup"
      >
        <div className="login-popup-wrapper">
          <form className="login-popup__form">
            <div className="d-flex justify-content-between">
              <h3 className="login-popup__title">Login!</h3>
              <button
                style={{ padding: "5px 10px", border: "1px solid" }}
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
            <p className="login-popup__desc">
              Connect, organize and get things done to keep your IT business
              safe.
            </p>
            <div className="form-group mb-20">
              <i className="icon-mail input-icon"></i>
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group mb-20">
              <i className="icon-lock input-icon"></i>
              <input
                type="password"
                className="form-control"
                placeholder="********"
              />
            </div>
            <div className="d-flex align-items-center justify-content-between mb-20">
              <div className="custom-control custom-checkbox d-flex align-items-center">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" for="customCheck1">
                  Remember Me!
                </label>
              </div>
              <a href="#" className="fz-14 font-weight-bold color-secondary">
                Forget Password?
              </a>
            </div>
            <button
              type="submit"
              className="btn btn__primary btn__block btn__xl"
            >
              Login
            </button>
          </form>
          <div className="d-flex justify-content-center align-items-center mt-20">
            <span className="color-white fz-14 font-weight-bold">
              Don’t Have An Account?
            </span>
            <button
              onClick={onOpenRegister}
              id="go-register"
              className="go-register fz-14 font-weight-bold"
            >
              <span>Register Here</span>
              <i className="icon-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      {/* register */}
      <div
        className={`login-popup ${open.register ? "active" : "inActive"}`}
        id="register-popup"
      >
        <div className="login-popup-wrapper">
          <form className="login-popup__form">
            <div className="d-flex justify-content-between">
              <h3 className="login-popup__title">Register!</h3>
              <button
                style={{ padding: "5px 10px", border: "1px solid" }}
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
            <p className="login-popup__desc">
              Connect, organize and get things done to keep your IT business
              safe.
            </p>
            <div className="form-group mb-20">
              <i className="icon-mail input-icon"></i>
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group mb-20">
              <i className="icon-lock input-icon"></i>
              <input
                type="password"
                className="form-control"
                placeholder="********"
              />
            </div>
            <div className="d-flex align-items-center justify-content-between mb-20">
              <div className="custom-control custom-checkbox d-flex align-items-center">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck2"
                />
                <label className="custom-control-label" for="customCheck2">
                  I read & agree to <a href="#">Terms & Conditions</a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn__primary btn__block btn__xl"
            >
              Register
            </button>
          </form>
          <div className="d-flex justify-content-center align-items-center mt-20">
            <span className="color-white fz-14 font-weight-bold">
              Have An Account?
            </span>
            <button
              onClick={onOpenLogin}
              id="go-login"
              className="go-login fz-14 font-weight-bold"
            >
              <span>Login Here</span>
              <i className="icon-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
