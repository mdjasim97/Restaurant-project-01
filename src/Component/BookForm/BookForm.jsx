import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="bg-[url('https://i.ibb.co.com/mT0VmNN/plate-dark-background.jpg')] p-4 bg-no-repeat bg-cover py-16">
      <div className="h-full lg:px-48">
        <div className="space-y-5 lg:w-3/5 text-white">
          <p>
            <li className="list-square lg:text-xl font-bold text-[#BD1F17]">
              Crispy, Every Bite Taste
            </li>
          </p>
          <h1 className="text-5xl lg:text-6xl  font-Bebas">Book Your Table</h1>
          <p className="text-base">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>

          <div>
            <form className="">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <label className="flex items-center w-full border p-2">
                  Name *
                  <input
                    type="text"
                    className="bg-transparent flex-grow p-2 outline-none"
                    required
                  />
                </label>

                <label className="flex items-center w-full border p-2">
                  Email *
                  <input
                    type="email"
                    className="bg-transparent flex-grow p-2 outline-none"
                    required
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-5">
                <label className="flex items-center justify-between w-full border px-2">
                  Book Date *
                  <DatePicker
                    className="bg-transparent focus:outline-none w-full flex-grow"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </label>

                <label className="flex items-center w-full border p-2">
                  Total People *
                  <input
                    type="number"
                    className="bg-transparent flex-grow p-2 outline-none"
                    required
                  />
                </label>
              </div>

              {/* message  */}
              <div className="form-control border">
                <label className="flex w-full border p-5">
                  Message
                  <textarea
                    type="text"
                    name="Message"
                    className="bg-transparent pl-2 w-full focus:outline-none"
                    required
                  />
                </label>
              </div>

              <div className="flex my-5">
                <button className="bg-[#FEBF00] text-lg text-black font-bold p-4">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
