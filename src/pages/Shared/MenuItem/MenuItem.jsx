import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
//import useCart from "../../hooks/useCart";

const MenuItem = ({ item }) => {
 const { name, instructor, image, price, schedule, description, _id } = item;
 
 
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  //const [, refetch] = useCart();

  const handleAddToCart = item => {
    console.log(item);
    if(user && user.email){

      const cartItem = {menuItemId: _id, name, instructor, image, price, schedule, description,  email: user.email}
      fetch('http://localhost:5000/carts',{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Food Added on the cart ',
            showConfirmButton: false,
            timer: 1500
          })

        }
      })
    }
    else {
      Swal.fire({
        title: "lease login to enroll course?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }

  }


  return (
    <div className="flex gap-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" className="" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>IELTS, Sponek English , Grammer Practice etc...</p>
          <div className="card-actions">
            <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;


/* const MenuItem = ({ item }) => {
  const { name, instructor, image, price, schedule, description } = item;
  return (
    <div className="flex gap-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" className="" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>IELTS, Sponek English , Grammer Practice etc...</p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem; */
