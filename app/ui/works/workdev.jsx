
import Link from 'next/link'

function Workdev() {
  return (
    <div className='  relative round flex items-center justify-center py-4 lg:col-start-6 lg:row-start-5 lg:row-span-2 lg:col-span-2'>
         <div className='z-[-1] bg-primary/50 absolute top-0 left-0 w-full h-full rounded-xl '></div>
        <img className=' -z-10 w-full h-full    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-xl' src="/work.jpg" alt="bakcgroun" />
        <div className='flex flex-col items-center'> <img className='w-[70px] h-[70px] rounded-xl   ' src="/prof.png" alt="profileimg" />
        <h2 className='text-lg font-bold my-2'>Boaucha N</h2>
        <Link  className=' bg-third px-8 py-2 rounded-xl text-[15px]  border border-4 border-primary  font-bold ' href="/"> About me </Link></div>
    </div>
  )
}

export default Workdev
