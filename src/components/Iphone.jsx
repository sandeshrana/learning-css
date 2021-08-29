import Link from 'next/link'
import { BsBatteryFull, BsUnlock } from 'react-icons/bs'
import { AiFillSignal, } from 'react-icons/ai'
import { IoIosWifi } from 'react-icons/io'

//import above

//main fn()
export default function Iphone() {
  //your variable, function and hooks go here

  //main return
  return (
    <>
      { /* 👇 Code starts from here */}

      <div className='relative overflow-hidden border-[14px] border-black h-[720px] w-[350px] bg-black rounded-[60px] shadow-xl'>
        <img className='absolute inset-0 w-full h-full object-cover' src="https://wallpapers.hector.me/wavey/Rainbow%20iPhone%20P3.jpg" alt="wallpaper" />
        <div className='absolute top-0 inset-x-0'>
          <div className="h-6  w-40 m-auto bg-black rounded-b-3xl ">
          </div>
        </div>
        <div className="relative">
          <div className=" mt-2 mr-5 flex justify-end space-x-1 ">
            <AiFillSignal className='h-4 w-4' />
            <IoIosWifi className='h-5 w-5' />
            <BsBatteryFull className='h-5 w-5' />
          </div>
          <div className="ml-auto mr-7 mt-0.5 rounded h-0.5 w-10 bg-white "></div>

          <div className='' >
            <BsUnlock className="w-12 h-12 mx-auto text-white mt-5 " />
            <div className="text-center text-5xl text-white mt-5 font-extralight ">11:45AM </div>
            <div className="  text-white text-center mt-2">Monday , June 7  </div>
          </div>
        </div>



      </div>
    </>
  )
};
