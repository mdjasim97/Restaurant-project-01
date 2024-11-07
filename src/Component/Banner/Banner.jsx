const Banner = () => {
  return (
    <div className="lg:flex p-3 bg-[#BD1F17] lg:px-48 justify-between items-center text-white lg:py-20 lg:mx-auto">
      {/* Null div for divided two part */}
      <div className="flex-1"></div>

      {/* Banner Content start coding*/}
      <div className="lg:absolute space-y-5 z-50">
        <div className="lg:w-2/3 bg-[#BD1F17] bg-opacity-60 py-2">
          <p className="font-Bebas text-5xl sm:text-7xl md:text-8xl md:my-5 lg:text-7xl xl:text-8xl 2xl:text-9xl lg:mt-0">
            Taste the authentic Saudi cuisine
          </p>
        </div>

        <p className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-Roboto lg:w-1/2">
          Among the best Saudi chefs in the world, serving you something beyond
          flavor.
        </p>
        <button className="btn text-base bg-[#FEBF00] text-black">
          Explore Menu
        </button>
      </div>
      {/* Banner Content end coding*/}

      {/* Banner Background image and other */}
      <div className="flex-1 relative my-10 w-full">
        <img
          className="w-full"
          src="https://i.ibb.co.com/2gWnm5y/banner.png"
          alt=""
        />

        <div className="h-16 w-16 p-5 sm:w-32 sm:h-32 sm:p-8 md:h-40 md:w-36 md:p-10 lg:h-24 lg:w-24 lg:p-14 absolute flex justify-center items-center right-5 bottom-3 lg:-right-10 lg:-bottom-10 rounded-full bg-[#FEBF00]">
          <p className="uppercase font-Bebas text-center text-black text-xl sm:text-5xl lg:text-4xl">
            Today Offer
          </p>
        </div>

        <div className="absolute -top-6 -right-4 lg:-right-6">
          <img src="https://i.ibb.co.com/Mct6wdJ/flower.png" alt="logo" />
        </div>
      </div>
      {/* Banner Background image and other */}
    </div>
  );
};

export default Banner;
