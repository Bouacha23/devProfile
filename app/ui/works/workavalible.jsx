import Comtitle from "../comtitle"
import { FaSun } from "react-icons/fa"
 
 function Workavalible() {
   return (
     <div className="back flex items-center flex-col">
            <Comtitle icon={<FaSun size={20} className="text-third" /> }  firstLabel="Benefits &  Avalible" SecendLabel=" what can i work" />
            <div className="bg-secend mt-4  w-fit px-4 py-[4px] rounded-full flex gap-4   items-center ">
            <div  className=' relative flex items-center '>
            <p className='w-[10px] h-[10px] bg-green-400 rounded-full absolute'></p>
            <p className=' w-[10px] h-[10px] bg-green-400 animate-ping rounded-full absolute'></p>
            </div>
            <p className=" capitalize" > Availble to work  </p>
          </div> 
          
     </div>
   )
 }
 
 export default Workavalible
 