"use client"
import Profile from "./profile"
import Detailprof from "./prodetail"
import {Phonefooter , Phonenavbar} from "../phone"
import Promedia from "./promedia"
import Prowork from "./prowork"
import Proprjects from "./proprjects"
import Proserives from "./proserives"
import ProTestimony from "./proTestimony" 
import Proprocess from "./proprocess"



function Skelton() {
  return (
    <section className=" w-[100vw] p-6    ">
        <div className={` container  gap-4 grid  w-full lg:h-[680px] grid-cols-1 md:grid-cols-5 lg:grid-cols-12 lg:grid-rows-6  overflow-hidden   `}>
          <Phonenavbar />
          <Profile/>
          <Detailprof/>
          <Proprjects/>
          <Proserives /> 
          <ProTestimony /> 
          <Promedia /> 
          <Prowork /> 
          <Proprocess /> 
          <Phonefooter /> 
        </div>
    </section >
  )
}


export default Skelton
