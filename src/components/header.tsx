"use client";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
import { headers } from "next/headers";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";


export default function Header(){
    const pathname = usePathname();
    return(
        <header>
            <div className="flex bg-slate-800 justify-between text-slate-100 py-6 px-5">
                {/* right side */}
                <div>
                    <h1 className="text-2xl font-bold md:pl-6">Umama Shaikh</h1>
                </div>

                {/* left side */}
                <div className="hidden md:block">
                    <ul className=" flex gap-8 text-xl text-gray-500">
                        <li><Link href='/' className={`${pathname === '/' ? 'text-red-400 font-bold' : ''}`} >Home</Link></li>
                        <li><Link href='/about'  className={`${pathname === '/about' ? 'text-red-400 font-bold' : ''}`}>About</Link></li>
                        <li><Link href='/contact' className={`${pathname === '/contact' ? 'text-red-400 font-bold' : ''}`}>Contact</Link></li>
                        <li><Link href='/projects' className={`${pathname === '/projects' ? 'text-red-400 font-bold' : ''}`}>Projects</Link></li>
                    </ul>
                </div>

                {/* side bar for mobile */}
                <Sheet>
                    <SheetTrigger className="md:hidden"><IoMenuOutline className="text-3xl "/></SheetTrigger>
                    <SheetContent side={'left'} className="w-[250px] sm:w-[540px] bg-slate-800 text-slate-100">
                        <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription>
                            <ul className=" text-2xl text-slate-300 space-y-8 pt-10">
                                <li><Link href='/' className="hover:text-red-400">Home</Link></li>
                                <li><Link href='/about' className="hover:text-red-400">About</Link></li>
                                <li><Link href='/contact' className="hover:text-red-400">Contact</Link></li>
                                <li><Link href='/projects' className="hover:text-red-400">Projects</Link></li>
                            </ul>
                            
                        </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            </div>
        </header>
    )
} 