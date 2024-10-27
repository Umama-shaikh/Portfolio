import { FaHtml5, FaCss3, FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

const Skills = () =>{
    return(
        <div className=" text-center pt-8 ">
            <h3 className="text-3xl font-bold text-gray-300">Technologies I work with </h3>
            <p className="mt-4 leading-relaxed text-base px-10 text-gray-400">I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I'm also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.</p>
            {/* programming  languages */}
            <div>
                <div className="flex text-5xl md:text-6xl justify-center mt-8 gap-8 pb-12">
                    <FaHtml5 className="text-orange-600 icon-hover"/>
                    <FaCss3 className="text-white bg-blue-600 rounded-lg p-2 icon-hover"/>
                    <FaJsSquare className="text-yellow-500 icon-hover"/>
                    <BiLogoTypescript className="text-blue-600 icon-hover"/>
                    <RiTailwindCssFill className="text-teal-500 bg-gray-800 rounded-lg p-2 icon-hover"/>
                    <RiNextjsFill className="bg-white rounded-lg icon-hover "/>

                </div>
            </div>
        </div> 
    )
}
export default Skills