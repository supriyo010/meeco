import React from "react";
import { LuMoveRight } from "react-icons/lu";

import i6 from "../images/P5.jpg";
import i7 from "../images/P6.jpg";
import i8 from "../images/P7.jpg";
import i9 from "../images/P8.jpg";
import i10 from "../images/P9.jpg";
import { useNavigate } from "react-router-dom";

function ImgButton(
  w = "100%",
  n1 = "Sample",
  n2 = "Project",
  to = "",
  src = "",
  scrollToTop = () => {}
) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        scrollToTop();
        navigate(to);
      }}
      className={`h-full w-[${w}] relative overflow-clip group`}
    >
      <div className="absolute z-10 w-full h-full flex flex-col items-start justify-center pl-[40px] bg-[#00000031] backdrop-filter backdrop-blur-sm translate-x-[-100%] group-hover:translate-x-0 an">
        <div className="hw">{n1}</div>
        <div className="hw">{n2}</div>
        <div className="w-max h-max flex flex-row items-center gap-[18px] mt-[30px]">
          <p className="b2 h-max flex flex-row items-center">Read More</p>
          <LuMoveRight className="text-[#fff]" />
        </div>
      </div>
      <img src={src} alt="" className="w-full h-full object-cover" />
    </button>
  );
}

function Block4({ scrollToTop }) {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[calc(100vh+200px)] py-[50px]">
      <div className="h-full w-full flex flex-col">
        <div className="h1">Our Projects</div>
        <div className="flex-grow mt-[40px] mb-[30px] flex flex-col gap-[30px] overflow-y-clip">
          <div className="w-full h-1/2 flex flex-row gap-[30px]">
            {ImgButton(
              "50%",
              "Sample",
              "Project3",
              "/project/2",
              i6,
              scrollToTop
            )}
            {ImgButton(
              "50%",
              "Sample",
              "Project4",
              "/project/3",
              i7,
              scrollToTop
            )}
          </div>
          <div className="w-full h-1/2 flex flex-row gap-[30px]">
            {ImgButton(
              "30%",
              "Sample",
              "Project5",
              "/project/4",
              i8,
              scrollToTop
            )}
            {ImgButton(
              "30%",
              "Sample",
              "Project6",
              "/project/5",
              i9,
              scrollToTop
            )}
            {ImgButton(
              "40%",
              "Sample",
              "Project7",
              "/project/6",
              i10,
              scrollToTop
            )}
          </div>
        </div>
        <button
          onClick={() => {
            scrollToTop();
            navigate("/projects");
          }}
          className="bg-[#333333] w-max h-[70px] pl-[20px] pr-[50px] flex flex-row items-center gap-[18px] border border-[#333333] hover:border-[#000] group an"
        >
          <p className="b2 h-[70px] flex flex-row items-center">Read More</p>
          <LuMoveRight className="text-[#fff] group-hover:translate-x-2 an" />
        </button>
      </div>
    </div>
  );
}

export default Block4;
