import React from "react";
import Button from "./Button";

function Features() {
  return (
    <div className="h-screen w-full flex gap-3 py-10">
      <div className="left  font-poppinsMedium w-1/2">
        <h1 className="text-5xl leading-snug font-semibold pt-4 pb-8">
          You do the business, we’ll handle your money.
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed font-poppinsRegular pb-10 tracking-wide ">
          With the right bank account, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className="right w-1/2 flex items-center flex-col gap-5 py-7 ">
        {[
          {
            symbl:
              "https://davimgfx.github.io/hoobank/assets/Star.b8bf87ea.svg",
            title: "transfer money",
            description:
              "The best way to transfer money varies based on individual needs and preferences.",
          },
          {
            symbl:
              "https://davimgfx.github.io/hoobank/assets/Shield.6d9e87e5.svg",
            title: "100% secured",
            description:
              "We take proactive steps make sure your information and transactions are secure.",
          },
          {
            symbl:
              "https://davimgfx.github.io/hoobank/assets/Send.454b3199.svg",
            title: "request loan",
            description:
              "A request for a loan can provide you with the financial means to purchase a wide range of items and fulfill your interests.",
          },
        ].map((elem, index)=>{
           return <div className="flex items-center justify-between gap-3 p-5 rounded-xl card">
                <div className="h-16 w-16 rounded-[50%] bg-gray-900 flex items-center justify-center flex-shrink-0">
                <img className="h-1/2 w-1/2 object-contain " src={elem.symbl} alt="" />
                </div>
                <div>
                    <h3 className="text-xl font-poppinsMedium capitalize ">{elem.title}</h3>
                    <p className="text-[18px] font-poppinsRegular text-gray-400">{elem.description}</p>
                </div>
                </div>
})}
      </div>
    </div>
  );
}

export default Features;
