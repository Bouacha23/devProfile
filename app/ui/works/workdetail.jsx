import { FaFlag, FaStar } from 'react-icons/fa';
import { IoIosHappy } from 'react-icons/io';
import { FaPercentage } from 'react-icons/fa';


const arr = [
  { number: 99, name: "Satisfaction", icons: <FaFlag size={15} className="text-third" /> },
  { number: 100, name: "Completed ", icons: <FaFlag size={15} className="text-third" /> },
  { number: 80, name: "Creativity", icons: <IoIosHappy size={15} className="text-third" /> },
  { number: 96, name: "Passion", icons: <FaStar size={15} className="text-third" /> }
];

function WorkDetails() {
   
  return (
    <div className="  grid gap-2  grid-cols-2 md:col-span-3 md:grid-cols-4  lg:row-span-2 lg:col-start-1 lg:row-start-1 lg:grid-cols-2   ">
        {
           arr.map((item ,index) => (

      <div className="back md:p-4 lg:p-[2px]  " key={index}>

        <div className="font-bold  mb-4 lg:mb-0  text-7xl lg:text-6xl text-center relative gradient-text flex items-center justify-center ">
        {`${item.number} `}
         <FaPercentage size={30} className="text-third   "/> 
        </div>

        <div className="fl bg-secend back text-sm ">
            {item.icons}
            {item.name}
        </div>
      </div>
           ))
        }
    </div>
  )
}

export default WorkDetails
