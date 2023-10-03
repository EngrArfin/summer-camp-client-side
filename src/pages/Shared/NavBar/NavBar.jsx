import LearningMain from "../../../assets/icon/LearningMain.jpg";
import { useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useState } from "react";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Function to toggle between dark and light themes
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const bodyClass = isDarkMode ? "dark-theme" : "light-theme";
  document.body.className = bodyClass;
  
  const navOption = (
    <>
      <div className="p-2">
        <Link onClick={toggleTheme}
          to="/"
          className="btn btn-nav hover:bg-blue-500 hover:text-white"
        >
          Home
        </Link>
      </div>

      <div className="p-2">
        <Link
          to="/allCourse"
          className="btn btn-nav hover:bg-blue-500 hover:text-white"
        >
          All Course
        </Link>
      </div>

      <div className="p-2">
        <Link
          to="/instructor"
          className="btn btn-nav hover:bg-blue-500 hover:text-white"
        >
          OUT INSTRUCTOR
        </Link>
      </div>

      <div className="p-2">
        <Link
          className="btn btn-nav hover:bg-blue-500 hover:text-white"
          to="/contract"
        >
          Contract
        </Link>
      </div>
    </>
  );

  const Option = (
    <>
      <div>
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <>
                  {user.email}
                  <span className=" justify-between text-start">
                    {user?.displayName}
                  </span>

                  <Link className=" justify-between text-start" to="/dashboard/myCart">
                    Dashboard
                  </Link>
                  <Link
                    onClick={handleLogOut}
                    className="justify-between text-start hover:text-red-400"
                  >
                    Logout
                  </Link>
                </>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link
              className="btn btn-nav hover:bg-blue-500 hover:text-white"
              to="/login"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </>
  );

  return (
    <>
      <div className="navbar max-w-8xl fixed z-10 bg-opacity-70 bg-blue-900 text-white py-2">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-900 rounded-box w-52"
            >
              {navOption}
            </ul>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-900 rounded-box w-52"
            >
              {Option}
            </ul>
          </div>
          <img src={LearningMain} alt="" className="w-10 rounded-full" />
          <a className="btn btn-ghost normal-case text-xl ">
            Language <span className="text-red-800">Learning</span> 
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/dashboard/payment"
            className="btn btn-enrollment hover:bg-red-600 hover:text-white"
          >
            Enrollment
          </Link>
          <label tabIndex={0} className="">
            <ul className="menu menu-horizontal px-1">{Option}</ul>
          </label>
        </div>
      </div>
    </>
  );
};

export default NavBar;
