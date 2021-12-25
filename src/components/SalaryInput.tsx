import { FormControl, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";
import { useCurrency } from "../hooks/useCurrency";

export interface ISalaryInputProps {
    rate: string;
    timeMultiplier: number;
}

export const SalaryInput: React.FC<ISalaryInputProps> = (props) => {

    const {rate, timeMultiplier} = props;

    const {value, setValue} = useCurrency();

    function handleChange(_: string, value: number) {
        setValue(value / (timeMultiplier));
    }

    return (
        <FormControl my={'3'} id="salary-input">
            <FormLabel fontWeight={'medium'} fontSize={'larger'} >
                {rate}
            </FormLabel>
            <NumberInput 
                min={0} 
                max={1000000000}
                precision={2}
                step={1}
                value={(value * timeMultiplier).toFixed(2)}
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