'use client';
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiX, FiChevronLeft, FiChevronRight, FiCheck } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from "next/image"; // Import StaticImageData

// Image imports
import employability from "../assets/employ_certeficate.jpg";
import cisco from "../assets/cisco_certeficate.jpg";
import udacity from "../assets/udacity_certeficate.jpg";
import charity_certeficate from "../assets/charity_certeficate.jpg";

const certificates = [
  {
    title: "Introduction to Cybersecurity Course",
    shortDesc: "A cybersecurity course where I learned what cybersecurity is and its potential impact.",
    fullDesc:
      "This course give me the knowledge of basics of being safe online, including what cybersecurity is and its potential impact.I have seen the most common cyber threats, attacks, and vulnerabilities. I studied also to protect oneself while online. I have learned how organizations can protect their operations against these attacks.Access a variety of information and resources to explore the different career options in cybersecurity.",
    tags: [
      "Cybersecurity",
      "NetworkSecurity",
      "EthicalHacking",
      "CyberThreats",
      "RiskManagement",
      "SecurityAwareness",
      "VulnerabilityAssessment",
      "IncidentResponse",
    ],
    image: cisco,
    links: [],
  },
  {
    title: "Programing Fundamentals Course",
    shortDesc: "Completed Udacity’s Programming Fundamentals course, learning the basics of web development including HTML, CSS, JavaScript, and DOM manipulation.",
    fullDesc:
      "Successfully completed the Programming Fundamentals course on Udacity, where I built a solid foundation in front-end web development. I learned how to structure web pages with HTML, style them with CSS, and bring interactivity using JavaScript. The course also covered DOM manipulation, allowing me to dynamically update content and respond to user input. Through hands-on projects, I gained practical skills in building responsive, interactive web pages — setting the stage for deeper learning in web and software development.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "DOM",
      "WebDevelopment",
      "FrontEndDevelopment",
      "Udacity",
      "ProgrammingFundamentals",
      "ResponsiveDesign",
      "InteractiveWebPages",
    ],
    image: udacity,
    links: [
      {
        icon: <FiCheck />,
        url: "www.udacity.com/certificate/e/4eef93d8-4bc3-11ef-b2ae-9f07b4fe3618",
      },
    ],
  },
  {
    title: "Employability and Job readiness Skills",
    shortDesc:
      "Completed an Employability and Job Readiness Program focused on enhancing professional skills, resume writing, interview preparation, and workplace communication.",
    fullDesc:
      "Successfully completed an Employability and Job Readiness Program designed to prepare participants for the workforce. The program covered essential career-building topics including resume writing, interview techniques, professional communication, workplace ethics, and team collaboration. It also focused on developing soft skills such as critical thinking, adaptability, and time management — all of which are vital for succeeding in today’s job market. This training significantly improved my confidence and readiness to enter a professional work environment.",
    tags: [
      "EmployabilitySkills",
      "JobReadiness",
      "ResumeWriting",
      "InterviewSkills",
      "ProfessionalCommunication",
      "WorkplaceEtiquette",
      "SoftSkills",
      "TimeManagement",
    ],
    image: employability,
    links: [],
  },
  {
    title: "Participation in Charity Event",
    shortDesc:
      "Participated in a charity event focused on raising funds and awareness for a local cause, contributing to community support and engagement.",
    fullDesc:
      "Participated in a charity event aimed at raising funds and awareness for a local cause. The event included various activities such as fundraising campaigns, community outreach, and volunteer work. My involvement helped to support the cause and foster community engagement. This experience not only enhanced my teamwork and organizational skills but also deepened my understanding of social responsibility and the impact of collective efforts in making a difference.",
    tags: [
      "CharityEvent",
      "CommunityService",
      "Fundraising",
      "VolunteerWork",
      "SocialResponsibility",
      "Teamwork",
      "CommunityEngagement",
    ],
    image: charity_certeficate,
    links: [],
  },
];

export default function Certificate() {
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
        className={`h-2 w-2 rounded-full transition-all ${
          i < Math.ceil(certificates.length / 3) ? "bg-gray-500 hover:bg-blue-400" : "hidden"
        }`}
      />
    ),
  };

  return (
    <section id="" className="bg-gray-900/50 py-20 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-center text-4xl font-bold text-white"
        >
          My <span className="text-blue-400">Certificates</span>
        </motion.h2>

        <div className="relative px-8">
          <Slider ref={sliderRef} {...sliderSettings}>
            {certificates.map((project, index) => (
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
