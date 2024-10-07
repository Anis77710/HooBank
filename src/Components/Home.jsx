import React from "react";
import GetStarted from "./GetStarted";

function Home() {
  return (
    <div>
      <div className="hero w-full h-[100%] flex justify-between py-12">
        <div className="left w-[55%] h-[100%] relative">
          <div className=" px-4 py-2 bg-[#272628] rounded-xl flex items-center gap-2 font-[400] w-fit text-lg font-poppinsRegular">
            <span>
              {" "}
              <img src="https://hoooobank.netlify.app/assets/Discount.61d9dc08.svg" />
            </span>
            20% Discount For 1 Month Account
          </div>

          <div className="flex items-center justify-start">
            <div>
              <h1 className="text-7xl w-fit  font-poppinsRegular font-semibold leading-tight py-5">
                The Next <br />
                <span className="text-gradient">Generation</span> <br />
                Bank Method.
              </h1>
              <p className="text-gray-400 font-poppinsRegular font-medium leading-relaxed  text-[18px]">
                Our team of experts uses a methodology to identify the credit
                cards most likely to fit your needs. We examine annual
                percentage rates, annual fees.
              </p>
            </div>
            <div>
              <GetStarted />
            </div>
          </div>
        </div>

        <div className="right w-[50%] relative -mr-14">
          <img
            className="h-full w-full relative z-[5] "
            src="https://hoooobank.netlify.app/assets/robot.352cd501.png"
          />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </div>

      <div className="flex items-center justify-between pb-10 px-3">
        {[
          { num: "3800+", text: "user active" },
          { num: "230+", text: "trusted by company" },
          { num: "$300M+", text: "transaction" },
        ].map((item)=>(
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-4xl font-poppinsMedium font-semibold">{item.num}</h1>
              <h2 className="text-2xl text-gradient uppercase">{item.text}</h2>
            </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
