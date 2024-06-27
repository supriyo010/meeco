import React, { useState } from "react";
import lg1 from "./logo/logo-no-background.png";
import { useLocation, useNavigate } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";

function Navbar({ scrollToBottom, scrollToTop }) {  
  const location = useLocation();
  const navigate = useNavigate();

  const navPages = [
    { title: "home", to: "/" },
    { title: "Service", to: "/ser" },
    { title: "gallery", to: "/gallery" },
    { title: "projects", to: "/projects" },
    { title: "contact us", to: "/cont" },
  ];

  const [drawer, setDrawer] = useState(false);

  return (
    <div className="h-[100px] sticky top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-200 via-lightblue-200 to-violet-300 flex flex-row justify-between items-center px-[130px] max-[1080px]:px-[10px]">
      <img
        src={lg1}
        alt="Logo"
        className="h-[150px] w-[180px] object-contain pt-4 pl-5 md:h-[200px] md:w-[220px] md:pl-1 md:pt-6"
      />

      <div className="flex flex-row justify-end items-center gap-[30px] max-[1080px]:hidden">
        {navPages.map((item, ind) => {
          return (
            <button
              key={ind}
              onClick={() => {
                if (item.title === "contact") {
                  scrollToBottom();
                } else {
                  scrollToTop();
                  navigate(item.to);
                }
              }}
              className="uppercase px-4 py-1 hover:outline-2 relative items-center justify-center group"
            >
              {item.title}
              <div
                className={`w-[0px] absolute top-[50%] -translate-y-[50%] left-[50%] translate-x-[-50%] border-y border-[black] h-[100%] an group-hover:w-full ${
                  location.pathname === item.to ? "w-full" : ""
                }`}
              ></div>
            </button>
          );
        })}
      </div>

      <MdMenu
        onClick={() => {
          setDrawer((cur) => !cur);
        }}
        className="text-[30px] mx-[10px] min-[1080px]:hidden"
      />

      <div
        className={`h-screen w-screen absolute top-0 left-0 bg-[#00000051] backdrop-filter backdrop-blur-sm ${
          drawer ? "" : "translate-y-[-100%]"
        } an min-[1080px]:hidden p-[10px] flex flex-col gap-[20px] pt-[40px]`}
      >
        <div className="w-full h-max flex flex-row justify-end mb-[10px]">
          <MdClose
            onClick={() => {
              setDrawer((cur) => !cur);
            }}
            className="text-[30px] mx-[10px] min-[1080px]:hidden text-[white]"
          />
        </div>
        {navPages.map((item, ind) => {
          return (
            <button
              key={ind}
              onClick={() => {
                if (item.title === "contact") {
                  scrollToBottom();
                  setDrawer(false);
                } else {
                  scrollToTop();
                  navigate(item.to);
                  setDrawer(false);
                }
              }}
              className="uppercase px-4 py-1 hover:outline-2 relative items-center justify-center group text-[white]"
            >
              {item.title}
              <div
                className={`w-[0px] absolute top-[50%] -translate-y-[50%] left-[50%] translate-x-[-50%] border-y border-[white] h-[100%] an group-hover:w-full ${
                  location.pathname === item.to ? "w-full" : ""
                }`}
              ></div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
