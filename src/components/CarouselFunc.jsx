import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import SwiperCore from "swiper";

SwiperCore.use([Autoplay]);

const CarouselFunc = () => {
  return (
    <div className="flex justify-center  mt-36 md:mt-14 ">
      <Swiper
        className="w-[80%]"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/WchbQPT/2018-01-19-03-largejpg.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Visit Saint Martin</h1>
                <p className="mb-5">
                  Visit Saint Martin of Bangladesh the only Coral sea beach of
                  the country. Here you will find your most outstanding
                  experience and can make a good memory
                </p>
                <button className="btn btn-warning">Learn more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/XtHmHkR/istockphoto-1137892510-1024x1024.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Visit Sundarbans</h1>
                <p className="mb-5">
                  Visit Sunderbans of Bangladesh . The largest mangrove forest
                  of the country. Home of The Royal Bengal Tiger! If you want to
                  take a selfie with baghmama feel free to join us
                </p>
                <button className="btn btn-warning">Learn more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/B2GFgnF/1000-F-517239905-Mz-Dgp-Nva-S32i0-XXm-K4d1pnv-Wgmin4o-AJ.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Visit Bandarbans</h1>
                <p className="mb-5">
                  Nestled in the verdant hills of Bangladesh, Bandarban is a
                  haven for nature enthusiasts and adventure seekers alike.
                  Explore the breathtaking beauty of lush green valleys,
                  cascading waterfalls, and serene lakes. Delight in the rich
                  cultural tapestry of indigenous tribes and their vibrant
                  traditions. Bandarban promises an unforgettable escape into
                  nature's untouched splendor.
                </p>
                <button className="btn btn-warning">Learn more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/FDCPx09/1646912135406.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Visit Rangamati</h1>
                <p className="mb-5">
                  Rangamati, the jewel of the Chittagong Hill Tracts in
                  Bangladesh, offers a tranquil retreat surrounded by scenic
                  landscapes and azure waters. Cruise through the serene Kaptai
                  Lake, dotted with charming islands and lush greenery.
                  Experience the vibrant culture of indigenous communities and
                  their unique crafts. Rangamati is a picturesque paradise for
                  those seeking peace and natural beauty.
                </p>
                <button className="btn btn-warning">Learn more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselFunc;
