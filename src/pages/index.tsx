import { Center, Flex } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { SalaryCard } from '../components/SalaryCard';

export interface ICurrencyApiData {
  date: string,
  usd: {
    [key: string]: number;
  }
}

export const getStaticProps: GetStaticProps = async () => {

  const usedCurrencies = [
    'usd',
    'brl',
    'eur'
  ];

  const response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json');

  const data = await response.json() as ICurrencyApiData;

  const currencyData = usedCurrencies.map(currency => {
    return {
      key: currency.toUpperCase(),
      multiplier: data.usd[currency] || 1
    }
  })

  const HALF_AN_HOUR = 60 * 30

  return {
    props: {
      currencyData
    },
    revalidate: HALF_AN_HOUR
  }
}

export interface IHomeProps {
  currencyData: {
    key: string;
    multiplier: number;
  }[];
}

const Home: NextPage<IHomeProps> = (props) => {

  const {currencyData} = props;

  return (
    <>
      <Head>
        <title>Salary Converter</title>
        <meta name="description" content="Easy salary converter with multiple time rates and currencies" />
        <link rel="icon" href="/currency.svg" />
      </Head>
      <Center w={'100vw'} h={'100vh'}>
        <Flex h={'full'} w={'full'} flexWrap={'wrap'} align={'center'}>
          {currencyData.map(({key, multiplier}, index) => {
            return <SalaryCard key={index} currency={key} currencyMultiplier={multiplier} />
          })}
        </Flex>
      </Center>
    </>
  )
}

export default Home
