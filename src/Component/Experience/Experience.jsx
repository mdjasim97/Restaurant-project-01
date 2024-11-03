import { FiPhoneCall } from "react-icons/fi";

const Experience = () => {
  return (
    <div className="lg:px-48 py-8 lg:py-28 m-5">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative">
            <img src="https://i.ibb.co.com/Wf42Zv6/experience.png" alt="" />

            <div className="flex justify-center items-center w-32 h-20 lg:w-60 lg:h-36 bg-white absolute top-5 left-5 lg:rounded-2xl">
              <div
                className="radial-progress text-[#FEBF00] lg:mr-5"
                style={{ "--value": 85 }}
                role="progressbar"
              >
                <p className="text-[#333] text-xs lg:text-2xl">50+</p>
              </div>

              <div className="text-xs">Market <br /> Experiences</div>
            </div>
          </div>
          <div>
            <div role="tablist" className="tabs tabs-bordered ">
              {/* tab item 01  */}
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

                <div className="flex items-center">
                  <button className="btn font-Roboto uppercase bg-[#FEBF00] text-[#0A1425]">
                    About More
                  </button>

                  <p className="font-bold flex items-center border border-dashed text-lg ml-10">
                    <FiPhoneCall className="text-[#BD1F17] lg:mr-2" /> +88 0178 429
                    3797
                  </p>
                </div>
              </div>

              {/* tab item 02  */}
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

                <div className="flex items-center">
                  <button className="btn font-Roboto uppercase bg-[#FEBF00] text-[#0A1425]">
                    About More
                  </button>

                  <p className="font-bold flex items-center border border-dashed text-lg ml-10">
                    <FiPhoneCall className="text-[#BD1F17] lg:mr-2" /> +88 0178 429
                    3797
                  </p>
                </div>
              </div>

              {/* tab item 03  */}
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

                <div className="flex items-center">
                  <button className="btn font-Roboto uppercase bg-[#FEBF00] text-[#0A1425]">
                    About More
                  </button>

                  <p className="font-bold flex items-center border border-dashed text-lg ml-10">
                    <FiPhoneCall className="text-[#BD1F17] lg:mr-2" /> +88 0178 429
                    3797
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div>
            <div className=""></div>
          </div>
          <div>02</div>
          <div>03</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
