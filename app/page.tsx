"use client"
import { Montserrat } from "next/font/google";
import { 
  FaLink, // Blockchain
  FaClock, // Real-time
  FaCloud, // Cloud Storage
  FaUser, // User-friendly
  FaCog, // Configurable
  FaShieldAlt, // Tamper-proof
  FaHeadset, // Technical Support
  FaBook, // Knowledge Base
  FaUsers, // Community Forum
  FaCommentAlt, // Feedback System
  FaSync, // Regular Updates
  FaChalkboardTeacher, // Training Webinars
  FaBars, // Mobile menu
  FaTimes // Close mobile menu
} from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const montserrat = Montserrat({ weight: ['400', '500', '600', '700'] });
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className={`${montserrat.className} bg-[#0f172a] text-white min-h-screen font-sans`}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-4 sm:px-8 py-4 bg-[#0f172a]/95 backdrop-blur-sm border-b border-gray-700">
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="text-blue-500">≡</span> SMART EVM
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 lg:gap-8">
          <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
           <a href="#Hero" className="font-medium">Home</a> 
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
            <a href="#Features" className="font-medium">Features</a> 
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
            <a href="#Product" className="font-medium">Product</a> 
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
            <a href="#Community" className="font-medium">Community</a> 
          </li>
        </ul>
        
        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="text-sm px-4 py-2 border border-blue-500 rounded-lg hover:bg-blue-500/10 transition-all duration-300">
          <Link href="/login">Login</Link>
          </button>
          <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">Buy Now</button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111827] px-4 py-6 border-b border-gray-700">
          <ul className="flex flex-col gap-4 mb-6">
            <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
             <a href="#Hero" onClick={() => setMobileMenuOpen(false)}>Home</a> 
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
          <div className="flex flex-col gap-3">
            <button className="text-sm px-4 py-2 border border-blue-500 rounded-lg hover:bg-blue-500/10 transition-all duration-300">Login</button>
            <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">Buy Now</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="Hero" className="flex flex-col md:h-[90vh] md:flex-row justify-between items-center px-4 sm:px-10 py-16 md:py-20 gap-10">
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-snug">
            Secure Digital Voting with{" "}
            <span className="text-blue-500">SMART EVM</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mt-4 leading-relaxed">
            Revolutionary blockchain-powered electronic voting machine ensuring
            transparent, secure, and tamper-proof elections with real-time
            monitoring and advanced security features.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium">
              Get Started
            </button>
            <button className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium">
              Learn More
            </button>
          </div>
        </div>
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl dark:shadow-gray-900/50 p-8 transform hover:scale-105 transition-all duration-500 w-full max-w-md">
          <svg className="w-full h-64" viewBox="0 0 400 300" fill="none"><rect x="50" y="60" width="300" height="180" fill="#e5e7eb" rx="12">
          </rect><rect x="70" y="80" width="100" height="140" fill="#1f2937" rx="8">
            </rect><rect x="85" y="95" width="70" height="50" fill="#3b82f6" rx="4">
            </rect><circle cx="100" cy="170" r="8" fill="#10b981">
            </circle><circle cx="130" cy="170" r="8" fill="#ef4444"></circle>
            <circle cx="160" cy="170" r="8" fill="#f59e0b"></circle>
            <rect x="200" y="80" width="120" height="20" fill="#374151" rx="10">
            </rect><rect x="200" y="110" width="80" fill="#6b7280" rx="2"></rect>
            <rect x="200" y="120" width="100" fill="#6b7280" rx="2"></rect>
            <rect x="200" y="130" width="60" fill="#6b7280" rx="2"></rect>
            <circle cx="320" cy="100" r="15" fill="#22c55e"></circle>
            <path d="M315 100l3 3 6-6" stroke="white" stroke-width="2" fill="none"></path>
            <circle cx="100" cy="30" r="12" fill="#3b82f6"></circle><circle cx="150" cy="45" r="10" fill="#8b5cf6"></circle>
            <circle cx="250" cy="35" r="8" fill="#06b6d4"></circle><path d="M100 42L150 55L250 43" stroke="#3b82f6" stroke-width="2" fill="none" stroke-dasharray="5,5"></path>
          </svg><div className="absolute -top-6 -right-6 bg-green-500 dark:bg-green-400 text-white p-3 rounded-full animate-bounce shadow-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          </div><div className="absolute -bottom-6 -left-6 bg-blue-500 dark:bg-blue-400 text-white p-3 rounded-full animate-pulse shadow-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
          </div></div>
      </section>

      {/* Features Section */}
      <section id="Features" className="px-4 sm:px-10 py-16 bg-[#111827]">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          Advanced Security Features
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Our SMART EVM incorporates cutting-edge technologies to ensure the highest levels of security and reliability
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FaLink className="text-blue-500 text-3xl mb-4" />,
              title: "Blockchain Security",
              desc: "Immutable vote recording with cryptographic verification ensuring transparency and tamper resistance.",
            },
            {
              icon: <FaClock className="text-blue-500 text-2xl mb-4" />,
              title: "Real-time Monitoring",
              desc: "Live election tracking with instant vote counting and real-time status updates.",
            },
            {
              icon: <FaCloud className="text-blue-500 text-2xl mb-4" />,
              title: "Cloud Storage",
              desc: "Secure cloud backup ensuring data integrity and disaster recovery.",
            },
            {
              icon: <FaUser className="text-blue-500 text-2xl mb-4" />,
              title: "User-Friendly Interface",
              desc: "Intuitive touchscreen interface with multilingual support.",
            },
            {
              icon: <FaCog className="text-blue-500 text-2xl mb-4" />,
              title: "Configurable Admin",
              desc: "Role-based access control with customizable election parameters.",
            },
            {
              icon: <FaShieldAlt className="text-blue-500 text-2xl mb-4" />,
              title: "Tamper-Proof Hardware",
              desc: "Military-grade security with intrusion detection.",
            },
          ].map((f, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              {f.icon}
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 flex-grow">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Section */}
      <section id="Product" className="px-4 sm:px-10 py-16 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="max-w-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">NovoTech EVM</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The next generation of electronic voting machines powered by
            blockchain technology. Built with advanced security features and
            designed for seamless election management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium">
              Buy Now
            </button>
            <button className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium">
              User Manual
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ul className="text-gray-300 space-y-2 list-disc pl-5">
              <li>15-inch HD Touchscreen Display</li>
              <li>ARM Cortex-A78 Octa-core Processor</li>
              <li>8GB RAM + 256GB Storage</li>
              <li>Built-in Thermal Printer</li>
            </ul>
            <ul className="text-gray-300 space-y-2 list-disc pl-5">
              <li>Biometric Scanner Integration</li>
              <li>Wi-Fi 6 + 5G Connectivity</li>
              <li>12-hour Battery Backup</li>
              <li>IP65 Weather Protection</li>
            </ul>
          </div>
        </div>
        <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-500 w-full max-w-md">
          <svg className="w-full h-80" viewBox="0 0 300 400" fill="none"><rect x="50" y="50" width="200" height="300" fill="#1f2937" rx="8"></rect>
          <rect x="60" y="60" width="180" height="200" fill="#374151" rx="4"></rect><rect x="70" y="70" width="160" height="120" fill="#000000" rx="4"></rect>
          <rect x="75" y="75" width="150" height="110" fill="#3b82f6" rx="2"></rect><rect x="85" y="85" width="40" height="6" fill="white" rx="1"></rect>
          <rect x="85" y="95" width="60" height="6" fill="white" rx="1"></rect><rect x="85" y="105" width="30" height="6" fill="white" rx="1"></rect>
          <rect x="85" y="125" width="40" height="6" fill="white" rx="1"></rect><rect x="85" y="135" width="60" height="6" fill="white" rx="1"></rect>
          <rect x="85" y="145" width="30" height="6" fill="white" rx="1"></rect><circle cx="90" cy="220" r="8" fill="#10b981"></circle>
          <circle cx="120" cy="220" r="8" fill="#f59e0b"></circle><circle cx="150" cy="220" r="8" fill="#ef4444"></circle>
          <circle cx="180" cy="220" r="8" fill="#8b5cf6"></circle><rect x="70" y="280" width="160" height="50" fill="#6b7280" rx="4"></rect>
          <rect x="80" y="290" width="140" height="10" fill="#9ca3af" rx="2"></rect><rect x="80" y="305" width="140" height="10" fill="#9ca3af" rx="2"></rect></svg>
          <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      </section>

      {/* Community Section */}
      <section id="Community" className="px-4 sm:px-10 py-16 bg-[#111827]">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Community Support</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Join our thriving community and get the support you need to make the most of SMART EVM
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FaHeadset className="text-blue-500 text-2xl mb-4" />,
              title: "Technical Support",
              desc: "24/7 expert support with remote assistance and on-site service.",
            },
            {
              icon: <FaBook className="text-blue-500 text-2xl mb-4" />,
              title: "Knowledge Base",
              desc: "Comprehensive documentation, tutorials, and best practices.",
            },
            {
              icon: <FaUsers className="text-blue-500 text-2xl mb-4" />,
              title: "Community Forum",
              desc: "Connect with users, share experiences, and get answers.",
            },
            {
              icon: <FaCommentAlt className="text-blue-500 text-2xl mb-4" />,
              title: "Feedback System",
              desc: "Direct feedback channel for product improvement.",
            },
            {
              icon: <FaSync className="text-blue-500 text-2xl mb-4" />,
              title: "Regular Updates",
              desc: "Continuous updates with new features and patches.",
            },
            {
              icon: <FaChalkboardTeacher className="text-blue-500 text-2xl mb-4" />,
              title: "Training Webinars",
              desc: "Regular training sessions and webinars.",
            },
          ].map((c, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-lg transition-shadow duration-300 h-full flex flex-col">
              {c.icon}
              <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
              <p className="text-gray-400 flex-grow">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-10 py-10 bg-[#0f172a] border-t border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">SMART EVM</h3>
            <p className="text-gray-400 leading-relaxed">
              Revolutionary blockchain-powered electronic voting machine ensuring
              secure, transparent, and tamper-proof elections worldwide.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-3">
              <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300"><a href="#Hero">Home</a></li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300"><a href="#Features">Features</a></li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300"><a href="#Product">Product</a></li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300"><a href="#Community">Community</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="text-gray-400 space-y-3">
              <li className="hover:text-blue-400 transition-colors duration-300">support@smartevm.com</li>
              <li className="hover:text-blue-400 transition-colors duration-300">+1 (555) 123-4567</li>
              <li className="hover:text-blue-400 transition-colors duration-300">123 Innovation Drive, Tech City, TC 12345</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 pt-6 border-t border-gray-800 text-sm">
          © 2024 SMART EVM. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
