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
      prevTheme === "theme1"
        ? "theme2"
        : prevTheme === "theme2"
        ? "theme3"
        : "theme1"
    );
    console.log(theme);
  };

  const clickHandle = (e) => {
    setResult(result.concat(e.target.value));
  };

  const delDigit = () => {
    setResult((prevResult) => prevResult.slice(0, -1));
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
      className={clsx(
        `bg-${theme}-backgrounds-main`,
        `text-${theme}-primary`,
        "w-screen h-screen flex justify-center items-center"
      )}
    >
      {/* calculator container */}
      <div className="calculator-wrapper">
        {/* brand name and theme changer container */}

        <div className="brand&theme flex justify-between px-2">
          <div
            className={clsx(
              `text-${theme}-text-screen`,
              "brand font-bold text-2xl"
            )}
          >
            calc
          </div>
          <div className="theme-container flex items-end gap-3">
            {/* <p className="theme-title">Theme</p> */}
            <div className="btn-container flex items-end gap-8">
              <p className={clsx(`text-${theme}-text-screen`)}>THEME</p>
              <div className="theme-switcher">
                <div className="theme-num flex justify-center font-bold">
                  <span className={clsx(`text-${theme}-text-screen`, "p-1")}>
                    1
                  </span>
                  <span className={clsx(`text-${theme}-text-screen`, "p-1")}>
                    2
                  </span>
                  <span className={clsx(`text-${theme}-text-screen`, "p-1")}>
                    3
                  </span>
                </div>
                <div
                  className={clsx(
                    `bg-${theme}-backgrounds-toggle`,
                    "theme-btn flex py-1 px-2 rounded-full"
                  )}
                >
                  <button
                    onClick={() => setTheme("theme1")}
                    className={clsx(
                      theme === "theme1"
                        ? `bg-${theme}-keys-secondary-background`
                        : `bg-${theme}-backgrounds-toggle`,
                      "flex items-center p-2 rounded-full"
                    )}
                  ></button>
                  <button
                    onClick={() => setTheme("theme2")}
                    className={clsx(
                      theme === "theme2"
                        ? `bg-${theme}-keys-secondary-background`
                        : `bg-${theme}-backgrounds-toggle`,
                      "flex items-center p-2 rounded-full"
                    )}
                  ></button>
                  <button
                    onClick={() => setTheme("theme3")}
                    className={clsx(
                      theme === "theme3"
                        ? `bg-${theme}-keys-secondary-background`
                        : `bg-${theme}-backgrounds-toggle`,
                      "flex items-center p-2 rounded-full"
                    )}
                  ></button>
                </div>
              </div>
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
            className={clsx(
              `text-${theme}-text-screen bg-${theme}-backgrounds-screen`,
              "w-full h-auto rounded-2xl  p-8 text-right outline-none font-bold text-2xl"
            )}
          />
        </div>

        {/* keyboard container */}
        <div
          className={clsx(
            `bg-${theme}-backgrounds-toggle`,
            "keyboard-container p-4 rounded-2xl mt-4 transition-all"
          )}
        >
          <div className="mx-2 my-4 flex justify-between">
            <input
              type="button"
              value="7"
              className={clsx(
                `bg-${theme}-keys-tertiary-background shadow-${theme}-tertiary text-${theme}-text-primary`,
                "py-2 px-6 rounded-lg font-bold text-2xl w-24 h-auto"
              )}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="8"
              className={clsx(
                `bg-${theme}-keys-tertiary-background shadow-${theme}-tertiary text-${theme}-text-primary`,
                "py-2 px-6 rounded-lg font-bold text-2xl w-24 h-auto"
              )}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="9"
              className={clsx(
                `bg-${theme}-keys-tertiary-background shadow-${theme}-tertiary text-${theme}-text-primary`,
                " py-2 px-6 rounded-lg font-bold text-2xl w-24 h-auto"
              )}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="DEL"
              className={clsx(
                `bg-${theme}-keys-primary-background shadow-${theme}-primary text-${theme}-text-white`,
                "py-2 px-6 rounded-lg font-bold text-2xl w-24 h-auto"
              )}
              onClickCapture={delDigit}
            />
          </div>
          <div className="mx-2 my-4 flex justify-between">
            <input
              type="button"
              value="4"
              className={clsx(
                `bg-${theme}-keys-tertiary-background shadow-${theme}-tertiary text-${theme}-text-primary`,
                "py-2 px-6 rounded-lg font-bold text-2xl w-24 h-auto"
              )}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="5"
              className={clsx(
                `bg-${theme}-keys-tertiary-background shadow-${theme}-tertiary text-${theme}-text-primary`,
                "py-2 px-6 rounded-lg font-bold text-2xl w-24 h-auto"
              )}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="6"
              className={clsx(
                `bg-${theme}-keys-tertiary-background shadow-${theme}-tertiary text-${theme}-text-primary`,
                "py-2 px-6 rounded-lg font-bold text-2xl w-24 h-auto"
              )}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="+"
              className={clsx(
                `bg-${theme}-keys-tertiary-background shadow-${theme}-tertiary text-${theme}-text-primary`,
                "py-2 px-6 rounded-lg font-bold text-2xl w-24 h-auto"
              )}
              onClickCapture={clickHandle}
            />
          </div>
          <div className="mx-2 my-4 flex justify-between">
            <input
              type="button"
              value="1"
              className={clsx(
                `bg-${theme}-keys-tertiary-background shadow-${theme}-tertiary text-${theme}-text-primary`,
                "py-2 px-6 rounded-lg font-bold text-2xl w-24 h-auto"
              )}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="2"
              className={clsx(
                `bg-${theme}-keys-tertiary-background shadow-${theme}-tertiary text-${theme}-text-primary`,
                "py-2 px-6 rounded-lg font-bold text-2xl w-24 h-auto"
              )}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="3"
              className={clsx(
                `bg-${theme}-keys-tertiary-background shadow-${theme}-tertiary text-${theme}-text-primary`,
                "py-2 px-6 rounded-lg font-bold text-2xl w-24 h-auto"
              )}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="-"
              className={clsx(
                `bg-${theme}-keys-tertiary-background shadow-${theme}-tertiary text-${theme}-text-primary`,
                "py-2 px-6 rounded-lg font-bold text-2xl w-24 h-auto"
              )}
              onClickCapture={clickHandle}
            />
          </div>
          <div className="mx-2 my-4 flex justify-between">
            <input
              type="button"
              value="."
              className={clsx(
                `bg-${theme}-keys-tertiary-background shadow-${theme}-tertiary text-${theme}-text-primary`,
                "py-2 px-6 rounded-lg font-bold text-2xl w-24 h-auto"
              )}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="0"
              className={clsx(
                `bg-${theme}-keys-tertiary-background shadow-${theme}-tertiary text-${theme}-text-primary`,
                "py-2 px-6 rounded-lg font-bold text-2xl w-24 h-auto"
              )}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="/"
              className={clsx(
                `bg-${theme}-keys-tertiary-background shadow-${theme}-tertiary text-${theme}-text-primary`,
                "py-2 px-6 rounded-lg font-bold text-2xl w-24 h-auto"
              )}
              onClickCapture={clickHandle}
            />
            <input
              type="button"
              value="x"
              className={clsx(
                `bg-${theme}-keys-tertiary-background shadow-${theme}-tertiary text-${theme}-text-primary`,
                "py-2 px-6 rounded-lg font-bold text-2xl w-24 h-auto shadow-md"
              )}
              onClickCapture={clickHandle}
            />
          </div>
          <div className="mx-2 my-4 flex justify-between gap-4">
            <input
              type="button"
              value="reset"
              className={clsx(
                `bg-${theme}-keys-primary-background shadow-${theme}-primary text-${theme}-text-white`,
                "py-2 px-6 rounded-lg font-bold text-2xl basis-1/2 h-auto"
              )}
              onClickCapture={clearScreen}
            />
            <input
              type="button"
              value="="
              className={clsx(
                `bg-${theme}-keys-secondary-background shadow-${theme}-secondary text-${theme}-text-white`,
                "py-2 px-6 rounded-lg font-bold text-2xl basis-1/2 h-auto"
              )}
              onClickCapture={calculate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
