import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

 import "swiper/css"; 
 import "swiper/css/free-mode"; 
import "swiper/css/pagination"; 


import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import SubTitle from "../SubTitle/SubTitle";
import { FaRegClosedCaptioning } from "react-icons/fa";

const ClassCard = ({ item }) => {
  const { name , img, rating , price,instructor,  _id} = item; 
  
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
        const cartItem ={menuItemId: _id, name , rating , img , price, instructor, email: user.email}
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); 
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food Added on the cart ",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Login for order food?",
        text: "without login You won't be able to to order food!",
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
  };
  return (

    <section className="my-20">
      <SubTitle
        title= {"Our Popular Class"}
        subTitle={
          "Jeffrey crikey victoria sponge mush spiffing . The little rotter off his nut codswallop.!"
        }
      ></SubTitle>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
              <div>
                <div className="card w-90 m-8 bg-base-100 shadow-xl">
                  <figure>
                    <img src={img} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <div className="items-end">
                      <div>
                        <h2 className="card-title">
                          <div className="badge text-end badge-primary">
                            <span>$ {price}</span>
                          </div>
                        </h2>
                      </div>
                      <div>
                        <div className="flex flex-col items-end ">
                          <FaRegClosedCaptioning
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>

                    <div className="card-title text-red-800">
                      {name}
                    </div>
                    <div className="card-title ">{instructor}</div>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div>
                      <button
                        onClick={() => handleAddToCart(item)} 
                        className="btn p-4 text-black-900 bg-blue-400 "
                      >
                        Enroll
                      </button>
                    </div>
                    <div className=" flex card-actions justify-end">
                      <div className="badge badge-outline">12 Lessons</div>
                      <div className="badge badge-outline">Available sit 0</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
    
      </Swiper>
    </section>

    
  );
};

export default ClassCard;

{/* <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="absolute right-0  mr-4 mt-4 bg-slate-900 text-white">
          ${price}
        </p>
        <div className="card-body items-center text-center">
          {" "}
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline border-0 border-b-4 mt-4"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div> */}

