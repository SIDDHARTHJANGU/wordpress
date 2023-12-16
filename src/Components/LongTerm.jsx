import React from "react";
import Slider from "react-slick";
import propy from "../assets/img/propy.svg";
import cila from "../assets/img/cielaa.svg";
import releue from "../assets/img/revule.svg";
import spark from "../assets/img/spark.svg";

const LongTerm = () => {
  const setslider = {
    arrows: false,
    autoplay: true,
    slidesToShow: 6,
    cssEase: "linear",
    speed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" bg-[#f6f6f6] lg:pb-[70px] pb-9 lg:pt-[70px] pt-9">
      <div className=" container  mx-auto max-w-[1344px] px-3">
        <div data-aos="fade-down">
          <h2 className=" lg:text-[48px] text-[27px] text-black font-normal ff_KonexyPersonal">
            Long Term <span className=" lg:block">WordPress Partner</span>
          </h2>
          <p className=" font-normal text-[16px] text-[#313131] ff_GilroyRegular">
            Our motto is the long-term partnership – we will not only develop
            your perfect website, but will{" "}
            <span className=" lg:block">
              {" "}
              be behind you through the whole process. They already trusted us:
            </span>
          </p>
        </div>
        <div>
          <Slider
            {...setslider}
            className=" flex items-center justify-between pt-[45px]"
          >
            <div>
              <img src={propy} alt="omg" />
            </div>
            <div>
              <img src={cila} alt="omg" />
            </div>
            <div>
              <img src={releue} alt="omg" />
            </div>
            <div>
              <img src={cila} alt="omg" />
            </div>
            <div>
              <img src={spark} alt="omg" />
            </div>
            <div>
              <img src={cila} alt="omg" />
            </div>
            <div>
              <img src={propy} alt="omg" />
            </div>
            <div>
              <img src={cila} alt="omg" />
            </div>
            <div>
              <img src={releue} alt="omg" />
            </div>
            <div>
              <img src={cila} alt="omg" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LongTerm;
