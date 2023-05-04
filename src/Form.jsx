import React from "react";

function Form({
  cvc,
  setCvc,
  cardholderName,
  setCardholderName,
  cardNumber,
  setCardNumber,
  expDate,
  setExpDate,
  expdateYear,
  setExpdtaeYear,
  isClicked,
  setisClicked,
}) {
  return (
    <form id="card-form" className="w-[500px]">
      <div id="input-field" className="flex flex-col">
        <label for="cardholderName">Cardholder name</label>
        <input
          name="cardholderName"
          type="text"
          id="cardname"
          placeholder="e.g. Jane Appleseed"
          onChange={(e) => {
            setCardholderName(e.target.value);
          }}
          value={cardholderName}
          required
        />
      </div>
      <div id="input-field" className="flex flex-col">
        <label for="cardNumber">Card Number</label>
        <input
          name="cardNumber"
          type="numeric"
          id="cardnumber"
          onChange={(e) => {
            setCardNumber(e.target.value);
          }}
          value={cardNumber}
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength="20"
          required
        />
      </div>
      <div id="date-cvc-container" className="flex flex-row gap-[10px]">
        <div>
          <label>Exp. Date (MM/YY)</label>
          <div id="date-month-input-box" className="flex gap-[7px]">
            <input
              name="expMonth"
              className="sml-inp1 w-[60px]"
              id="sml-inp"
              type="numeric"
              placeholder="MM"
              maxLength="2"
              onChange={(e) => {
                setExpDate(e.target.value);
              }}
              value={expDate}
              required
            />
            <input
              name="expYear"
              className="sml-inp2 w-[60px]"
              id="sml-inp"
              type="numeric"
              placeholder="YY"
              maxLength="2"
              onChange={(e) => {
                setExpdtaeYear(e.target.value);
              }}
              value={expdateYear}
              required
            />
          </div>
        </div>
        <div id="cvc-container" className="flex">
          <div>
            <label for="cvcCode">Cvc</label>
            <div>
              <input
                name="cvcCode"
                className="w-[165px]"
                id="cvc-input"
                type="numeric"
                maxLength="3"
                placeholder="e.g. 123"
                onChange={(e) => {
                  setCvc(e.target.value);
                }}
                value={cvc}
                required
              />
            </div>
          </div>
        </div>
      </div>
      <button
        id="confirm-btn"
        className="w-[300px] h-[37px] mt-[20px] rounded-[5px] border-none bg-[#21092f] text-[#ffffff] text-[14px] cursor-pointer"
        type="submit"
        onClick={() => {
          setisClicked(!isClicked);
        }}
      >
        Confirm
      </button>
    </form>
  );
}

export default Form;
