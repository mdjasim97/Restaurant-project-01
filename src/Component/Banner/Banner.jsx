const Banner = () => {
  return (
    <div className="lg:flex p-3 bg-[#BD1F17] lg:px-48 justify-between items-center text-white lg:py-20 lg:mx-auto">
      <div className="flex-1"></div>

      <div className="lg:absolute space-y-5 z-50">
        <div className="lg:w-2/3 bg-[#BD1F17] bg-opacity-60 py-2">
          <p className="font-Bebas text-5xl lg:text-9xl mt-10 lg:mt-0">
            Taste the authentic Saudi cuisine
          </p>
        </div>

        <p className="text-xl lg:text-3xl font-Roboto lg:w-1/2">
          Among the best Saudi chefs in the world, serving you something beyond
          flavor.
        </p>
        <button className="bg-[#FEBF00] text-black p-4">Explore Menu</button>
      </div>

      <div className="flex-1 relative my-10">
        <img
          className="w-full"
          src="https://i.ibb.co.com/2gWnm5y/banner.png"
          alt=""
        />

        <div className=" h-16 w-16 lg:h-24 lg:w-24 absolute flex justify-center items-center right-5 bottom-3 lg:-right-10 lg:-bottom-10 rounded-full bg-[#FEBF00]">
          <p className="uppercase font-Bebas text-center text-black text-xl lg:text-4xl">
            Today Offer
          </p>
        </div>

        <div className="absolute -top-6 -right-4 lg:-right-6">
          <img src="https://i.ibb.co.com/Mct6wdJ/flower.png" alt="logo"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
