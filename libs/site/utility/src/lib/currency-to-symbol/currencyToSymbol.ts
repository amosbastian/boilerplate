const currencyMap: Record<string, string> = {
  eur: "€",
  gbp: "£",
  usd: "$",
};

export const currencyToSymbol = (currency: string) => {
  return currencyMap[currency] ?? "€";
};
