import React from "react";
import agile from "../assets/img/agile.webp";

const Project = () => {
  return (
    <div className=" lg:pt-[67px] pt-8 lg:pb-[100px] pb-10">
      <div className=" container  mx-auto max-w-[1344px] px-3">
        <div className=" flex flex-wrap items-center xl:justify-between justify-center ">
          <div className=" xl:w-[45%]" data-aos="fade-right">
            <img className=" xl:max-h-[538px] w-full" src={agile} alt="img" />
          </div>
          <div className="xl:w-[50%] mt-10 lg:mt-0" data-aos="fade-left">
            <h2 className=" font-normal lg:text-[48px] text-[30px] text-black ff_KonexyPersonal leading-[normal]">
              <span className=" text-[#6022ea]">Agile WordPress</span>{" "}
              Development Project management
            </h2>
            <p className=" font-normal text-[16px] text-[#4c4c4c] ff_GilroyRegular pt-2">
              Suspendisse consequat egestas arcu et et. Viverra quis euismod
              neque luctus{" "}
              <span className=" lg:block">
                {" "}
                bibendum. Fringilla in nibh fringilla vulputate in. Elit,
                ultricies vitae pulvinar arcu
              </span>{" "}
              <span className=" lg:block">
                {" "}
                dignissim ac non rutrum. Lacus tortor sollicitudin risus eget
                euismod in
              </span>{" "}
              bibendum turpis.{" "}
            </p>
            <button className=" btn_shadow text-[16px] font-semibold ff_GilroySemiBold text-white py-[10px] px-[24px] bg-[#6022ea] border-[2px] border-[#6022ea] duration-300 hover:bg-white hover:text-black rounded-[80px] mt-[32px]">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
