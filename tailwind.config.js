/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        ibmPlexSans: ["IbmPlexSans"],
        microExtendFLF: ["MicroExtendFLF"],
        redHatDisplay: ["RedHatDisplay"],
        electrolize: ["Electrolize"],
        roboto: ["Roboto"],
      },
      screens: {
        "lt-1596": { max: "1520px", min: "640px" },
        "bt-827": { min: "827px" },
        "lt-827": { max: "827px" },
        "lt-1024": { max: "1024px" },
        "bt-1280": { min: "1280px" },
        "lt-1280": { max: "1280px" },
        "bt-400": { min: "400px" },
        "lt-400": { max: "400px" },
      },
      transitionDuration: {
        "750": "750ms",
        "3000": "3000ms",
        "5000": "5000ms",
        "8000": "8000ms",
        "10000": "10000ms",
      },
    },
  },
  plugins: [],
};
