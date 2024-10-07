import React from "react";

function Product() {
  return (
    <div className="h-screen w-full flex items-center justify-between gap-10 ">
      <div className="w-1/2 h-full relative z-[5] ">
        <img
          className="h-full w-full object-contain"
          src="https://davimgfx.github.io/hoobank/assets/bill.aec7cf0c.png"
          alt=""
        />
         <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
         <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>
      <div className="w-1/2">
        <h1 className="text-5xl leading-normal font-semibold font-poppinsMedium ">Easily control your
        billing & invoicing</h1>
        <p className="py-5 text-zinc-400 text-xl tracking-wide">Elit enim sed massa etiam. Mauris eunte lo adipiscing ultrices ametodio aenean neque. Fusce ipsum orciert rhoncus aliporttitor integer platea placerat.</p>
        <div className="flex items-center justify-start pt-3 gap-5">
            <img className="cursor-pointer" src="https://davimgfx.github.io/hoobank/assets/google.3035153f.svg" alt="" />
            <img className="cursor-pointer" src="https://davimgfx.github.io/hoobank/assets/apple.994d47a8.svg" alt="" />
        </div>
        </div>
    </div>
  );
}

export default Product;
