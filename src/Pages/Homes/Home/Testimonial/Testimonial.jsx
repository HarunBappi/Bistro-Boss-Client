import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
export default function Testimonial() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <section className="my-8">
      <SectionTitle
        subHeading="What Our Client say"
        heading="Testimonial"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="w-10/12 flex flex-col items-center mx-auto gap-2">
              <Rating className="text-center" style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <div className="text-7xl">
              <i class="fa-solid fa-quote-left"></i>
              </div>
              <p className="text-center">{review.details}</p>
              <h3 className="text-3xl text-orange-400">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
