import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="bg-[#BD1F17] lg:px-36 p-4">
        <Navbar />
        <Outlet />
      </div>
      
      <Footer />
    </div>
  );
};

export default Main;
