 //import { FaTrashAlt } from 'react-icons/fa';
 //import Swal from 'sweetalert2';
import SubTitle from '../../Shared/SubShare/SubTitle/SubTitle';
//import useCart from '../../../hooks/useCart';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from "react";
//import { FaCalendarAlt, FaVideo } from "react-icons/fa";
//import { BiSolidVideos } from "react-icons/bi";



const PaymentList = () => {

  const [students, setStudents] = useState([]);
  //const year = new Date().getFullYear();

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; 
const day = currentDate.getDate();

  useEffect(() => {
    fetch('http://localhost:5000/courses')
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  const total = students.reduce((sum, item) => item.price + sum, 0);

 /* const [cart, refetch] = useCart();
  console.log(cart);
  
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/courses/${item._id}`,
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
 */
    return (
        <div className="w-full">
      <SubTitle
        heading={"Payment History"}
        subHeading={""}
      ></SubTitle> 
    <Helmet>
      <title>Learn Language | Payment History</title>
    </Helmet>
    <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
       <h3 className="text-3xl">Total Course:{students.length} </h3>
       <h3 className="text-3xl">Total Amount: ${total} </h3> 
      <button className="btn btn-warning btn-sm">Payment</button>
    </div>
    
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
      
        <thead>
          <tr className="uppercase">
            <th>#</th>
            <th>User</th>
            <th>Course Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id}>
              <td>{index + 1}</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={student.img}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>{student.name}</td>
              <td className="text-start">${student.price}</td>
              <td>
              {day}/{month}/{year}

                {/* <button
                   onClick={() => handleDelete(item)} 
                  className="btn btn-ghost btn-sm text-white bg-red-600"
                >
                  <FaTrashAlt></FaTrashAlt>
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>    
  </div>
    );
};

export default PaymentList;