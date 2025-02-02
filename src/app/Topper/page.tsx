
// "use client";
// import { useEffect, useState } from "react";
// import { getMCQs, getUserAnswers } from "@/sanity/schemaTypes/query";
// import { calculateScore } from "@/sanity/schemaTypes/cal";
// import Link from "next/link";
// import Navbar from "@/components/navbar";

// // Define types for user and topper data
// interface User {
//   name: string;
//   score: number;
//   profilePicture: string;
//   answers: any;
// }

// export default function Toppers() {
//   const [toppers, setToppers] = useState<User[]>([]);
//   const [loading, setLoading] = useState<boolean>(true); // Track loading state

//   useEffect(() => {
//     const fetchData = async (): Promise<void> => {
//       setLoading(true); // Set loading to true before fetching
//       try {
//         const mcqs = await getMCQs();
//         const userAnswers = await getUserAnswers();

//         const results = userAnswers.map((user: any) => ({
//           ...user,
//           score: calculateScore(user.answers, mcqs),
//         }));

//         // Sort users by score in descending order and take top 3
//         const sortedToppers = results
//           .sort((a: any, b: any) => b.score - a.score)
//           .slice(0, 3);
//         setToppers(sortedToppers);
//       } catch (error) {
//         // Handle error without console.log
//         console.error("Error fetching data:", error); 
//       } finally {
//         setLoading(false); // Set loading to false once fetching is complete
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures this effect runs once on mount

//   return (
//     <div className="relative bg-center bg-cover py-1" style={{ backgroundImage: "url(/first.jpg)" }}>
//       <div className="absolute inset-0 bg-black bg-opacity-75"></div>
//       <div className="relative z-10 flex flex-col">
//         <Navbar />
//         <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mt-8 mb-6">
//           Top 3 Performers 🏆
//         </h1>

//         {/* Loading Spinner */}
//         {loading ? (
//           <div className="flex justify-center items-center h-96"> {/* Fixed height for the loading container */}
//             <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-t-4 border-white rounded-full" role="status">
//               <span className="sr-only">Loading...</span>
//             </div>
//           </div>
//         ) : (
//           <>
//             {/* First Position */}
//             <div className="flex justify-center mb-12">
//               {toppers[0] && (
//                 <div className="p-8 rounded-lg shadow-sm w-80 sm:w-96 text-center transform scale-105 hover:scale-110 transition-transform duration-300 shadow-white hover:shadow-3xl hover:shadow-white">
//                   <h2 className="text-4xl font-black text-yellow-400">{toppers[0].name}</h2>
//                   <p className="text-xl mt-2 font-bold text-green-600">Score: {toppers[0].score}</p>
//                   <p className="text-lg mt-2 font-semibold text-blue-600">Position: 1st 🥇</p>
//                   <div className="mt-4 flex justify-center">
//                     <Link
//                       href={toppers[0].profilePicture.startsWith("http") ? toppers[0].profilePicture : `https://${toppers[0].profilePicture}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex justify-center gap-2 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
//                     >
//                       View Profile
//                       <svg
//                         className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
//                         viewBox="0 0 16 19"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
//                           className="fill-gray-800 group-hover:fill-gray-800"
//                         ></path>
//                       </svg>
//                     </Link>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Second and Third Positions */}
//             <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 px-4 sm:px-0">
//               {toppers.slice(1, 3).map((user, index) => (
//                 <div
//                   key={index}
//                   className="p-6 rounded-lg shadow-sm text-center w-full sm:w-72 transform hover:scale-105 transition-transform duration-300 shadow-white hover:shadow-2xl hover:shadow-white"
//                 >
//                   <h2 className="text-2xl font-bold text-yellow-400">{user.name}</h2>
//                   <p className="text-xl mt-2 font-bold text-green-600">Score: {user.score}</p>
//                   <p className="text-lg mt-2 font-semibold text-blue-600">Position: <strong className="text-yellow-400"> {index + 2} {index === 0 ? "🥈" : "🥉"}</strong></p>
//                   <div className="mt-4 flex justify-center">
//                     <Link
//                       href={user.profilePicture.startsWith("http") ? user.profilePicture : `https://${user.profilePicture}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex justify-center gap-2 items-center shadow-xl text-base bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border-2 rounded-full group"
//                     >
//                       View Profile
//                       <svg
//                         className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
//                         viewBox="0 0 16 19"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
//                           className="fill-gray-800 group-hover:fill-gray-800"
//                         ></path>
//                       </svg>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { getMCQs, getUserAnswers } from "@/sanity/schemaTypes/query";
import { calculateScore } from "@/sanity/schemaTypes/cal";
import Link from "next/link";
import Navbar from "@/components/navbar";

// Define types for MCQ, Answer, and User
interface MCQ {
  id: string;
  correctAnswer: string;
}

interface UserAnswer {
  name: string;
  profilePicture: string;
  answers: string[];
}

interface User {
  name: string;
  score: number;
  profilePicture: string;
}

export default function Toppers() {
  const [toppers, setToppers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true);
      try {
        const mcqs: MCQ[] = await getMCQs();
        const userAnswers: UserAnswer[] = await getUserAnswers();

        const results = userAnswers.map((user) => ({
          ...user,
          score: calculateScore(user.answers, mcqs),
        }));

        // Sort users by score in descending order and take top 3
        const sortedToppers = results
          .sort((a, b) => b.score - a.score)
          .slice(0, 3);
        setToppers(sortedToppers);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative bg-center bg-cover py-1" style={{ backgroundImage: "url(/first.jpg)" }}>
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mt-8 mb-6">Top 3 Performers 🏆</h1>

        {loading ? (
          <div className="flex justify-center items-center h-96">
            <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-t-4 border-white rounded-full" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {/* First Position */}
            <div className="flex justify-center mb-12">
              {toppers[0] && (
                <div className="p-8 rounded-lg shadow-sm w-80 sm:w-96 text-center transform scale-105 hover:scale-110 transition-transform duration-300 shadow-white hover:shadow-3xl hover:shadow-white">
                  <h2 className="text-4xl font-black text-yellow-400">{toppers[0].name}</h2>
                  <p className="text-xl mt-2 font-bold text-green-600">Score: {toppers[0].score}</p>
                  <p className="text-lg mt-2 font-semibold text-blue-600">Position: 1st 🥇</p>
                  <div className="mt-4 flex justify-center">
                    <Link
                      href={toppers[0].profilePicture.startsWith("http") ? toppers[0].profilePicture : `https://${toppers[0].profilePicture}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center gap-2 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                    >
                      View Profile
                      <svg
                        className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                          className="fill-gray-800 group-hover:fill-gray-800"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Second and Third Positions */}
            <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 px-4 sm:px-0">
              {toppers.slice(1, 3).map((user, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg shadow-sm text-center w-full sm:w-72 transform hover:scale-105 transition-transform duration-300 shadow-white hover:shadow-2xl hover:shadow-white"
                >
                  <h2 className="text-2xl font-bold text-yellow-400">{user.name}</h2>
                  <p className="text-xl mt-2 font-bold text-green-600">Score: {user.score}</p>
                  <p className="text-lg mt-2 font-semibold text-blue-600">
                    Position: <strong className="text-yellow-400"> {index + 2} {index === 0 ? "🥈" : "🥉"}</strong>
                  </p>
                  <div className="mt-4 flex justify-center">
                    <Link
                      href={user.profilePicture.startsWith("http") ? user.profilePicture : `https://${user.profilePicture}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center gap-2 items-center shadow-xl text-base bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border-2 rounded-full group"
                    >
                      View Profile
                      <svg
                        className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                          className="fill-gray-800 group-hover:fill-gray-800"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
