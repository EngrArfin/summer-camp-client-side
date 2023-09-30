
import { NavLink, Outlet } from 'react-router-dom';
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet} from 'react-icons/fa';

import useCart from '../hooks/useCart';
import LearningMain from '../assets/icon/LearningMain.jpg';


const Dashboard = () => {
    const [cart]= useCart();
    return (
        <div className="drawer lg:drawer-open"> 
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
      <div className="drawer-side bg-[#D1A054] ">
      <img src={LearningMain} alt="" className="w-10 rounded-full mt-5 ml-24" />
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  ">
          
          <li><NavLink to="/dashboard/homeStudent"><FaHome></FaHome>Home Student</NavLink></li>
          <li><NavLink to="/dashboard/selectedCourse"><FaCalendarAlt></FaCalendarAlt>Selected Course</NavLink></li>
          <li><NavLink to="/dashboard/enrolledCourse"><FaWallet></FaWallet>Enrolled Course</NavLink></li>
          <li><NavLink to="/dashboard/playList"><FaWallet></FaWallet>Play List</NavLink></li>
          <li><NavLink to="/dashboard/paymentList"><FaWallet></FaWallet>Payment List</NavLink></li>
          
          <li><NavLink to="/dashboard/myCart"><FaShoppingCart></FaShoppingCart>My Cart
          <span className="badge badge-secondary">{cart?.length || 0 }</span>
          </NavLink></li>
          
          <div className="divider"></div>

          <li><NavLink to ="/"><FaHome></FaHome>  Home</NavLink></li>
          <li><NavLink to="/menu">  Our Menu</NavLink></li>
          <li><NavLink to="/order/salad">Order Food</NavLink></li>
          
        </ul>
      </div>
    </div>
    );
};

export default Dashboard; 