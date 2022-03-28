module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainAccent: "#32445C",
        secondAccent: "#000",
        secondAccAccent: "#ffff",
        grayAccent: "#17242A",
        creme: "#D8C3A4",
        whiteoff: "#EAE8DC",
        linkedin: "#0073b1",
        yellowAccent: "#FEDC2A",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
