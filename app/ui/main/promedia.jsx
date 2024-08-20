
import { useRouter } from "next/navigation";
import { BiSolidChevronLeftCircle } from "react-icons/bi";
import { IoGitNetwork } from "react-icons/io5";
import { FaGithubSquare ,FaTwitterSquare ,FaLinkedin } from "react-icons/fa";


const media = [{
      name : "Github " , link :"https://mail.google.com/mail?compose=new",icon : <FaGithubSquare className="text-write" size={20} /> 
},{
     name : "Twitter " , link : "https://cal.com/", icon : < FaTwitterSquare className="text-write" size={20} />
},
   { name : "Linkedin  " ,  link : "#" , icon : <FaLinkedin className="text-write" size={20} /> }
]

function Promedia() {

const router = useRouter()
const handleRedirect = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
    router.push('/'); 
  };


  return (
    <div className="backl lg:col-span-3 lg:row-span-2 slg:col-start-10  ">
        <div className="text flex flex-col items-center  ">
            <h3 className=" fl ">
                <IoGitNetwork className="text-third" size={20} /> 
                <p className=" capitalize text-write "> follow me  </p>
            </h3>
            <p className=" capitalize font-bold ">Online presence </p>
        </div>
        <ul className="p">
            {
            media.map((item , index ) => (
                <li className="backs  flex  justify-between items-center mb-2 cursor-pointer " onClick={()=> handleRedirect} key={index}>
                    <div className="flex  gap-4  items-center text-md text-write ">
                        { item.icon}
                        {item.name}
                    </div>
                    <BiSolidChevronLeftCircle className="  trnasform rotate-180" size={20} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Promedia
