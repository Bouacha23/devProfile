import Comtitle from "../comtitle"
import { MdReviews } from "react-icons/md";
function ProTestimony() {
  const testimony = [{img:"/pro.jpg" , name : "emily chen " , place : "algeria ,annaba" , data : "10,november,2024" , descrption :"Pragadesh exceeded my expectations with his attention to detail and creativity. I'm thrilled with the website he built for my business."},
    {img:"/najme.jpeg" , name : "emily chen " , place : "algeria ,annaba" , data : "10,november,2024" , descrption :"Pragadesh exceeded my expectations with his attention to detail and creativity. I'm thrilled with the website he built for my business."},
    {img:"/najme3.jpeg" , name : "emily chen " , place : "algeria ,annaba" , data : "10,november,2024" , descrption :"Pragadesh exceeded my expectations with his attention to detail and creativity. I'm thrilled with the website he built for my business."},
    {img:"/najme2.jpeg" , name : "emily chen " , place : "algeria ,annaba" , data : "10,november,2024" , descrption :"Pragadesh exceeded my expectations with his attention to detail and creativity. I'm thrilled with the website he built for my business."},]
  return (
    <div className="bg-primary round  py-4 min-h-[220px] overflow-hidden md:col-span-3 lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:col-span-3 ">
        <Comtitle icon={ <MdReviews   className="text-third" size={20 }/> } firstLabel= "Testimonilas" SecendLabel="Rave Reviews Showcase" /> 
        <div className="contain mt-2 p-4  relative  border-t-2 border-secend  overflow-hidden h-[300px]  ">
          
           <div className=" slidery">
           { testimony.map( (items , index) => (
            <article key={index}  className={index%2 ? "w-[90%] h-fit round bg-secend p-4  mb-2  " : "w-[90%] h-fit round bg-secend p-2  mb-2 ml-8  "  } > 
              <div className="top flex justify-between items-center">
                <div className="text flex gap-2">
                <img  className="bg-white w-10 h-10 rounded-xl " src={items.img}/>
                <p className=" text-sm capitalize flex flex-col  font-bold">
                  {items.name}
                  <span className="text-write text-[10px]">{items.place}</span>
                </p>
                </div>
                <p className="text-write text-[10px]">{items.data}</p>
              </div>

              <div className=" bottom mt-2 text-[13px] text-write">
                {items.descrption}
              </div>
            </article>
           ))}
           </div>
         
        </div>
    </div>
  )
}

export default ProTestimony
