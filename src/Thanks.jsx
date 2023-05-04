import React from "react";
import Complite from "./assets/images/icon-complete.svg";

function Thanks({
  setCvc,
  setCardholderName,
  setCardNumber,
  setExpDate,
  setExpdtaeYear,
  isClicked,
  setisClicked,
}) {
  return (
    <div
      id="thank-you-container"
      className="flex flex-col items-center  justify-center"
    >
      <img id="complete-icon" className="mb-[20px]" src={Complite} alt="" />
      <p id="thank-you" className="text-[30px] tracking-[3px]">
        THANK YOU!
      </p>
      <p id="added-card" className="text-[#ffffff]">
        We've added your card details
      </p>
      <button
        id="continue-btn"
        className="w-[300px] h-[37px] mt-[20px] rounded-[5px] border-none bg-[#21092f] text-[#ffffff] text-[14px] cursor-pointer"
        onClick={() => {
          setisClicked(!isClicked);
          setCvc("");
          setCardholderName("");
          setCardNumber("");
          setExpDate("");
          setExpdtaeYear("");
        }}
      >
        Continue
      </button>
    </div>
  );
}

export default Thanks;
