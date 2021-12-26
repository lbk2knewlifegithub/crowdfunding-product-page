const defaultTheme = require("tailwindcss/defaultTheme");
const { join } = require("path");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

module.exports = {
  content: [join(__dirname, "src/**/*.{html,ts}")],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
      },
    },
    extend: {
      colors: {
        primary: withOpacity("--moderate-cyan"),
      },
      // create custom fonts here
      fontFamily: {
        mono: ["'Commissioner'", ...defaultTheme.fontFamily.mono],
      },
      // create custom text colors here
      textColor: {
        fill: withOpacity("--black"),
        muted: withOpacity("--dark-gray"),
        inverted: withOpacity("--white"),
      },
      // create custom background colors here
      backgroundColor: {
        fill: withOpacity("--white"),
      },
    },
  },
  // custom variants
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1440px",
        },
      });
    },
  ],
};
