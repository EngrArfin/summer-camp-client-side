import { Link, NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome, FaWallet } from "react-icons/fa";

//import useCart from "../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Dashboard = () => {
  //const [cart] = useCart();
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const Dash = (
    <>
      <div>
        {user ? (
          <>
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-12 rounded-full mt-5 ml-24"
            />

            <div className=" ml-8 mt-2" >
              {user.email}
            </div>
            <br />
            <span className="ml-20 text-black-600 uppercase front-bold ">
                  {user?.displayName}
                </span>

          </>
        ) : (
          <>
            <Link className="justify-between" to="/login">
              Login
            </Link>
          </>
        )}
      </div>
    </>
  );

  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side  text-white bg-[#018170] ">
        <ul className="menu menu-horizontal px-1">{Dash}</ul>
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  ">
          <div className="divider">User</div>
          <li>
            <NavLink to="/dashboard/homeStudent">
              <FaHome></FaHome>Home Student
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/selectedCourse">
              <FaCalendarAlt></FaCalendarAlt>Selected Course
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/enrolled">
              <FaWallet></FaWallet>Enrolled Course
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/playList">
              <FaWallet></FaWallet>Play List
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
              <FaWallet></FaWallet>Payment{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentList">
              <FaWallet></FaWallet>Payment List
            </NavLink>
          </li>

          {/* <li><NavLink to="/dashboard/myCart"><FaShoppingCart></FaShoppingCart>My Cart
          <span className="badge badge-secondary">{cart?.length || 0 }</span>
          </NavLink></li> */}

          <div className="divider">Home</div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Main Site
            </NavLink>
          </li>

          <li>
            <NavLink to="/allCourse"> All Course</NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={handleLogOut}>
              <FaHome></FaHome>Log Out
            </NavLink>
          </li>

          <div className="divider">Admin</div>
          <li>
            <NavLink to="/dashboard/homeStudent">
              <FaHome></FaHome>Home Admin
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/selectedCourse">
              <FaCalendarAlt></FaCalendarAlt>Add Course
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/enrolled">
              <FaWallet></FaWallet>Enrolled User
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/playList">
              <FaWallet></FaWallet>User Management
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
              <FaWallet></FaWallet>Payment
            </NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
