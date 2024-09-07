
import { MdWindow } from "react-icons/md";
import Link from "next/link";
import { FaCode, FaFileAlt, FaBlog, FaMobileAlt, FaPaintBrush, FaUserTie, FaBriefcase, FaBug } from 'react-icons/fa';
import { SiJavascript, SiReact } from 'react-icons/si';

const bottom = [
    { name: "Web Development", icon: <FaCode /> },
    { name: "Landing Page", icon: <FaFileAlt /> },
    { name: "Blog Page", icon: <FaBlog  />},
    { name: "Responsive Design", icon: <FaMobileAlt /> },
    { name: "UI/UX Design", icon: <FaPaintBrush /> },
    { name: "Landing Page", icon: <FaFileAlt /> },
    { name: "Blog Page", icon: <FaBlog  />},
    { name: "Responsive Design", icon: <FaMobileAlt /> },
];

const top = [
    { name: "Freelancer", icon: <FaUserTie /> },
    { name: "Employer", icon: <FaBriefcase /> },
    { name: "Debugger", icon: <FaBug /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Freelancer", icon: <FaUserTie /> },
    { name: "Employer", icon: <FaBriefcase /> },
    { name: "Debugger", icon: <FaBug /> },
];



function Proserives() {
 
  
    return (
      <div className=" round  p-4 bg-primary  relative  min-h-[220px]  overflow-hidden  md:col-span-3 lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-5 ">
           <div className="text flex flex-col items-center  ">
              <h3 className=" fl ">
                  <MdWindow className="text-third" size={20} /> 
                  <p className=" capitalize text-write "> Services </p>
              </h3>
              <p className=" capitalize font-bold "> Solutions Suite   </p>
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

            <ul className=" transform -translate-x-[300px] slidebottom right flex items-center gap-4">
                {bottom.map( (item , index) => (
                    <li className=" flex items-center text-md  gap-2 p-2 bg-secend rounded-lg   whitespace-nowrap ">
                        <span className="bg-write text-secend p-2 rounded-md ">{item.icon}</span>
                        {item.name}
                    </li>
                ))}
            </ul>
            
          </div>
          <button className=" absolute z-10  top-[70%] left-[50%] top-[65%] -translate-x-[50%] btn capitalize  w-fit font-bold ">
        <Link href="/Works"  >
            view  services 
        </Link>
        </button>
          
      </div>
    )
}

export default Proserives
