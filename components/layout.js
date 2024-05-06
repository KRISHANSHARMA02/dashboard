import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import profile from '@/public/profile.png'

import { CgProfile } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { FaStarHalfAlt } from "react-icons/fa";

export default function Layout({ children }) {
  const user = {
    name: 'username',
    src: profile, // Replace with the actual user image URL
  };
  const handleLogout = () => {
    // Handle logout logic here
  };
  return (
    <>
      <Head>
        <title>FullCalendar Next.js 13 Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="favicon" href="/favicon.ico" />
      </Head>
      
        <div  className='flex'>
          <div className='flex flex-col w-auto h-screen border-r-2 bg-[#fff]'>
         <div>
      <h1 className='text-2xl ml-5 mt-5 font-bold'>Learn<b className='text-orange-600'>O</b>sphere.in</h1>
    </div>
        
        <div className='mt-5 ml-5 flex flex-col w-60  h-screen '>
      
            
                <div className='mt-3 p-2 mr-4 flex items-center hover:bg-orange-500 hover:text-white rounded-md'><CgProfile size={20}/><Link prefetch={false} className='pl-2 font-semibold ' href="/home">Profile</Link></div>
                <div className='mt-3 p-2 mr-4 flex items-center hover:bg-orange-500 hover:text-white rounded-md'><PiStudentBold size={20} /><Link prefetch={false} className='pl-2 font-semibold' href="">Number of students</Link></div>
                <div className='mt-3 p-2 mr-4 flex items-center hover:bg-orange-500 hover:text-white rounded-md'><MdOutlineWatchLater size={20} /><Link prefetch={false} className='pl-2 font-semibold' href="">Number of hour's</Link></div>
                <div className='mt-3 p-2 mr-4 flex items-center hover:bg-orange-500 hover:text-white rounded-md'><SlCalender size={20} /><Link prefetch={false} href='/calendar' className='pl-2 font-semibold' >Calendar</Link></div>
                <div className='mt-3 p-2 mr-4 flex items-center hover:bg-orange-500 hover:text-white rounded-md'><RiMoneyRupeeCircleLine size={20} /><Link prefetch={false} className='pl-2 font-semibold' href="">Payout</Link></div>
                <div className='mt-3 p-2 mr-4 flex items-center hover:bg-orange-500 hover:text-white rounded-md'><FaStarHalfAlt size={20} /><Link prefetch={false} className='pl-2 font-semibold' href="">Rating</Link></div>
                
              
        </div>
        </div>
      <div>
        <div className='border-b-2'>
        <nav className="bg-white p-4 flex justify-end items-center">
     
      <div className="flex items-center">
        {user && (
          <div className="flex items-center mr-4">
            <Image width={100} height={100}
              src={user.src} // Replace with the URL of the user's image
              alt={user.name}
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="text-black font-semibold mr-2">{user.name}</span>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="bg-orange-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-500"
        >
          Logout
        </button>
      </div>
    </nav>
        </div>

      <div className=' w-[83vw]'>
        {children}
      </div>
      </div>

    </div>
      
    </>
  )
}
