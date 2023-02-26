import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


export default function Navbar() {

    const[nav, setNav] = useState(false)

    /// set the opposite value of the setNav() method
    const handleNav = () =>{
        setNav(!nav)
    }

  return (
    <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]' >React.</h1>
        {/* Here I am hidding this div menu if the size of the screen is smaller than 640px*/}
        <ul className='hidden md:flex'>
            <li className='p-4  ' >Home</li>
            <li className='p-4 '>Company</li>
            <li className='p-4 '>Resources</li>
            <li className='p-4 '>About</li>
            <li className='p-4 '>Contact</li>
        </ul>
        {/* Here I am hidding icons if the size of the screen is larger than 640px*/}
        <div onClick={handleNav} className='block ' >
            {nav ? <AiOutlineClose size={20} />  : <AiOutlineMenu size={20}/>}
        </div>
        {/* mobile menu */}
        <div className='block '>
            <ul className={nav ? 'fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : ' fixed left-[-100%] '}>
                <li className='p-4 border-b border-gray-600 ' >Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>Resources</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4 border-b border-gray-600'>Contact</li>
            </ul>
        </div>
        {/* mobile menu */}


    </div>
  )
}
