import { FaSquareUpwork } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";

const works = [{
    name : "Email Me" , link :"https://mail.google.com/mail?compose=new",icon : <MdEmail  className="text-third" size={15} /> 
},{
    name : "Schedule a Call"  , link : "https://cal.com/", icon : < FaCalendarAlt className="text-third" size={15} />
}]




function Prowork() {

const router = useRouter()
const handleRedirect = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
    router.push('/'); 
  };

  return (
    <div className="backl p flex flex-col items-center gap-4 ">
      <div className=" bg-secend  rounded-full w-fit p-2 border border-[1px] border-gray-700 ">
        <FaSquareUpwork className=" text-third"  size={35}/> 
      </div>
      <div className="text text-center">
        <h3 className="text-lg  capitalize ">let's work together</h3>
        <p className="text-write  lowercase ">let's make magic happen together !</p>
      </div>
      <div className="btn w-full ">
        {
            works.map((item ,index)=> (
                <button onClick={()=> handleRedirect(item.link)} className=" mt-[5px] w-full flex items-center justify-center  gap-2  backs   " key={index } >
                    {item.icon}
                    {item.name}
                </button>
            ))
        }
      </div>
    </div>
  )
}

export default Prowork
