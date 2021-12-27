import { FormControl, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";
import { useCurrency } from "../hooks/useCurrency";

export interface ISalaryInputProps {
    rate: string;
    timeMultiplier: number;
}

export const SalaryInput: React.FC<ISalaryInputProps> = (props) => {

    const {rate, timeMultiplier} = props;

    const {value, setValue} = useCurrency();

    function handleChange(valueAsString: string, valueAsNumber: number) {

        valueAsString = valueAsString.replace('.', '')

        valueAsNumber = Number(valueAsString) / 100;

        setValue(valueAsNumber / (timeMultiplier));
    }

    return (
        <FormControl my={'3'} id="salary-input">
            <FormLabel fontWeight={'medium'} fontSize={'larger'} >
                {rate}
            </FormLabel>
            <NumberInput 
                min={0}
                precision={2}
                value={(isNaN(value * timeMultiplier) ? 0 : (value * timeMultiplier).toFixed(2))}
                onChange={handleChange}
            >
                <NumberInputField fontSize={'large'} fontWeight={'medium'}/>
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </FormControl>
    )
}