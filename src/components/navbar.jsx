import React from "react";

function Navbar() {
  const navPages = [
    { title: "main", to: "" },
    { title: "gallery", to: "" },
    { title: "projects", to: "" },
    { title: "certifications", to: "" },
    { title: "contact", to: "" },
  ];
  return (
    <div className="h-[102px] absolute top-0 w-full bg-[#ffff002c] flex flex-row justify-between items-center px-[130px]  ">
      <div className="bg-red-300">LOGO</div>
      <div className="bg-blue-200 flex flex-row justify-end items-center gap-[60px]">
        {navPages.map((item, ind) => {
          return <button className="bg-green-400">{item.title}</button>;
        })}
      </div>
    </div>
  );
}

export default Navbar;
