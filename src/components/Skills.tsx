'use client'
import { motion } from "framer-motion";
import { FiCode, FiServer, FiType } from "react-icons/fi";
import { FaReact, FaNodeJs, FaKeyboard, FaLightbulb, FaUser, FaComment } from "react-icons/fa";
import { SiArduino, SiCplusplus, SiFirebase, SiMongodb, SiMysql } from "react-icons/si";
import { DiJava } from "react-icons/di"; // Java icon from different package

export default function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <FiCode className="text-2xl text-blue-400" />,
            skills: [
                {
                    name: "C++", icon: <SiCplusplus className="text-xl" />, level: 85
                },
                {
                    name: "Python",
                    icon: <SiArduino className="text-xl" />,
                    level: 90,
                },
                { name: "Java", icon: <DiJava className="text-xl" />, level: 75 },
                {
                    name: "JavaScript",
                    icon: <SiCplusplus className="text-xl" />,
                    level: 80,
                },
                { name: "HTML/CSS", icon: <FiCode className="text-xl" />, level: 85 },
            ],
        },
        {
            title: "Frameworks & Tech Stacks",
            icon: <FaReact className="text-2xl text-blue-400" />,
            skills: [
                { name: "React", icon: <FaReact className="text-xl" />, level: 85 },
                { name: "Node.js", icon: <FaNodeJs className="text-xl" />, level: 80 },
                { name: "Express", icon: <FiServer className="text-xl" />, level: 75 },
                {
                    name: "Tailwind CSS",
                    icon: <FiCode className="text-xl" />,
                    level: 90,
                },
                {
                    name: "JavaFx",
                    icon: <DiJava className="text-xl" />,
                    level: 90,
                },
            ],
        },
        {
            title: "Databases",
            icon: <SiMongodb className="text-2xl text-blue-400" />,
            skills: [
                { name: "MongoDB", icon: <SiMongodb className="text-xl" />, level: 75 },
                { name: "MySQL", icon: <SiMysql className="text-xl" />, level: 70 },
                { name: "Firebase", icon: <SiFirebase className="text-xl" />, level: 60 },
            ],
        },

        {
            title: "General Skills",
            icon: <FiType className="text-2xl text-blue-400" />,
            skills: [
                { name: "Typing (75+ WPM)", icon: <FaKeyboard className="text-xl" />, level: 95 },
                { name: "Problem Solving", icon: <FaLightbulb className="text-xl" />, level: 90 },
                { name: "Team Collaboration", icon: <FaUser className="text-xl" />, level: 85 },
                { name: "Technical Communication", icon: <FaComment className="text-xl" />, level: 88 },
            ],
        },
    ];

    return (
        <section id="skills" className="bg-gray-800 py-20">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center text-4xl font-bold text-white"
                >
                    My <span className="text-blue-400">Skills</span>
                </motion.h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="rounded-xl border border-gray-700 bg-gray-900/50 p-6 backdrop-blur-sm"
                        >
                            <div className="mb-6 flex items-center border-b border-gray-700 pb-4">
                                <div className="mr-3 rounded-full bg-blue-500/10 p-2">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill, i) => (
                                    <div key={i}>
                                        <div className="mb-2 flex items-center justify-between">
                                            <div className="flex items-center">
                                                {skill.icon && (
                                                    <span className="mr-2 text-blue-400">
                                                        {skill.icon}
                                                    </span>
                                                )}
                                                <span className="text-gray-300">{skill.name}</span>
                                            </div>
                                            <span className="text-xs text-blue-400">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-2 w-full rounded-full bg-gray-700">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: i * 0.1 }}
                                                className="h-full rounded-full bg-blue-500"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Hardware Visualization */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 text-center"
                >
                    <h3 className="mb-6 text-2xl font-bold text-white">
                        <span className="text-blue-400">Networking</span> Proficiency
                    </h3>
                    <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
                        {[
                            "Network Protocols",
                            "Firewall Configuration",
                            "Intrusion Detection",
                            "VPN Technologies",
                            "Wireless Security",
                            "Network Troubleshooting",
                            "Cybersecurity Best Practices",
                        ].map((skill, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-blue-400"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
