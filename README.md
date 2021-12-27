# Salary Rate Converter

![Demo Gif](docs/assets/demo-gif.gif)

### A Web App to easily convert a salary to different rates and currencies. Check out the live version [here](https://salary-rate-converter.vercel.app/).

## Motivation

Many times when looking at different jobs in different places i had to think about how it's compensation would affect my income per day/month/year/etc, frequently also in many currencies, that made me spend a lot of time using a regular calculator to get the information i needed. So due to this personal necessity i decided it was worth it to put a couple hours creating this app so that it did all that work instead of me 😁.

## Technologies

I decided to create it as a Web App so that i could access it from anywhere at any time.

- React: It has always been my framework/library of choice, i think it's much more productive for a smaller project like this than Angular/Vue/Vanilla JS while also knowing that it could handle scalabillity without any problems.
- NextJS: While this project doesn't require any type of SSR or SSG the performance boost is really nice. However, the main point of using Next was how easy it is to deploy on Vercel. Having an SSL sertificate, custom domain, deploy, CI/CD and all the other nice features of Vercel with a few commands and for free is just sooo 💖💖 (Love you Vercel).
- Currency API: I'm consuming [fawazahmed0's Currency API](https://github.com/fawazahmed0/currency-api) to get up to date values on the currencies used via HTTP with the Fetch API.
- ChakraUI: I've been using Chakra over plain CSS/SASS for the last few months and i'm in love, makes it very easy to maintain a consistent style while i focus all my attention on the "business rules". More important than that, it makes it easier to create responsive layouts, which was the main knowledge i tried to exercise with this project since i wanted it to work both well both on Desktop and Mobile.
- Typescript: Because at this point i think much of my productivity comes from TS, anything i try to do on JS just takes 30% longer.

## Run it yourself

You will need NodeJS on your machine and yarn (npm should also work)  

It was created as a regular CNA app, so...

1. Clone the project  
``git clone https://github.com/CoffeeVictor/salary-converter.git``
2. Install dependencies  
   ``yarn`` or ``npm install``
3. Run the development server  
   ``yarn dev`` or ``npm run dev``
4. Check it on localhost:3000