import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "./AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [showPassWord, setShowPassWord] = useState(false);
  const { createUser } = useContext(AuthContext);

  const handleRegitser = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("photo");
    console.log(email, password, name, photo);

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result);
        toast.success("You have successfully registered");
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("couldn't register.");
      });
  };

  return (
    <div>
      <Toaster></Toaster>
      <h1 className="text-center font-bold text-3xl mt-16">Register Now</h1>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-7">
        <form className="card-body" onSubmit={handleRegitser}>
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
