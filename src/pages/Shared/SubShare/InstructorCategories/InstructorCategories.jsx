import { useEffect, useState } from "react";
import SubTitle from "../SubTitle/SubTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Rating } from "@smastrom/react-rating";

const InstructorCategories = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("teachers.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <section className="py-10">
      <SubTitle
        title={"Top Instructor"}
        subTitle={
          "Jeffrey crikey victoria sponge mush spiffing super arse over tit matie boy smashing. The little rotter off his nut codswallop.!"
        }
      ></SubTitle>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="py-10">
          {teachers.map((teacher) => (
            <SwiperSlide key={teacher._id} className="py-10">
              <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                <figure>
                  <img src={teacher.image} alt="Shoes" className="p-5"/>
                </figure>
                <div className="card-body ">
                  <h2 className="card-title">{teacher.name}</h2>
                  <p className=" uppercase py-3">{teacher.class}</p>
                </div>

                <div className=" flex card-actions justify-end">
                      <div className="badge badge-outline">{teacher.email}</div>
                      <div className="badge badge-outline">{teacher.number}</div>
                    </div>

              </div>
            </SwiperSlide>
          ))}
        </div>
        
      </Swiper>
    </section>
  );
};

export default InstructorCategories;
