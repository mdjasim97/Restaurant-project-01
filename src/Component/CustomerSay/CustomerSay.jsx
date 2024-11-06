import { useEffect, useRef, useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CustomerSay = () => {
  const swiperRef = useRef(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json") // Fetching from public directory
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(reviews);
  return (
    <div className="lg:px-48 py-8 lg:py-28 p-4 relative">
      <div>
        <div className="flex justify-between">
          <div className="space-y-5">
            <p>
              <li className="list-square lg:text-xl font-bold text-[#BD1F17]">
                Crispy, Every Bite Taste
              </li>
            </p>
            <h1 className="text-5xl lg:text-6xl font-Bebas">
              What Some of my Customers Say
            </h1>
          </div>

          {/* large device carousel control button  */}
          <div className="hidden lg:block">
            <button
              className="btn rounded-full text-2xl drop-shadow-xl mr-5"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <GrFormPrevious />
            </button>
            <button
              className="btn rounded-full text-2xl drop-shadow-xl"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <MdNavigateNext />
            </button>
          </div>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            // centeredSlides={true}
            slidesPerView={1}
            // autoplay={{
            //   delay: 6000,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="mySwiper"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 1, spaceBetween: 20 },
              1024: { slidesPerView: 1, spaceBetween: 30 },
              1280: { slidesPerView: 1, },
            }}
          >
            <div>
              {reviews?.map((review) => (
                <SwiperSlide key={review.id} className="my-5 lg:mt-16">
                  <div
                    key={review.id}
                    className="flex flex-col lg:flex-row flex-col-reverse w-full"
                  >
                    <div className="bg-[#FEBF00] p-10 flex-1">
                      <p className="text-xl lg:text-center lg:p-5">
                        <span className="text-5xl font-bold">“</span>
                        {review.comment}
                      </p>

                      <div className="flex justify-between items-center lg:mt-16">
                        <div>
                          <h3 className="font-Bebas text-xl">
                            {review.reviewer}
                          </h3>
                          <p className="text-sm font-Roboto text-[#333]">
                            {review.reviewerLocation}
                          </p>
                        </div>

                        <img
                          src={review.image}
                          alt=""
                          className="h-16 w-16 rounded-full"
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <iframe
                        // width="560"
                        // height="420"
                        className="w-full h-[320px] lg:h-full"
                        src={review.video}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>

        {/* small device carousel control btn  */}
        <div className="lg:hidden flex my-5 justify-center">
          <button
            className="btn rounded-full drop-shadow-xl mr-5"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <GrFormPrevious />
          </button>
          <button
            className="btn rounded-full drop-shadow-xl"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <MdNavigateNext />
          </button>
        </div>
      </div>

      <img
        className="hidden left-0 bottom-60 lg:block absolute"
        src="https://i.ibb.co.com/nfMSYsm/bg-say.png"
        alt=""
      />
    </div>
  );
};

export default CustomerSay;
