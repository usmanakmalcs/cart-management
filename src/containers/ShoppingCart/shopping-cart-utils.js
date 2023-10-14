export const prepareProducts = (products) => {
  return products.map((item) => ({ ...item, quantity: 0 }));
};

export const calculateTotal = (products) => {
  return products.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
};
