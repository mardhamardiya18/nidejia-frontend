import { useRef } from "react";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types"; // Import tipe Swiper

export const Product = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="mt-[164px] container">
      <div className=" text-center">
        <h1 className=" text-text-primary text-[28px] font-bold">
          Our Latest Deals
        </h1>
        <p className=" text-text-secondary text-lg">
          Explore the beauty of architecture and living love
        </p>
      </div>

      <div className="relative mt-[30px]">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={20}
          slidesPerView={4}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide>
            <div className="w-[260px] h-[350px] rounded-[24px] overflow-hidden relative shadow-lg">
              <img
                src="/images/item1.png"
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="House"
              />

              <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#050211] via-[#050211]/90 via-30% to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full p-5 text-white z-10">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold">Party Every</p>
                    <p className="text-sm">$18,983/mo</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <i className="bx bxs-star text-orange-400" />
                    4.5/5
                  </div>
                </div>

                <div className="flex justify-between items-center mt-3 text-sm">
                  <div className="flex items-center gap-1">
                    <i className="bx bx-shape-square" />
                    529 sqft
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="bx bx-group" />3
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="bx bx-wifi" />
                    10gb
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[260px] h-[350px] rounded-[24px] overflow-hidden relative shadow-lg">
              <img
                src="/images/item2.png"
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="House"
              />

              <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#050211] via-[#050211]/90 via-30% to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full p-5 text-white z-10">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold">Party Every</p>
                    <p className="text-sm">$18,983/mo</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <i className="bx bxs-star text-orange-400" />
                    4.5/5
                  </div>
                </div>

                <div className="flex justify-between items-center mt-3 text-sm">
                  <div className="flex items-center gap-1">
                    <i className="bx bx-shape-square" />
                    529 sqft
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="bx bx-group" />3
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="bx bx-wifi" />
                    10gb
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[260px] h-[350px] rounded-[24px] overflow-hidden relative shadow-lg">
              <img
                src="/images/item3.png"
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="House"
              />

              <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#050211] via-[#050211]/90 via-30% to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full p-5 text-white z-10">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold">Party Every</p>
                    <p className="text-sm">$18,983/mo</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <i className="bx bxs-star text-orange-400" />
                    4.5/5
                  </div>
                </div>

                <div className="flex justify-between items-center mt-3 text-sm">
                  <div className="flex items-center gap-1">
                    <i className="bx bx-shape-square" />
                    529 sqft
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="bx bx-group" />3
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="bx bx-wifi" />
                    10gb
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[260px] h-[350px] rounded-[24px] overflow-hidden relative shadow-lg">
              <img
                src="/images/item4.png"
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="House"
              />

              <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#050211] via-[#050211]/90 via-30% to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full p-5 text-white z-10">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold">Party Every</p>
                    <p className="text-sm">$18,983/mo</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <i className="bx bxs-star text-orange-400" />
                    4.5/5
                  </div>
                </div>

                <div className="flex justify-between items-center mt-3 text-sm">
                  <div className="flex items-center gap-1">
                    <i className="bx bx-shape-square" />
                    529 sqft
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="bx bx-group" />3
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="bx bx-wifi" />
                    10gb
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[260px] h-[350px] rounded-[24px] overflow-hidden relative shadow-lg">
              <img
                src="/images/item1.png"
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="House"
              />

              <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#050211] via-[#050211]/90 via-30% to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full p-5 text-white z-10">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold">Party Every</p>
                    <p className="text-sm">$18,983/mo</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <i className="bx bxs-star text-orange-400" />
                    4.5/5
                  </div>
                </div>

                <div className="flex justify-between items-center mt-3 text-sm">
                  <div className="flex items-center gap-1">
                    <i className="bx bx-shape-square" />
                    529 sqft
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="bx bx-group" />3
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="bx bx-wifi" />
                    10gb
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className=" rounded-full p-[10px] bg-black-panel hover:bg-black-button transition focus:ring focus:ring-slate-500 flex items-center justify-center absolute left-0 -translate-x-1/2 top-[25%] -translate-y-[25%] z-10"
        >
          <i className="bx bx-chevron-left bx-md text-text-primary"></i>
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className=" rounded-full p-[10px] bg-black-panel hover:bg-black-button transition focus:ring focus:ring-slate-500 flex items-center justify-center absolute right-0 translate-x-1/2 top-[25%] -translate-y-[25%] z-10"
        >
          <i className="bx bx-chevron-right bx-md text-text-primary"></i>
        </button>
      </div>
    </div>
  );
};
