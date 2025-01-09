// Images
import giftcardImg_20 from "../../assets/images/giftcard-20.png";
import giftcardImg_21 from "../../assets/images/giftcard-21.png";
import giftcardImg_22 from "../../assets/images/giftcard-22.png";
import giftcardImg_23 from "../../assets/images/giftcard-23.png";
import giftcardImg_24 from "../../assets/images/giftcard-24.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper";

export const GiftcardsBirthday = () => {
  return (
    <div className="giftcards-container">
      <section className="giftcards-swiper">
        <h2 className="giftcards-title">birthday</h2>
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
            <img src={giftcardImg_20} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_21} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_22} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_23} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_24} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_22} alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default GiftcardsBirthday;
