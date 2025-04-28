'use client';
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from "next/image"; // Import StaticImageData

// Image imports
import bidding from "../assets/mern.jpg";
import myapp from "../assets/nativeApp.png";
import java from "../assets/java.png";
import cplus from "../assets/cplus.jpg";

const projects = [
    {
        title: "Online Bidding System",
        shortDesc: "A web application for online bidding, built using the MERN stack.",
        fullDesc: "The Online Bidding System is a web-based platform designed to facilitate real-time auctions over the internet. Users can easily register, browse listed items, place competitive bids, and track auction progress with live updates. Built with modern technologies for a smooth and secure user experience, the system supports user authentication, item management, notifications, and real-time bidding functionality. Whether for individual sellers or organizations, this platform streamlines the entire bidding process, ensuring transparency, competitiveness, and accessibility from any device.",
        tags: [
            "MERN Stack",
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js",
            "Tailwind CSS",
            "Vite",
            "Online Auction",
            "Real-Time Bidding",
            "Full Stack Development",
            "Responsive Design",
        ],
        image: bidding,
        links: [{
            icon: <FiGithub />,
            url: "https://github.com/abducodespro/bidding-project"
        }],
    },
    {
        title: "Course Management system(CMS)",
        shortDesc: "A JavaFX-based Course Management System designed to manage courses and student with an intuitive user interface created using Scene Builder.",
        fullDesc:
            "The Course Management System is a desktop application developed in Java using JavaFX for building a responsive and interactive user interface. Designed with the help of Scene Builder, it allows administrators to efficiently manage course information, instructor assignments, and student enrollments. The system supports adding, updating, and deleting course records, viewing instructor details, and organizing academic schedules. With a focus on usability and performance, the application offers a clean and modern design, ensuring a smooth experience for educational institutions seeking to streamline their course management processes.",
        tags: [
            "Java",
            "JavaFX",
            "Scene Builder",
            "Course Management",
            "Student Enroll",
            "Education Software",
            "Object-Oriented Programming",
        ],
        image: java,
        links: [
            {
                icon: <FiGithub />,
                url: "https://github.com/abducodespro/course-management",
            },
        ],
    },
    {
        title: "Snake Game",
        shortDesc:
            "A classic Snake Game implemented in C++ with a simple console interface and interactive gameplay.",
        fullDesc:
            "This Snake Game is a console-based application developed using C++ that recreates the classic Snake game. The game allows the player to control a snake using keyboard input, with the goal of eating food to grow longer while avoiding collisions with walls and the snake’s own body. The game logic, user input handling, and graphics are all managed through the C++ programming language, providing an efficient and lightweight experience. Perfect for learning game development fundamentals and practicing C++ programming.",
        tags: [
            "C++",
            "Console Game",
            "Snake Game",
            "Game Development",
            "Classic Game",
            "User Input",
            "Game Logic",
            "Text-based Game",
            "Object-Oriented Programming",
        ],
        image: cplus,
        links: [{
            icon: <FiGithub />,
            url: "https://github.com/abducodespro/Simple-snake-game-"
        }],
    },
    {
        title: "To-Do app",
        shortDesc:
            "A simple and intuitive To-Do App built with React Native, allowing users to manage their tasks and stay organized on the go.",
        fullDesc:
            "The To-Do App is a mobile application developed using React Native, offering a seamless experience for managing daily tasks. Users can add, update, delete, and mark tasks as completed. The app features an intuitive user interface, making it easy to add new tasks and keep track of progress. Built with React Native's powerful cross-platform capabilities, the app runs smoothly on both iOS and Android devices, offering the flexibility to manage tasks anytime, anywhere. Whether for personal productivity or managing work-related tasks, this app is a lightweight yet efficient tool for staying organized.",
        tags: [
            "React Native",
            "Mobile App",
            "To-Do App",
            "Task Management",
            "Cross-Platform",
            "Productivity App",
            "iOS",
            "Android",
            "Task List",
        ],
        image: myapp,
        links: [{
            icon: <FiGithub />,
            url: "https://github.com/abducodespro/Todo-app"
        }],
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<{
        title: string;
        shortDesc: string;
        fullDesc: string;
        tags: string[];
        image: StaticImageData;
        links: { icon: React.ReactNode; url: string }[];
        technicalDetails?: string[];
    } | null>(null);
    const sliderRef = useRef<Slider | null>(null);

    const sliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                },
            },
        ],
        appendDots: (dots: React.ReactNode) => (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform">
                <ul className="flex space-x-2">{dots}</ul>
            </div>
        ),
        customPaging: (i: number) => (
            <div
                className={`h-2 w-2 rounded-full transition-all ${i < Math.ceil(projects.length / 3) ? "bg-gray-500 hover:bg-blue-400" : "hidden"
                    }`}
            />
        ),
    };

    return (
        <section id="projects" className="bg-gray-900/50 py-20 backdrop-blur-md">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center text-4xl font-bold text-white"
                >
                    My <span className="text-blue-400">Projects</span>
                </motion.h2>

                <div className="relative px-8">
                    <Slider ref={sliderRef} {...sliderSettings}>
                        {projects.map((project, index) => (
                            <div key={index} className="px-2">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="flex h-full flex-col overflow-hidden rounded-xl bg-gray-800 transition-all hover:shadow-lg hover:shadow-blue-500/20"
                                >
                                    <div className="relative aspect-video h-48 overflow-hidden bg-gray-700">

                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            className="h-full w-full object-cover transition-transform hover:scale-105"
                                        />
                                    </div>

                                    <div className="flex flex-grow flex-col p-6">
                                        <h3 className="mb-2 text-xl font-bold text-white">
                                            {project.title}
                                        </h3>
                                        <p className="mb-4 text-gray-300">{project.shortDesc}</p>

                                        <div className="mb-4 flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full bg-gray-700 px-2 py-1 text-xs text-blue-400"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-auto flex items-center justify-between">
                                            <div className="flex space-x-4">
                                                {project.links.map((link, i) => (
                                                    <motion.a
                                                        key={i}
                                                        href={link.url}
                                                        whileHover={{ scale: 1.1 }}
                                                        className="text-gray-400 hover:text-white"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {link.icon}
                                                    </motion.a>
                                                ))}
                                            </div>
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="text-sm font-medium text-blue-400 hover:text-blue-300"
                                            >
                                                Read More →
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>

                    {/* Custom Arrows */}
                    <button
                        onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
                        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-gray-800 p-2 text-white hover:bg-blue-600"
                    >
                        <FiChevronLeft className="text-2xl" />
                    </button>
                    <button
                        onClick={() => sliderRef.current && sliderRef.current.slickNext()}
                        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-gray-800 p-2 text-white hover:bg-blue-600"
                    >
                        <FiChevronRight className="text-2xl" />
                    </button>
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-gray-800"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative">
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute right-4 top-4 z-10 text-gray-400 hover:text-white"
                                >
                                    <FiX className="text-2xl" />
                                </button>
                                <div className="relative aspect-video w-full overflow-hidden bg-gray-900">

                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="h-full w-full object-contain"
                                    />

                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="mb-2 text-2xl font-bold text-white">
                                    {selectedProject.title}
                                </h3>

                                <div className="mb-6 space-y-4">
                                    <h4 className="text-lg font-semibold text-blue-400">
                                        Project Overview
                                    </h4>
                                    <p className="text-gray-300">{selectedProject.fullDesc}</p>

                                    {selectedProject.technicalDetails && (
                                        <>
                                            <h4 className="text-lg font-semibold text-blue-400">
                                                Technical Implementation
                                            </h4>
                                            <ul className="ml-6 list-disc text-gray-300">
                                                {selectedProject.technicalDetails.map((detail, i) => (
                                                    <li key={i}>{detail}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>

                                <div className="mb-6 flex flex-wrap gap-2">
                                    {selectedProject.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-gray-700 px-3 py-1.5 text-sm text-blue-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {selectedProject.links.length > 0 && (
                                    <div className="flex flex-wrap gap-4">
                                        {selectedProject.links.map((link, i) => (
                                            <motion.a
                                                key={i}
                                                href={link.url}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 text-white"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {link.icon}
                                                <span>View Code</span>
                                            </motion.a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
