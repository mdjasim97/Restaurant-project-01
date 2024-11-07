import { FiPhoneCall } from "react-icons/fi";

const Experience = () => {
  return (
    <div className="lg:px-48 py-8 lg:py-28 m-4 relative">
      <div>
        {/* top part  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img
              src="https://i.ibb.co.com/Wf42Zv6/experience.png"
              alt=""
              className="w-full"
            />

            <div className="flex items-center bg-white absolute top-5 left-5 p-2 rounded-lg sm:w-1/2 xl:w-1/3">
              <div
                className="radial-progress text-[#FEBF00] mr-2"
                style={{ "--value": 85 }}
                role="progressbar"
              >
                <p className="text-[#333] text-2xl sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl">
                  50+
                </p>
              </div>

              <div className="text-xl xl:ml-5 2xl:ml-10">
                Market <br /> Experiences
              </div>
            </div>
          </div>

          {/*===================== Tabs Section coding start =======================*/}
          <div role="tablist" className="tabs tabs-bordered ">
            {/* =========== About Tab part start ==========*/}
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab checked:bg-[#BD1F17] checked:text-[#fff] text-sm md:text-3xl md:h-16 lg:text-sm lg:h-8"
              aria-label="About"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content py-10 space-y-3">
              <h1 className="font-Bebas text-4xl sm:text-7xl md:text-8xl lg:text-5xl 2xl:text-6xl">
                Exceptional culinary experience and delicious food
              </h1>
              <p className="font-Roboto text-[#333]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                non sed est cursus. Vel hac convallis ipsum, facilisi odio
                pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
                consectetur adipiscing elit do eiusmod tempor incididunt ut
                labore et dolore magna minim veniam nostrud exercitation.
              </p>

              <div className="flex justify-between items-center">
                <button className="btn font-Roboto uppercase bg-[#FEBF00] text-[#0A1425]">
                  About More
                </button>

                <p className="font-bold flex items-center p-2 border border-dashed text-lg">
                  <FiPhoneCall className="text-[#BD1F17] h-5 w-5 text-lg mr-2" />
                  0178 429 3797
                </p>
              </div>
            </div>
            {/* =========== About Tab part end ==========*/}

            {/* =========== Experience Tab part start ==========*/}
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab checked:bg-[#BD1F17] checked:text-[#fff] text-sm md:text-3xl md:h-16 lg:text-sm lg:h-8"
              aria-label="Experience"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content py-10 space-y-3">
              <h1 className="font-Bebas text-4xl sm:text-7xl md:text-8xl lg:text-5xl 2xl:text-6xl">
                Exceptional culinary experience and delicious food
              </h1>
              <p className="font-Roboto text-[#333]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                non sed est cursus. Vel hac convallis ipsum, facilisi odio
                pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
                consectetur adipiscing elit do eiusmod tempor incididunt ut
                labore et dolore magna minim veniam nostrud exercitation.
              </p>

              <div className="flex justify-between items-center">
                <button className="btn font-Roboto uppercase bg-[#FEBF00] text-[#0A1425]">
                  About More
                </button>

                <p className="font-bold flex items-center p-2 border border-dashed text-lg">
                  <FiPhoneCall className="text-[#BD1F17] h-5 w-5 text-lg mr-2" />
                  0178 429 3797
                </p>
              </div>
            </div>
            {/* =========== Experience Tab part end ==========*/}

            {/* =========== Contact Tab part start ==========*/}
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab checked:bg-[#BD1F17] checked:text-[#fff] text-sm md:text-3xl md:h-16 lg:text-sm lg:h-8"
              aria-label="Contact"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content py-10 space-y-3">
              <h1 className="font-Bebas text-4xl sm:text-7xl md:text-8xl lg:text-4xl 2xl:text-6xl">
                Exceptional culinary experience and delicious food
              </h1>
              <p className="font-Roboto text-[#333] text-base sm:text-2xl md:text-3xl lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                non sed est cursus. Vel hac convallis ipsum, facilisi odio
                pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
                consectetur adipiscing elit do eiusmod tempor incididunt ut
                labore et dolore magna minim veniam nostrud exercitation.
              </p>

              <div className="flex justify-between items-center ">
                <button className="btn md:h-24 lg:h-0 font-Roboto uppercase bg-[#FEBF00] text-[#0A1425] sm:text-2xl lg:text-lg">
                  About More
                </button>

                <p className="font-bold md:h-24 md:text-5xl lg:text-xl sm:text-3xl lg:h-0 flex items-center p-2 border border-dashed text-lg">
                  <FiPhoneCall className="text-[#BD1F17] h-5 w-5 md:h-10 md:w-10 lg:h-5 text-base mr-2" />
                  0178 429 3797
                </p>
              </div>
            </div>
            {/* =========== Experience Tab part end ==========*/}
          </div>
          {/*===================== Tabs Section coding end =======================*/}
        </div>

        {/* ===================================================== */}
        {/* bottom part  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:py-10">
          <div className="flex items-center justify-center gap-10">
            <div className="shadow-lg flex justify-center items-center h-20 w-20 rounded-full p-2">
              <img src="https://i.ibb.co.com/TtgLn30/package.jpg" alt="" />
            </div>
            <div className="flex-grow">
              <h1 className="uppercase font-Bebas text-3xl">fast delivery</h1>
              <p className="font-Inter text-xl">Within 30 minutes</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-10">
            <div className="shadow-lg flex justify-center items-center h-20 w-20 rounded-full p-2">
              <img src="https://i.ibb.co.com/ww6Nnpg/medal.png" alt="" />
            </div>
            <div className="flex-grow">
              <h1 className="uppercase font-Bebas text-3xl">absolute dining</h1>
              <p className="font-Inter text-xl">Best buffet restaurant</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-10">
            <div className="shadow-lg flex justify-center items-center h-20 w-20 rounded-full p-2">
              <img src="https://i.ibb.co.com/JQzjZMy/bag.png" alt="" />
            </div>
            <div className="flex-grow">
              <h1 className="uppercase font-Bebas text-3xl">pickup delivery</h1>
              <p className="font-Inter text-xl">Grab your food order</p>
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute hidden lg:flex bottom-16 right-0"
        src="https://i.ibb.co.com/Cv6nGfd/view-bell-sliced.png"
        alt=""
      />
    </div>
  );
};

export default Experience;
