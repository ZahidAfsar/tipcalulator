"use client";

import ButtonsComponent from "./ButtonsComponet";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import iconPerson from "@/app/Assets/tip-calculator-app-main-2/images/icon-person.svg";
import splitterLogo from "@/app/Assets/tip-calculator-app-main-2/images/logo.svg";
import dollarSign from "@/app/Assets/tip-calculator-app-main-2/images/icon-dollar.svg";

import RightDivComponent from "./RightDivComponent";

const DisplayComponent = () => {
  const [tipSavedInput, settipSavedInput] = useState<string>("0");
  const [numOfPeopleInput, setnumOfPeopleInput] = useState<string>(""); 
  const [inputTip, setinputTip] = useState<string>(""); 
  const [InputBill, setInputBill] = useState<string>("");

  const [amountTotal, setamountTotal] = useState<string>("NaN");
  const [amountTipped, setamountTipped] = useState<string>("NaN");

  const [Button, setButton] = useState<string>("cursor-default bg-[#29696D]");

  const [inputRedText, setinputRedText] = useState<string>("");
  const [inputColor, setinputColor] = useState<string>(
    "focus:ring-[2px] focus:ring-[#26c0ab] focus:outline-none"
  );

  const handleResetBtn = () => {
    if (InputBill !== "" || inputTip !== "" || numOfPeopleInput !== "") {
      setInputBill("");
      setinputTip("");
      settipSavedInput("0");
      setnumOfPeopleInput("");
    }
  };
useEffect(() => {
    if (InputBill !== "" && (numOfPeopleInput === "" || numOfPeopleInput === "0")) {
      setinputColor("outline-none ring-[2px] ring-[#FF835B]");
      setinputRedText("Can't be zero");
    } else {
      setinputColor("focus:outline-none focus:ring-[2px] focus:ring-[#26c0ab]");
      setinputRedText("");
    }
    let tipsAmount =
      (Number(InputBill) * (Number(tipSavedInput) / 100)) / Number(numOfPeopleInput);
    let billAmount = Number(InputBill) / Number(numOfPeopleInput);
    let total = billAmount + tipsAmount;
    setamountTipped(tipsAmount.toFixed(2));
    setamountTotal(total.toFixed(2));
    if (
      total.toFixed(2) === "NaN" ||
      total.toFixed(2) === "" ||
      total.toFixed(2) === "Infinity"
    ) {
      setamountTotal("0.00");
    }
    if (
      tipsAmount.toFixed(2) === "NaN" ||
      tipsAmount.toFixed(2) === "" ||
      tipsAmount.toFixed(2) === "Infinity"
    ) {
      setamountTipped("0.00");
    }
  
    if (InputBill !== "" || inputTip !== "" || numOfPeopleInput !== "") {
      setButton("bg-[#26c0ab] hover:bg-[#9FE8DF]");
    } else {
      setButton("bg-[#29696D] cursor-default");
    }
    document.body.classList.add("bodyBackground");
    return () => {
      document.body.classList.remove("bodyBackground");
    };
  }, [InputBill, tipSavedInput, numOfPeopleInput]);
  

  return (
    <div className="mb-4" >
      <div className="min-h-screen grid align-center">
        <div className="mt-[50px] lg:mt-auto mb-[41px] lg:mb-[88px] mx-auto">
          <Image src={splitterLogo} alt="splitter splitterLogo" />
        </div>

        <div className="bg-white h-auto w-full lg:w-[920px] lg:h-[481px] rounded-t-[20px] lg:rounded-[20px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            <div className="SpaceMonoBold px-[32px] lg:ps-[48px] mb-[32px]">
              <p className="text-[#5e7a7d] mt-[42px] mb-[12px]">Bill</p>
              <div className="relative">
                <span className="absolute top-4 left-[14px]">
                  <Image src={dollarSign} alt="dollar symbol icon" />
                </span>
                <input
                  onChange={(e) => {
                    if (Number(e.target.value) >= 0 || e.target.value === "") {
                      setInputBill(e.target.value);
                    }
                  }}
                  value={InputBill}
                  type="number"
                  placeholder="0"
                  className="w-full lg:w-[379px] h-[48px] bg-[#f4fafa] rounded-[5px] text-end text-[#00494d] placeholder-[#7f9c9f] text-[24px] focus:outline-none focus:ring-[2px] focus:ring-[#26c0ab] ps-[37px] pe-[14px]"
                />
              </div>

              <p className="text-[#5e7a7d] mt-[36px] mb-[18px]">Select Tip %</p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[14.5px]">
                <ButtonsComponent
                  percent="5"
                  tip={settipSavedInput}
                  tipSaved={tipSavedInput}
                  inputTip={setinputTip}
                />
                <ButtonsComponent
                  percent="10"
                  tip={settipSavedInput}
                  tipSaved={tipSavedInput}
                  inputTip={setinputTip}
                />
                <ButtonsComponent
                  percent="15"
                  tip={settipSavedInput}
                  tipSaved={tipSavedInput}
                  inputTip={setinputTip}
                />
                <ButtonsComponent
                  percent="25"
                  tip={settipSavedInput}
                  tipSaved={tipSavedInput}
                  inputTip={setinputTip}
                />
                <ButtonsComponent
                  percent="50"
                  tip={settipSavedInput}
                  tipSaved={tipSavedInput}
                  inputTip={setinputTip}
                />
                <input
                  onChange={(e) => {
                    if (Number(e.target.value) >= 0 || e.target.value === "") {
                      setinputTip(e.target.value);
                      if (e.target.value === "") {
                        settipSavedInput("0");
                      } else {
                        settipSavedInput(e.target.value);
                      }
                    }
                  }}
                  value={inputTip}
                  type="number"
                  className="w-full h-[48px] bg-[#f4fafa] rounded-[5px] placeholder-[#5e7a7d] text-[#00494d] text-end text-[24px] focus:outline-none focus:ring-[2px] focus:ring-[#26c0ab] px-[14px]"
                  placeholder="Custom"
                />
              </div>
              <div className="flex justify-between">
                <p className="text-[#5e7a7d] mt-[36px] mb-[12px]">
                  Number of People
                </p>
                <p className="text-[#FF835B] mt-[36px] mb-[12px]">
                  {inputRedText}
                </p>
              </div>
              <div className="relative">
                <span className="absolute top-4 left-[14px]">
                  <Image src={iconPerson} alt="person icon" />
                </span>
                <input
                  onChange={(e) => {
                    if (
                      /^\d*$/.test(e.target.value) &&
                      !e.target.value.includes(".")
                    ) {
                      setnumOfPeopleInput(e.target.value);
                    }
                  }}
                  value={numOfPeopleInput}
                  type="text"
                  placeholder="0"
                  className={`w-full lg:w-[379px] h-[48px] bg-[#f4fafa] rounded-[5px] text-end text-[#00494d] placeholder-[#7f9c9f] text-[24px] ${inputColor} ps-[37px] pe-[14px]`}
                />
              </div>
            </div>
            <RightDivComponent
              amountTipped={amountTipped}
              amountTotal={amountTotal}
              handleResetBtn={handleResetBtn}
              Button={Button}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayComponent;
