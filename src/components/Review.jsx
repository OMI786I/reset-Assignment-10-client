import { FaStar } from "react-icons/fa";
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
const Review = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col w-full ">
        <div className="md:w-[50%] bg-yellow-500 font-mono text-3xl text-center flex items-center">
          Our Customer Speaks for us
        </div>
        <div className="md:w-[49%]">
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
              <div className="hero">
                <div className="hero-content text-neutral-content text-center">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-xl font-bold flex text-yellow-600">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </h1>
                    <h1 className="mb-5 text-3xl font-bold flex text-black ">
                      {" "}
                      Great Value for Money
                    </h1>
                    <p className="mb-5 text-left text-black">
                      Booking with [TourWebsiteName] was one of the best
                      decisions for my vacation. The prices were very reasonable
                      for the amount of activities and quality of service
                      provided. The accommodations were top-notch and
                      conveniently located. Our group was small, which made the
                      experience more intimate and personalized. The local
                      cuisine experiences arranged by the tour were absolutely
                      fantastic. I'll definitely book with [TourWebsiteName]
                      again for my next adventure.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero">
                <div className="hero-content text-neutral-content text-center">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-xl font-bold flex text-yellow-600">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </h1>
                    <h1 className="mb-5 text-3xl font-bold flex text-black ">
                      {" "}
                      Well-Organized and Fun
                    </h1>
                    <p className="mb-5 text-left text-black">
                      I had a wonderful time on my recent trip organized by
                      [TourWebsiteName]. The itinerary was thoughtfully curated,
                      with plenty of diverse activities that showcased the best
                      of the region. Our guide was very enthusiastic and made
                      sure everyone in the group was enjoying themselves. The
                      only minor issue was the occasional delay in
                      transportation, but it didn't detract from the overall
                      experience. I would happily recommend [TourWebsiteName] to
                      friends and family.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero">
                <div className="hero-content text-neutral-content text-center">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-xl font-bold flex text-yellow-600">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </h1>
                    <h1 className="mb-5 text-3xl font-bold flex text-black ">
                      {" "}
                      Exceptional Experience
                    </h1>
                    <p className="mb-5 text-left text-black">
                      I recently booked a trip through [TourWebsiteName] and it
                      exceeded all my expectations. From the moment I landed,
                      the logistics were seamless. Our tour guide was
                      knowledgeable and friendly, and the itinerary was
                      well-planned, offering a perfect balance between
                      sightseeing and leisure time. Highlights included a
                      private tour of the ancient ruins and a sunset cruise
                      along the coast. I highly recommend [TourWebsiteName] for
                      anyone looking to have a stress-free and memorable travel
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
