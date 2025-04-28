"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { motion } from "framer-motion"
import { FiMail, FiMessageSquare, FiSend, FiUser } from "react-icons/fi";

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);// Specify the type of the form reference

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => { // Correct event type
        e.preventDefault();

        if (!form.current) return; 
        setIsSending(true)
        emailjs
            .sendForm(
                "service_jhk9lxv",
                "template_3b1vhnw",
                form.current,
                "7LEcARTXz04dBYNKt" // Replace with your EmailJS user ID
            )
            .then(
                (result) => {
                    setIsSent(true);
                    setName("");
                    setEmail("");
                    setMessage("");
                    setTimeout(() => setIsSent(false), 3000);
                },
                (error) => {
                    console.log(error.text);
                }
            )
            .finally(() => setIsSending(false)); // Reset the form after submission
    };

    return (
        <section className="p-4 sm:10 bg-gray-800 " id="contact">
            <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="container mx-auto max-w-2xl mt-8 bg-gray-700 p-3 sm:p-8 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
                <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto">
                    {isSent && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 rounded-lg bg-green-500/10 p-4 text-center text-green-400"
                        >
                            Message sent! I'll reply soon.
                        </motion.div>
                    )}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="group relative"
                    >
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400">
                            <FiUser />
                        </div>
                        <input
                            type="text"
                            name="user_name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            className="w-full rounded-lg border border-gray-600 bg-gray-800 py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
                            required
                        />
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="group relative"
                    >
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400">
                            <FiMail />
                        </div>
                        <input
                            type="email"
                            name="user_email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your Email"
                            className="w-full rounded-lg border border-gray-600 bg-gray-800 py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
                            required
                        />
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="group relative"
                    >
                        <div className="absolute left-3 top-4 text-gray-400 group-focus-within:text-blue-400">
                            <FiMessageSquare />
                        </div>
                        <textarea
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your Message"
                            rows={5}
                            className="w-full rounded-lg border border-gray-600 bg-gray-800 py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
                            required
                        />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={isSending}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-70"
                    >
                        {isSending ? (
                            "Sending..."
                        ) : (
                            <>
                                <FiSend /> Send Message
                            </>
                        )}
                    </motion.button>
                    <div className="mt-4 flex gap-3 items-center">
                        <p>you can also contact me <i>by</i></p>
                        <a href="https://github.com/abducodespro" target="_blank" className=""><FaGithub size={20} /></a>
                        <a href="https://t.me/abducodespro" target="_blank" className=""><FaTelegramPlane size={20} /></a>
                        <a href="https://www.instagram.com/abdu_code0/" target="_blank" className=""><FaInstagram size={20} /></a>
                        <a href="https://call.imo.im/abdu_code" target="_blank" className=""><ImWhatsapp size={20} /></a>
                    </div>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
