import React from "react";
import manimg from "../assets/img/manandgirl.webp";

const TeamFull = () => {
  return (
    <div className=" bg-[#f6f6f6] pt-[35px]">
      <div className=" container mx-auto max-w-[1344px] px-3">
        <div className=" flex items-center justify-between flex-wrap">
          <div data-aos="fade-down-right">
            <h2 className=" font-normal lg:text-[48px] text-[29px] text-black ff_KonexyPersonal leading-[normal]">
              Team Full of Stars{" "}
            </h2>
            <p className=" font-normal text-[16px] ff_GilroyRegular text-black  pt-[10px]">
              Suspendisse consequat egestas arcu et et. Viverra quis euismod
              <span className=" lg:block">
                {" "}
                neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
                Elit,
              </span>{" "}
              <span className=" lg:block">
                {" "}
                ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus
                tortor
              </span>{" "}
              sollicitudin risus eget euismod in bibendum turpis.{" "}
            </p>
            <button className=" btn_shadow text-[16px] font-semibold ff_GilroySemiBold border-[2px] border-[#6022ea] duration-300 hover:bg-white hover:text-black text-white py-[10px] px-[24px] bg-[#6022ea] rounded-[80px] mt-[32px]">
              Explore
            </button>
          </div>
          <div data-aos="fade-down-left">
            <img
              className=" w-[100%] translate-y-[15%]  cursor-pointer"
              src={manimg}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamFull;
