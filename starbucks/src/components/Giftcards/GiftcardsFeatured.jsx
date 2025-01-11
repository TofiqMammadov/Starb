import giftcardImg_1 from "../../assets/images/giftcard-1.png";
import giftcardImg_2 from "../../assets/images/giftcard-2.png";
import giftcardImg_3 from "../../assets/images/giftcard-3.png";
import giftcardImg_4 from "../../assets/images/giftcard-4.png";
import giftcardImg_5 from "../../assets/images/giftcard-5.png";
import giftcardImg_6 from "../../assets/images/giftcard-6.png";
import giftcardImg_7 from "../../assets/images/giftcard-7.png";
import giftcardImg_8 from "../../assets/images/giftcard-8.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useState } from "react";

export const GiftcardsFeatured = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiperChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="giftcards-container">
      <section className="giftcards-swiper">
        <h2 className="giftcards-title">Featured</h2>
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
          modules={[Navigation]}
          className="mySwiper"
        >
          {[giftcardImg_1, giftcardImg_2, giftcardImg_3, giftcardImg_4, giftcardImg_5, giftcardImg_6, giftcardImg_7, giftcardImg_8].map(
            (imgSrc, index) => (
              <SwiperSlide key={index}>
                <img src={imgSrc} alt={`Giftcard ${index + 1}`} />
              </SwiperSlide>
            )
          )}
        </Swiper>

        {/* Custom navigation arrows */}
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </section>
    </div>
  );
};

export default GiftcardsFeatured;
