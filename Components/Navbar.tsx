"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/navigation";
import {FaHome} from 'react-icons/fa'
export default function Navbar() {
    const router=useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const handleHome=()=>{
        router.push("/");
    }

    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center px-4 sm:px-8 py-4 bg-[#0f172a]/95 backdrop-blur-sm border-b border-gray-700">
            <div onClick={handleHome} className="flex items-center gap-2 text-xl font-bold hover:cursor-pointer">
                <span className="text-blue-500">
                    <FaHome size={30} />
                </span>
                SMART EVM
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-6 lg:gap-8">
                {["Home", "Features", "Product", "Community"].map((item) => (
                    <li key={item} className="hover:text-blue-400 cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 transition-colors duration-300">
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-4">
                <Link href="/login" draggable={false} className="text-sm px-4 py-2 border border-blue-500 rounded-lg hover:bg-blue-500/10 hover:cursor-pointer transition-all duration-300">
                    {/* <button className="text-sm px-4 py-2 border border-blue-500 rounded-lg hover:bg-blue-500/10 hover:cursor-pointer transition-all duration-300">
                        Login
                    </button> */}
                    Login
                </Link>
                <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 hover:cursor-pointer transition-colors duration-300">
                    Buy Now
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {mobileMenuOpen && <MobileMenu setMobileMenuOpen={setMobileMenuOpen} />}
        </nav>
    );
}
