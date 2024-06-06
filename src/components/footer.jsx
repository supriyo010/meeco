import React from "react";
import lg1 from "./logo/logo-white.png";
import { useNavigate } from "react-router-dom";

import { MdLocationPin, MdLocalPhone, MdMail } from "react-icons/md";

function Footer() {
  const navigate = useNavigate();

  const navPages = [
    { title: "home", to: "/" },
    { title: "gallery", to: "/gallery" },
    { title: "projects", to: "/projects" },
    { title: "certifications", to: "/certifications" },
  ];
  const socialPages = [
    { title: "instagram", to: "/" },
    { title: "lnked in", to: "/" },
    { title: "facebook", to: "/" },
    { title: "twitter", to: "/" },
  ];
  const contactPages = [
    {
      title: "Gouri Bhawan, Gopinathpur Sagarbhanga, Durgapur-19      ",
      icon: <MdLocationPin className="text-[#fff]" size={24} />,
      to: "/",
    },
    {
      title: " Sanjib Sarani, Beside Maharaja Weighbridge, Durgapur-01     ",
      icon: <MdLocationPin className="text-[#fff]" size={24} />,
      to: "/",
    },
    {
      title: "9679117507, 9333795331, 9800004250",
      icon: <MdLocalPhone className="text-[#fff]" size={20} />,
      to: "/",
    },
    {
      title: "techmeeco.infrapl@gmail.com",
      icon: <MdMail className="text-[#fff]" size={20} />,
      to: "/",
    },
  ];
  return (
    <div className="w-full h-max bg-[#333] flex flex-col">
      <div className="px-[130px] w-full h-max flex flex-row justify-between max-[1080px]:px-[10px] max-[1080px]:justify-center">
        <img
          src={lg1}
          alt="Logo"
          className="w-[200px] h-[100px] object-cover filter mix-blend-screen max-[1080px]:hidden"
        />
        <div className="flex-grow h-max flex flex-row max-w-[60%] max-[1080px]:max-w-[100%] max-[700px]:flex-col max-[700px]:py-[20px]">
          <div className="h-max w-1/2 flex flex-col items-start py-[30px] px-[40px] gap-4 max-[700px]:hidden">
            <p className="footH1 pb-1">Company</p>
            {navPages.map((item, ind) => {
              return (
                <button
                  key={ind}
                  onClick={() => {
                    navigate(item.to);
                  }}
                  className="footTxt uppercase relative group"
                >
                  {item.title}
                  <div className="w-[0px] absolute top-[50%] -translate-y-[50%] left-0 border-b border-[#ffffff] h-[100%] an group-hover:w-full"></div>
                </button>
              );
            })}
          </div>
          <div className="h-max w-1/2 flex flex-col items-start py-[30px] px-[40px] gap-4 max-[700px]:w-full max-[700px]:px-[10px] max-[700px]:py-[10px] max-[700px]:gap-[10px]">
            <p className="footH1"> Our Socials</p>
            {socialPages.map((item, ind) => {
              return (
                <button
                  key={ind}
                  onClick={() => {
                    navigate(item.to);
                  }}
                  className="footTxt uppercase relative group"
                >
                  {item.title}
                  <div className="w-[0px] absolute top-[50%] -translate-y-[50%] left-0 border-b border-[#ffffff] h-[100%] an group-hover:w-full"></div>
                </button>
              );
            })}
          </div>
          <div className="h-max w-1/2 flex flex-col items-start py-[30px] px-[40px] gap-4 max-[700px]:w-full max-[700px]:px-[10px] max-[700px]:py-[10px] max-[700px]:gap-[10px]">
            <p className="footH1">Contact Us</p>
            {contactPages.map((item, ind) => {
              return (
                <button
                  key={ind}
                  onClick={() => {
                    navigate(item.to);
                  }}
                  className="relative group"
                >
                  <div className="flex flex-row items-start">
                    {item.icon}
                    <p className="footTxt uppercase text-left pl-[10px]">
                      {item.title}
                    </p>
                  </div>

                  <div className="w-[0px] absolute top-[50%] -translate-y-[50%] left-0 border-b border-[#ffffff] h-[100%] an group-hover:w-full"></div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="cr flex justify-center items-center w-full h-[70px] border-t border-[#c8c8c880]">
        © 2024 All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
