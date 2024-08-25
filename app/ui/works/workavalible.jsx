import Comtitle from "../comtitle"
import { FaSun } from "react-icons/fa"
import { FaCoffee } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
 
 function Workavalible() {
   return (
     <div className="back text-sm  flex items-center  justify-center lg:col-start-8 lg:row-start-5 lg:row-span-2 lg:col-span-2">
          <div className="flex flex-col items-center">
              <div className="lg:hidden xl:block">
              <Comtitle icon={<FaSun size={20} className="text-third" /> }  firstLabel="  Avalible" SecendLabel=" what can i work" />
              </div>
              <div className="bg-secend mt-4  w-fit px-4 py-[4px] rounded-full flex gap-4   items-center ">
              <div  className=' relative flex items-center '>
              <p className='w-[10px] h-[10px] bg-green-400 rounded-full absolute'></p>
              <p className=' w-[10px] h-[10px] bg-green-400 animate-ping rounded-full absolute'></p>
              </div>
              <p className=" capitalize" > hire me !  </p>
            </div> 
            <div className="mt-4 md:w-full flex gap-4 items-center justify-center  md:flex-col">
                  <div className="px-4 py-2  md:w-full bg-write rounded-lg text-black flex gap-2 items-center md:justify-center"> <SiFreelancer size={20}  />  freelancer</div>
                  <div className="px-4 py-2 md:w-full bg-write rounded-lg text-black flex gap-2 items-center md:justify-center"> <FaCoffee size={20} />  offec job </div>
            </div>
          </div>
     </div>
   )
 }
 
 export default Workavalible
 