
import Link from "next/link"
import { PiHandbagSimpleFill } from "react-icons/pi";
import Image from "next/image";
function Proprjects() {
    const projects = ["/works.png" , "/works.png" , "/works.png" ,"/works.png" , "/works.png"]
  return (
    <div className="backl relative overflow-hidden   min-h-[250px] ">
         <div className="text flex flex-col items-center  ">
            <h3 className=" fl ">
                <PiHandbagSimpleFill className="text-third" size={20} /> 
                <p className=" capitalize text-write "> Projects </p>
            </h3>
            <p className=" capitalize font-bold "> Works Gallery  </p>
        </div>
        <div id="imges " className=" absolute  top-[30%] slider z-2 flex gap-4 ">
            { projects.map( item => (
                <Image className="rounded-xl " src={item}  width={200} height={150} alt="projectsimg "/>
            ) )
            }
        </div>
        <button className=" absolute z-10  top-[50%] left-[50%] top-[65%] -translate-x-[50%] btn capitalize  w-fit font-bold ">
        <Link href="/Works"  >
            view Works
        </Link>
        </button>
        
    </div>
  )
}

export default Proprjects
