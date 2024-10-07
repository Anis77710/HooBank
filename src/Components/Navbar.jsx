import React from "react";

function Navbar() {
  return (
    <div className="h-20 w-full flex items-center justify-between">
      <div className="logo">
        <img
        className="h-9"
          src="https://hoooobank.netlify.app/assets/logo.efc6c435.svg"
          alt=""
        />
      </div>
      <div className="nav-links flex items-center justify-between w-1/3">
        {["Home", "Features", "Product", "Clients"].map((item) => (
          <a className="text-lg cursor-pointer hover:text-[#35BACF]">{item}</a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
