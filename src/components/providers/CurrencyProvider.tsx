import { useState } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";

export const CurrencyProvider: React.FC = (props) => {

    const {children} = props;

    const [value, setValue] = useState<number>(1.00);

    return <CurrencyContext.Provider value={{
        value,
        setValue
    }}>
        {children}
    </CurrencyContext.Provider>
}