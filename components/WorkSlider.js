// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/Netflix-Mini.png",
          url: "https://netflix-mini-ivory.vercel.app/",
        },
        {
          title: "title",
          path: "/Portfolio.png",
          url: "https://portfolio-site-theta-beryl.vercel.app/",
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: "title",
    //       path: "/thumb4.jpg",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb1.jpg",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb2.jpg",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb3.jpg",
    //     },
    //   ],
    // },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// import "swiper/swiper.css";
// import "swiper/css/free-mode.css";
// import "swiper/css/pagination.css";
import "swiper/swiper-bundle.css";

import { Pagination } from "swiper";

import { BsArrowRight } from "react-icons/bs";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    {/* Wrap the image with an anchor tag */}
                    <a
                      href={image.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* image */}
                        <Image
                          src={image.path}
                          width={500}
                          height="300"
                          alt=""
                        />
                        {/* overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title part 1 */}
                            <div className="delay-100">LIVE</div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            {/* icon */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
