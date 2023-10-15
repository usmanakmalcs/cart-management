import { capitalize } from "../../utils/common-utils";

export const prepareProducts = (products) => {
  return products.map((item) => ({
    ...item,
    quantity: 0,
    color: capitalize(item.colour),
  }));
};

export const calculateTotal = (products) => {
  return products.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
};

export const colorFilterOptions = (products) => {
  const uniqueColors = Array.from(
    new Set(products.map(({ colour }) => colour))
  );

  const colors = uniqueColors.map((color) => ({
    label: color,
    value: color,
  }));

  colors.unshift({ label: "All", value: "" });

  return colors;
};


export const applyColorFilter = (colorFilter, products) => {
  if(!colorFilter) return products;

  return products.filter(({ colour }) => colour === colorFilter)
}