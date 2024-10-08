

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
function Profile () {

  return (
    <div className='grid h-fit grid-cols-4  p-4 xl:p-6 bg-primary round h-fit gap-x-2 gap-y-4 md:col-span-3 lg:col-start-4 lg:col-span-5 lg:row-span-2  '>
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
          <div className=" text-third text-[12px] ">
          bouachamouhamedneddjmeddine@gmail.com
          </div>
       </div>

       

       <div className="descrption col-span-4 p text-sm text-white/70 round bg-secend  ">
       "Passionate frontend developer with experience in building interactive and responsive web applications. Skilled in modern technologies, delivering creative and efficient solutions."
       </div>

       <Link className=  'bg-secend text-sm flex items-center   justify-center gap-2  text-write col-span-2 text-center w-full  py-3  round' href="https://mail.google.com/"   target="_blank" 
  rel="noopener noreferrer" >
          <MdMarkEmailUnread className='text-third' size={15}/> Email Me   
       </Link>
       <Link className= 'bg-secend text-sm flex items-center  justify-center gap-2    text-write col-span-2 text-center w-full  py-3  round' href="https://web.whatsapp.com/"   target="_blank" 
  rel="noopener noreferrer" >
           <IoLogoWhatsapp className='text-third' size={15} /> WhatApp Me 
       </Link>

    </div>
  )
}

export default Profile

