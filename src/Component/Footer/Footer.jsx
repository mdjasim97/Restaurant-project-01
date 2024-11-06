import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative bg-[url('https://i.ibb.co/JykW3Pw/footer-bg.jpg')] lg:px-48 bg-cover bg-center bg-no-repeat py-16 mb-10">
      <div className="absolute inset-0 bg-black opacity-75 blur-sm"></div>

      {/* Content on top of the overlay */}
      <div className="relative z-10 p-4 text-center text-white">
        <h1 className="text-5xl lg:text-6xl font-Bebas">
          We’re ready to give you the best dining experiences
        </h1>

        {/* items */}
        <div className="grid grid-cols-1 lg:grid-cols-4 my-16 gap-10">
          {/* flex-1 h-24 w-full rounded-lg flex items-center justify-center */}
          <div className="flex flex-col justify-center items-center space-y-3">
            <IoMdTime className="text-3xl text-[#FEBF00]" />
            <h1 className="text-2xl font-Bebas tracking-widest">
              Opening hours
            </h1>
            <p className="font-Roboto">Monday - Sunday</p>
            <p className="font-Roboto">9:00 AM to 11:30 PM</p>
          </div>

          <div className="flex flex-col justify-center items-center space-y-3">
            <FiPhoneCall className="text-3xl text-[#FEBF00]" />
            <h1 className="text-2xl font-Bebas tracking-widest">LET'S TALK</h1>
            <p className="font-Roboto">Phone: 1-800-222-4545</p>
            <p className="font-Roboto">Fax: 1-800-222-4545</p>
          </div>

          <div className="flex flex-col justify-center items-center space-y-3">
            <IoMail className="text-3xl text-[#FEBF00]" />
            <h1 className="text-2xl font-Bebas tracking-widest">
              BOOK A TABLE
            </h1>
            <p className="font-Roboto">Email: demo@website.com</p>
            <p className="font-Roboto">Support: support@website.com</p>
          </div>

          <div className="flex flex-col justify-center items-center space-y-3">
            <FaMapMarkerAlt className="text-3xl text-[#FEBF00]" />
            <h1 className="text-2xl font-Bebas tracking-widest">Our Address</h1>
            <p className="font-Roboto">
              123 Stree New York City , United States Of America.
            </p>
            {/* <p className="font-Roboto">9:00 AM to 11:30 PM</p> */}
          </div>
        </div>

        <div className="lg:w-1/3 mx-auto p-4 space-y-5">
          {/* items */}
          <div className="grid grid-cols-4">
            <Link
              to="https://www.facebook.com/mjunachole97"
              target="_blank"
              className="flex h-16 w-16 border items-center justify-center rounded-full"
            >
              <FaFacebook className="text-3xl text-[#FFF]" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/mju-jasim97/"
              target="_blank"
              className="flex h-16 w-16 border items-center justify-center rounded-full"
            >
              <FaSquareXTwitter className="text-3xl text-[#FFF]" />
            </Link>
            <Link
              to="https://www.facebook.com/mjunachole97"
              target="_blank"
              className="flex h-16 w-16 border items-center justify-center rounded-full"
            >
              <FaInstagramSquare className="text-3xl text-[#FFF]" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/mju-jasim97"
              target="_blank"
              className="flex h-16 w-16 border items-center justify-center rounded-full"
            >
              <FaLinkedin className="text-3xl text-[#FFF]" />
            </Link>
          </div>

          <p className="text-xl">
            © 2023 <span className="text-[#FEBF00] font-bold">Niomax</span> All
            Rights Reserved{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
