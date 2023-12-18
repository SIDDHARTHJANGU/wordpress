import React from "react";
import vip from "../assets/img/viptor.webp";
import metus from "../assets/img/metus.webp";

const Viptor = () => {
  return (
    <div className="lg:mt-[217px] mt-28">
      <div className="container mx-auto px-3 max-w-[1344px] w-full items-center flex lg:justify-center  xl:gap-12 flex-wrap lg:pb-[75px] pb-9">
        <div
          className="w-full xl:w-auto  flex justify-center"
          data-aos="fade-right"
        >
          <img
            src={vip}
            alt="success-robot"
            className="w-full md:w-[50%] xl:w-full xl:h-[494.437px] hero_img"
          />
        </div>
        <div className="flex flex-col mt-10 lg:mt-0" data-aos="fade-left">
          <p className=" font-normal text-[16px] ff_GilroyRegular text-[#868687]">
            HAVE YOU SEEN OUR MASCOT?
          </p>
          <h2 className="ff_KonexyPersonal lg:text-[48px] text-[34px] font-normal text-black leading-[normal]">
            Success Guides
          </h2>
          <div className="flex flex-wrap gap-[10px] mb-[33px] mt-[20px] justify-center  sm:justify-start">
            <button className="py-2 px-4 ff_GilroyRegular font-normal text-[16px] leading-[150%] text-[#6022EA] rounded-[80px] hover:text-white duration-500 hover:bg-[#6022EA] border border-[#6022EA]">
              Category-1
            </button>
            <button className="py-2 px-4  ff_GilroyRegular font-normal text-[16px] leading-[150%] text-[#6022EA] border border-[#6022EA] hover:text-white duration-500 hover:bg-[#6022EA] rounded-[80px]">
              Category-2
            </button>
            <button className="py-2 px-4  ff_GilroyRegular font-normal text-[16px] leading-[150%] text-[#6022EA] border border-[#6022EA] hover:text-white duration-500 hover:bg-[#6022EA] rounded-[80px]">
              Category-3
            </button>
            <button className="py-2 px-4  ff_GilroyRegular font-normal text-[16px] leading-[150%] text-[#6022EA] border border-[#6022EA] hover:text-white duration-500 hover:bg-[#6022EA] rounded-[80px]">
              Category-4
            </button>
          </div>
          <div className="success-card-section flex flex-wrap justify-center gap-6 ">
            <div className="success-card w-full sm:w-[48%] max-w-250 xl:max-w-[274px] bg-white border  cursor-pointer   border-[#E3E3E3] hover:border-transparent duration-500 hover:shadow-3xl rounded-[16px] pt-[15px] ps-[17px] pe-[14px] pb-[14px]">
              <img src={metus} alt="card-img" className="w-full " />
              <h3 className=" font-semibold ff_GilroySemiBold text-[24px] leading-[130%] text-[#0D0D0D] mt-[17px] mb-[10px]">
                Sit diam metus
              </h3>
              <p className="ff_GilroyRegular text-[16px] font-normal  leading-[150%] text-[#4D4D4D] mb-2 sm:max-w-[244px]">
                Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis
                sed.
              </p>
              <button className="text-[#6022EA] ff_GilroySemiBold text-[16px] font-semibold leading-[150%]">
                Read More....
              </button>
            </div>
            <div className="success-card w-full sm:w-[48%] max-w-250 xl:max-w-[274px] bg-white border  cursor-pointer   border-[#E3E3E3] hover:border-transparent duration-500 hover:shadow-3xl rounded-[16px] pt-[15px] ps-[17px] pe-[14px] pb-[14px]">
              <img src={metus} alt="card-img" className="w-full " />
              <h3 className="font-semibold ff_GilroySemiBold text-[24px] leading-[130%] text-[#0D0D0D] mt-[17px] mb-[10px]">
                Sit diam metus
              </h3>
              <p className="ff_GilroyRegular text-[16px] font-normal  leading-[150%] text-[#4D4D4D] mb-2 sm:max-w-[244px]">
                Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis
                sed.
              </p>
              <button className="text-[#6022EA] ff_GilroySemiBold text-[16px] font-semibold leading-[150%]">
                Read More....
              </button>
            </div>
            <div className="success-card w-full sm:w-[48%] max-w-250 xl:max-w-[274px] bg-white border  cursor-pointer   border-[#E3E3E3] hover:border-transparent duration-500 hover:shadow-3xl rounded-[16px] pt-[15px] ps-[17px] pe-[14px] pb-[14px]">
              <img src={metus} alt="card-img" className="w-full" />
              <h3 className="font-semibold ff_GilroySemiBold text-[24px] leading-[130%] text-[#0D0D0D] mt-[17px] mb-[10px]">
                Sit diam metus
              </h3>
              <p className="ff_GilroyRegular text-[16px] font-normal  leading-[150%] text-[#4D4D4D] mb-2 sm:max-w-[244px]">
                Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis
                sed.
              </p>
              <button className="text-[#6022EA] ff_GilroySemiBold text-[16px] font-semibold leading-[150%]">
                Read More....
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-[1344px] mx-auto px-3 translate-y-[45px] ">
        <div className="gradient-bg rounded-[17px] flex items-center flex-wrap youhave justify-between px-[43px] pt-[25px] pb-[37px] ">
          <div
            className="w-full sm:w-auto flex flex-col mb-6 md:mb-0"
            data-aos="fade-right"
          >
            <h2 className="lg:text-[48px] text-[40px] ff_KonexyPersonal font-normal text-white leading-[1.17] mb-[9px]">
              Have you
            </h2>
            <p className="ff_GilroySemiBold md:text-[24px] text-[20px] font-semibold leading-[130%] text-white">
              read our study about Speed and Performance in{" "}
              <span className=" lg:block">WordPress?</span>
            </p>
          </div>
          <div className="" data-aos="fade-left">
            <button className="ff_inter text-[16px] leading-[150%] font-semibold py-[14.33px] px-[38.2px] bg-white text-[#6022EA] rounded-[137.28px] h-[57.65px] w-[191.4px]">
              Check It Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viptor;
