import React from "react";
import { LuMoveRight } from "react-icons/lu";
import i3 from "../images/P3.jpg";
import i4 from "../images/P4.jpg";
import i5 from "../images/P5.jpg";
import { useNavigate } from "react-router-dom";

function Block2({ scrollToTop }) {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[calc(100vh-100px)] py-[50px] max-[1080px]:h-max max-[1080px]:pb-0">
      <div className="h-full w-full bg-[#938de9] flex flex-row px-[70px] py-[30px] max-[1080px]:px-[20px]">
        <div className="h-full w-[60%] flex flex-row pl-[30px] gap-[30px] max-[1080px]:hidden">
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
        <div className="h-full w-[40%] flex flex-col items-start justify-between pl-[30px] max-[1080px]:w-full max-[1080px]:pl-0  max-[1080px]:gap-[20px]">
          <div className="h1">About</div>
          <div className="w-full h-[calc(100%-174px)] overflow-y-clip max-[1080px]:h-max">
            <div className="w-full h-full text-ellipsis text-wrap txt max-[1080px]:h-max">
            Tech Meeco Infra Pvt. Ltd. is a leading provider of pre-engineered building (PEB) solutions, 
            delivering comprehensive services in design, fabrication, and installation. With a commitment to quality,
             efficiency, and customer satisfaction, we specialize in customized PEB structures for various industrial,
              commercial, and institutional applications.

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
