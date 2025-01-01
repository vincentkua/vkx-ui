import { useMemo } from "react";

const useCurrency = (amount: number, currency = "MYR") => {
  const formattedAmount = useMemo(() => {
    return new Intl.NumberFormat("en-MY", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    }).format(amount);
  }, [amount, currency]);

  return formattedAmount;
};

export default useCurrency;
