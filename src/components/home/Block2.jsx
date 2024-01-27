import React from "react";
import { LuMoveRight } from "react-icons/lu";
import i3 from "../images/P3.jpg";
import i4 from "../images/P4.jpg";
import i5 from "../images/P5.jpg";
import { useNavigate } from "react-router-dom";

function Block2({ scrollToTop }) {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[calc(100vh-100px)] py-[50px]">
      <div className="h-full w-full bg-[#F3F3F3] flex flex-row px-[70px] py-[30px]">
        <div className="h-full w-[60%] flex flex-row pl-[30px] gap-[30px]">
          <div className="h-full w-1/2 flex flex-col">
            <img
              key={"fe"}
              className="object-cover h-[65%] w-full hover:scale-105 an"
              src={i3}
              alt="img"
            />
            <img
              key={"sd"}
              className="object-cover h-[35%] w-full translate-y-[30px] hover:scale-105 an"
              src={i4}
              alt="img2"
            />
          </div>
          <div className="h-full w-1/2 pt-[30px]">
            <img
              key={"fce"}
              className="object-cover h-full w-full hover:scale-105 an"
              src={i5}
              alt="img"
            />
          </div>
        </div>
        <div className="h-full w-[40%] flex flex-col items-start justify-between pl-[30px]">
          <div className="h1">About</div>
          <div className="w-full h-[calc(100%-174px)] overflow-y-clip">
            <div className="w-full h-full text-ellipsis text-wrap txt">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
          </div>

          <button
            onClick={() => {
              scrollToTop();
              navigate("/about");
            }}
            className="bg-[white] w-max h-[70px] pl-[20px] pr-[50px] flex flex-row items-center gap-[18px] border border-[white] hover:border-[#d4d4d4] group an"
          >
            <p className="b1">Read More</p>
            <LuMoveRight className="text-[#333333] group-hover:translate-x-2 an" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Block2;
