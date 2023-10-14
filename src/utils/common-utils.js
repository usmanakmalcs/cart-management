export const formatCurrency = (amount, currency) => {
  if (currency === "null") {
    return;
  }

  var formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
  });

  return formatter.format(amount);
};

export const makeDeepCopy = (detail) => {
  return JSON.parse(JSON.stringify(detail));
};
