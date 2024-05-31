import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slide1 from "../../public/cook-products-cooking-pasta-wallpaper-preview.jpg";
import slide2 from "../../public/smalhans-landingsside-toppbilde.webp";
import slide3 from "../../public/101282760.webp";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen rounded-xl"
            style={{
              backgroundImage: `url(${slide1})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content rounded-xl">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome to</h1>
                <h1 className="mb-5 text-5xl font-bold text-[#FF8E01]">
                  Orange Cafe
                </h1>
                <p className="mb-5">
                  Savor the culinary symphony at Orange Cafe, where every dish
                  is crafted with passion and precision. From tantalizing
                  appetizers to exquisite main courses and decadent desserts.
                </p>
                <Link
                  to="/all-foods"
                  className="btn border-none text-white font-semibold text-xl bg-[#FF8E01]"
                >
                  All Foods
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen rounded-xl"
            style={{
              backgroundImage: `url(${slide2})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content rounded-xl">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome to</h1>
                <h1 className="mb-5 text-5xl font-bold text-[#FF8E01]">
                  Orange Cafe
                </h1>
                <p className="mb-5">
                  Savor the culinary symphony at Orange Cafe, where every dish
                  is crafted with passion and precision. From tantalizing
                  appetizers to exquisite main courses and decadent desserts.
                </p>
                <Link
                  to="/all-foods"
                  className="btn border-none text-white font-semibold text-xl bg-[#FF8E01]"
                >
                  All Foods
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen rounded-xl"
            style={{
              backgroundImage: `url(${slide3})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content rounded-xl">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome to</h1>
                <h1 className="mb-5 text-5xl font-bold text-[#FF8E01]">
                  Orange Cafe
                </h1>
                <p className="mb-5">
                  Savor the culinary symphony at Orange Cafe, where every dish
                  is crafted with passion and precision. From tantalizing
                  appetizers to exquisite main courses and decadent desserts.
                </p>
                <Link
                  to="/all-foods"
                  className="btn border-none text-white font-semibold text-xl bg-[#FF8E01]"
                >
                  All Foods
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
