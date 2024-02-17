import React, { useState } from "react";

import { LuMoveRight } from "react-icons/lu";

function TextInput(
  value = "",
  placeholderText = "",
  onChange = () => {},
  compulsory = false,
  type = "input"
) {
  const [active, setActive] = useState(true);
  return (
    <div className="h-max w-full relative">
      {!value.length && active && (
        <div className="w-full h-full absolute top-0 left-0 px-[20px] py-[14px] flex items-start pointer-events-none tracking-[0.56px] text-[#8d8d8d] leading-[16px]">
          {placeholderText}{" "}
          {compulsory && <p className="text-[red] pl-[5px]">∘</p>}
        </div>
      )}
      {(() => {
        switch (type) {
          case "input":
            return (
              <input
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                onFocus={() => {
                  setActive(false);
                }}
                onBlur={() => {
                  setActive(true);
                }}
                placeholder=""
                className="bg-[#F3F3F3] tracking-[0.56px] pTxt outline-none h-[46px] px-[20px] py-[14px] flex items-center w-full"
              />
            );
          case "textarea":
            return (
              <textarea
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                placeholder=""
                className="bg-[#F3F3F3] tracking-[0.56px] pTxt outline-none h-[147px] min-h-[46px] px-[20px] py-[14px] flex items-center w-full"
              />
            );
          default:
            return (
              <input
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                placeholder=""
                className="bg-[#F3F3F3] tracking-[0.56px] pTxt outline-none h-[46px]  px-[20px] py-[14px] flex items-center w-full"
              />
            );
        }
      })()}
    </div>
  );
}

function Block5() {
  const [form, setForm] = useState({
    name: { value: "", placeholder: "Name", compulsory: false, type: "input" },
    number: {
      value: "",
      placeholder: "Phone Number",
      compulsory: true,
      type: "input",
    },
    email: {
      value: "",
      placeholder: "Email",
      compulsory: true,
      type: "input",
    },
    subject: {
      value: "",
      placeholder: "Interested in",
      compulsory: false,
      type: "input",
    },
    message: {
      value: "",
      placeholder: "Message",
      compulsory: true,
      type: "textarea",
    },
  });

  return (
    <div className="w-full h-max py-[50px]">
      <div className="h-max w-full flex flex-col items-center max-[1080px]:items-start">
        <div className="h1">Contact Us</div>
        <div className="h-max w-full mt-[40px] flex flex-row justify-center gap-[30px]">
          <div className="h-max w-[40%] flex flex-col justify-start items-start gap-[10px] max-[1080px]:w-full">
            {Object.entries(form).map((item) => {
              const onChange = (newValue) => {
                setForm((cur) => ({
                  ...cur,
                  [item[0]]: { ...cur[item[0]], value: newValue },
                }));
              };
              return TextInput(
                item[1].value,
                item[1].placeholder,
                onChange,
                item[1].compulsory,
                item[1].type
              );
            })}
            <button className="bg-[#333333] w-full h-[46px] pl-[20px] pr-[50px] flex flex-row items-center gap-[18px] border border-[#333333] hover:border-[#000] group an">
              <p className="b2 h-[70px] flex flex-row items-center">
                Send Email
              </p>
              <LuMoveRight className="text-[#fff] group-hover:translate-x-2 an" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Block5;
