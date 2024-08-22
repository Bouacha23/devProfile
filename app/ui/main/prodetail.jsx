import { FaFlag } from "react-icons/fa";
import { IoIosHappy } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaStar , FaArrowCircleDown } from "react-icons/fa";
function Detailprof() {
    const arr = [
        {number : 8 , name : "Projects" , icons : < FaFlag  size={15} className="text-third"/> , } ,
        {number : 2 , name : "happy clients" , icons : <IoIosHappy size={15} className="text-third"/> , } ,
        {number :  1 , name : "year expetise" , icons : <FaStar size={15} className="text-third"/> , } 
    ]
  return (
    <div className="  grid gap-2 grid-cols-2 sm:grid-cols-1   ">
        {
           arr.map((item ,index) => (

      <div className="back  " key={index}>

        <div className="font-bold text-5xl text-center relative gradient-text ">
         <FaPlus size={25} className="text-third absolute top-4  right-7  "/> 
        {`0${item.number} `}
        </div>

        <div className="fl bg-secend back ">
            {item.icons}
            {item.name}
        </div>
      </div>
           ))
        }
        <div className="back fl   ">
            Resume 
            <div className=" p round bg-secend w-[50px] cursor-pointer  hover:bg-white " >
               <FaArrowCircleDown size={30} className="text-gray-500 "/>
            </div>
        </div>
    </div>
  )
}

export default Detailprof
