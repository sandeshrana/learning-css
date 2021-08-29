import Link from 'next/link'

//main fn()
export default function contact () {
//your variable, function and hooks go here

//main return
  return (
    <>
      <div>Hello from contact</div>
      <Link href="/">
      <button className='bg-red-300 px-10 py-4 rounded-full text-green-300 shadow-lg' >Go to Home</button>
      </Link>
    </>
  )
};
