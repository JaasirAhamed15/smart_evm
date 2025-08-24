export default function Product() {
    return (
        <section
            id="Product"
            className="px-4 sm:px-10 py-16 flex flex-col md:flex-row justify-between items-center gap-10"
        >
            <div className="max-w-lg min-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">NovoTech EVM</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                    The next generation of electronic voting machines powered by blockchain technology.
                    Built with advanced security features and designed for seamless election management.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transform hover:scale-110 transition-all duration-300 font-medium">
                        Buy Now
                    </button>
                    <button className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-blue-600 transform hover:scale-110 transition-all duration-300 font-medium">
                        User Manual
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <ul className="text-gray-300 space-y-2 list-disc pl-5">
                        <li>Blockchain-powered EVM using Ethereum</li>
                        <li>Ganache for blockchain development & testing</li>
                        <li>Centralized server for blockchain vote storage</li>
                        <li>ESP-32 based Smart EVM with unique ID</li>
                    </ul>
                    <ul className="text-gray-300 space-y-2 list-disc pl-5">
                        <li>Web portal for voter login & analytics</li>
                        <li>Dual EVM Models: Blockchain & Non-Blockchain</li>
                        <li>Firebase database integration for non-blockchain EVM</li>
                        <li>Secure, transparent, and tamper-resistant design</li>
                    </ul>
                </div>

            </div>

            {/* <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-500 w-full max-w-md">
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
            </div> */}
            <div className="relative bg-white bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl dark:shadow-gray-900/50 p-8 transform hover:scale-105 transition-all duration-500 w-full max-w-md">
            <img src="evmimage.png" alt="" className="w-full h-full rounded-2xl" />
                </div>
        </section>
    );
}
