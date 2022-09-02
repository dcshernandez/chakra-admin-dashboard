module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-nested"),
    require("postcss-short")({ skip: "x" }),
  ],
};
