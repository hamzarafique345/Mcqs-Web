import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import React from 'react'
import { FaYoutube, FaWhatsapp } from 'react-icons/fa';
export default function Homepage() {
  
  return (
    <div className="relative bg-center bg-cover min-h-screen h-[100vh]  sm:md:h-[120vh]" style={{backgroundImage:"url(/first.jpg)"}}>
      <div className='absolute inset-0 bg-black bg-opacity-60'></div>
      <div className='relative z-10 flex flex-col h-full'>
        {/* Navbar at the top */}
        <Navbar />
        
        {/* Home Content */}
        <div className='text-white my-a text-center flex flex-col justify-center h-full px-4 sm:px-6 md:px-10 lg:px-16'>
          {/* Heading */}
          <h3 className='text-[20px] sm:text-[24px] lg:text-[32px] font-extrabold mb-4 sm:mb-6'>
            Ready to Master Next.js? Take the 100 MCQ Challenge!
          </h3>
          
          {/* Paragraph */}
          <p className='text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[22px] mx-auto mb-4 sm:mb-6 max-w-xl font-serif'>
            Test your skills with our 100-question Next.js exam. Challenge yourself and elevate your knowledge to the next level!
        
            Whether you are a beginner or an expert, this exam is designed to push your limits and track your progress.
          </p>

          {/* Button */}
          <div className='flex justify-center mt-6 sm:mt-8'>
            <span className='bg-yellow-400 text-black font-bold text-[18px] sm:text-[22px] md:text-[28px] xl:text-[32px] py-1 px-6 rounded-full cursor-pointer transition duration-300 hover:bg-yellow-500 hover:scale-105'>
        <Link href={"/Test"}>    Start Now!</Link>  
            </span>
          </div>
               {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
          <Link href="https://chat.whatsapp.com/GiG8Bm3PpwO2zPlL1VWuL2" target="_blank">
            <Button className="bg-green-500 hover:bg-green-600 text-white m-auto flex items-center gap-2 px-6 py-3 rounded-lg text-lg">
              <FaWhatsapp className="text-xl" /> Join Our WhatsApp Community
            </Button>
          </Link>
          <Link href="https://www.youtube.com/@murshidhamza345" target="_blank">
            <Button className="bg-red-500 hover:bg-red-600 text-white m-auto flex items-center gap-2 px-6 py-3 rounded-lg text-lg">
              <FaYoutube className="text-xl" /> Test Guide on YouTube
            </Button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}
