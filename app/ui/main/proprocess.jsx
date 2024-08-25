import Comtitle from "../comtitle"
import { GiProcessor } from "react-icons/gi";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaBullseye, FaSearch, FaBrain, FaTools, FaCheckCircle } from 'react-icons/fa';
import { useState } from "react";
function Proprocess() {
    const [media , setmedia] = useState([
        { 
            name: "Goals & Task", 
            icon: <FaBullseye />,
            description: "Set clear objectives and break them into actionable tasks."  ,
            state : false 
        },
        { 
            name: "Research", 
            icon: <FaSearch />,
            description: "Gather necessary information and data to support your project." ,
            state : false , 
        },
        { 
            name: "Thinking", 
            icon: <FaBrain />,
            description: "Brainstorm ideas, strategize, and plan the next steps thoughtfully." ,
            state : false , 
        },
        { 
            name: "Implementing", 
            icon: <FaTools />,
            description: "Put plans into action and execute the tasks efficiently." ,
            state : false , 
        },
        { 
            name: "Task Complete", 
            icon: <FaCheckCircle />,
            description: "Mark tasks as completed and review the final outcomes." ,
            state : false , 
        }
    ]
)
   

    const handelClick = (e) => {
        const arr = media.map( (item , index ) => {
            if( index === e) {
                item.state = !item.state
            }
        })
        setmedia(arr)
    }
    
    
    return (
        <div className="bg-primary round py-4 pb-2 md:col-span-3  ">
            <Comtitle icon={ <GiProcessor   className="text-third" size={20 }/> } firstLabel= "Work process" SecendLabel="Workflow technique " /> 
            <div className="contain  mt-2 p-4  relative  border-t-2 border-secend  h-fit h-[250px] ">
            {
            media.map((item , index ) => (
                <li className=" transition duration-150  grid grid-cols-2  gap-4 items-center mb-2 cursor-pointer round bg-secend  py-2 px-4  "  key={index}>
                    <div className="flex  gap-4  items-center text-sm text-write  ">
                        <span className="p-2 bg-write  rounded-lg text-secend">{ item.icon}</span>
                        {item.name}
                    </div>
                    <FaCircleChevronLeft className="ml-24 transform -rotate-90   place-self-center  " onClick={(e)=> handelClick(index)} /> 
                    {item.state ?  <p className=" col-span-2 text-center text-write capitalize text-[13px] " >
                        {item.description}
                    </p> : null }
                </li>
            ))}
            </div>
        </div>
      )
}

export default Proprocess
