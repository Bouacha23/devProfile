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
    <section className=" p-4  h-[100vh] overflow-x-hidden ">
        <div className=" container  gap-2 grid  grid-cols-1       ">
          <Phonenavbar />
          <Profile/>
          <Detailprof/>
          <Proprjects/>
          <Proserives /> 
          <ProTestimony /> 
          <Proprocess /> 
          <Promedia /> 
          <Prowork /> 
          <Phonefooter /> 
        </div>
    </section >
  )
}


export default Skelton
