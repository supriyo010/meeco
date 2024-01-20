import React from "react";
import i1 from "./P2.png";
import i2 from "./P2.png";

function Block1() {
  return (
    <div className="w-full bg-violet-300 h-screen py-[102px] flex flex-row">
      <div className="bg-orange-300 h-full flex-grow flex flex-col justify-center gap-[90px] items-start">
        <div className="bg-[#ff52e8] w-full flex flex-col items-start">
          <div>HEADING</div>
          <div>SUB HEADING</div>
        </div>
        <div className="bg-[#be54b0] flex flex-row items-start w-full gap-[23px]">
          <button>{"<-"}</button>
          <button>{"->"}</button>
        </div>
        <div className="bg-[#6e506a] flex flex-row items-start w-full">
          <div>01</div>
          <div>/</div> <div>02</div>
        </div>
      </div>
      <div className="bg-green-300 h-full w-[700px] relative">
        <img className="w-full h-full object-cover" src={i1} alt="img" />
        <button className="bg-[white] absolute bottom-0 left-0">View Project</button>
      </div>
    </div>
  );
}

export default Block1;
