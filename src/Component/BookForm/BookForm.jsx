import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { bookingApi } from "../../ApiServices/ApiServices";

const BookForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleFormData = (e) => {
    e.preventDefault();
    const formData = e.target;
    const name = formData.name.value;
    const email = formData.email.value;
    const bookingDate = startDate;
    const totalPeople = formData.people.value;
    const message = formData.message.value;

    const bookingData = {
      name,
      email,
      bookingDate,
      totalPeople,
      message,
    };
    console.log(bookingData);

    bookingApi(bookingData);
  };

  return (
    <div className="bg-[url('https://i.ibb.co.com/mT0VmNN/plate-dark-background.jpg')] p-4 bg-no-repeat bg-cover py-16">
      <div className="h-full lg:px-48">
        <div className="space-y-5 lg:w-3/5 text-white">
          <p>
            <li className="list-square md:text-2xl lg:text-xl font-bold text-[#BD1F17]">
              Crispy, Every Bite Taste
            </li>
          </p>
          <h1 className="text-5xl md:text-8xl lg:text-6xl  font-Bebas">
            Book Your Table
          </h1>
          <p className="text-base md:text-2xl lg:text-base">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>

          <div>
            {/* ==========  form part start coding ============= */}
            <form onSubmit={handleFormData}>
              {/* user name or user email input box */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {/* user name input form  */}
                <label className="flex items-center w-full border p-2">
                  Name *
                  <input
                    type="text"
                    name="name"
                    className="bg-transparent flex-grow p-2 outline-none"
                    required
                  />
                </label>
                {/* user email input form  */}
                <label className="flex items-center w-full border p-2">
                  Email *
                  <input
                    type="email"
                    name="email"
                    className="bg-transparent flex-grow p-2 outline-none"
                    required
                  />
                </label>
              </div>

              {/* booing date and total people input box  */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-5">
                {/* booking date  */}
                <label className="flex items-center justify-between w-full border px-2">
                  Book Date *
                  <DatePicker
                    className="bg-transparent focus:outline-none w-full flex-grow"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </label>

                {/* total people  */}
                <label className="flex items-center w-full border p-2">
                  Total People *
                  <input
                    type="number"
                    name="people"
                    className="bg-transparent flex-grow p-2 outline-none"
                    required
                  />
                </label>
              </div>

              {/* message  input box*/}
              <div className="form-control border">
                <label className="flex w-full border p-5">
                  Message
                  <textarea
                    type="text"
                    name="message"
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
            {/* ==========  form part end coding ============= */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
