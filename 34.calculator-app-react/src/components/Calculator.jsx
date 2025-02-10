import clsx from "clsx";
import React, { useState, useContext } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";

// import resolveConfig from "tailwindcss/resolveConfig";
// import tailwindConfig from "../../tailwind.config.js"; // Adjust the path

// const fullConfig = resolveConfig(tailwindConfig);


const Calculator = () => {
  const [result, setResult] = useState("");

  const [theme, setTheme] = useState("theme1"); // Default theme

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "theme1" ? "theme2" : prevTheme === "theme2" ? "theme3" : "theme1"
    );
    console.log(theme)
  };

  const clickHandle = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clearScreen = () => {
    setResult("");
  };

  const calculate = () => {
    setResult(eval(result).toString());
  };

  return (
    <div
    style={{}}
      className={clsx(`bg-${theme}-backgrounds-main`, `text-${theme}-primary`, "w-screen h-screen flex justify-center items-center")}
    >
      {/* calculator container */}
      <div className="calculator-wrapper">
        {/* brand name and theme changer container */}

        <div className="brand&theme flex justify-between px-2">
          <div className={clsx(`text-${theme}-text-screen`,"brand font-bold text-2xl")}>calc</div>
          <div className="theme-container flex items-end gap-3">
            {/* <p className="theme-title">Theme</p> */}
            <div className="btn-container">
            <button
                onClick={toggleTheme}
                className={clsx(`bg-${theme}-backgrounds-toggle text-${theme}-text-white`, "flex items-center p-2 rounded-full")}
            >
                toggle
            </button>
            </div>
            {/* <ThemeContext/> */}
          </div>
        </div>

        {/* screen container */}
        <div className="screen p-2 sm:w-[325px] md:w-[485px] min-w-[325px] max-w-[485px] shadow-lg rounded-2xl">
          {/* actual screen */}
          <input
            type="text"
            value={result}
            className={clsx(`text-${theme}-text-screen bg-${theme}-backgrounds-screen`, "w-full h-auto rounded-2xl  p-8 text-right outline-none")}
          />
        </div>

        {/* keyboard container */}
        <div className="keyboard-container bg-${theme}-backgrounds-toggle p-4 rounded-2xl mt-4 transition-all">
          <div className="mx-2 my-4 flex justify-between">
            <input
              type="button"
              value="7"
              className={clsx(`bg-${theme}-keys-tertiary-background text-${theme}-text-primary`, "py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto")}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="8"
              className={clsx(`bg-${theme}-keys-tertiary-background text-${theme}-text-primary`, "py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto")}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="9"
              className={clsx(`bg-${theme}-keys-tertiary-background text-${theme}-text-primary`, " py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto")}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="DEL"
              className={clsx(`bg-${theme}-keys-primary-background text-${theme}-text-white`, "py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto")}
              onClickCapture={clickHandle}
            />
          </div>
          <div className="mx-2 my-4 flex justify-between">
            <input
              type="button"
              value="4"
              className={clsx(`bg-${theme}-keys-tertiary-background text-${theme}-text-primary`, "py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto")}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="5"
              className={clsx(`bg-${theme}-keys-tertiary-background text-${theme}-text-primary`, "py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto")}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="6"
              className={clsx(`bg-${theme}-keys-tertiary-background text-${theme}-text-primary`, "py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto")}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="+"
              className={clsx(`bg-${theme}-keys-tertiary-background text-${theme}-text-primary`, "py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto")}
              onClickCapture={clickHandle}
            />
          </div>
          <div className="mx-2 my-4 flex justify-between">
            <input
              type="button"
              value="1"
              className={clsx(`bg-${theme}-keys-tertiary-background text-${theme}-text-primary`, "py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto")}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="2"
              className={clsx(`bg-${theme}-keys-tertiary-background text-${theme}-text-primary`, "py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto")}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="3"
              className={clsx(`bg-${theme}-keys-tertiary-background text-${theme}-text-primary`, "py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto")}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="-"
              className={clsx(`bg-${theme}-keys-tertiary-background text-${theme}-text-primary`, "py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto")}
              onClickCapture={clickHandle}
            />
          </div>
          <div className="mx-2 my-4 flex justify-between">
            <input
              type="button"
              value="."
              className={clsx(`bg-${theme}-keys-tertiary-background text-${theme}-text-primary`, "py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto")}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="0"
              className={clsx(`bg-${theme}-keys-tertiary-background text-${theme}-text-primary`, "py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto")}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="/"
              className={clsx(`bg-${theme}-keys-tertiary-background text-${theme}-text-primary`, "py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto")}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="x"
              className={clsx(`bg-${theme}-keys-tertiary-background text-${theme}-text-primary`, "py-2 px-6 rounded-lg font-bold text-2xl shadow-md w-24 h-auto")}
              onClickCapture={clickHandle}
            />
          </div>
          <div className="mx-2 my-4 flex justify-between gap-4">
            <input
              type="button"
              value="reset"
              className={clsx(`bg-${theme}-keys-primary-background text-${theme}-text-white`,"py-2 px-6 rounded-lg font-bold text-2xl shadow-md basis-1/2 h-auto")}
              onClickCapture={clearScreen}
            />
            <input
              type="button"
              value="="
              className={clsx(`bg-${theme}-keys-secondary-background text-${theme}-text-white`, "py-2 px-6 rounded-lg font-bold text-2xl shadow-md basis-1/2 h-auto")}
              onClickCapture={calculate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
