/** @type {import('tailwindcss').Config} */
const themes = ["theme1", "theme2", "theme3"];

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    ...themes.flatMap((theme) => [
      `bg-${theme}-backgrounds-main`,
      `bg-${theme}-backgrounds-toggle`,
      `bg-${theme}-backgrounds-screen`,
      `bg-${theme}-keys-primary-background`,
      `bg-${theme}-keys-secondary-background`,
      `bg-${theme}-keys-tertiary-background`,
      `text-${theme}-text-primary`,
      `text-${theme}-text-screen`,
      `text-${theme}-text-white`,
      `text-${theme}-text-yellow`,
      `text-${theme}-text-darkBlue`,
      `shadow-${theme}-primary`,
      `shadow-${theme}-secondary`,
      `shadow-${theme}-tertiary`,
      `text-${theme}-keys-secondary-background`
    ]),
  ],
  theme: {
    extend: {
      boxShadow: {
        // Theme 1
        'theme1-primary': "0px 4px 2px 0px rgba(64,78,114,0.75)",
        'theme1-secondary': "0px 4px 2px 0px rgba(147,38,26,0.75)",
        'theme1-tertiary': "0px 4px 2px 0px rgba(180,165,151,0.75)",
        // Theme 2
        'theme2-primary': "0px 4px 2px 0px rgba(30,97,106,0.75)",
        'theme2-secondary': "0px 4px 2px 0px rgba(137,57,1,0.75)",
        'theme2-tertiary': "0px 4px 2px 0px rgba(180,165,151,0.75)",
        // Theme 3
        'theme3-primary': "0px 4px 2px 0px rgba(188,21,244,0.75)",
        'theme3-secondary': "0px 4px 2px 0px rgba(108,249,242,0.75)",
        'theme3-tertiary': "0px 4px 2px 0px rgba(135,28,156,0.75)",
      },
      colors: {
        theme1: {
          backgrounds: {
            main: "hsl(222, 26%, 31%)",
            toggle: "hsl(225, 30%, 21%)",
            screen: "hsl(224, 36%, 15%)",
          },
          keys: {
            primary: {
              background: "hsl(225, 21%, 49%)",
              shadow: "0px 10px 2px 0px rgba(64,78,114,0.75)",
            },
            secondary: {
              background: "hsl(6, 63%, 50%)",
              shadow: "0px 10px 2px 0px rgba(147,38,26,0.75)",
            },
            tertiary: {
              background: "hsl(30, 25%, 89%)",
              shadow: "0px 10px 2px 0px rgba(180,165,151,0.75)",
            },
          },
          text: {
            primary: "hsl(221, 14%, 31%)",
            screen: "hsl(0, 0%, 100%)",
            white: "hsl(180, 100%, 97%)",
          },
        },
        theme2: {
          backgrounds: {
            main: "hsl(0, 0%, 90%)",
            toggle: "hsl(0, 5%, 81%)",
            screen: "hsl(0, 0%, 93%)",
          },
          keys: {
            primary: {
              background: "hsl(185, 41%, 56%)",
              shadow: "0px 10px 2px 0px rgba(27,95,101,0.75",
            },
            secondary: {
              background: "hsl(25, 98%, 40%)",
              shadow: "0px 10px 2px 0px rgba(137,57,1,0.75)",
            },
            tertiary: {
              background: "hsl(45, 7%, 89%)",
              shadow: "0px 10px 2px 0px rgba(166,157,145,0.75)",
            },
          },
          text: {
            primary: "hsl(60, 10%, 19%)",
            screen: "hsl(60, 10%, 19%)",
            white: "hsl(180, 100%, 97%)",
          },
        },
        theme3: {
          backgrounds: {
            main: "hsl(268, 75%, 9%)",
            toggle: "hsl(268, 71%, 12%)",
            screen: "hsl(268, 71%, 12%)",
          },
          keys: {
            primary: {
              background: "hsl(281, 89%, 26%)",
              shadow: " 0px 10px 2px 0px rgba(188,21,244,0.75)",
            },
            secondary: {
              background: "hsl(176, 100%, 44%)",
              shadow: "0px 10px 2px 0px rgba(108,249,242,0.75)",
            },
            tertiary: {
              background: "hsl(268, 47%, 21%)",
              shadow: "0px 10px 2px 0px rgba(135,28,156,0.75)",
            },
          },
          text: {
            primary: "hsl(52, 100%, 62%)",
            darkBlue: "hsl(198, 20%, 13%)",
            screen: "hsl(46, 64%, 63%)",
            white: "hsl(180, 100%, 97%)",
          },
        },
      },
    },
  },
  plugins: [],
};
