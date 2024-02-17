import React from "react";
import lg1 from "./logo/logo-no-background.png";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar({ scrollToBottom, scrollToTop }) {
  const location = useLocation();
  const navigate = useNavigate();

  const navPages = [
    { title: "main", to: "/" },
    { title: "gallery", to: "/gallery" },
    { title: "projects", to: "/projects" },
    { title: "contact", to: "/contact" },
  ];

  return (
    <div className="h-[100px] sticky top-0 w-full z-50 bg-[#ffffff]  flex flex-row justify-between items-center px-[130px]">
      <img src={lg1} alt="Logo" className="h-[40px] object-contain" />

      <div className="flex flex-row justify-end items-center gap-[30px]">
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
    </div>
  );
}

export default Navbar;
