import { capitalize } from "../../utils/common-utils";
import { ProductItemType } from "./shopping-cart-types";

export const prepareProducts = (products: Array<ProductItemType>) => {
  return products.map((item) => ({
    ...item,
    quantity: 0,
    color: capitalize(item.colour),
  }));
};

export const calculateTotal = (products: Array<ProductItemType>) => {
  return products.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
};

export const colorFilterOptions = (products: Array<ProductItemType>) => {
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

export const applyColorFilter = (
  colorFilter: string,
  products: Array<ProductItemType>
) => {
  if (!colorFilter) return products;

  return products.filter(({ colour }) => colour === colorFilter);
};
