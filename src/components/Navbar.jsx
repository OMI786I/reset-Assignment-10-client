import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleSignOut = () => {
    logout();
  };

  const navLink = (
    <div className="flex-row md:flex-col gap-6  ">
      <NavLink to="/">
        <button className="hover:border-yellow-500 border-transparent border-2 duration-150 hover:text-yellow-500 font-bold p-2 rounded-lg focus:border-yellow-500 focus:text-yellow-500">
          Home
        </button>
      </NavLink>
      <NavLink to="/allTouristSpot">
        <button className="hover:border-yellow-500 border-transparent border-2 duration-150 hover:text-yellow-500 font-bold p-2 rounded-lg focus:border-yellow-500 focus:text-yellow-500">
          All Tourists Spot
        </button>
      </NavLink>
      <NavLink to="/addTouristSpot">
        <button className="hover:border-yellow-500 border-transparent border-2 duration-150 hover:text-yellow-500 font-bold p-2 rounded-lg focus:border-yellow-500 focus:text-yellow-500">
          Add Tourist Spot
        </button>
      </NavLink>
      <NavLink to="/myList">
        <button className="hover:border-yellow-500 border-transparent border-2 duration-150 hover:text-yellow-500 font-bold p-2 rounded-lg focus:border-yellow-500 focus:text-yellow-500">
          My List
        </button>
      </NavLink>
    </div>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl ">
            <img src="/Eagle-Logo-Graphics-1-42-580x386.jpg" className="w-10" />
            <h1 className="hidden md:inline">Vromon</h1>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end md:gap-2">
          <div className="tooltip tooltip-bottom" data-tip="change theme">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" onChange={handleToggle} />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>

          {user ? (
            <div className="flex gap-2">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <div className="avatar">
                  <div className=" w-12 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>
              </div>
              <button className="btn" onClick={handleSignOut}>
                LogOut
              </button>
            </div>
          ) : (
            <div>
              {" "}
              <NavLink to="login">
                <button className="btn btn-warning">Login</button>
              </NavLink>
              <NavLink to="register">
                <button className="btn btn-warning">Register</button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
