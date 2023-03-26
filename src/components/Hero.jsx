import React from 'react'
//import Typed from 'react-typed';

//#00df9a
export default function Hero() {
  return (
    <div className='text-white'>
     <div className='max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>Explore the possibilities of AI this summer</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Embrace AI this summer</h1>
        <div className='flex justify-center items-center '>
            <p className='md:text-5xl
             sm:text-4xl text-xl font-bold py-4'>Discover new horizons </p>
            {/*npm install react-typed --save    <Typed className='md:text-5xl
             sm:text-4xl text-xl font-bold md:pl-4 pl-2 ' strings={['BTB', 'BTC' , 'SASS'] } typeSpeed={120} backSpeed={140} loop />*/ }
           
        </div>

        <p className='md:text-2xl text-xl font-bold text-gray-500'>Maximize your AI potential and unlock new opportunities for growth</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
     </div>
    </div>
  )
}
