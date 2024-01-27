import React, { useEffect, useState } from "react";
import exp from "./images/imageImport";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import { MdClose, MdOutlineClose } from "react-icons/md";

function Gallery() {
  const [imagesPerRow, setImagesperRow] = useState(5);
  const [rows, setRows] = useState(2);
  const [page, setPage] = useState(1);
  const [active, setActive] = useState({});

  return (
    <div className="px-[130px] w-full h-max flex flex-col items-start pb-[50px]">
      <div className="flex flex-row justify-start gap-[20px] pb-[30px]">
        <div className="h1">Photo</div>
        <div className="h2">Gallery</div>
      </div>

      <div className="w-full h-max pb-[30px] flex flex-wrap">
        {Object.keys(exp.images).map((imageName, index) => {
          if (
            index >= rows * imagesPerRow * (page - 1) &&
            index < rows * imagesPerRow * page
          )
            return (
              <div
                className={`w-[${100 / imagesPerRow}%] h-[30vh] overflow-clip`}
              >
                <div
                  className={`w-full h-full ${
                    active[imageName]
                      ? "absolute z-[60] w-full h-[calc(100vh-100px)] px-[100px] py-[50px] left-0 top-0 bg-[#fff] backdrop-filter backdrop-blur-sm"
                      : ""
                  }`}
                >
                  <div className="w-full h-full relative overflow-clip group">
                    <div
                      className={` ${
                        active[imageName]
                          ? "absolute h-max w-max right-0 top-0 m-3 border border-[#ffffff] bg-[#3333334f] backdrop-filter backdrop-blur-lg cursor-pointer translate-x-[calc(100%+12px)] group-hover:translate-x-0 an"
                          : "hidden"
                      }`}
                      onClick={() => {
                        setActive((cur) => ({ ...cur, [imageName]: false }));
                      }}
                    >
                      <MdClose
                        size={50}
                        color="#fff"
                        className="p-3 hover:rotate-90 an"
                      />
                    </div>
                    <img
                      key={index}
                      src={exp.images[imageName]}
                      alt={imageName}
                      className={`w-full h-full object-cover ${
                        active[imageName]
                          ? ""
                          : "scale-110 cursor-pointer hover:scale-90 an"
                      }`}
                      onClick={() => {
                        setActive((cur) => ({ ...cur, [imageName]: true }));
                      }}
                    />
                  </div>
                </div>
              </div>
            );
        })}
      </div>

      <div className="w-full h-max flex flex-row justify-start items-center gap-[30px] ">
        <div className="flex flex-row w-max gap-8 items-center">
          <div className="pagiD">{page < 10 ? `0${page}` : `${page}`}</div>
          <div className="h-[44px] w-[2px] skew-x-[135deg] bg-[#bdbdbd]"></div>
          <div className="pagi">
            {Math.ceil(Object.keys(exp.images).length / (rows * imagesPerRow)) <
            10
              ? `0${Math.ceil(
                  Object.keys(exp.images).length / (rows * imagesPerRow)
                )}`
              : `${Math.ceil(
                  Object.keys(exp.images).length / (rows * imagesPerRow)
                )}`}
          </div>
        </div>
        <div className="flex flex-row justify-start items-center flex-grow">
          <button
            className="w-[53px] h-[53px] border border-[#d4d4d4] hover:bg-[#F9F9F9] an mr-[23px] flex items-center justify-center group"
            onClick={() => {
              setPage((cur) => {
                if (cur <= 1) {
                  return Math.ceil(
                    Object.keys(exp.images).length / (rows * imagesPerRow)
                  );
                }
                return cur - 1;
              });
            }}
          >
            <LuMoveLeft className="text-[#333333] group-hover:-translate-x-1 an" />
          </button>
          <button
            className="w-[53px] h-[53px] border border-[#d4d4d4] hover:bg-[#F9F9F9] an flex items-center justify-center group"
            onClick={() => {
              setPage((cur) => {
                if (
                  cur >=
                  Math.ceil(
                    Object.keys(exp.images).length / (rows * imagesPerRow)
                  )
                ) {
                  return 1;
                }
                return cur + 1;
              });
            }}
          >
            <LuMoveRight className="text-[#333333] group-hover:translate-x-1 an" />
          </button>
          <div className="h-[1px] flex-grow bg-[#d4d4d4]"></div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
