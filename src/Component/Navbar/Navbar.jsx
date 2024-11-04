import { useEffect, useRef, useState } from "react";
import { IoCloseOutline, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "../../assets/style.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMenuIcon = () => {
    setOpen(!open);
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/protfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/clients">Clients</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener("mousedown", handleClickOutSide);
    } else {
      window.removeEventListener("mousedown", handleClickOutSide);
    }
    return () => window.removeEventListener("mousedown", handleClickOutSide);
  }, [open]);

  return (
    <div className="bg-[#BD1F17] p-2 lg:px-48">
      <nav className="flex justify-between sticky">
        {/* Restaurant logo, name & large device navbar  */}
        <div className="flex reviews-center text-white">
          <img src="https://i.ibb.co.com/WVsygJD/logo.png" alt="" />
          <h1 className="text-3xl ml-2">Restaurant</h1>

          <div className="lg:ml-10 hidden lg:flex z-50 ">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
        </div>

        <div>
          {/* ================ Only large device show button ============= */}
          <button className="btn hidden lg:flex font-Roboto uppercase bg-[#FEBF00] text-[#0A1425]">
            Book a table
          </button>

          {/* ================= show menubar for small device ============ */}
          <div ref={dropdownRef} className="text-white justify-end">
            <button onClick={handleMenuIcon} className="flex lg:hidden">
              {open == true ? (
                <IoCloseOutline className="text-4xl" />
              ) : (
                <IoMenu className="text-3xl" />
              )}
            </button>

            <div>
              <div className="lg:flex lg:w-full lg:reviews-center lg:justify-center">
                <ul
                  id="dropdown"
                  className={`lg:hidden text-xl duration-1000 bg-[#BD1F17] absolute right-4 ${
                    open ? "top-10" : "-top-64"
                  } bg-red-500 px-5 py-2`}
                >
                  {links}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-[#BD1F17] text-white">
        <div className="flex">
          {/* <div className="text-3xl font-OpenSans flex reviews-center">
            <img
              src="https://i.ibb.co.com/WVsygJD/logo.png"
              alt=""
              className="h-10 w-10 mr-2"
            />
            <h1 className="font-Poppins">Restaurant</h1>

            <div className="lg:ml-10 hidden lg:flex ">
              <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
          </div> */}

          {/* <div className="dropdown text-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div> */}
        </div>

        {/* <div className="hidden lg:flex lg:flex-row">
          <button className="btn font-Roboto uppercase bg-[#FEBF00] text-[#0A1425]">Book a table</button>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
