import Link from 'next/link'
import { BsBatteryFull, BsUnlock } from 'react-icons/bs'
import { AiFillSignal, AiOutlineCamera } from 'react-icons/ai'
import { IoIosWifi, IoIosFlashlight } from 'react-icons/io'




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

          {/* Notification */}
          <div className="bg-pink-100 h-[400px] rounded-2xl my-4 mx-2 p-4">
            <div className="flex">
              <div className=" w-9/12">
                <div className="a">9:30am</div>
                <div className="text-lg">Your Morning Summary</div>
              </div>
              <p className=" bg-gray-400 w-10 h-10 text-lg rounded-full text-white text-center mx-auto flex place-items-center place-content-center mr-0 ">11 </p>
            </div>

            {/* photo section */}
            <div className="flex mt-4 space-x-3">
              <div className=" w-1/2">
                <img className='rounded-lg' src="https://images.unsplash.com/photo-1506279341724-3164373599e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGVhfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="tea" />
                <p className='text-base '>Morning with sweet tea!</p>
                <p className='text-sm to-gray-400 mt-1 '>Nice to start a day with a code and a tea!</p>
              </div>
              <div className=" w-1/2">
                <img className='rounded-lg' src="https://images.unsplash.com/photo-1526864947482-382a25347d51?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdGJhbGx8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                <p className='text-base'>All Summer transfer news</p>
                <p className='text-sm to-gray-400 mt-1'>All football clubs are hurry to make a new transfer</p>
              </div>
            </div>
            <hr className=' border-t-1 border-gray-300 my-2' />

            {/* More Updates  */}
            <div className="flex">
              <div className=" w-9/12">
                <div className="a">More Updates</div>
                <div className="text-base to-gray-300 text-[12px] truncate">Day One, weather, day two, and more...</div>
              </div>
              <div className="">
                <img className='ml-6 rounded-full w-10 h-10 mx-auto left-4' src="https://images.unsplash.com/photo-1582055624872-adf3f81ebc7f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb3RiYWxsfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
              </div>

              <div className=""></div>
            </div>
            {/* canara icons */}
            <div className="flex mt-8  justify-between">
              <div className="">
                <IoIosFlashlight className='h-8 w-8 bg-gray-300 rounded-full p-2 '></IoIosFlashlight>
              </div>
              <div className="">
                <AiOutlineCamera className='h-8 w-8 bg-gray-300 rounded-full p-2'></AiOutlineCamera>
              </div>
            </div>
          </div>





        </div>



      </div>



    </>
  )
};
