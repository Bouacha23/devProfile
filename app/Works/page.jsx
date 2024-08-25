"use client"
import Worksketeons from "../ui/works/worksketeons"

const windowHeight = window.innerHeight;


function page() {
  return (
     <Worksketeons  WindowHeight={windowHeight} /> 
  )
}

export default page
