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
  ["100"]: "#2360B1",
});

const grey = Object.freeze({
  ["900"]: "#000000",
  ["700"]: "#404040",
  ["500"]: "#E5E5E5",
  ["200"]: "#F0F0F6",
  ["100"]: "#FAFAFA",
  ["50"]: "#DADADA",
  ["0"]: "#FFFFFF",
});

export const colors = Object.freeze({
  primary: "#003C7E",
  secondary: "#007AFF",
  white: "#FFFFFF",
  text: "#595959",

  yellow,
  blue,
  grey,
});

export default colors;
