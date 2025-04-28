"use client";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiCpu, FiMail } from "react-icons/fi";
import { useState } from "react";
import DtuLogo from "../assets/dtulogo.jpg";
import Image from "next/image";

export default function Testimonials() {

  return (
    <section id="testimonials" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-center text-4xl font-bold text-white"
        >
          <span className="text-blue-400">Educators</span> Speak
        </motion.h2>

        <div className="relative mx-auto max-w-4xl">
          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-gray-700 bg-gray-800/50 p-8 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center md:flex-row md:items-start">
              {/* Teacher Image */}
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-blue-400/30">
                  <Image
                    src={DtuLogo}
                    alt="Teacher"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 rounded-full bg-blue-600 p-2">
                    <FiCpu className="text-white" />
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4 flex justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < 5} />
                  ))}
                </div>
                <p className="mb-6 text-lg italic text-gray-300">
                "Abdulsomed Jibril is a passionate developer and a dedicated lifelong learner. With 
                a strong commitment to building innovative solutions and sharing knowledge with 
                others, he approaches every project with creativity, curiosity, and collaboration. 
                Whether writing clean code, designing intuitive user interfaces, or helping others 
                grow, he consistently strives to make a positive impact and contribute 
                meaningfully to the tech community."
                </p>
                <div>
                  <h3 className="text-xl font-bold text-white">
                  Mr. Moges Tsegaw
                  </h3>
                  <p className="text-blue-400">
                  computer Science department head
                  </p>
                  {/* Added email section */}
                  <div className="mt-2 flex items-center text-gray-400">
                    <FiMail className="mr-2" />
                    <a
                      href={`mailto:moges.tsegaw@dtu.edu.et`}
                      className="hover:text-blue-400 hover:underline"
                    >
                      moges.tsegaw@dtu.edu.et
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Star rating component (unchanged)
function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`mx-1 h-5 w-5 ${filled ? "text-yellow-400" : "text-gray-500"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
