"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import profilepic from '../assets/profilepic.png'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    return (
        <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8f5C55_60%,#DBAF6E_80%)]" id='home'>
            <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
            bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>
            <div className='relative'>
                <div className="text-5xl font-bold text-center">
                    <h1 className="text-gray-400">Hi, I am</h1>
                    <h1 className="text-blue-600">Abdulsomed Jibril</h1>
                </div>
                
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className='absolute left-[260px] top-[260px] sm:top-[170px]'
                >
                    <Image
                        src={icon1}
                        alt='icon'
                        className='h-20 w-20 sm:w-40 sm:h-40 '
                    />
                </motion.div>

                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className='absolute right-[270px] top-[230px]'
                    drag
                >
                    <Image
                        src={icon2}
                        alt='icon two'
                        className='h-20 w-16 sm:w-20 sm:h-24'
                        draggable='false'
                    />
                </motion.div>

                <p className='text-center text-xl font-bold max-w-[500px] mx-auto mt-8 text-white/80'>
                    I am a{' '}
                    <Typewriter
                        words={['Full Stack Developer', 'React & Next.js Expert', 'Creative Coder', 'Talented Problem Solver']}
                        cursor
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        loop
                    />
                </p>
                <div className='flex justify-center mt-8'>
                   <motion.a
                    href="/cv.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block rounded-full border border-blue-400 bg-blue-500/10 px-5 py-2 text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300"
                >
                    Download CV
                </motion.a> 
                </div>
                <Image
                    src={profilepic}
                    alt='profile pisture'
                    className='h-auto w-auto mx-auto'
                />
            </div>
        </div>

    )
}

export default Hero