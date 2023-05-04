import { useState } from "react";
import logo from "./assets/images/card-logo.svg";

// import card_back from "./assets/images/bg-card-back.png";
// import card_front from "./assets/images/bg-card-front.png";
// import bg_desktop from "./assets/images/bg-main-desktop.png";
// import bg_mobile from "./assets/images/bg-main-mobile.png";
import "./index.css";
import Form from "./Form";
import Thanks from "./Thanks";

function Header() {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [expdateYear, setExpdtaeYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [isClicked, setisClicked] = useState(false);

  // event handaling
  // const handleChange = (e) => {
  //   setCardNumber(e.target.value);
  //   setCardholderName(e.target.value);
  //   setExpDate(e.target.value);
  //   setCvc(e.target.value);
  //   setExpdtaeYear(e.target.value);
  // };

  return (
    // <div className="bg-[{bg_desktop}]">

    // </div>

    <div className=" flex items-center bg-left bg-[url('bg-main-desktop.png')]  bg-[length:40vw_2500vh] bg-no-repeat ">
      <div
        id="main-content-block"
        className="flex justify-center items-center p-10px min-h-[100vh] m-auto max-w-[1440px] "
      >
        <div id="credit-cards" className="flex gap-[30px] flex-col  ">
          <div className="cc-front  bg-[url('bg-card-front.png')] bg-no-repeat h-[250px] w-[450px] relative ml-[100px]">
            <img
              id="card-logo"
              className="absolute top-[15px] left-[40px] w-[75px]"
              src={logo}
              alt="credit card"
            />
            <p
              id="card-number"
              className="text-[#fff] text-[33px] bottom-[90px] left-[40px] absolute"
            >
              {cardNumber}
            </p>
            <div className="name-box">
              <p
                id="card-holder-name"
                className="text-[#fff] absolute text-[15px] bottom-[35px] left-[40px]"
              >
                {cardholderName}
              </p>
              <p
                id="exp-date"
                className="text-white absolute text-[15px] bottom-[35px] right-[95px]"
              >
                {expDate}/
                <p
                  id="exp-date-year"
                  className="text-[#fff  ] absolute text-[15px] bottom-[.1px] left-[30px]"
                >
                  {expdateYear}
                </p>
              </p>
            </div>
          </div>
          <div className="cc-back relative bg-[url('bg-card-back.png')] bg-no-repeat h-[250px] w-[100%] ml-[200px]">
            {/* <!-- <img src="/images/bg-card-back.png" alt="back of credit card" /> --> */}
            <p
              id="cvc"
              className="text-[#111] absolute top-[110px] right-[160px]"
            >
              {cvc}
            </p>
          </div>
        </div>
        <div id="content-modal" className="flex  flex-col ml-[180px]">
          {isClicked ? (
            <>
              <Thanks
                isClicked={isClicked}
                setisClicked={setisClicked}
                setCvc={setCvc}
                setCardholderName={setCardholderName}
                setCardNumber={setCardNumber}
                setExpDate={setExpDate}
                setExpdtaeYear={setExpdtaeYear}
              />
            </>
          ) : (
            <>
              <Form
                cvc={cvc}
                setCvc={setCvc}
                cardholderName={cardholderName}
                setCardholderName={setCardholderName}
                cardNumber={cardNumber}
                setCardNumber={setCardNumber}
                expDate={expDate}
                setExpDate={setExpDate}
                expdateYear={expdateYear}
                setExpdtaeYear={setExpdtaeYear}
                isClicked={isClicked}
                setisClicked={setisClicked}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Header;
