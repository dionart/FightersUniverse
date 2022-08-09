export type FontWeight = "regular" | "medium" | "bold";

export const weight: Readonly<Record<FontWeight, string>> = {
  regular: "Roboto-Regular",
  medium: "Roboto-Medium",
  bold: "Roboto-bold",
};

export const text = Object.freeze({
  weight,
});

export default text;
