import React from "react";

function Block3() {
  return (
    <div className="w-full h-max py-[50px] max-[1080px]:pb-0 bg-violet">
      <div className="h-full w-full flex flex-col">
        <div className="h1">Mission Statement</div>
        <div className="h-max pt-[40px] flex flex-row gap-[30px] max-[1080px]:flex-col">
          <div className="h-max w-1/2 flex flex-row justify-start items-center gap-[30px] max-[1080px]:w-full">
            <div className="hBig w-[104px]">1</div>
            <div className="flex-grow txtBig">
            Our mission is to design, supply, and erect reliable and economical steel structures for our esteemed customers.
             We strive to provide the best customer service, fulfill our commitments, and uphold the highest standards of professionalism.
            </div>
          </div>
          <div className="h-max w-1/2 flex flex-row justify-start items-center gap-[30px] max-[1080px]:w-full">
            <div className="hBig w-[120px]">2</div>
            <div className="flex-grow txtBig">
            We are dedicated to contributing to the industry through innovative engineering designs, state-of-the-art production facilities, 
            and a focus on human safety and environmental protection.






            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Block3;
