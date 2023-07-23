import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/swiper.css";
// import "swiper/css/free-mode.css";
// import "swiper/css/pagination.css";
import "swiper/swiper-bundle.css";

import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { TbDeviceDesktopAnalytics } from "react-icons/tb";

import { FreeMode, Pagination } from "swiper";

// data
export const serviceData = [
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "I create designs that inspire and delight people, creating a lasting impression on those who experience them.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "I'll never stop learning, evolving, and innovating in order to produce extraordinary solutions that have a good impact on the world.",
  },
  {
    icon: <TbDeviceDesktopAnalytics />,
    title: "Data Science",
    description:
      "I am exceptional at drawing meaningful conclusions from data, enabling wise decisions, and fostering achievement.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icons */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
