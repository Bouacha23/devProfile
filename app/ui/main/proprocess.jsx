import Comtitle from "../comtitle"
import { GiProcessor } from "react-icons/gi";
import { BiSolidChevronLeftCircle } from "react-icons/bi";
import { IoGitNetwork } from "react-icons/io5";
import { FaGithubSquare ,FaTwitterSquare ,FaLinkedin } from "react-icons/fa";


function Proprocess() {
    const media = [{
        name : "Github " , link :"https://mail.google.com/mail?compose=new",icon : <FaGithubSquare className="text-write" size={30} /> 
  },{
       name : "Twitter " , link : "https://cal.com/", icon : < FaTwitterSquare className="text-write" size={30} />
  },
     { name : "Linkedin  " ,  link : "#" , icon : <FaLinkedin className="text-write" size={30} /> }
  ]
    return (
        <div className="bg-primary round py-4 lg:col-span-3 lg:col-start-9 lg:row-span-2 lg:row-start-5 ">
            <Comtitle icon={ <GiProcessor   className="text-third" size={20 }/> } firstLabel= "Work process" SecendLabel="Workflow technique " /> 
            <div className="contain  mt-2 p-4  relative  border-t-2 border-secend  overflow-hidden h-[250px] ">
            {
            media.map((item , index ) => (
                <li className="  flex  justify-between items-center mb-2 cursor-pointer "  key={index}>
                    <div className="flex  gap-4  items-center text-sm text-write ">
                        { item.icon}
                        {item.name}
                    </div>
                    <BiSolidChevronLeftCircle className="  trnasform rotate-180" size={20} />
                </li>
            ))}
            </div>
        </div>
      )
}

export default Proprocess
