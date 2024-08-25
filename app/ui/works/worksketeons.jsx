
import Workprojects from "./workprojects"
import {Phonenavbar} from "../phone"
import WorkDetails from "./workdetail"
import Workskill from "./workskill"
import  Workme from "./workme"
import Workabout from "./workabout"
import Workdev from "./workdev"
import Workavalible from "./workavalible"

const windowHeight = window.innerHeight;
console.log(windowHeight);


function Worksketeons() {

  return (
    <section className=" p-2   ">
    <div className={`container grid  w-full  lg:h-[${windowHeight}] overflow-x-hidden gap-4 md:grid-cols-3 lg:grid-cols-12 lg:grid-rows-6 `}>
     <Phonenavbar /> 
     <Workprojects />
     <WorkDetails />
     <Workdev /> 
     <Workabout /> 
     <Workskill/>
     <Workavalible /> 
     <Workme/>
    </div>
   </section >
  )
}

export default Worksketeons
