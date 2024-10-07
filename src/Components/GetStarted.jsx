import React from "react";

function GetStarted() {
  return (
    <div className="h-36 w-36 rounded-full bg-blue-gradient p-[2px] cursor-pointer ">
      <div className="bg-[#060A15] text-white h-full w-full rounded-full flex items-center justify-center ">
        <div className="flex items-center flex-col leading-5">

        <div className="flex gap-2 items-center font-poppinsMedium text-[18px]">
            Get
        <span >
          <img
          className="h-5"
          src="https://davimgfx.github.io/hoobank/assets/arrow-up.012ff21b.svg"
          alt=""
          />
        </span>
        </div>
        
        <div className="font-poppinsMedium text-[18px]  pl-4">
            Started
        </div>
          </div>
      </div>
    </div>
  );
}

export default GetStarted;
