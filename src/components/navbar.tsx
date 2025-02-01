
// import React from 'react';
// import { FaTwitter, FaFacebook, FaInstagram, FaYoutube , FaWhatsapp } from 'react-icons/fa';
// import Link from 'next/link';
// import {
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
//   SignUpButton,
// } from '@clerk/nextjs';

// export default function Navbar() {
//   return (
//     <div className="text-white flex flex-col">
//       {/* Logo, Search, Social Section */}
//       <div className="flex justify-evenly items-center mt-2 mb- mx-4">
//         {/* Logo */}
//         <div>
//           <h1 className="text-center mt-1 text-[9px] font-semibold text-white leading-4 es:text-[10px] sm:text-[15px] scale-105">
//          <Link href="https://www.linkedin.com/in/hamza-rafiq-5120752b8/">   <strong className="text-yellow-400 font-black">Ha</strong>mza{' '} </Link>
//             <strong className="text-yellow-400 font-black">&</strong>{' '} 
//             <strong className="text-yellow-400 font-black">A</strong>li{' '} < br />
//             <strong className="text-sky-200">Test </strong> 
//             <strong className="text-sky-200">Guide</strong>
//           </h1>
//         </div>

//         {/* Search Input */}
//         <div>
//           <input
//             type="text"
//             className="rounded-full text-black border-2 h-6 sm:h-7 border-slate-500 es:h-6 placeholder:text-[10px] placeholder:pl-3 w-28 es:w-48 sm:w-56 lg:w-80 lg:h-8"
//             placeholder="Search your option"
//           />
//         </div>

//         {/* Social Icons */}
//         <div className="flex mt-1 gap-2 es:gap-1 sm:gap-4">
//           <FaFacebook href='https://www.facebook.com/hamza.rafique.5836711/' className="text-blue-600 hover:text-blue-700 w-4 h-4 es:w-5 es:h-5 sm:h-6 sm:w-6 hover:scale-110" />
//           <FaWhatsapp href='https://chat.whatsapp.com/FEc6rTxLJ0T4TxQw9VXr7G' className="text-green-500 hover:text-green-600 w-4 h-4 es:w-5 es:h-5 sm:h-6 sm:w-6 hover:scale-110" />
//           <FaInstagram  href="https://www.instagram.com/hamza.rafique.5836711/?hl=en" className="text-pink-500 hover:text-pink-600 w-4 h-4 es:w-5 es:h-5 sm:h-6 sm:w-6 hover:scale-110" />
//           <FaYoutube href='https://www.youtube.com/@murshidhamza345' className="text-red-500 hover:text-red-600 w-4 h-4 es:w-5 es:h-5 sm:h-6 sm:w-6 hover:scale-110" />
//         </div>
//       </div>

//       <div className="h-[1px] bg-slate-300"></div>

//       {/* Pages Nav Buttons */}
//       <div className="flex justify-center mt-2">
//         <ul className="flex space-x-1 text-[11px] font-medium es:font-medium es:text-[15px] sm:text-[18px] sm:font-medium md:space-x-6">
//           <Link
//             href="#"
//             className="pointer hover:scale-110 transition-transform duration-500"
//           >
//             Home
//           </Link>
//           <Link
//             href="#"
//             className="pointer hover:scale-110 transition-transform duration-500"
//           >
//             About me
//           </Link>
//           <Link
//       href="/Test"
//       className="pointer hover:scale-110 transition-transform duration-500"
//     >
//       Exam
//     </Link>
//     <Link
//       href="/Result"
//       className="pointer hover:scale-110 transition-transform duration-500"
//     >
//       Results
//     </Link>
//           <Link
//             href="https://nextjs.org/docs"
//             className="pointer hover:scale-110 transition-transform duration-500"
//           >
//             Resources
//           </Link>
//           <Link
//             href="/Topper"
//             className="pointer hover:scale-110 transition-transform duration-500"
//           >
//             Topper
//           </Link>
//         </ul>
//       </div>

//       {/* Authentication Section */}
//       <div className="flex justify-center items-center mt-3 space-x-4">
//         <SignedOut>
//           <div className=" text-white border py-1 px-5 rounded-full hover:bg-blue-500 transition duration-300 flex items-center justify-center space-x-2">
//             <SignInButton>Sign In</SignInButton>
//           </div>
//           <div className=" text-white border py-1 px-5 rounded-full hover:bg-green-500 transition duration-300 flex items-center justify-center space-x-2">
//             <SignUpButton>Sign Up</SignUpButton>
//           </div>
//         </SignedOut>

//         <SignedIn>
//           <UserButton />
//         </SignedIn>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import {  FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton, SignUpButton } from '@clerk/nextjs';

export default function Navbar() { // Get the user data from Clerk

  return (
    <div className="text-white flex flex-col">
      {/* Logo, Search, Social Section */}
      <div className="flex justify-evenly items-center mt-2 mb- mx-4">
        {/* Logo */}
        <div>
          <h1 className="text-center mt-1 text-[9px] font-semibold text-white leading-4 es:text-[10px] sm:text-[15px] scale-105">
            <Link href="https://www.linkedin.com/in/hamza-rafiq-5120752b8/">
              <strong className="text-yellow-400 font-black">Ha</strong>mza{' '}
            </Link>
            <strong className="text-yellow-400 font-black">&</strong>{' '}
            <Link href="https://www.linkedin.com/in/aleee-bukhari-170545317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <strong className="text-yellow-400 font-black">Syed</strong> Ali{' '}</Link>
            <br />
            <strong className="text-sky-200">Test </strong>
            <strong className="text-sky-200">Guide</strong>
          </h1>
        </div>

        {/* Search Input */}
        <div>
          <input
            type="text"
            className="rounded-full text-black border-2 h-6 sm:h-7 border-slate-500 es:h-6 placeholder:text-[10px] placeholder:pl-3 w-28 es:w-48 sm:w-56 lg:w-80 lg:h-8"
            placeholder="Search your option"
          />
        </div>

        {/* Social Icons */}
        <div className="flex mt-1 gap-2 es:gap-1 sm:gap-4">
          <Link  href="https://www.facebook.com/hamza.rafique.5836711/">
          <FaFacebook
          
            className="text-blue-600 hover:text-blue-700 w-4 h-4 es:w-5 es:h-5 sm:h-6 sm:w-6 hover:scale-110"
          /></Link>
          <Link           href="https://chat.whatsapp.com/FEc6rTxLJ0T4TxQw9VXr7G">
          <FaWhatsapp
 
            className="text-green-500 hover:text-green-600 w-4 h-4 es:w-5 es:h-5 sm:h-6 sm:w-6 hover:scale-110"
          /></Link>
          <Link   href="https://www.instagram.com/hamza.rafique.5836711/?hl=en">
          <FaInstagram
         
            className="text-pink-500 hover:text-pink-600 w-4 h-4 es:w-5 es:h-5 sm:h-6 sm:w-6 hover:scale-110"
          /></Link>
          <Link  href="https://www.youtube.com/@murshidhamza345">
          <FaYoutube
          
            className="text-red-500 hover:text-red-600 w-4 h-4 es:w-5 es:h-5 sm:h-6 sm:w-6 hover:scale-110"
          /></Link>
        </div>
      </div>

      <div className="h-[1px] bg-slate-300"></div>

      {/* Pages Nav Buttons */}
      <div className="flex justify-center mt-2">
        <ul className="flex space-x-1 text-[11px] font-medium es:font-medium es:text-[15px] sm:text-[18px] sm:font-medium md:space-x-6">
          <Link href="/" className="pointer hover:scale-110 transition-transform duration-500">
            Home
          </Link>
          <Link href="/About" className="pointer hover:scale-110 transition-transform duration-500">
            About me
          </Link>
          <Link href="/Test" className="pointer hover:scale-110 transition-transform duration-500">
           Exam
          </Link>
          <Link href="https://nextjs.org/docs" className="pointer hover:scale-110 transition-transform duration-500">
            Resources
          </Link>
          <Link href="/" className="pointer hover:scale-110 transition-transform duration-500">
            Topper
          </Link>
        </ul>
      </div>

      {/* Authentication Section */}
      <div className="flex justify-center items-center mt-3 space-x-4">
        <SignedOut>
          <div className=" text-white border py-1 px-5 rounded-full hover:bg-blue-500 transition duration-300 flex items-center justify-center space-x-2">
            <SignInButton>Sign In</SignInButton>
          </div>
          <div className=" text-white border py-1 px-5 rounded-full hover:bg-green-500 transition duration-300 flex items-center justify-center space-x-2">
            <SignUpButton>Sign Up</SignUpButton>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center space-x-2 text-white">
            {/* Display the user's name */}
            <span className="text-sm">Welcome,User!</span>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </div>
  );
}
