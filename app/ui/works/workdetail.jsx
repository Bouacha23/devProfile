import { FaFlag, FaStar } from 'react-icons/fa';
import { IoIosHappy } from 'react-icons/io';
import { FaPercentage } from 'react-icons/fa';


const arr = [
  { number: 99, name: "Satisfaction", icons: <FaFlag size={15} className="text-third" /> },
  { number: 100, name: "Completed Task", icons: <FaFlag size={15} className="text-third" /> },
  { number: 80, name: "Creativity", icons: <IoIosHappy size={15} className="text-third" /> },
  { number: 96, name: "Passion", icons: <FaStar size={15} className="text-third" /> }
];

function WorkDetails() {
   
  return (
    <div className="  grid gap-2 grid-cols-2 sm:grid-cols-1   ">
        {
           arr.map((item ,index) => (

      <div className="back  " key={index}>

        <div className="font-bold   md:text-5xl lg:text-3xl text-center relative gradient-text flex items-center justify-center ">
        {`${item.number} `}
         <FaPercentage size={30} className="text-third   "/> 
        </div>

        <div className="fl bg-secend back ">
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
