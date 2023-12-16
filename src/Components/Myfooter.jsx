import React from "react";
import logo from "../assets/img/Logo.svg";
import {
  Call,
  Mail,
  Searchone,
  Home,
  Lines,
  Github,
  Lingdin,
  Tweter,
  Facebook,
  Instagram,
  Wschool,
} from "./Mysvgs";
import arrows from "../assets/img/arrow.svg";

const Myfooter = () => {
  return (
    <div className=" bg-black pt-[140px]">
      <div className=" container mx-auto max-w-[1344px] px-3">
        <div className=" flex flex-wrap items-center justify-between">
          <div>
            <img src={logo} alt="img" />
          </div>
          <div className=" mt-7 sm:mt-0">
            <div className="max-w-[400px] md:w-[378px] w-[350px] bg-[#FFF] py-[10px] ps-[33px] pe-[31px] rounded-[80px] flex">
              <input
                type="text"
                placeholder="Search here...."
                className=" bg-transparent outline-0 placeholder:text-[#6f6f6f] ff-gilroy-regular leading-[150%] w-full  text-black opacity-[0.7] pe-[24px]"
              />
              <Searchone />
            </div>
          </div>
        </div>
        <div className=" pt-[47px] flex justify-between pb-[71px] flex-wrap">
          <ul className=" w-full sm:w-[50%] lg:w-[25%] ">
            <li className="text-white text-[16px]  font-normal ff_GilroyRegular">
              Services
            </li>
            <li className=" flex items-center gap-1 pt-[16px]">
              <img src={arrows} alt="img" />
              <a
                href="WooCommerce Development"
                className=" text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                WordPress Development
              </a>
            </li>
            <li className=" flex items-center gap-1 pt-[13px]">
              <img src={arrows} alt="img" />
              <a
                href="WooCommerce Development"
                className=" text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                WooCommerce Development
              </a>
            </li>
            <li className=" flex items-center gap-1 pt-[13px]">
              <img src={arrows} alt="img" />
              <a
                href="WooCommerce Development"
                className="text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                WordPress Maintenance
              </a>
            </li>
            <li className=" flex items-center gap-1 pt-[13px]">
              <img src={arrows} alt="img" />
              <a
                href="WooCommerce Development"
                className="text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                Speed Optimization
              </a>
            </li>
            <li className=" flex items-center gap-1 pt-[13px]">
              <img src={arrows} alt="img" />
              <a
                href="WooCommerce Development"
                className=" text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                Dedicated WordPress Developer
              </a>
            </li>
            <li className=" flex items-center gap-1 pt-[13px]">
              <img src={arrows} alt="img" />
              <a
                href="WooCommerce Development"
                className=" text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                Headless WordPress Development
              </a>
            </li>
            <li className=" flex items-center gap-1 pt-[13px]">
              <img src={arrows} alt="img" />
              <a
                href="WooCommerce Development"
                className=" text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                White Label Development
              </a>
            </li>
          </ul>
          <ul className=" w-full sm:w-[50%] mt-10 sm:mt-0 lg:w-[25%] ">
            <li className="text-white text-[16px]  font-normal ff_GilroyRegular">
              Services
            </li>
            <li className=" flex items-center gap-1 pt-[16px]">
              <img src={arrows} alt="img" />
              <a
                href="WooCommerce Development"
                className=" text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                WordPress Hosting
              </a>
            </li>
            <li className=" flex items-center gap-1 pt-[13px]">
              <img src={arrows} alt="img" />
              <a
                href="WooCommerce Development"
                className=" text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                PSD, XD, Figma to WordPress Conversion
              </a>
            </li>
            <li className=" flex items-center gap-1 pt-[13px]">
              <img src={arrows} alt="img" />
              <a
                href="WooCommerce Development"
                className="text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                Custom WordPress Theme
              </a>
            </li>
            <li className=" flex items-center gap-1 pt-[13px]">
              <img src={arrows} alt="img" />
              <a
                href="WooCommerce Development"
                className="text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                Custom WordPress Plugins
              </a>
            </li>
            <li className=" flex items-center gap-1 pt-[13px]">
              <img src={arrows} alt="img" />
              <a
                href="WooCommerce Development"
                className=" text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                CMS to WordPress
              </a>
            </li>
            <li className=" flex items-center gap-1 pt-[13px]">
              <img src={arrows} alt="img" />
              <a
                href="WooCommerce Development"
                className=" text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                WordPress Malware Removal
              </a>
            </li>
          </ul>
          <ul className=" w-full sm:w-[50%] mt-10 md:mt-0 lg:w-[20%] ">
            <li className=" text-white text-[16px]  font-normal ff_GilroyRegular">
              Latest Articles
            </li>
            <li className="  gap-1 pt-[16px]">
              <a
                href="WooCommerce Development"
                className=" text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                7 WordPress Plugins to Create an{" "}
                <span className=" block">Effective Newsletter 03.01.2022</span>
              </a>
            </li>
            <li className="  gap-1 pt-[22px]">
              <a
                href="WooCommerce Development"
                className=" text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                What’s the Perfect Blog Post Length{" "}
                <span className=" block">for Your WordPress Site’s SEO?</span>{" "}
                02.01.2022
              </a>
            </li>
            <li className="  gap-1 pt-[22px]">
              <a
                href="WooCommerce Development"
                className="text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                5 Reasons the Future of WordPress Is{" "}
                <span className=" block">Headless 01.01.2022</span>
              </a>
            </li>
            <li className="  gap-1 pt-[22px]">
              <a
                href="WooCommerce Development"
                className="text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                Viptor Says: Vipe Studio’s WordPress{" "}
                <span className=" block">Developers Wrap Up the Amazingly</span>{" "}
                Successful 2021 30.12.2021
              </a>
            </li>
          </ul>
          <ul className=" w-full sm:w-[50%] mt-10 md:mt-0 lg:w-[25%] ">
            <li className=" text-white text-[16px]  font-normal ff_GilroyRegular">
              Contact
            </li>
            <li className=" flex items-center gap-[10px] pt-[28px]">
              <div>
                <Call />
              </div>
              <a
                href="WooCommerce Development"
                className=" text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                EU: +359 988 993 128
              </a>
            </li>
            <li className=" flex items-center gap-[10px] pt-[28px]">
              <div>
                <Call />
              </div>
              <a
                href="WooCommerce Development"
                className=" text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                US: +1 (1 888) 266-6917
              </a>
            </li>
            <li className=" flex items-center gap-[10px] pt-[28px]">
              <div>
                <Mail />
              </div>
              <a
                href="WooCommerce Development"
                className="text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                office@vipestudio.com
              </a>
            </li>
            <li className=" flex items-center gap-[10px] pt-[28px]">
              <div>
                <Home />
              </div>
              <a
                href="WooCommerce Development"
                className="text-white  font-normal text-[14px] ff_GilroyRegular"
              >
                14 Srebarna, Sofia 1407, Bulgaria
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-[100%]  bg-[#4c4c4c] h-[2px]"></div>
      <div className=" container mx-auto max-w-[1344px] px-3">
        <div className=" py-[36px]">
          <div className=" flex flex-wrap justify-between items-center">
            <div className="">
              <p className=" text-white font-normal text-[14px] ff_GilroyRegular">
                © Vipe Studio 2016-2022
              </p>
              <div className=" flex items-center gap-[14px] pt-3">
                <div>
                  <p className=" text-white font-normal text-[14px] ff_GilroyRegular">
                    Privacy
                  </p>
                </div>
                <div className=" flex items-center gap-[6px]">
                  <Lines />
                  <p className=" text-white font-normal text-[14px] ff_GilroyRegular">
                    Careers
                  </p>
                </div>
                <div className=" flex items-center gap-[6px]">
                  <Lines />
                  <p className=" text-white font-normal text-[14px] ff_GilroyRegular">
                    Media
                  </p>
                </div>
                <div className=" flex items-center gap-[6px]">
                  <Lines />
                  <p className=" text-white font-normal text-[14px] ff_GilroyRegular ">
                    Client Area
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex  items-center gap-[17px] mt-5 sm:mt-0">
              <div>
                <a href="https://github.com/">
                  {" "}
                  <Github />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/feed/">
                  {" "}
                  <Lingdin />
                </a>
              </div>
              <div>
                <a href="https://twitter.com/0xrandomrats">
                  {" "}
                  <Tweter />
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/">
                  {" "}
                  <Facebook />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/?hl=en">
                  {" "}
                  <Instagram />
                </a>
              </div>
              <div>
                <a href="https://www.w3schools.com/">
                  <Wschool />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myfooter;
