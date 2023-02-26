import React from 'react'

 export default function 
() {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimizi your flow?</h1>
                <p>Sign up to our newsletter and stay tuned up to date</p>

            </div>

            <div className='my-4 '>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full md:gap-5'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter email' />
                    <button className='bg-[#00df9a] text-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Notify me</button>
                    <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span> </p>
                </div>

            </div>

        </div>

    </div>
  )
}
