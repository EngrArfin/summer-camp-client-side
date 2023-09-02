import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import Swal from "sweetalert2";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import SubTitle from "../SubTitle/SubTitle";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const PopularCategories = ({ item }) => {
/*   const {name, img, price,instructor, _id} = item;
 */  const [students, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      /* const cartItem ={menuItemId: _id,name, img , price,  email: user.email} */
      fetch("http://localhost:5000/carts", {
        method: 'POST',
        headers: {
          'content-type': 'application.json'
        },
        body: JSON.stringify(cartItem)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Course Add on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
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
  };

  return (
    <section className="my-20">
      <SubTitle
        title={"Our Popular Class"}
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
        <div>
          {students.map((student) => (
            <SwiperSlide key={student._id}>
              <div>
                <div className="card w-90 m-8 bg-base-100 shadow-xl">
                  <figure>
                    <img src={student.img} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <div className="items-end">
                      <div>
                        <h2 className="card-title">
                          <div className="badge text-end badge-primary">
                            <span>$ {student.price}</span>
                          </div>
                        </h2>
                      </div>

                      <div>
                        <div className="flex flex-col items-end ">
                          <Rating
                            style={{ maxWidth: 100 }}
                            value={student.rating}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>

                    <div className="card-title text-red-800">
                      {student.name}
                    </div>
                    <div className="card-title ">{student.instructor}</div>
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
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default PopularCategories;
