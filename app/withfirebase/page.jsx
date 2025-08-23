"use client";
import { useRouter } from "next/navigation";

export default function WithFirebase() {
  const router = useRouter();
  
  const handleLoginClick = () => {
    // redirct to flutterapp
    router.push("https://smartevm.in/Smartevm/index.html");
  };
  const handleResetClick = () => {
    // redirct to flutterapp
    router.push("withfirebase/resetpage/login");
  }
  const handleNewelectionClick = () => {
    router.push("withfirebase/conductelection");
  };

  return (
    <div className="bg-[#0f172a] flex flex-col md:h-[100vh] md:flex-row justify-between items-center px-4 sm:px-10 py-16 md:py-20 gap-10">
      <div className="max-w-xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-snug">
          Secure Digital Voting with{" "}
          <span className="text-blue-500">SMART EVM</span>
        </h1>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={handleLoginClick} 
            className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transform hover:scale-110 transition-all duration-300 font-medium"
          >
            View Votes
          </button>
          <button onClick={handleResetClick} className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transform hover:scale-110 transition-all duration-300 font-medium">
            Reset page
          </button>
          <button onClick={handleNewelectionClick} className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transform hover:scale-110 transition-all duration-300 font-medium">
            New Election
          </button>
        </div>
      </div>

      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl dark:shadow-gray-900/50 p-8 transform hover:scale-105 transition-all duration-500 w-full max-w-md">
        <svg className="w-full h-64" viewBox="0 0 400 300" fill="none">
          <rect x="50" y="60" width="300" height="180" fill="#e5e7eb" rx="12"></rect>
          <rect x="70" y="80" width="100" height="140" fill="#1f2937" rx="8"></rect>
          <rect x="85" y="95" width="70" height="50" fill="#3b82f6" rx="4"></rect>
          <circle cx="100" cy="170" r="8" fill="#10b981"></circle>
          <circle cx="130" cy="170" r="8" fill="#ef4444"></circle>
          <circle cx="160" cy="170" r="8" fill="#f59e0b"></circle>
          <rect x="200" y="80" width="120" height="20" fill="#374151" rx="10"></rect>
          <rect x="200" y="110" width="80" fill="#6b7280" rx="2"></rect>
          <rect x="200" y="120" width="100" fill="#6b7280" rx="2"></rect>
          <rect x="200" y="130" width="60" fill="#6b7280" rx="2"></rect>
          <circle cx="320" cy="100" r="15" fill="#22c55e"></circle>
          <path d="M315 100l3 3 6-6" stroke="white" stroke-width="2" fill="none"></path>
          <circle cx="100" cy="30" r="12" fill="#3b82f6"></circle>
          <circle cx="150" cy="45" r="10" fill="#8b5cf6"></circle>
          <circle cx="250" cy="35" r="8" fill="#06b6d4"></circle>
          <path d="M100 42L150 55L250 43" stroke="#3b82f6" stroke-width="2" fill="none" stroke-dasharray="5,5"></path>
        </svg>
        <div className="absolute -top-6 -right-6 bg-green-500 dark:bg-green-400 text-white p-3 rounded-full animate-bounce shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <div className="absolute -bottom-6 -left-6 bg-blue-500 dark:bg-blue-400 text-white p-3 rounded-full animate-pulse shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
