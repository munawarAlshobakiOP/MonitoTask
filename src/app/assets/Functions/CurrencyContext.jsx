"use client";
import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();
const currencyRates = {
  VND: 1, 
  USD: 1 / 24000,
  EUR: 1 / 25800, 
  GBP: 1 / 30000, 
  JPY: 1 / 165,   
};


export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('VND');

  const convert = (priceVND) => {
    const rate = currencyRates[currency] || 1;
    return priceVND * rate;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convert, currencyRates }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
