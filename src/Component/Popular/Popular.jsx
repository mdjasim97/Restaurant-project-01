import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Popular = () => {
  const swiperRef = useRef(null);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("/foods.json") // Fetching from public directory
      .then((response) => response.json())
      .then((data) => setFoods(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(foods);

  return (
    <div className=" bg-[#fef2f1] lg:px-48 py-8 lg:py-28 p-4 relative">
      <div>
        <img src="" alt="" />
        <div className="flex justify-between">
          <div className="space-y-5">
            <p>
              <li className="list-square lg:text-xl font-bold text-[#BD1F17]">
                Crispy, Every Bite Taste
              </li>
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold font-Bebas">
              POPULAR FOOD reviewS
            </h1>
          </div>

          {/* lg device carousel control btn  */}
          <div className="mt-10 hidden lg:block">
            <button
              className=" btn rounded-full drop-shadow-xl text-2xl mr-5"
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
            slidesPerView={4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
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
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 4, spaceBetween: 40 },
            }}
          >
            <div>
              {foods?.map((review) => (
                <SwiperSlide key={review.id} className="my-5 lg:my-20">
                  <div
                    key={review.id}
                    className="bg-[#FFFFFF] flex p-5 flex-col justify-center items-center reviews-center"
                  >
                    <img src={review.image} alt="" className="lg:h-24" />

                    <h1 className="text-2xl font-Bebas">{review.name}</h1>
                    <p className="font-Inter">
                      {review.description.length > 20
                        ? review.description.slice(0, 20) + "..."
                        : review.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>

        {/* smail device carousel control btn  */}
        <div className="lg:hidden flex justify-center">
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
        className="hidden left-0 bottom-20 lg:block absolute"
        src="https://i.ibb.co.com/gM9C9zY/top-view-bell-sliced.png"
        alt=""
      />
    </div>
  );
};

export default Popular;
