import profile from "../../../assets/icon/correct.png";
import LearningMain from "../../../assets/icon/LearningMain.jpg";

import { useContext, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOption = (
    <>
      <div className="dropdown p-2">
        <Link
          className="btn p-4 text-black-900 bg-blue-400"
          onClick={toggleDropdown}
          to="/"
        >
          Home
        </Link>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <a href="#">Main Home</a>
            <a href="#">Home Content</a>
            <a href="#">Home Call</a>
          </div>
        )}
      </div>

      <div className="dropdown p-2">
        <button
          className="btn p-4 text-black-900 bg-blue-400"
          onClick={toggleDropdown}
        >
          All COurse
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <Link to="/english">English Learning</Link>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
          </div>
        )}
      </div>

      <div className="dropdown p-2">
        <button
          className="btn p-4 text-black-900 bg-blue-400"
          onClick={toggleDropdown}
        >
          Blog Class
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
          </div>
        )}
      </div>

      <div className="dropdown p-2 ">
        <Link className="btn p-4 text-black-900 bg-blue-400" to="/contract">
          Contract
        </Link>
      </div>
      <div className="dropdown p-2">
        <Link className="btn p-4 text-black-900 bg-blue-400" to="/secret">
          Secret
        </Link>
      </div>

      <div className="dropdown p-2">
        <Link className="btn p-4 text-black-900 bg-blue-400" to="/register">
          Register
        </Link>
      </div>

      {user ? (
        <>
          <span>{user?.displayName}</span>
          <button
            onClick={handleLogOut}
            className="btn p-4 text-black-900 bg-blue-400"
          >
            LogOut
          </button>
        </>
      ) : (
        <>
          <Link className="btn p-4 text-black-900 bg-blue-400" to="/login">
            Login
          </Link>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar max-w-8xl fixed z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <img src={LearningMain} alt="" className="w-10 rounded-full" />
          <a className="btn btn-ghost normal-case text-xl ">Learning Course</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>

        <div className="navbar-end">
          <a className="btn p-4 text-black-900 bg-red-600">Enrollment</a>

          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>

          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={profile} />
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default NavBar;
