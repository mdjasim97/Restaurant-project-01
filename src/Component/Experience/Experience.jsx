import { FiPhoneCall } from "react-icons/fi";

const Experience = () => {
  return (
    <div className="lg:px-48 py-8 lg:py-28 m-5 relative">
      <div>
        {/* top part  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 reviews-center">
          <div className="relative">
            <img src="https://i.ibb.co.com/Wf42Zv6/experience.png" alt="" />

            <div className="flex justify-center reviews-center w-32 h-20 lg:w-60 lg:h-36 bg-white absolute top-5 left-5 lg:rounded-2xl">
              <div
                className="radial-progress text-[#FEBF00] lg:mr-5"
                style={{ "--value": 85 }}
                role="progressbar"
              >
                <p className="text-[#333] text-xs lg:text-2xl">50+</p>
              </div>

              <div className="text-xs">
                Market <br /> Experiences
              </div>
            </div>
          </div>

          <div>
            {/* Tabs Section  */}
            <div role="tablist" className="tabs tabs-bordered ">
              {/* tab review 01  */}
              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab checked:bg-[#BD1F17] checked:text-[#fff]"
                aria-label="About"
                defaultChecked
              />
              <div role="tabpanel" className="tab-content py-10 space-y-3">
                <h1 className="font-Bebas text-4xl lg:text-6xl">
                  Exceptional culinary experience and delicious food
                </h1>
                <p className="font-Roboto text-[#333]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                  odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                  sit amet consectetur adipiscing elit do eiusmod tempor
                  incididunt ut labore et dolore magna minim veniam nostrud
                  exercitation.
                </p>

                <div className="flex reviews-center">
                  <button className="btn font-Roboto uppercase bg-[#FEBF00] text-[#0A1425]">
                    About More
                  </button>

                  <p className="font-bold flex reviews-center border border-dashed text-lg ml-10">
                    <FiPhoneCall className="text-[#BD1F17] lg:mr-2" /> +88 0178
                    429 3797
                  </p>
                </div>
              </div>

              {/* tab review 02  */}
              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab checked:bg-[#BD1F17] checked:text-[#fff]"
                aria-label="Experience"
              />
              <div role="tabpanel" className="tab-content py-10 space-y-3">
                <h1 className="font-Bebas text-4xl lg:text-6xl">
                  Exceptional culinary experience and delicious food
                </h1>
                <p className="font-Roboto text-[#333]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facilis, quae! Et neque quae quam, consequatur quaerat autem?
                  Cumque, maxime! Cumque magnam, ab accusamus explicabo amet
                  cupiditate quibusdam, omnis sequi, hic ad voluptatum earum
                  libero ut? Deleniti impedit neque nulla, unde error est
                  consequuntur voluptas sint itaque voluptatibus officia facilis
                  voluptatem!
                </p>

                <div className="flex reviews-center">
                  <button className="btn font-Roboto uppercase bg-[#FEBF00] text-[#0A1425]">
                    About More
                  </button>

                  <p className="font-bold flex reviews-center border border-dashed text-lg ml-10">
                    <FiPhoneCall className="text-[#BD1F17] lg:mr-2" /> +88 0178
                    429 3797
                  </p>
                </div>
              </div>

              {/* tab review 03  */}
              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab checked:bg-[#BD1F17] checked:text-[#fff]"
                aria-label="Contact"
              />
              <div role="tabpanel" className="tab-content py-10 space-y-3">
                <h1 className="font-Bebas text-4xl lg:text-6xl">
                  Exceptional culinary experience and delicious food
                </h1>
                <p className="font-Roboto text-[#333]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aperiam, magnam? Iusto est minus alias labore praesentium illo
                  blanditiis, reprehenderit laboriosam architecto obcaecati
                  ipsam quod voluptatem temporibus, nam eligendi tempore, nobis
                  animi ab perspiciatis eaque molestiae dolore harum! Atque
                  dignissimos aut voluptatum non, nulla fugiat quisquam quas
                  eius animi officiis nobis?
                </p>

                <div className="flex reviews-center">
                  <button className="btn font-Roboto uppercase bg-[#FEBF00] text-[#0A1425]">
                    About More
                  </button>

                  <p className="font-bold flex reviews-center border border-dashed text-lg ml-10">
                    <FiPhoneCall className="text-[#BD1F17] lg:mr-2" /> +88 0178
                    429 3797
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================== */}
        {/* bottom part  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:py-10">
          <div className="flex reviews-center justify-center gap-10">
            <div className="shadow-lg flex justify-center reviews-center h-20 w-20 rounded-full p-2">
              <img src="https://i.ibb.co.com/TtgLn30/package.jpg" alt="" />
            </div>
            <div className="flex-grow">
              <h1 className="uppercase font-Bebas text-3xl">fast delivery</h1>
              <p className="font-Inter text-xl">Within 30 minutes</p>
            </div>
          </div>

          <div className="flex reviews-center justify-center gap-10">
            <div className="shadow-lg flex justify-center reviews-center h-20 w-20 rounded-full p-2">
              <img src="https://i.ibb.co.com/ww6Nnpg/medal.png" alt="" />
            </div>
            <div className="flex-grow">
              <h1 className="uppercase font-Bebas text-3xl">absolute dining</h1>
              <p className="font-Inter text-xl">Best buffet restaurant</p>
            </div>
          </div>

          <div className="flex reviews-center justify-center gap-10">
            <div className="shadow-lg flex justify-center reviews-center h-20 w-20 rounded-full p-2">
              <img src="https://i.ibb.co.com/JQzjZMy/bag.png" alt="" />
            </div>
            <div className="flex-grow">
              <h1 className="uppercase font-Bebas text-3xl">pickup delivery</h1>
              <p className="font-Inter text-xl">Grab your food order</p>
            </div>
          </div>
        </div>
      </div>

      <img className="absolute hidden lg:flex bottom-16 right-0" src="https://i.ibb.co.com/Cv6nGfd/view-bell-sliced.png" alt="" />
    </div>
  );
};

export default Experience;
