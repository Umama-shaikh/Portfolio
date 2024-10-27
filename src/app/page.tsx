import Image from "next/image"
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import Skills from "@/components/skills";
import ProjectsPage from "./projects/page";
import ContactForm from "@/components/contact"

export default function Home(){
  return(
    <main className="bg-slate-900">
      <hr className="border-gray-300"/>
      <div className="flex flex-col items-center md:flex md:flex-row md:justify-around pt-10 md:pt-24">
        {/* profile picture */}
        <div className="bg-slate-300 rounded-full md:ml-24 md:mb-20">
          <Image src='/images/profile.png' alt="profile picture" width={600} height={600}  className="rounded-full p-1 max-w-[250px] md:max-w-[350px] md:h-auto"></Image>
        </div>

        {/* Introduction */}
        <div className="text-white mt-6 md:ml-11 text-center">
          <h1 className="font-bold text-3xl md:text-6xl">Web Developer👋</h1>
          <p className="mt-6 font-medium  text-lg md:leading-9">Hi, I am <span className="text-red-400">Umama Shaikh.</span> A modern Web <br />Developer Based in karachi, Pakistan. 📍</p>
          {/* linkedIn and github profile */}

          <div className="flex space-x-8 mt-9 justify-center">
            <a
              href="https://github.com/Umama-shaikh" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-slate-500"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/umama-shaikh-91a43a2b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 "
            >
              <FaLinkedin size={40} />
            </a>
          </div>
          {/* button for download resume */}
          <button className="transform transition-transform duration-300 hover:scale-110 hover:bg-blue-400 bg-blue-600 py-3 px-10 md:px-7 mt-7 mb-7
          rounded-md" ><a 
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          >
          </a>Download Resume
          </button>
        </div>
      </div>
      <hr className="border-gray-300 my-1"/>
      <Skills/>
      <hr className="border-gray-300 my-1"/>
      <ProjectsPage/>
      <hr className="border-gray-300 my-8"/>
      <ContactForm/>

    </main>
    
  )
}