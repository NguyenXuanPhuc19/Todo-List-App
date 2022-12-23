import React from "react";

function Header() {

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl text-[#000] font-bold uppercase tracking-[0.6rem]">
          Todo List App
        </h1>
      </div>
      <h3 className="text-xl my-3 text-[#000] font-bold">
        {new Date().toLocaleDateString("en-GB")}
      </h3>
    </>
  );
}

export default Header;
