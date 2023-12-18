import React from "react";
import { Business, Support, Wordpress } from "./Mysvgs";

const Integer = () => {
  return (
    <div className=" lg:pt-[97px] pt-10 lg:pb-32 pb-10">
      <div className=" container mx-auto max-w-[1344px] px-3">
        <div data-aos="fade-down">
          <h2 className=" lg:text-[48px] text-[30px] font-normal text-black ff_KonexyPersonal">
            Integer et nisl non
          </h2>
        </div>
        <div className=" pt-[54px] flex items-center  justify-center flex-wrap gap-[32px]">
          <div
            className="w-[418px] border border-[#e5e5e5] rounded-[16px] px-9 pt-14 pb-9  flex flex-col text-center  items-center cursor-pointer  hover:border-transparent duration-700 hover:shadow-3xl "
            data-aos="fade-right"
          >
            <div>
              <Wordpress />
            </div>
            <p className=" text-[24px] font-semibold ff_inter text-black pt-[41px]">
              Enterprise WordPress Solutions{" "}
            </p>
            <p className=" text-[16px] font-normal ff_GilroyRegular text-[#4d4d4d] pt-4">
              Pretium, a et sapien non nunc libero. Id dolor sed quis convallis
              turpis purus feugiat nibh eu. Auctor cras hac ac, sociis diam
              montes, turpis commodo elit.
            </p>
            <button className=" font-semibold text-[16px] text-[#6022ea] ff_GilroySemiBold mt-5  border-none">
              Learn More
            </button>
          </div>{" "}
          <div
            className="w-[418px] border border-[#e5e5e5] rounded-[16px] px-9 pt-14 pb-9  flex flex-col text-center  items-center cursor-pointer  hover:border-transparent duration-700  hover:shadow-3xl"
            data-aos="fade-down"
          >
            <div>
              <Business />
            </div>
            <p className=" text-[24px] font-semibold ff_inter text-black pt-[41px]">
              Small to Mid Size Business Development{" "}
            </p>
            <p className=" text-[16px] font-normal ff_GilroyRegular text-[#4d4d4d] pt-4">
              Et nunc fermentum id amet tempus, elementum. Eget ac ultrices
              tortor, mattis amet blandit aenean amet. Massa diam lacus, aliquam
              neque, cursus.
            </p>
            <button className=" font-semibold text-[16px] text-[#6022ea] ff_GilroySemiBold mt-5  border-none">
              Learn More
            </button>
          </div>
          <div
            className="w-[418px] border border-[#e5e5e5] rounded-[16px] px-9 pt-14 pb-9  flex flex-col text-center  items-center cursor-pointer  hover:border-transparent duration-700  hover:shadow-3xl"
            data-aos="fade-left"
          >
            <div>
              <Support />
            </div>
            <p className=" text-[24px] font-semibold ff_inter text-black pt-[41px]">
              Support & Maintenance System{" "}
            </p>
            <p className=" text-[16px] font-normal ff_GilroyRegular text-[#4d4d4d] pt-4">
              Ac donec ipsum fringilla tortor, consectetur etiam sociis amet
              quis. Viverra volutpat pretium non in fusce tellus sed urna.
              Pharetra ullamcorper et donec aliquam.
            </p>
            <button className=" font-semibold text-[16px] text-[#6022ea] ff_GilroySemiBold mt-5  border-none">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integer;
