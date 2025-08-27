"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/navigation";
import { FaHome } from 'react-icons/fa'

export default function Navbar() {
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const handleHome = () => {
        router.push("/");
    }

    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center px-4 sm:px-8 py-4 bg-[#0f172a]/95 backdrop-blur-sm border-b border-gray-700">
            <div onClick={handleHome} className="flex items-center gap-2 text-xl font-bold hover:cursor-pointer">
                <span className="text-blue-500">
                    <img className="w-15 h-15" src="https://cdn3d.iconscout.com/3d/premium/thumb/voting-machine-3d-icon-download-in-png-blend-fbx-gltf-file-formats--electronic-democracy-evm-political-tactic-pack-politics-icons-6152132.png" alt="" />
                </span>
                SMART EVM
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-6 lg:gap-8">
                <li className="hover:text-blue-400 cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 transition-colors duration-300">
                    <a href="/">Home</a>
                </li>
                <li className="hover:text-blue-400 cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 transition-colors duration-300">
                    <a href="#Features">Features</a>
                </li>
                <li className="hover:text-blue-400 cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 transition-colors duration-300">
                    <a href="#Product">Product</a>
                </li>
                <li className="hover:text-blue-400 cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 transition-colors duration-300">
                    <a href="#Community">Community</a>
                </li>
            </ul>

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-4">
                <Link href="/login" draggable={false} className="text-sm px-4 py-2 border border-blue-500 rounded-lg hover:bg-blue-500/10 hover:cursor-pointer transition-all duration-300">
                    Explore
                </Link>
                <button onClick={()=>router.push("/buynow")} className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 hover:cursor-pointer transition-colors duration-300">
                    Buy Now
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu with Navigation and Buttons */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#0f172a]/95 backdrop-blur-sm border-b border-gray-700 p-4 flex flex-col gap-4">
                    <ul className="flex flex-col gap-3">
                        <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
                            <a href="/" onClick={() => setMobileMenuOpen(false)}>Home</a>
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
                            <a href="#Features" onClick={() => setMobileMenuOpen(false)}>Features</a>
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
                            <a href="#Product" onClick={() => setMobileMenuOpen(false)}>Product</a>
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
                            <a href="#Community" onClick={() => setMobileMenuOpen(false)}>Community</a>
                        </li>
                    </ul>
                    <div className="flex flex-col gap-3 mt-2">
                        <Link href="/login" draggable={false} onClick={() => setMobileMenuOpen(false)} className="text-sm px-4 py-2 border border-blue-500 rounded-lg hover:bg-blue-500/10 hover:cursor-pointer transition-all duration-300 text-center">
                            Explore
                        </Link>
                        <button onClick={() => setMobileMenuOpen(false)} className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 hover:cursor-pointer transition-colors duration-300">
                            Buy Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
