import React from "react";
import Slider from "react-slick";
import yononews from "../assets/img/yononews.svg";
import yonofinincwe from "../assets/img/finance.svg";
import topic from "../assets/img/topic.svg";
import yonolifr from "../assets/img/yonolifr.svg";

const FeaturedOn = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    infinite: true,
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
    <div className=" bg-[#f6f6f6] lg:pt-[105px] pt-12 lg:pb-[92px] pb-10">
      <div className=" container mx-auto max-w-[1344px] px-3 ">
        <div data-aos="fade-down">
          <h2 className=" md:text-[48px] text-[40px] font-normal text-black ff_KonexyPersonal leading-[normal]">
            Featured on
          </h2>
        </div>
        <div>
          <Slider {...settings} className="  pt-[70px]">
            <div>
              <img
                src={yononews}
                alt="img
            "
              />
            </div>
            <div>
              <img
                src={yonofinincwe}
                alt="img
            "
              />
            </div>
            <div>
              <img
                src={yononews}
                alt="img
            "
              />
            </div>
            <div>
              <img
                src={topic}
                alt="img
            "
              />
            </div>
            <div>
              <img
                src={yononews}
                alt="img
            "
              />
            </div>
            <div>
              <img
                src={yonolifr}
                alt="img
            "
              />
            </div>
            <div>
              <img
                src={yononews}
                alt="img
            "
              />
            </div>
            <div>
              <img
                src={yonofinincwe}
                alt="img
            "
              />
            </div>
            <div>
              <img
                src={yononews}
                alt="img
            "
              />
            </div>
            <div>
              <img
                src={topic}
                alt="img
            "
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOn;
