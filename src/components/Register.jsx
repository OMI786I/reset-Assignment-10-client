import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [showPassWord, setShowPassWord] = useState(false);
  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-16">Register Now</h1>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-7">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="image"
              className="input input-bordered"
            />
          </div>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="flex justify-center items-center">
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
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <Link to="/login">Login Page</Link>
      </div>
    </div>
  );
};

export default Register;
