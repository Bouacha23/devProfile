import Link from 'next/link';
import { FaCode } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaPercentage } from 'react-icons/fa';

function Workabout() {

  const top = [
    {icons :<FaCode  size={15}/> , title : "Ecommerce" , number : 2 },
    {icons :<FaCode /> , title : "Ecommerce" , number : 2 },
    {icons :<FaCode /> , title : "Ecommerce" , number : 2 },
    {icons :<FaCode /> , title : "Ecommerce" , number : 2 },
  ]
  return (
    <div className='back md:col-span-2 xl:grid-cols-2 lg:col-start-1 lg:row-start-5 lg:row-span-2 lg:col-span-5 grid gap-4  overflow-hidden '>
      <div className="top mb-2 ">
      <div className="title flex items-center mb-4 gap-4">
        <p className=' rounded-lg p-3  bg-secend'><FaCode size={25} className='text-third' /> </p>
        <p className='text-2xl  capitalize font-bold'>web development</p>
      </div>
      <p className='text-write text-md '>Crafting functional websites with clean code and responsive design to meet client objectives and enhance user experiences</p>
      <Link className=' bg-secend  mt-2 rounded-lg py-[10px] flex gap-2 items-center justify-center py-[10px] px-8' href="#" >
        <SiGmail size={15} className='text-third' />
        Email me
      </Link>
      </div>

      <div className="bottom lg:relative lg:hidden xl:block overflow-hidden   flex flex-col  gap-4    ">

        <div className="title mb-2 w-full flex itmes-center justify-between">
          <h1 className='text-lg font-bold  capitalize'>completed projects </h1>
          <p><Link className=' text-write capitalize view more ' href="#"> view more  </Link></p>
        </div>

        <div className='overflow-hidden lg:hidden'>
            <ul className=" grid-cols-2  grid  gap-2 ">
                {top.map( (item , index) => (
                    <li className=" flex items-center justify-between text-md p-2 bg-secend rounded-lg   whitespace-nowrap overflow-hidden ">
                        <span className="bg-primary text-third text-secend p-2 rounded-md ">{item.icons}</span>
                        <p>{item.title}</p>
                        <p className="bg-primary text-[10px] p-2 rounded-md">{`0${item.number}`}</p>
                    </li>
                ))}
            </ul>
        </div>

        <div className=' xl:flex xl:block hidden  '>
               <span className='text-9xl'>07</span>
               <span><FaPercentage size={180} className='  absolute'/></span>
        </div>
      </div>
    </div>
  )
}

export default Workabout



