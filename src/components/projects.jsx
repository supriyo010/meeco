import React, { useState } from "react";
import exp from "./images/imageImport";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function Projects({ scrollToTop }) {
  const navigate = useNavigate();

  const [rows, setRows] = useState(3);
  const [page, setPage] = useState(1);

  const projects = [
    {
      title: "Sample Project1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      to: "",
    },
    {
      title: "TATA Steel (Jamshedpur)",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      to: "",
    },
    {
      title: "Sample Project3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      to: "",
    },
    {
      title: "Sample Project4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      to: "",
    },
    {
      title: "Sample Project5",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      to: "",
    },
    {
      title: "Sample Project6",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      to: "",
    },
    {
      title: "Sample Project7",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      to: "",
    },
  ];

  return (
    <div className="px-[130px] max-[1080px]:px-[10px] w-full h-max flex flex-col items-start pb-[50px]">
      <div className="flex flex-row justify-start gap-[20px] pb-[30px]">
        <div className="h1">Our</div>
        <div className="h2">Projects</div>
      </div>

      <div className="w-full h-max pb-[30px] flex flex-col gap-[30px]">
        {exp.combinedArray.map((imageName, index) => {
          if (index >= rows * (page - 1) && index < rows * page)
            return (
              <div className={`w-[100%] h-[50vh] flex flex-row max-[1080px]:h-max` }>
                <div className={`w-full h-full bg-[#F3F3F3] flex flex-row max-[1080px]:h-max`}>
                  <div className="h-full w-[55%] max-[1080px]:hidden overflow-clip ">
                    <img
                      key={index}
                      src={imageName[1]}
                      alt={imageName}
                      className={`w-full h-full object-cover scale-110 hover:scale-100 an`}
                      onClick={() => {}}
                    />
                  </div>
                  <div className="h-full w-[45%] max-[1080px]:w-full flex flex-col justify-between p-[30px] max-[1080px]:gap-[10px] max-[1080px]:h-max">
                    <p className="h4">{projects[index].title}</p>
                    <p className="txt">{projects[index].description}</p>
                    <button
                      onClick={() => {
                        scrollToTop();
                        navigate(`/project/${index}`);
                      }}
                      className="bg-[white] w-max h-[70px] pl-[20px] pr-[50px] flex flex-row items-center gap-[18px] border border-[white] hover:border-[#d4d4d4] group an"
                    >
                      <p className="b1 ">View More</p>
                      <LuMoveRight className="text-[#333333] group-hover:translate-x-2 an" />
                    </button>
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
            {Math.ceil(Object.keys(exp.combinedArray).length / rows) < 10
              ? `0${Math.ceil(Object.keys(exp.combinedArray).length / rows)}`
              : `${Math.ceil(Object.keys(exp.combinedArray).length / rows)}`}
          </div>
        </div>
        <div className="flex flex-row justify-start items-center flex-grow">
          <button
            className="w-[53px] h-[53px] border border-[#d4d4d4] hover:bg-[#F9F9F9] an mr-[23px] flex items-center justify-center group"
            onClick={() => {
              scrollToTop();
              setPage((cur) => {
                if (cur <= 1) {
                  return Math.ceil(
                    Object.keys(exp.combinedArray).length / rows
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
              scrollToTop();
              setPage((cur) => {
                if (
                  cur >= Math.ceil(Object.keys(exp.combinedArray).length / rows)
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

export default Projects;
