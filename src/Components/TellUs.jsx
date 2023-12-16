import React from "react";
import { Search, Send } from "./Mysvgs";

const TellUs = () => {
  return (
    <div className=" bg-[#0D0D0D]">
      <div className=" container mx-auto max-w-[1344px]  px-3">
        <div className=" lg:pt-[64px] pt-8 lg:pb-[63px] pb-8  flex  justify-between  flex-wrap ">
          <div className="w-[100%] lg:w-[50%]" data-aos="fade-right">
            <h2 className=" text-[36px] font-normal ff_KonexyPersonal text-white ">
              Tell us more....
            </h2>
            <p className=" text-[16px] font-normal ff_GilroyRegular text-white pt-4">
              Lectus vitae est ultrices sed. Sit aliquam commodo hac donec augue
              in quis.{" "}
              <span className=" xl:block">
                Magna vel orci sem neque fringilla et lectus laoreet.
              </span>
            </p>
          </div>
          <div
            className="w-[100%] lg:w-[50%]  flex flex-col lg:items-end mt-6 lg:mt-0"
            data-aos="fade-left"
          >
            <div className="max-w-[520px] w-full bg-[#252525] py-5 ps-[33px] pe-[31px] rounded-[80px] flex">
              <input
                type="text"
                placeholder="What do you need assistance with?"
                className=" bg-transparent outline-0 placeholder:text-[#BDBDBE] ff-gilroy-regular leading-[150%] w-full  text-white opacity-[0.7] pe-[24px]"
              />
              <Search />
            </div>
            <div className=" sm:flex sm:gap-48 flex-wrap pt-4">
              <div className=" flex items-center gap-2">
                <div>
                  <Send />
                </div>
                <p className=" text-[16px] font-normal ff_GilroyRegular text-white cursor-pointer">
                  {" "}
                  or send us an inquire?{" "}
                </p>
              </div>
              <p className=" text-[16px] font-normal ff_GilroyRegular text-white cursor-pointer mt-4 sm:mt-0">
                Learn more about...{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TellUs;
