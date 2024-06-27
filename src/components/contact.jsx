// TextInput.jsx

import React, { useState } from "react";

function TextInput({ value, placeholderText, onChange, compulsory, type }) {
  const [active, setActive] = useState(true);

  return (
    <div className="h-max w-full relative">
      {!value.length && active && (
        <div className="w-full h-full absolute top-0 left-0 px-[20px] py-[14px] flex items-start pointer-events-none tracking-[0.56px] text-[#8d8d8d] leading-[16px]">
          {placeholderText} {compulsory && <p className="text-[red] pl-[5px]">∘</p>}
        </div>
      )}
      {type === "input" ? (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setActive(false)}
          onBlur={() => setActive(true)}
          placeholder=""
          className="bg-[#F3F3F3] tracking-[0.56px] pTxt outline-none h-[46px] px-[20px] py-[14px] flex items-center w-full"
        />
      ) : (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=""
          className="bg-[#F3F3F3] tracking-[0.56px] pTxt outline-none h-[147px] min-h-[46px] px-[20px] py-[14px] flex items-center w-full"
        />
      )}
    </div>
  );
}

export default TextInput;

