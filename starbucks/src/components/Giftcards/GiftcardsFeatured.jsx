import { Giftcards } from "../../database/db.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useState } from "react";
import { Link } from "react-router-dom";

export const GiftcardsFeatured = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiperChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="giftcards-container px-4 lg:px-8 container mx-auto">
      <section className="giftcards-swiper">
        <h2 className="giftcards-title text-2xl lg:text-3xl font-semibold mb-6">
          Featured
        </h2>
        <Swiper
          onSlideChange={(swiper) => handleSwiperChange(swiper)}
          onSwiper={(swiper) => handleSwiperChange(swiper)}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          spaceBetween={0}
          slidesPerGroup={4}
          slidesPerView={4}
          breakpoints={{
            340: { slidesPerView: 2, slidesPerGroup: 2 }, // Tablet
            768: { slidesPerView: 3, slidesPerGroup: 3 }, // Small laptops
            1024: { slidesPerView: 4, slidesPerGroup: 4 }, // Desktops
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {Giftcards.slice(0,8).map((img, index) => (
            <SwiperSlide key={index}  className="flex items-center justify-center">
              <Link to={`/giftcard-detail/${img.id}`}>
                <img
                  src={img.img}
                  alt={`Giftcard ${index + 20}`}
                  className="w-full h-auto object-cover rounded-md shadow-md"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation arrows */}
        <div className="swiper-button-prev bg-gray-200 hover:bg-gray-300 rounded-full p-2 absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer" />
        <div className="swiper-button-next bg-gray-200 hover:bg-gray-300 rounded-full p-2 absolute top-1/2 transform -translate-y-1/2 right-4 z-10 cursor-pointer" />
      </section>

    </div>
  );
};

export default GiftcardsFeatured;



