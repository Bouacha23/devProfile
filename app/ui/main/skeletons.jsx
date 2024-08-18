"use client"
import Profile from "./profile"
import Detailprof from "./prodetail"
import {Phonefooter , Phonenavbar} from "../phone"
import Promedia from "./promedia"
import Prowork from "./prowork"
function Skelton() {
  return (
    <section className=" pt min-h-[700px]  ">
        <div className=" container gap-y-2 grid grid-cols-1  ">
          <Phonenavbar />
          <Profile/>
          <Detailprof/>
          <Promedia /> 
          <Prowork /> 
          <Phonefooter /> 
        </div>
    </section >
  )
}


export default Skelton
