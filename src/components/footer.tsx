import Link from "next/link"
const Footer = () => {
     return(
        <footer>
            <hr className="border-gray-400 mb-4"/>
            <h2 className="text-red-400 text-2xl font-bold ml-2 md:ml-5  ">Umama Shaikh</h2>
           <div className="flex md:flex-none md:justify-end md:gap-6 md:px-24 md:text-sm md:mt-0 text-gray-400 justify-between mt-4">
                <div className="ml-3">
                    <div className="flex flex-col  gap-5 ">
                        <h5 className="font-bold text-gray-200">RESOURCES</h5>
                        <Link href="/projects" className="hover:text-red-400">Projects</Link>
                        <Link href="#"  className="hover:text-red-400">Resume</Link>
                    </div>
                </div> 
                <div className="flex flex-col  gap-5 mr-16">
                    <h5 className="font-bold text-gray-200">FOLLOW ME</h5>
                    <Link href='https://github.com/Umama-shaikh' target="_blank"
                          rel="noopener noreferrer" className="hover:text-red-400">Github
                    </Link>

                    <Link href='https://www.linkedin.com/in/umama-shaikh-91a43a2b8/' target="_blank"
                          rel="noopener noreferrer" className="hover:text-red-400">LinkedIn
                    </Link>
                </div>
           </div>
           <div>
              <hr className="w-11/12 bg-gray-400 my-4 mx-auto"/>
              <p className="text-gray-400 my-6 mx-12">© 2024 Umama Shaikh. All Rights Reserved.</p>
           </div>
        </footer>

     )
}

export default Footer