
import { MdWindow } from "react-icons/md";
import Link from "next/link";

function Proserives() {
    const projects = ["/works.png" , "/works.png" , "/works.png" ,"/works.png" , "/works.png"]
    return (
      <div className="backl relative overflow-hidden  lg:col-span-3 lg:row-span-2 lg:col-start-1 lg:row-start-5 ">
           <div className="text flex flex-col items-center  ">
              <h3 className=" fl ">
                  <MdWindow className="text-third" size={20} /> 
                  <p className=" capitalize text-write "> Services </p>
              </h3>
              <p className=" capitalize font-bold "> Solutions Suite   </p>
          </div>
          <div id="imges " className=" absolute  top-[30%] slider z-2 flex gap-4 ">
             
          </div>
          <button className=" absolute z-10  top-[50%] left-[50%] top-[65%] -translate-x-[50%] btn capitalize  w-fit font-bold ">
          <Link href="/Works"  >
              view Works
          </Link>
          </button>
          
      </div>
    )
}

export default Proserives
