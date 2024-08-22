

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
function Profile () {

  const arr = ["Developer" , "Student" , "problem Solver" , "Createve"] 
  let [skill , setSkill] = useState(0)

  
  return (
    <div className='grid grid-cols-4 p-4 lg:p-6 bg-primary round h-fit gap-x-2 gap-y-4  '>
       <Image  className='bg-white round col-span-1 sm:col-span-1 w-[120px] h-[120px] cover  '  src= "/prof.png" width={50} height={50 } alt='prifleimg' />
      
       <div className="textone col-span-2 grid gap-2 p  sm:translate-x-0">
          <div className="bg-secend  w-fit px-4 py-[4px] rounded-full flex gap-4   items-center ">
            <div  className=' relative flex items-center '>
            <p className='w-[10px] h-[10px] bg-green-400 rounded-full absolute'></p>
            <p className=' w-[10px] h-[10px] bg-green-400 animate-ping rounded-full absolute'></p>
            </div>
            <p className=" capitalize" >ready to work. </p>
          </div>
          <p className='text-2xl capitalize font-bold'>najmeddine </p>
          <div className="inf ">
             I am 
             <span className='pl-2  text-third capitalize '>
              {arr[skill]}
             </span>
          </div>
       </div>

       <div className='hidden sm:block p '>resume </div>

       <div className="descrption col-span-4 p text-md round bg-secend ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestiae inventore itaque culpa delectus laboriosam velit eos eum ut accusantium impedit necessitatibus nam, commodi, 
       </div>

       <Link className=  'bg-secend text-sm flex items-center   justify-center gap-2  text-write col-span-2 text-center w-full  py-4  round' href="#">
          <MdMarkEmailUnread className='text-third' size={15}/> Email Me   
       </Link>
       <Link className= 'bg-secend text-sm flex items-center  justify-center gap-2    text-write col-span-2 text-center w-full  py-4  round' href="#">
           <IoLogoWhatsapp className='text-third' size={15} /> WhatApp Me 
       </Link>

    </div>
  )
}

export default Profile

