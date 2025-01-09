// Images
import giftcardImg_25 from "../../assets/images/giftcard-25.png";
import giftcardImg_26 from "../../assets/images/giftcard-26.png";
import giftcardImg_27 from "../../assets/images/giftcard-27.png";
import giftcardImg_28 from "../../assets/images/giftcard-28.png";
import giftcardImg_29 from "../../assets/images/giftcard-29.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper";

export const GiftcardsThankyou = () => {
  return (
    <div className="giftcards-container">
      <section className="giftcards-swiper">
        <h2 className="giftcards-title">thank you</h2>
        <Swiper
          dir="rtl"
          navigation={true}
          pagination={false}
          slidesPerView={1}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            360: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            610: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            730: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            850: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            900: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            1450: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={giftcardImg_25} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_26} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_27} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_28} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_29} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_26} alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default GiftcardsThankyou;
