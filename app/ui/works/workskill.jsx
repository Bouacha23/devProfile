import Comtitle from "../comtitle"
import { SiHyperskill } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaBrain } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiRedux, SiReacthookform } from 'react-icons/si';

const frontendSkills = [
  {
    skill: "HTML",
    subtitle: "Web Text",
    icon: <FaHtml5 size={20} className="text-red-500" />
  },
  {
    skill: "CSS",
    subtitle: "Style",
    icon: <FaCss3Alt size={20} className="text-blue-500" />
  },
  {
    skill: "JavaScript",
    subtitle: "Logic",
    icon: <FaJs size={20} className="text-yellow-500" />
  },
  {
    skill: "React",
    subtitle: "UI Library",
    icon: <FaReact size={20} className="text-blue-400" />
  },
  {
    skill: "Tailwind CSS",
    subtitle: "Utility-First",
    icon: <SiTailwindcss size={20} className="text-teal-500" />
  },
  {
    skill: "TypeScript",
    subtitle: "Typed JS",
    icon: <SiTypescript size={20} className="text-blue-600" />
  },
  {
    skill: "Next.js",
    subtitle: "React Framework",
    icon: <SiNextdotjs size={20} className="text-black" />
  },
  {
    skill: "Git",
    subtitle: "Version Control",
    icon: <FaGitAlt size={20} className="text-orange-600" />
  },
  {
    skill: "Redux Toolkit",
    subtitle: "State Management",
    icon: <SiRedux size={20} className="text-purple-600" />
  },
  {
    skill: "React Hook Form",
    subtitle: "Form Handling",
    icon: <SiReacthookform size={20} className="text-pink-500" />
  },
  {
    skill: "Problem Solving",
    subtitle: "Critical Thinking",
    icon: <FaBrain size={20} className="text-gray-600" />
  }
];


function Workskill() {
  return (
    <div className="bg-primary  round py-2">
      <Comtitle icon={<SiHyperskill  size={30} className="text-third" />} firstLabel="My Skills" SecendLabel="MY hardcore skills" /> 
      <div className="cont mt-4 border-t-[1px] border-gray-700">
        <ul className="p-4">
            {
                frontendSkills.map((item , index)=> (
                    <li className="rounded-xl mb-2 bg-secend px-4 py-[10px] flex items-center justify-between">
                        <div className="left flex items-center  gap-2 text-[13px]">
                            <span className="bg-primary p-2 rounded-xl ">{item.icon}</span>
                            {item.skill}
                        </div>
                        <div className=" text-[12px] rounded-lg bg-primary  text-write px-4 py-2">
                             {item.subtitle}
                        </div>
                    </li>
                ))
            }
        </ul>
      </div>
    </div>
  )
}

export default Workskill
