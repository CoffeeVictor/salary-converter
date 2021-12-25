import { useContext } from "react";
import { CurrencyContext } from "../components/contexts/CurrencyContext";

export function useCurrency() {
    const currencyContext = useContext(CurrencyContext);

    return {
        ...currencyContext
    }
}