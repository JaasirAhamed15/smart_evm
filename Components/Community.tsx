import {
    FaHeadset, FaBook, FaUsers,
    FaCommentAlt, FaSync, FaChalkboardTeacher
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Community() {
    const communityFeatures = [
        {
            icon: <FaHeadset className="text-blue-500 text-2xl mb-4" />,
            title: "Technical Support",
            desc: "24/7 expert support with remote assistance and on-site service.",
            animation: { hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } },
        },
        {
            icon: <FaBook className="text-blue-500 text-2xl mb-4" />,
            title: "Knowledge Base",
            desc: "Comprehensive documentation, tutorials, and best practices.",
            animation: { hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } },
        },
        {
            icon: <FaUsers className="text-blue-500 text-2xl mb-4" />,
            title: "Community Forum",
            desc: "Connect with users, share experiences, and get answers.",
            animation: { hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } },
        },
        {
            icon: <FaCommentAlt className="text-blue-500 text-2xl mb-4" />,
            title: "Feedback System",
            desc: "Direct feedback channel for product improvement.",
            animation: { hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } },
        },
        {
            icon: <FaSync className="text-blue-500 text-2xl mb-4" />,
            title: "Regular Updates",
            desc: "Continuous updates with new features and patches.",
            animation: { hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } },
        },
        {
            icon: <FaChalkboardTeacher className="text-blue-500 text-2xl mb-4" />,
            title: "Training Webinars",
            desc: "Regular training sessions and webinars.",
            animation: { hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } },
        },
    ];

    return (
        <section id="Community" className="px-4 sm:px-10 py-16 bg-[#111827]">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
                Community Support
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Join our thriving community and get the support you need to make the most of SMART EVM
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {communityFeatures.map((c, i) => (
                    <motion.div
                        key={i}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: i * 0.3, type: "spring" }}
                        variants={c.animation}
                        className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500 transform hover:scale-105 transition-all duration-300 h-full flex flex-col"
                    >
                        {c.icon}
                        <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                        <p className="text-gray-400 flex-grow">{c.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
