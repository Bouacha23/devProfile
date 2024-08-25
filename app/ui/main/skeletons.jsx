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

const windowHeight = window.innerHeight;
console.log(windowHeight);

function Skelton() {
  return (
    <section className=" p-4   overflow-x-hidden ">
        <div className={` container  gap-2 grid  grid-cols-1 lg:h-[${ windowHeight} ] md:grid-cols-5     `}>
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
