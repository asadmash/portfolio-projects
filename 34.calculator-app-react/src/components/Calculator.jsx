import React from "react";

const Calculator = () => {
  return (
    <div className="bg-[#3b4664] text-white w-screen h-screen flex justify-center items-center">
      {/* calculator container */}
      <div className="calculator-wrapper">
        {/* screen container */}
        <div className="screen p-2 sm:w-[325px] md:w-[485px] min-w-[325px] max-w-[485px] shadow-lg rounded-2xl">
          {/* actual screen */}
          <input
            type="text"
            className="text-white bg-[#181f32] w-full h-auto rounded-2xl  p-8 text-right outline-none"
          />
        </div>

        {/* keyboard container */}
        <div className="keyboard-container bg-[#252d44] p-4 rounded-2xl mt-4">
          <div className="mx-2 my-4 flex justify-between">
            <input
              type="button"
              value="7"
              className="bg-[#eae3db] text-[#3b4664] py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto"
            />
            <input
              type="button"
              value="8"
              className="bg-[#eae3db] text-[#3b4664] [#3b4664] py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto"
            />
            <input
              type="button"
              value="9"
              className="bg-[#eae3db] text-[#3b4664] [#3b4664] py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto"
            />
            <input
              type="button"
              value="DEL"
              className="bg-[#657199] text-[#eae3db] [#3b4664] py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto"
            />
          </div>
          <div className="mx-2 my-4 flex justify-between">
            <input
              type="button"
              value="4"
              className="bg-[#eae3db] text-[#3b4664] py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto"
            />
            <input
              type="button"
              value="5"
              className="bg-[#eae3db] text-[#3b4664] [#3b4664] py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto"
            />
            <input
              type="button"
              value="6"
              className="bg-[#eae3db] text-[#3b4664] [#3b4664] py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto"
            />
            <input
              type="button"
              value="+"
              className="text-[#3b4664] bg-[#eae3db] [#3b4664] py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto"
            />
          </div>
          <div className="mx-2 my-4 flex justify-between">
            <input
              type="button"
              value="1"
              className="bg-[#eae3db] text-[#3b4664] py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto"
            />
            <input
              type="button"
              value="2"
              className="bg-[#eae3db] text-[#3b4664] [#3b4664] py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto"
            />
            <input
              type="button"
              value="3"
              className="bg-[#eae3db] text-[#3b4664] [#3b4664] py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto"
            />
            <input
              type="button"
              value="-"
              className="text-[#3b4664] bg-[#eae3db] [#3b4664] py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto"
            />
          </div>
          <div className="mx-2 my-4 flex justify-between">
            <input
              type="button"
              value="."
              className="bg-[#eae3db] text-[#3b4664] py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto"
            />
            <input
              type="button"
              value="0"
              className="bg-[#eae3db] text-[#3b4664] [#3b4664] py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto"
            />
            <input
              type="button"
              value="/"
              className="bg-[#eae3db] text-[#3b4664] [#3b4664] py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto"
            />
            <input
              type="button"
              value="x"
              className="text-[#3b4664] bg-[#eae3db] [#3b4664] py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto"
            />
          </div>
          <div className="mx-2 my-4 flex justify-between">
            <input
              type="button"
              value="reset"
              className="bg-[#647299] text-[#eae3db] py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-32 h-auto"
            />
            <input
              type="button"
              value="="
              className="bg-[#d13f30] text-[#eae3db] [#3b4664] py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-32 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
