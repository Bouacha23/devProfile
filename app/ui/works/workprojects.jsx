import Comtitle from "../comtitle"
import { MdWork } from "react-icons/md";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

function Workprojects() {
  
    const projects = [
      {img:"/works.png" , href :"#" ,title:"ecommerce" , subtitle : "electronx" },
      {img:"/works.png" , href :"#" ,title:"ecommerce" , subtitle : "electronx" },
      {img:"/works.png" , href :"#" ,title:"ecommerce" , subtitle : "electronx" },
      {img:"/works.png" , href :"#" ,title:"ecommerce" , subtitle : "electronx" }
    ]


  return (
    <div className=" back  ">
      <Comtitle icon={<MdWork className="text-third " size={20} /> } firstLabel="My Works" SecendLabel= "MY top Projects" />
      <div className="cont mt-2 grid gap-2  ">
        {projects.map((item , index) => (
            <div className="bg-secend hover:bg-primary  p-4 round project " >
              <Link href={item.href}  target="_blank" rel="noopener noreferrer" >
                    <img src={item.img}  className=" m-auto w-full  bg-write h-[150px] rounded-lg"/>
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
