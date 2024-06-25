import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const Login = () => {
  const [showPassWord, setShowPassWord] = useState(false);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <p>
          <Toaster></Toaster>
        </p>
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex items-center gap-5">
                  {" "}
                  <input
                    name="password"
                    type={showPassWord ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <span onClick={() => setShowPassWord(!showPassWord)}>
                    {showPassWord ? (
                      <FaRegEye></FaRegEye>
                    ) : (
                      <FaRegEyeSlash></FaRegEyeSlash>
                    )}
                  </span>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>Or signIn with</p>
            <div className="flex gap-4">
              <button className="btn">
                <FcGoogle className="text-3xl" />
              </button>
              <button className="btn">
                <FaGithub className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="">Have not Registered yet?</p>{" "}
        <Link to="/register">
          <p className="text-green-800 font-bold "> Register NOW!</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
