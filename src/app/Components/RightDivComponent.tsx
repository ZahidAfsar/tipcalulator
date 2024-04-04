"use client";

import React from "react";

const RightDivComponent = (props: {
  handleResetBtn: () => void;
  amountTipped: string;
  amountTotal: string;
  Button: string;
}) => {
  return (
    <div className="mx-auto lg:mx-0 w-full px-[24px] lg:px-0 lg:my-auto mb-[32px]">
      <div className="w-full h-[257px] lg:w-[413px] lg:h-[417px] bg-[#00494d] rounded-[20px] px-[24px] lg:px-[40px] lg:ms-[15px]">
        <div className="flex justify-between pt-[30px] lg:pt-[52px]">
          <div className="my-auto text-[14px] lg:text-[16px]">
            <p className="text-white spaceMonoRegular">Tip Amount</p>
            <p className="text-[#7f9c9f] spaceMonoRegular">/ person</p>
          </div>
          <div className="SpaceMonoBold text-end w-56 text-[#26c0ab] my-auto text-[32px] lg:text-[40px] overflow-x-auto">
            {`$${props.amountTipped}`}
          </div>
        </div>
        <div className="flex justify-between mt-[16px] lg:mt-[36px]">
          <div className="my-auto text-[14px] lg:text-[16px]">
            <p className="text-white spaceMonoRegular">Total</p>
            <p className="text-[#7f9c9f] spaceMonoRegular">/ person</p>
          </div>
          <div className="SpaceMonoBold text-end w-56 text-[#26c0ab] my-auto text-[32px] lg:text-[40px] overflow-x-auto">
            {`$${props.amountTotal}`}
          </div>
        </div>
        <button
          onClick={() => {
            {
              props.handleResetBtn();
            }
          }}
          className={`mt-[40px] lg:mt-[120px] w-full h-[48px] text-[#00494d] ${props.Button} rounded-[5px] SpaceMonoBold text-[24px]`}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default RightDivComponent;
