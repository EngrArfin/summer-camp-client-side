import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import learn1 from "../../../../assets/PopularCategories/learn1.jpg";

import SubTitle from "../SubTitle/SubTitle";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const PopularCategories = () => {
  const [students, setReviews] = useState([]);
  useEffect(() => {
    fetch("students.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

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
            <SwiperSlide 
            key={student._id}
            >
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

                      <div >
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
                    <div className="card-title ">
                      {student.instructor}
                    </div>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div>
                      <button className="btn rounded-r-lg ">Select Enroll</button>
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

        {/* <SwiperSlide>
          <img src={learn2} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default PopularCategories;
