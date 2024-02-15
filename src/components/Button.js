import React from "react";

const Button = ({ buttonInfo }) => {
  return (
    <div>
      <button className="m-2 py-1 rounded-lg px-4 border bg-gray-200 hover:bg-black hover:text-white  focus:bg-black focus:text-white">
        {buttonInfo}
      </button>
    </div>
  );
};

export default Button;
