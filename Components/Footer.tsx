export default function Footer() {
    return (
        <footer className="px-4 sm:px-10 py-10 bg-[#0f172a] border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Brand Info */}
                <div>
                    <h3 className="font-bold text-xl mb-4">SMART EVM</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Revolutionary blockchain-powered electronic voting machine ensuring
                        secure, transparent, and tamper-proof elections worldwide.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                    <ul className="text-gray-400 space-y-3">
                        {["Home", "Features", "Product", "Community"].map((item) => (
                            <li
                                key={item}
                                className="hover:text-blue-400 cursor-pointer transition-colors duration-300"
                            >
                                <a href={`#${item}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Contact Info</h3>
                    <ul className="text-gray-400 space-y-3">
                        <li className="hover:text-blue-400 transition-colors duration-300">
                            teamcodesages@gmail.com
                        </li>
                        <li className="hover:text-blue-400 transition-colors duration-300">
                            +91 9363679092
                        </li>
                        <li className="hover:text-blue-400 transition-colors duration-300">
                            E-Yantra Lab, Mount Zion College of Engineering and Technology, Pudukkottai, Tamilnadu, India
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-gray-500 mt-8 pt-6 border-t border-gray-800 text-sm">
                © 2025 SMART EVM. All rights reserved.
            </div>
        </footer>
    );
}
