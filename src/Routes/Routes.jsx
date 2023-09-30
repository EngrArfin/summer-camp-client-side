import {
    createBrowserRouter,

} from "react-router-dom";
  
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Contract from "../pages/Home/Contract/Contract";
import Login from "../components/Login/Login";
import Register from "../components/Registration/Register";

import AllCourse from "../pages/Home/AllCourse/AllCourse";
import InstructorCategories from "../pages/Shared/SubShare/InstructorCategories/InstructorCategories";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import HomeStudent from "../pages/Dashboard/HomeStudent/HomeStudent";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import PaymentList from "../pages/Dashboard/PaymentList/PaymentList";
import HomeAdmin from "../pages/Dashboard/Admin/HomeAdmin/HomeAdmin";
import UserList from "../pages/Dashboard/Admin/UserList/UserList";
import AddCourse from "../pages/Dashboard/Admin/AddCourse/AddCourse";
import EnrolledCourse from "../pages/Dashboard/EnrolledCourse/EnrolledCourse";
import PlayList from "../pages/Dashboard/PlayList/PlayList";
import ManageCourse from "../pages/Dashboard/Admin/ManageCourse/ManageCourse";

  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allCourse',
                element: <AllCourse></AllCourse>
            },

            {
                path: '/instructor',
                element: <InstructorCategories></InstructorCategories>
            },
            {
                path: '/contract',
                element: <Contract></Contract>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
           
           
        ]
    },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
              path: 'homeStudent',
              element: <HomeStudent></HomeStudent>
            },
            {
              path: 'selectedCourse',
              element: <SelectedClass></SelectedClass>
            },
            {
              path: 'enrolledCourse',
              element: <EnrolledCourse></EnrolledCourse>
            },
            {
              path: 'enrolledClass',
              element: <EnrolledCourse></EnrolledCourse>
            },
            {
              path: 'playList',
              element: <PlayList></PlayList>
            },

            {
              path: 'myCart',
              element: <MyCart></MyCart>
            },
            {
              path: 'paymentList',
              element: <PaymentList></PaymentList>
            },
            
      
            //Admin Routes Here
            {
              path: 'homeadmin',
              element: <HomeAdmin></HomeAdmin> //<AdminRoute></AdminRoute> 
            },
            {
              path: 'userList',
              element: <UserList></UserList> 
            },
            {
              path: 'addCourse',
              element: <AddCourse></AddCourse>
              
            },
            {
              path: 'manageCourse',
              element: <ManageCourse></ManageCourse>
            }
          ]
      }  

  ])