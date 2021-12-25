import { createContext } from "react";

export interface ICurrencyContext {
    setValue: (value: number) => void;
    value: number;
}

export const CurrencyContext = createContext({} as ICurrencyContext);
