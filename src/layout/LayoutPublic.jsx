import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const LayoutPublic = () => {
  return (
    <>
      <div className="bg-gray-950  min-h-screen relative flex flex-col  gap-10">
        <div className="  sticky top-0 bg-gradient-to-b  from-gray-600">
          <div className="max-w-[1200px] m-auto  ">
            <Navbar />
          </div>
        </div>
        <Outlet />
        <div className=" bg-gray-800">
          <div className="max-w-[1200px] m-auto">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default LayoutPublic;
