import { FaFlag } from "react-icons/fa";
import { IoIosHappy } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaStar , FaArrowCircleDown } from "react-icons/fa";
function Detailprof() {
    const arr = [
        {number : 8 , name : "Projects" , icons : < FaFlag  size={15} className="text-third"/> , } ,
        {number : 2 , name : "clients" , icons : <IoIosHappy size={15} className="text-third"/> , } ,
        {number :  1 , name : "expetise" , icons : <FaStar size={15} className="text-third"/> , } 
    ]
    const DownloadButton = () => {
      const handleDownload = () => {
        const pdfUrl = '/Resume.pdf'; 
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = '/Resume.pdf';
        link.click();
      };
      handleDownload()
    }
  return (
    <div className="  grid gap-2 grid-cols-2  md:col-span-2 lg:row-start-1 lg:col-span-5 lg:col-start-4 lg:grid-cols-4   ">
         {
           arr.map((item ,index) => (

      <div className="back  " key={index}>

        <div className="font-bold  mb-4 lg:mb-0  text-7xl lg:text-5xl text-center relative gradient-text flex items-center justify-center ">
        {`${item.number} `}
         <FaPlus size={30} className="text-third   "/> 
        </div>

        <div className="fl bg-secend back text-sm ">
            {item.icons}
            {item.name}
        </div>
      </div>
           ))
        }
        <div  className="back fl   ">
            Resume 
            <div onClick={() => DownloadButton()} className=" p round bg-secend w-[50px] cursor-pointer  hover:bg-white " >
               <FaArrowCircleDown  size={30} className="text-gray-500 "/>
            </div>
        </div>
    </div>
  )
}

export default Detailprof
