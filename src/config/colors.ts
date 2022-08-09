const yellow = Object.freeze({
  ["500"]: "#FF8B00",
  ["400"]: "#FF991F",
  ["300"]: "#FFAB00",
  ["200"]: "#FFC400",
  ["100"]: "#FFE380",
  ["75"]: "#FFF0B3",
  ["50"]: "#FFFAE6",
});

const blue = Object.freeze({
  ["500"]: "#003C7E",
  ["400"]: "#296DF1",
  ["300"]: "#007AFF",
  ["200"]: "#1A90F0",
});

const grey = Object.freeze({
  ["900"]: "#000000",
  ["700"]: "#404040",
  ["200"]: "#E5E5E5",
  ["100"]: "#FAFAFA",
  ["0"]: "#FFFFFF",
});

export const colors = Object.freeze({
  primary: "#003C7E",
  secondary: "#007AFF",
  white: "#FFFFFF",

  yellow,
  blue,
  grey,
});

export default colors;
