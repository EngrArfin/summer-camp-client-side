import SubTitle from "../SubTitle/SubTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { useEffect, useState } from "react";

const BrowseCategories = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section>
      <SubTitle
        title={"Browse Online Course Categories "}
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
        <div>
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="card card-compact w-96 py-5 bg-base-100 items-center shadow-xl">
                <figure>
                <img src={review.img} alt="Shoes" className="p-8"/>

                </figure>
                <div className="card-body">
                  <h2 className="card-title">{review.name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default BrowseCategories;
