import React, { useState, useEffect } from "react";
import logo from "../assets/img/Logo.svg";
import menu from "../assets/img/menu.svg";
import close from "../assets/img/close.svg";
import Mysvgs, { Dropdown, English } from "./Mysvgs";
import heroimg from "../assets/img/hero_img.webp";
import star from "../assets/img/blur.webp";
import AOS from "aos";
import "aos/dist/aos.css";
export const Myheader = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [show, setshow] = useState(false);
  if (show === true) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  const Movement = () => {
    setshow(false);
  };
  return (
    <div className=" bg-black  flex flex-col relative z-[1] ">
      <div className="ellipse absolute w-[317px] h-[272.34px] ellipse-bg blur-[137px] top-[60%] start-[50%] z-[-1]"></div>
      <div className="ellipse absolute w-[317px] h-[272.34px] ellipse-bg blur-[137px] top-[20%] end-[4%] z-[-1]"></div>
      <nav>
        <div className=" container mx-auto max-w-[1344px] px-3">
          <div className=" flex items-center justify-between pt-[14px]">
            <div className=" flex items-center gap-12">
              <img className=" cursor-pointer" src={logo} alt="logo" />
              <ul
                className={`${
                  show ? "end-0" : "right-[-100%]"
                }  flex  gap-6 flex-col z-[4] min-h-screen fixed xl:min-h-fit xl:static w-full xl:w-auto items-center justify-center
              top-0 bg-[#000] xl:bg-[unset] xl:flex-row right-0 ps-0 duration-[350ms] transition-all ease-linear`}
              >
                <li className="relative inline-block group">
                  <a
                    onClick={Movement}
                    href="#WordPressSolution"
                    aria-label="WordPresssolutionnav"
                    className="flex gap-1 leading-6 text-white text-[16px]  ff_GilroyRegular mb-0"
                  >
                    WordPress Solution <Dropdown />
                  </a>
                  <a
                    href="#dropdownone"
                    aria-label="dropdownone"
                    className=" flex-col gap-2 z-[1] absolute hidden overflow-auto group-hover:flex duration-700 w-full items-start  bg-black"
                  >
                    <span className=" text-white ff_gilroy font-normal text-base leading-6 p-2 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">
                      WordPress Hosting
                    </span>
                    <span className=" text-white ff_gilroy font-normal text-base leading-6 p-2 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">
                      Custom WordPress
                    </span>
                    <span className=" text-white ff_gilroy font-normal text-base leading-6 p-2 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">
                      CMS to WordPress
                    </span>
                  </a>
                </li>
                <li className="relative inline-block group">
                  <a
                    onClick={Movement}
                    href="#Services"
                    aria-label="WordPresssolutionnav"
                    className="flex gap-1 leading-6 text-white text-[16px]  ff_GilroyRegular mb-0"
                  >
                    Services <Dropdown />
                  </a>
                  <a
                    href="#dropdownone"
                    aria-label="dropdownone"
                    className=" flex-col gap-2 z-[1] absolute hidden overflow-auto group-hover:flex duration-700 w-full items-start  bg-black"
                  >
                    <span className=" text-white ff_gilroy font-normal text-base leading-6 p-2 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">
                      Services
                    </span>
                    <span className=" text-white ff_gilroy font-normal text-base leading-6 p-2 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">
                      Services
                    </span>
                    <span className=" text-white ff_gilroy font-normal text-base leading-6 p-2 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">
                      Services
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={Movement}
                    href="#Portfolio"
                    className=" text-white text-[16px] font-normal ff_GilroyRegular"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="relative inline-block group">
                  <a
                    onClick={Movement}
                    href="#About"
                    aria-label="WordPresssolutionnav"
                    className="flex gap-1 leading-6 text-white text-[16px]  ff_GilroyRegular mb-0"
                  >
                    About <Dropdown />
                  </a>
                  <a
                    href="#dropdownone"
                    aria-label="dropdownone"
                    className=" flex-col gap-2 z-[1] absolute hidden overflow-auto group-hover:flex duration-700 w-full items-start  bg-black"
                  >
                    <span className=" text-white ff_gilroy font-normal text-base leading-6 p-2 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">
                      About
                    </span>
                    <span className=" text-white ff_gilroy font-normal text-base leading-6 p-2 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">
                      About
                    </span>
                    <span className=" text-white ff_gilroy font-normal text-base leading-6 p-2 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">
                      About
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={Movement}
                    href="#Blog"
                    className=" text-white text-[16px] font-normal ff_GilroyRegular"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <ul className="md:flex gap-9 items-center  hidden    ">
              <li>
                <a
                  href="number"
                  className=" text-white text-[16px] font-normalff_GilroyRegular"
                >
                  1 888 266-6917 (eu?)
                </a>
              </li>
              <button className=" text-white text-[18px] font-normalff_GilroyRegular py-[10px] px-[24px]  bg-[#6022EA] hover:bg-white hover:text-black duration-300 rounded-[80px] btn_shadow">
                Contact Us
              </button>
              <li className="relative inline-block group">
                <a
                  href="#Eng"
                  aria-label="WordPresssolutionnav"
                  className="flex gap-1 leading-6 text-white text-[16px] ff_GilroyRegular font-normal mb-0"
                >
                  <English />
                  Eng
                  <Dropdown />
                </a>
                <a
                  href="#dropdownone"
                  aria-label="dropdownone"
                  className=" flex-col gap-2 z-[1] absolute hidden overflow-auto group-hover:flex duration-700 w-full items-start"
                >
                  <span className=" text-white ff_gilroy font-normal text-base leading-6 px-[19px] py-1 mt-2 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">
                    Hindi
                  </span>
                  <span className=" text-white ff_gilroy font-normal text-base leading-6 px-[10px] py-1 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">
                    German
                  </span>
                  <span className=" text-white ff_gilroy font-normal text-base leading-6 px-[15px] py-1 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">
                    French
                  </span>
                </a>
              </li>
            </ul>
            <div
              className=" position-relative  z-30 xl:hidden  "
              onClick={() => {
                setshow(!show);
              }}
            >
              {show ? <img src={close} alt="#" /> : <img src={menu} alt="#" />}
            </div>
          </div>
        </div>
      </nav>
      <div className="flex-grow flex lg:pt-[158px] pt-16 lg:pb-[137px] pb-16">
        <div className=" container mx-auto max-w-[1320px]  flex justify-center items-center px-3">
          <div className=" flex flex-wrap items-center justify-between  ">
            <div
              className=" xl:w-[48%] w-[100%] order-2 mt-10 "
              data-aos="fade-down-right"
            >
              <div className=" flex items-center gap-3">
                <div className=" xl:h-[200px] h-[110px] w-[10px] bg-[#6022ea]"></div>
                <h1 className=" font-normal lg:text-[72px] text-[39px] ff_KonexyPersonal text-white leading-[106%]">
                  WordPress Development Agency
                </h1>
              </div>
              <p className=" text-[24px]  font-bold ff_GilroySemiBold text-white mt-[30px]">
                for Enterprise + Friendly Team{" "}
              </p>
              <p className=" text-[#b2b2b2] font-normal text-[16px] ff_GilroyRegular mt-[22px]">
                Vipe Studio is a WordPress Agency for development - a long-term
                partner for{" "}
                <span className=" lg:block">
                  any WordPress service. Websites and,online shops development,
                  maintenance
                </span>{" "}
                and customization is what we do best.
              </p>
              <div className=" flex items-center gap-9 mt-[27px]">
                <button className=" text-white py-[12px] px-[40px] btn_shadow bg-[#6022EA] rounded-[80px] hover:bg-white hover:text-black duration-300  sm:text-[16px] text-[13px] font-semibold ff_GilroySemiBold  border-none">
                  Get Started
                </button>
                <div className=" flex items-center gap-[14px]">
                  <div>
                    {" "}
                    <Mysvgs />
                  </div>
                  <p className=" text-[#b2b2b2] sm:text-[16px] text-[13px] font-normal ff_GilroyRegular cursor-pointer  ">
                    {" "}
                    What is Vipe? (1min)
                  </p>
                </div>
              </div>
            </div>
            <div
              className=" xl:w-[50%] w-[100%]  relative order-1 xl:order-2  "
              data-aos="fade-down-left"
            >
              <div>
                <img
                  className=" absolute w-[35%] bottom-[19px] left-[24px]"
                  src={star}
                  alt="img"
                />
              </div>
              <img
                className=" max-xl:w-full 2xl:max-w-[761px] "
                src={heroimg}
                alt="heroimg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
