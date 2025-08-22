import { FaLink, FaClock, FaCloud, FaUser, FaCog, FaShieldAlt } from "react-icons/fa";

export default function Features() {
    const features = [
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
    ];

    return (
        <section id="Features" className="px-4 sm:px-10 py-16 bg-[#111827]">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
                Advanced Security Features
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Our SMART EVM incorporates cutting-edge technologies to ensure the highest levels of security and reliability
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((f, i) => (
                    <div
                        key={i}
                        className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500 hover:outline-1 outline-blue-500 transform hover:scale-105 transition-all duration-300 h-full flex flex-col"
                    >
                        {f.icon}
                        <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                        <p className="text-gray-400 flex-grow">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
