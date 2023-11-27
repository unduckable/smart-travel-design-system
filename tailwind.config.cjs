/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /(text|font|shadow)-./,
      variants: ["hover", "focus"],
    },
  ],
  theme: {
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      "2xl": ["32px", "40px"],
      "3xl": ["40px", "48px"],
      "4xl": ["48px", "56px"],
      "5xl": ["56px", "64px"],
      "6xl": ["72px", "80px"],
    },
    boxShadow: {
      xs: "0px 1px 2px 0px rgba(18, 18, 23, 0.05)",
      sm: "0px 1px 2px 0px rgba(18, 18, 23, 0.06), 0px 1px 3px 0px rgba(18, 18, 23, 0.1)",
      md: "0px 2px 4px -1px rgba(18, 18, 23, 0.06), 0px 4px 6px -1px rgba(18, 18, 23, 0.08)",
      lg: "0px 4px 6px -2px rgba(18, 18, 23, 0.05), 0px 10px 15px -3px rgba(18, 18, 23, 0.08)",
      xl: "0px 10px 10px -5px rgba(18, 18, 23, 0.04), 0px 20px 25px -5px rgba(18, 18, 23, 0.1)",
      "2xl": "0px 25px 50px -12px rgba(18, 18, 23, 0.25)",
      overlay:
        "0px 2px 4px 0px rgba(18, 18, 23, 0.0399), 0px 5px 8px 0px rgba(18, 18, 23, 0.04), 0px 10px 18px 0px rgba(18, 18, 23, 0.03), 0px 24px 48px 0px rgba(18, 18, 23, 0.03), 0px 0px 0px 1px rgba(18, 18, 23, 0.1)",
    },
    colors: {
      gray: {
        50: "#F7F7F8",
        100: "#EBEBEF",
        200: "#D1D1DB",
        300: "#A9A9BC",
        400: "#8A8AA3",
        500: "#6C6C89",
        600: "#55556D",
        700: "#3F3F50",
        800: "#282833",
        900: "#121217",
      },
      blue: {
        50: "#FOF8FF",
        100: "#DBEFFF",
        200: "#ADDAFF",
        300: "#70BFFF",
        400: "#38A5FF",
        500: "#008CFF",
        600: "#0076D6",
        700: "#005FAD",
        800: "#004985",
        900: "#00335C",
      },
      pink: {
        50: "#FDF2F7",
        100: "#FAE5EE",
        200: "#F5CBDD",
        300: "#F0B2CD",
        400: "#EB99BC",
        500: "#E67FAC",
        600: "#DF5D96",
        700: "#D83B7F",
        800: "#C4276B",
        900: "#A22058",
      },
      red: {
        50: "#FEF0F4",
        100: "#FDD8E1",
        200: "#FBB1C4",
        300: "#F98BA6",
        400: "#F76489",
        500: "#F53D6B",
        600: "#F3164E",
        700: "#D50B3E",
        800: "#AF0932",
        900: "#880727",
      },
      yellow: {
        50: "#FFF9EB",
        100: "#FFF3D6",
        200: "#FFE7AD",
        300: "#FFDA85",
        400: "#FFCE5C",
        500: "#FFC233",
        600: "#FAAF00",
        700: "#C28800",
        800: "#8A6100",
        900: "#523900",
      },
      green: {
        50: "#EEFBF4",
        100: "#DFF8EA",
        200: "#B2EECC",
        300: "#84E4AE",
        400: "#56D990",
        500: "#2DCA72",
        600: "#26A95F",
        700: "#4DDBAC",
        800: "#17663A",
        900: "#0F4527",
      },
      orange: {
        50: "#FFF2EE",
        100: "#FFE8E1",
        200: "#FFCDBD",
        300: "#FFB399",
        400: "#FF9876",
        500: "#FF7D52",
        600: "#FF571F",
        700: "#EB3A00",
        800: "#B82E00",
        900: "#852100",
      },
      white: {
        50: "#0d0d0d",
        100: "#1a1a1a",
        200: "#333333",
        300: "#4d4d4d",
        400: "#666666",
        500: "#808080",
        600: "#999999",
        700: "#cccccc",
        800: "#e5e5e5",
        900: "#ffffff",
      },
      disabled: "#A9A9BC",
    },
  },
  plugins: [require("tailwindcss-react-aria-components")],
  prefix: "s-",
};
