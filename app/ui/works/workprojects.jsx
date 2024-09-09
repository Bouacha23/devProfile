import Comtitle from "../comtitle"
import { MdWork } from "react-icons/md";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

function Workprojects() {
  
    const projects = [
      {img:"/shushi.png" , href :"https://shishi-sigma.vercel.app/" ,title:"SHUSHI" , subtitle : "BOOK TABLE" },
      {img:"/Landing.png" , href :"#" ,title:"Electronx" , subtitle : "ecommerce" },
      {img:"/Game.png" , href :"https://gaming-iota-three.vercel.app/" ,title:"Gameing shop" , subtitle : "ecommerce shop" },
      {img:"/Crypto.png" , href :"https://cryptocoins-reactproject.vercel.app" ,title:"Crypto news" , subtitle : "new Api " },
      {img:"/Appointy.png" , href :"https://appointy-navy.vercel.app/" ,title:"Appointy" , subtitle : "medical app" },
      {img:"/regist.png" , href :"https://form-validation-self-nine.vercel.app/" ,title:"Register" , subtitle : "form validation" },
      {img:"/Landing.png" , href :"https://landeingpage.vercel.app/" ,title:"Landing page" , subtitle : "website" },
    ]


  return (
    <div className=" back md:col-span-3 grid lg:col-start-4 lg:row-start-1  lg:col-span-6 lg:row-span-4 lg:overflow-y-scroll scrollable-component">
      <Comtitle icon={<MdWork className="text-third " size={20} /> } firstLabel="My Works" SecendLabel= "MY top Projects" />
      <div className="cont mt-2 grid gap-2  md:grid-cols-3 lg:grid-cols-2 ">
        {projects.map((item , index) => (
            <div className="bg-secend hover:bg-primary  p-4 round project " >
              <Link href={item.href}  target="_blank" rel="noopener noreferrer" >
                    <img src={item.img}  className=" object-cover m-auto w-full  bg-write h-[150px] lg:h-[100px] rounded-lg"/>
                    <div className="text pt-2 flex items-center justify-between">
                        <div className="left font-bold  text-write  capitalize flex flex-col ">
                            {item.title}
                            <span className=" text-[12px] font-normal"> {item.subtitle}</span>
                        </div>
                        <div className="relative bg-primary w-[40px]  cbtt h-[40px] rounded-full overflow-hidden   " >
                            <div className="flex absolute gap-4 -rotate-[50deg] btt pl-[4px]  ">
                            <FaArrowLeft className="  transform rotate-[180deg] " size={20}/> 
                            <FaArrowLeft className="  transform rotate-[180deg]" size={20}/> 
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Workprojects
