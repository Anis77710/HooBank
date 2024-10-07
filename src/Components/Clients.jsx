import React from "react";

function Client() {
  return (
    <div>
      <div className="min-h-screen w-full py-10 ">
        <div className="gap-5 flex py-12 justify-between items-center">
          <h1 className="w-1/2 text-5xl font-poppinsRegular font-semibold leading-snug">
            What people are saying about us
          </h1>
          <p className="w-1/2 text-slate-400 text-2xl ">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="min-h-96 w-full flex items-center px-8 py-8  gap-3 flex-shrink-0 flex-wrap">
          {[
            {
              msg: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
              img: "https://davimgfx.github.io/hoobank/assets/people01.a772086b.png",
              name: "Herman Jansen",
              pos: "CEO & Founder",
            },
            {
              msg: "Money makes your life easier. If you're lucky to have it, you're lucky.",
              img: "https://davimgfx.github.io/hoobank/assets/people02.ee8ce82b.png",
              name: "Steve Jobs",
              pos: "Co-Founder & Leader",
            },
            {
              msg: "It is usually people in the money business, finance, and international trade that are really rich.",
              img: "https://davimgfx.github.io/hoobank/assets/people03.d9f4f98a.png",
              name: "Anish Guragain",
              pos: "Manager & Co-Founder",
            },
          ].map((elem) => (
            <div className="min-h-[22rem]  rounded-lg p-10 w-[22rem] client">
              <div className="h-10 w-12">
                <img
                  className="h-full w-full object-contain"
                  src="https://davimgfx.github.io/hoobank/assets/quotes.a87d5e6d.svg"
                  alt=""
                />
              </div>
              <div className="py-8">
                <h3 className="text-[18px] font-poppinsRegular">{elem.msg}</h3>
              </div>
              <div className="flex items-center justify-start gap-3">
                <div className="h-12 w-12 rounded-full">
                  <img
                    className="h-full w-full object-contain"
                    src={elem.img}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="font-poppinsRegular text-xl font-semibold">
                    {elem.name}
                  </h2>
                  <h4 className="font-poppinsMedium text-sm text-slate-400 ">
                    {elem.pos}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Client;
