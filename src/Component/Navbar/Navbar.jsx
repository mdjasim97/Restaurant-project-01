import { useEffect, useRef, useState } from "react";
import { IoCloseOutline, IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import "../../assets/style.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMenuIcon = () => {
    setOpen(!open);
  };

  // ==================== Navbar Route start coding =============================== //
  const links = (
    <>
      <li className="hover:bg-red-300 px-2 md:my-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:bg-red-300 px-2 md:my-2">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="hover:bg-red-300 px-2 md:my-2">
        <NavLink to="/protfolio">Portfolio</NavLink>
      </li>
      <li className="hover:bg-red-300 px-2 md:my-2">
        <NavLink to="/clients">Clients</NavLink>
      </li>
      <li className="hover:bg-red-300 px-2 md:my-2">
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li className="hover:bg-red-300 px-2 md:my-2">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  // ==================== Navbar Route end coding =============================== //

  // =======================  Close dropdown if clicked outside start code==============//
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
  // =======================  Close dropdown if clicked outside end code ==============//

  return (
    <div className="bg-[#BD1F17] p-2 lg:px-48 sticky top-0 z-50 md:p-4 lg:p-2">
      <nav className="flex justify-between items-center">
        {/* ================= menubar for large device start ============ */}
        <div className="flex justify-between items-center text-white">
          {/* ======== Restaurant name or logo here =========*/}
          <div className="flex items-center">
            <img
              src="https://i.ibb.co.com/WVsygJD/logo.png"
              alt=""
              className="md:h-20 md:w-20 lg:h-10 lg:w-10"
            />
            <h1 className="text-3xl ml-2 md:text-6xl lg:text-3xl">
              Restaurant
            </h1>
          </div>
          {/* ======== Restaurant name or logo here =========*/}

          <div className="hidden 2xl:ml-20 lg:flex z-50 ">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
        </div>
        {/* ================= menubar for large device end ============ */}

        {/* ================ Only large device show button ============= */}
        <div className="hidden xl:block flex-col justify-end">
          <Link className="btn font-Roboto uppercase bg-[#FEBF00] text-[#0A1425]">
            Book a table
          </Link>
        </div>
        {/* ================ Only large device show button end coding ============= */}

        {/* ================= menubar for small, and mid-level device ============ */}
        <div ref={dropdownRef} className="text-white">
          {/* open or close button  start */}
          <button onClick={handleMenuIcon} className="flex lg:hidden">
            {open == true ? (
              <IoCloseOutline className="text-4xl sm:text-5xl md:text-6xl" />
            ) : (
              <IoMenu className="text-3xl sm:text-5xl md:text-6xl" />
            )}
          </button>
          {/* open or close button end */}

          {/* nav Item coding start*/}
          <div className="lg:flex lg:w-full lg:items-center lg:justify-center">
            <ul
              id="dropdown"
              className={`lg:hidden md:p-4 md:w-full md:text-3xl md:text-center text-xl duration-1000 bg-[#BD1F17] absolute right-4 md:right-0 ${
                open ? "top-10 md:top-28" : "-top-72 md:-top-80"
              } bg-red-500 px-2`}
            >
              {links}
            </ul>
          </div>
          {/* nav Item coding end*/}
        </div>
        {/* ================= menubar for small, and mid-level device ============ */}
      </nav>
    </div>
  );
};

export default Navbar;
