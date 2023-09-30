import profile from "../../../assets/icon/correct.png";
import LearningMain from "../../../assets/icon/LearningMain.jpg";
import { useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const { email, user, logOut } = useContext(AuthContext);

  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOption = (
    <>
      <div className="dropdown p-2">
        <Link to="/" className="btn p-4 text-black-900 bg-blue-400">
          Home
        </Link>
      </div>

      <div className=" p-2">
        <Link to="/allCourse" className="btn p-4 text-black-900 bg-blue-400">
          All Course
        </Link>
      </div>

      <div className=" p-2">
        <Link to="/instructor" className="btn p-4 text-black-900 bg-blue-400">
          OUT INSTRUCTOR
        </Link>
      </div>

      <div className=" p-2 ">
        <Link className="btn p-4 text-black-900 bg-blue-400" to="/contract">
          Contract
        </Link>
      </div>
      <div className="p-2">
        <Link className="btn p-4 text-black-900 bg-blue-400" to="/register">
          Register
        </Link>
      </div>
      <div className="p-2">
        <Link className="btn p-4 mb-2 text-black-900 bg-blue-400" to="/login">
            Login
          </Link>
      </div>
      <div>
        <Link to="/dashboard/mycart">
          <button className="btn">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">{cart?.length || 0}</div>
          </button>
        </Link>
      </div>
    </>
  );

 const Option = (
    <>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <Link>Login</Link>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
        <Link className="justify-between" to="/register">
          
        </Link>
        {user ? (
        <>
          <span to="/dashboard/mycart">{user?.displayName || email?.displayEmail}</span>
          <Link className="justify-between" to="/dashboard/mycart">
            Dashboard
          </Link>
          <button onClick={handleLogOut} className="justify-between">
            Logout
          </button>
        </>
      ) : (
        <>
          
          <Link className="justify-between" to="/login">
            Login
          </Link>
        </>
      )} 

        </li>
        
      </ul>
    </div>
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Option}
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
          <label tabIndex={0} className="">
          <ul className="menu menu-horizontal px-1">{Option}</ul>
          </label>
          
        </div>
      </div>
    </>
  );
};

export default NavBar;

