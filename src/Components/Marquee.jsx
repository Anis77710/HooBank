import React from "react";
import Button from "./Button";

function Marquee() {
  return (
    <>
      <div className="flex items-center justify-center gap-20 pb-20">
        {[
          {
            logo: "https://davimgfx.github.io/hoobank/assets/airbnb.ac0ba47e.png",
          },
          {
            logo: "https://davimgfx.github.io/hoobank/assets/binance.ef218256.png",
          },
          {
            logo: "https://davimgfx.github.io/hoobank/assets/coinbase.fd06c89f.png",
          },
          {
            logo: "https://davimgfx.github.io/hoobank/assets/dropbox.fb49a0e9.png",
          },
        ].map((elem) => (
          <div className="h-20 w-52 ">
            <img className="h-full brightness-100 hover:brightness-200 w-full object-contain" src={elem.logo} />
          </div>
        ))}
      </div>
      <div className="p-10 h-52 w-full rounded-2xl flex items-center justify-between bg-black-gradient mt-20">
        <div className="w-2/3">
            <h1 className="font-poppinsMedium font-semibold text-5xl pb-4">Let’s try our service now!</h1>
            <p className="text-xl font-poppinsRegular text-slate-300 ">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </>
  );
}

export default Marquee; // Exporting the Marquee component for use in other parts of the application.
