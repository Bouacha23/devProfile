import Link from 'next/link';
import { FaCode } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function Workabout() {

  const top = [
    {icons :<FaCode  size={22}/> , title : "Ecommerce" , number : 2 },
    {icons :<FaCode /> , title : "Ecommerce" , number : 2 },
    {icons :<FaCode /> , title : "Ecommerce" , number : 2 },
    {icons :<FaCode /> , title : "Ecommerce" , number : 2 },
  ]
  return (
    <div className='back '>
      <div className="top p-4">
      <div className="title flex items-center mb-4 gap-4">
        <p className=' rounded-lg p-3  bg-secend'><FaCode size={25} className='text-third' /> </p>
        <p className='text-2xl  capitalize font-bold'>web development</p>
      </div>
      <p className='text-write text-md '>Crafting functional websites with clean code and responsive design to meet client objectives and enhance user experiences</p>
      <Link className=' bg-secend  mt-4 rounded-lg py-[12px] flex gap-2 items-center justify-center py-[10px] px-8' href="#" >
        <SiGmail size={15} className='text-third' />
        Email me
      </Link>
      </div>
      <div className="bottom py-0 px-4 flex flex-col   ">
        <div className="title mb-2  flex itmes-center justify-between">
          <h1 className='text-lg font-bold  capitalize'>completed projects </h1>
          <p><Link className=' text-write capitalize view more' href="#"> view more  </Link></p>
        </div>
        <div className='overflow-hidden'>
            <ul className=" grid-cols-2  grid  gap-2 ">
                {top.map( (item , index) => (
                    <li className=" flex items-center justify-between text-md  p-2 bg-secend rounded-lg   whitespace-nowrap overflow-hidden ">
                        <span className="bg-primary text-third text-secend p-2 rounded-md ">{item.icons}</span>
                        <p>{item.title}</p>
                        <p className="bg-primary p-2 rounded-md">{`0${item.number}`}</p>
                    </li>
                ))}
            </ul>

        </div>
      </div>
    </div>
  )
}

export default Workabout



