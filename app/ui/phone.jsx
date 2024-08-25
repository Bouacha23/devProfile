import Link from "next/link"
import {usePathname } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { HiTemplate } from "react-icons/hi";
import { MdOutlineHomeRepairService } from "react-icons/md";

const links = [{
   name : "About" ,
   href : "/" ,
   icon : <CgProfile size={15}/>
}, {
  name : "Works" ,
  href : "/Works",
  icon : <HiTemplate size={15}/>
}]


function Phonenavbar() {
  const root = usePathname()
  console.log(root)
  return (
    <section className="flex  justify-center items-center md:hidden ">
          <ul className="holder  bg-primary py-2  rounded-xl px-2 gap-2 flex  ">
        { links.map((item ,index) => (
          <Link href={item.href} key={index}>
            <li  className={root == item.href ?  " w-[150px] p-[10px] px-4 text-white rounded-lg bg-third hover:text-black flex gap-2 items-center  justify-center " :"w-[150px]  justify-center  flex gap-2 bg-secend items-center p-[10px] px-8 text-white rounded-lg hover:bg-third hover:text-black"} >
              {item.icon}
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    
      </section>
    )
  }
  
  
  
  function Phonefooter() {

    const year = new Date().getFullYear();

    return (
      <section className="  sm:hidden  flex  flex-col items-center ">
        <ul className="holder flex flex-row justify-center gap-8">
          { links.map((item ,index) => (
            <Link href={item.href} key={index}>
              <li  className="text-secend hover:text-white">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        <p >@ <span>{year }</span> All Rights Reservced </p>
      </section>
    )
  }
  export  {Phonefooter , Phonenavbar}
