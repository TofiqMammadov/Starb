// Images
import giftcardImg_1 from "../../assets/images/giftcard-1.png";
import giftcardImg_2 from "../../assets/images/giftcard-2.png";
import giftcardImg_3 from "../../assets/images/giftcard-3.png";
import giftcardImg_4 from "../../assets/images/giftcard-4.png";
import giftcardImg_5 from "../../assets/images/giftcard-5.png";
import giftcardImg_6 from "../../assets/images/giftcard-6.png";
import giftcardImg_7 from "../../assets/images/giftcard-7.png";
import giftcardImg_8 from "../../assets/images/giftcard-8.png";
import giftcardImg_9 from "../../assets/images/giftcard-9.png";
import giftcardImg_10 from "../../assets/images/giftcard-10.png";
import giftcardImg_11 from "../../assets/images/giftcard-11.png";
import giftcardImg_12 from "../../assets/images/giftcard-12.png";
import giftcardImg_13 from "../../assets/images/giftcard-13.png";
import giftcardImg_14 from "../../assets/images/giftcard-14.png";
import giftcardImg_15 from "../../assets/images/giftcard-15.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper";

export const GiftcardsFeatured = () => {
  return (
    <div className="giftcards-container">
      <section className="giftcards-swiper">
        <h2 className="giftcards-title">featured</h2>
        <Swiper
          dir="rtl"
          navigation={true}
          pagination={false}
          spaceBetween={10}
          slidesPerView={5}
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
              spaceBetween: 20,
            },
            1450: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={giftcardImg_1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_10} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_11} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_12} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_13} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_14} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={giftcardImg_15} alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default GiftcardsFeatured;
