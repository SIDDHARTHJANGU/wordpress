import React from "react";
import tick from "../assets/img/tick.svg";
import trues from "../assets/img/true.png";
import girlimg from "../assets/img/girlimg.webp";
// import { Ellips } from "./Mysvgs";

const VipeStudio = () => {
  return (
    <div className=" bg-black lg:pt-[81px] pt-10 lg:pb-[81px] pb-10 z-[1] relative">
      <div className=" container mx-auto max-w-[1344px] px-3 relative">
        <div className=" flex xl:justify-between flex-wrap lg:pb-[170px] pb-20 ">
          <div className=" w-full xl:w-[533px] " data-aos="fade-down-right">
            <h2 className=" lg:text-[40px] text-[30px] font-normal text-white ff_KonexyPersonal ">
              All Vipe Studio <span className=" xl:block"> WordPress </span>
              services include:{" "}
            </h2>
          </div>
          <div
            className=" sm:w-[50%] xl:w-[25%] mt-10  lg:mt-0"
            data-aos="fade-down"
          >
            <p className=" text-[24px] font-semibold  ff_GilroySemiBold text-white">
              By Industry
            </p>
            <div className=" flex items-center  gap-2 pt-[27px]">
              <img src={tick} alt="tick" />
              <p className=" text-[16px] font-normal ff_GilroyRegular text-white">
                Lorem in elementum pellentesque
              </p>
            </div>
            <div className=" flex items-center  gap-2 pt-[11px]">
              <img src={tick} alt="tick" />
              <p className=" text-[16px] font-normal ff_GilroyRegular text-white">
                Molestie cursus praesent mi
              </p>
            </div>
            <div className=" flex items-center  gap-2 pt-[11px]">
              <img src={tick} alt="tick" />
              <p className=" text-[16px] font-normal ff_GilroyRegular text-white">
                Leo sed viverra cras
              </p>
            </div>
            <div className=" flex items-center  gap-2 pt-[11px]">
              <img src={tick} alt="tick" />
              <p className=" text-[16px] font-normal ff_GilroyRegular text-white">
                Laoreet feugiat ut at
              </p>
            </div>
            <div className=" flex items-center  gap-2 pt-[11px]">
              <img src={tick} alt="tick" />
              <p className=" text-[16px] font-normal ff_GilroyRegular text-white">
                Risus aliquam molestie viverra
              </p>
            </div>
            <div className=" flex items-center  gap-2 pt-[11px]">
              <img src={tick} alt="tick" />
              <p className=" text-[16px] font-normal ff_GilroyRegular text-white">
                Diam enim pulvinar velit
              </p>
            </div>
          </div>
          <div
            className=" sm:w-[50%] xl:w-[25%]  mt-10  lg:mt-0 "
            data-aos="fade-down-left"
          >
            <p className=" text-[24px] font-semibold  ff_GilroySemiBold text-white">
              By Services
            </p>
            <div className=" flex items-center  gap-2 pt-[27px]">
              <img src={tick} alt="tick" />
              <p className=" text-[16px] font-normal ff_GilroyRegular text-white">
                Accumsan, dui a semper
              </p>
            </div>
            <div className=" flex items-center  gap-2 pt-[11px]">
              <img src={tick} alt="tick" />
              <p className=" text-[16px] font-normal ff_GilroyRegular text-white">
                Interdum malesuada vulputate neque
              </p>
            </div>
            <div className=" flex items-center  gap-2 pt-[11px]">
              <img src={tick} alt="tick" />
              <p className=" text-[16px] font-normal ff_GilroyRegular text-white">
                Nullam non a, morbi
              </p>
            </div>
            <div className=" flex items-center  gap-2 pt-[11px]">
              <img src={tick} alt="tick" />
              <p className=" text-[16px] font-normal ff_GilroyRegular text-white">
                Arcu morbi leo eu
              </p>
            </div>
            <div className=" flex items-center  gap-2 pt-[11px]">
              <img src={tick} alt="tick" />
              <p className=" text-[16px] font-normal ff_GilroyRegular text-white">
                Viverra venenatis, in ornare
              </p>
            </div>
            <div className=" flex items-center  gap-2 pt-[11px]">
              <img src={tick} alt="tick" />
              <p className=" text-[16px] font-normal ff_GilroyRegular text-white">
                Erat id aliquam habitant
              </p>
            </div>
          </div>
        </div>
        {/* <div className=" absolute bottom-0 left-0">
          <Ellips />
        </div> */}
        <div className="  bg-black w-[100%] rounded-[26px]  py-[27px] px-[33px]  ">
          <div className="ellipse absolute w-[317px] h-[272.34px] ellipse-bg blur-[137px] top-[60%] start-0 z-[-1]"></div>
          <div className="ellipse absolute w-[317px] h-[272.34px] ellipse-bg blur-[137px] top-[60%] end-0 z-[-1]"></div>
          <div className=" flex flex-wrap justify-between  ">
            <div className="w-full xl:w-[324px] " data-aos="fade-down-right">
              <p className=" text-white lg:text-[35px] text-[30px] font-normal ff_KonexyPersonal ">
                Not Sure <span className=" xl:block"> which service</span>{" "}
                <span className=" xl:block"> you need</span>
                yet?{" "}
              </p>
              <button className=" btn_shadow px-[24px]  hover:bg-white  hover:text-black duration-300 py-[10px] bg-[#6022ea] rounded-[80px] font-semibold text-[16px] ff_GilroySemiBold text-white mt-[38px] border-none">
                Schedule An Appointment
              </button>
            </div>
            <div
              className=" mt-[30px] w-full sm:w-[50%] xl:w-auto "
              data-aos="fade-up"
            >
              <p className=" text-[24px] font-bold ff_GilroySemiBold text-white">
                20-m free consultation that will{" "}
                <span className=" lg:block">help us identifyif you need</span>{" "}
              </p>
              <div className=" flex items-center gap-2 pt-[25px]">
                <img src={trues} alt="img" />
                <p className=" font-normal text-[16px] ff_GilroyRegular text-white">
                  Technical Description & Discovery
                </p>
              </div>
              <div className=" flex items-center gap-2 pt-[15px]">
                <img src={trues} alt="img" />
                <p className=" font-normal text-[16px] ff_GilroyRegular text-white">
                  Custom WordPress Development
                </p>
              </div>
              <div className=" flex items-center gap-2 pt-[15px]">
                <img src={trues} alt="img" />
                <p className=" font-normal text-[16px] ff_GilroyRegular text-white">
                  Support & Maintenance
                </p>
              </div>
              <div className=" flex items-center gap-2 pt-[15px]">
                <img src={trues} alt="img" />
                <p className=" font-normal text-[16px] ff_GilroyRegular text-white">
                  Other WordPress Service
                </p>
              </div>
            </div>
            <div
              className=" w-full sm:w-[50%] xl:w-auto  flex xl:justify-center mt-10 lg:mt-0"
              data-aos="fade-down-left"
            >
              <img src={girlimg} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipeStudio;
