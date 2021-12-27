import { Container, Heading } from "@chakra-ui/react";
import { SalaryInput } from "./SalaryInput";

export interface ISalaryCardProps {
    currency: string;
    currencyMultiplier: number;
}

export const SalaryCard: React.FC<ISalaryCardProps> = (props) => {

    const {currency, currencyMultiplier} = props;

    return (
        <Container 
            borderRadius={'lg'} 
            borderWidth={1} 
            my={'5'} 
            py={'8'}
            display={'flex'} 
            flexDir={'column'} 
            justifyContent={'space-around'}
            maxH={'2xl'}
            shadow={'dark-lg'}
            w={'sm'}
        >
            <Heading>
                {currency}
            </Heading>
            <Heading as="h2" size={'sm'} fontWeight={'medium'} mt={'2'} >
                {`Calculated as 1.00 USD = ${currencyMultiplier.toFixed(2)} ${currency}`}
            </Heading>
            <SalaryInput rate="Hourly" timeMultiplier={1 * currencyMultiplier} />
            <SalaryInput rate="Daily" timeMultiplier={8 * currencyMultiplier} />
            <SalaryInput rate="Weekly" timeMultiplier={40 * currencyMultiplier} />
            <SalaryInput rate="Monthly" timeMultiplier={160 * currencyMultiplier} />
            <SalaryInput rate="Yearly" timeMultiplier={160 * 12 * currencyMultiplier} />
        </Container>
    )
}