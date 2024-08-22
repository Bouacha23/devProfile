
import Workprojects from "./workprojects"
import {Phonenavbar} from "../phone"
import WorkDetails from "./workdetail"
import Workskill from "./workskill"
import  Workme from "./workme"
import Workabout from "./workabout"

function Worksketeons() {
  return (
    <section className=" p-4    ">
    <div className=" container grid  h-[100vh] overflow-x-hidden gap-4  ">
     <Phonenavbar /> 
     <Workprojects />
     <WorkDetails />
     <Workskill/>
     <Workme/>
     <Workabout /> 
    </div>
   </section >
  )
}

export default Worksketeons
