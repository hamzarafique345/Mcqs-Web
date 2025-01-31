import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import Navbar from "@/components/navbar";

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-cover bg-center" style={{ backgroundImage: "url(/first.jpg)" }}>
      {/* Dark Overlay for Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Navbar */}
      <div className="relative z-10 w-full">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full px-6 text-center text-white">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">About Us</h1>
        {/* <p className="text-lg md:text-xl max-w-3xl">
          We, <span className="font-semibold">Hamza Rafique</span> and{" "}
          <span className="font-semibold">Ali Syed</span>, built this <strong>MCQs-based application</strong> to help students 
          revise and strengthen their Next.js skills.  
          This project is powered by <span className="font-bold">Sanity</span> as a backend and <span className="font-bold">Clerk</span> for authentication.
        </p> */}
        <p className="text-lg md:text-xl max-w-3xl">
  We, <span className="font-semibold text-yellow-500">Syed Ali</span> and{" "}
  <span className="font-semibold text-yellow-500">Hamza Rafique</span>, built this <strong>MCQs-based application</strong> to help students 
  revise and strengthen their Next.js skills.  
  This project is powered by <span className="font-bold">Sanity</span> as a backend and <span className="font-bold">Clerk</span> for authentication.  
  A special thanks to <span className="font-semibold text-yellow-500">Kamran Tessori</span> for providing us with this amazing course, 
  and to our <span className="font-semibold text-yellow-500">fantastic teachers</span> for their incredible guidance and support.
</p>


        {/* Images Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 border-4 border-white">
            <Image src="/two.jpg" alt="Hamza Rafique" layout="fill" objectFit="cover" />
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 border-4 border-white">
            <Image src="/one.jpeg" alt="Ali Syed" layout="fill" objectFit="cover" />
          </div>
        </div>

        {/* Inspirational Message */}
        <div className="mt-10">
          <h2 className="text-3xl md:text-4xl font-bold">If We Can Do It, So Can You!</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mt-4">
            Despite coming from a medical background, we transitioned into IT and built this project. 
            If we can do it, you can too!
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
          <Link href="https://chat.whatsapp.com/GiG8Bm3PpwO2zPlL1VWuL2" target="_blank">
            <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 px-6 py-3 rounded-lg text-lg">
              <FaWhatsapp className="text-xl" /> Join Our WhatsApp Community
            </Button>
          </Link>
          <Link href="https://www.youtube.com/@murshidhamza345" target="_blank">
            <Button className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2 px-6 py-3 rounded-lg text-lg">
              <FaYoutube className="text-xl" /> Watch on YouTube
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
