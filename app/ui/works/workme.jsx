

import { MdWindow } from "react-icons/md";
import Link from "next/link";
import { FaLightbulb, FaHandsHelping, FaLanguage, FaSmile, FaBrain, FaCogs } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';

const bottom = [
    { name: "Continuous Learning", icon: <FaBrain /> },
    { name: "Focus & Concentration", icon: <FaCogs /> },
    { name: "Team Player", icon: <FaHandsHelping /> },
    { name: "Creativity", icon: <FaLightbulb /> },
    { name: "Language Proficiency", icon: <FaLanguage /> },
    { name: "Positive Attitude", icon: <FaSmile /> },
    { name: "Problem Solving", icon: <GiSkills /> },
    { name: "Adaptability", icon: <FaCogs /> },
];

const top = [
    { name: "Continuous Learning", icon: <FaBrain /> },
    { name: "Focus & Concentration", icon: <FaCogs /> },
    { name: "Team Player", icon: <FaHandsHelping /> },
    { name: "Creativity", icon: <FaLightbulb /> },
    { name: "Language Proficiency", icon: <FaLanguage /> },
    { name: "Positive Attitude", icon: <FaSmile /> },
    { name: "Problem Solving", icon: <GiSkills /> },
    { name: "Adaptability", icon: <FaCogs /> },
];
function Workme() {
 
  
    return (
      <div className=" round  bg-primary  pt-4 relative  min-h-[200px] lg:h-full   overflow-hidden md:col-span-2 lg:col-start-1 lg:row-start-3 lg:row-span-2 lg:col-span-3  ">
           <div className="text flex flex-col items-center  ">
              <h3 className=" fl ">
                  <MdWindow className="text-third" size={20} /> 
                  <p className=" capitalize text-write "> why me  </p>
              </h3>
              <p className=" capitalize font-bold "> why to choose me   </p>
          </div>

          <div className="py-4 absolute  top-[30%] overflow-hidden " >

            <ul className="left flex items-center gap-4 slidetop ">
                {top.map( (item , index) => (
                    <li className=" flex items-center text-md mb-4 gap-2 p-2 bg-secend rounded-lg   whitespace-nowrap ">
                        <span className="bg-write text-secend p-2 rounded-md ">{item.icon}</span>
                        {item.name}
                    </li>
                ))}
            </ul>

            <ul className=" transform -translate-x-[300px] slidebottom right flex items-center gap-4 ">
                {bottom.map( (item , index) => (
                    <li className=" flex items-center text-md  gap-2 p-2 bg-secend rounded-lg   whitespace-nowrap ">
                        <span className="bg-write text-secend p-2 rounded-md ">{item.icon}</span>
                        {item.name}
                    </li>
                ))}
            </ul>
            
          </div>
          <button className=" absolute z-10 lg:h-[50px] top-[70%] left-[50%] top-[65%] -translate-x-[50%] btn capitalize  font-bold ">
        <Link href="/Works" className=" animate-ping text-xl lg:text-[15px]"  >
            hire me  !
        </Link>
        </button>
          
      </div>
    )
}


export default Workme
