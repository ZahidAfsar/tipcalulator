"use client";

import React from "react";

const ButtonsComponent = (props: {
  tip: (input: string) => void;
  percent: string;
  tipSaved: string;
  inputTip: (input: string) => void;
}) => {
  return (
    <button
      onClick={() => {
        props.tip(props.percent);
        props.inputTip("");
      }}
      className={`w-full h-[48px] rounded-[5px] text-[24px] hover:bg-[#9FE8DF] hover:text-[#00494d] ${
        props.tipSaved === props.percent
          ? "text-[#00494d] bg-[#26c0ab]"
          : "bg-[#00494d] text-white"
      }`}
    >
      {`${props.percent}%`}
    </button>
  );
};

export default ButtonsComponent;
