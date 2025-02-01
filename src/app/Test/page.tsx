
// "use client";
// import { useState, useEffect } from "react";
// import { client } from "@/sanity/lib/client";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Navbar from "@/components/navbar";

// const TestPage = () => {
//   const [mcqs, setMcqs] = useState<{ _id: string; question: string; options: string[]; correctAnswer: string }[]>([]);
//   const [answers, setAnswers] = useState<{ [key: string]: string }>({});
//   const [testNumber, setTestNumber] = useState<string>("");
//   const [name, setName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [profilePicture, setProfilePicture] = useState<string>("");
//   const [hasSubmitted, setHasSubmitted] = useState(false);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [showResults, setShowResults] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(40 * 60); // 40 minutes in seconds
//   const [correctAnswersCount, setCorrectAnswersCount] = useState(0); // Correct answers state
//   const questionsPerPage = 10; // Number of questions per page

//   useEffect(() => {
//     const fetchMCQs = async () => {
//       try {
//         const data = await client.fetch('*[_type == "mcq"]');
//         if (data) {
//           setMcqs(data);
//         }
//       } catch (error) {
//         console.error("Error fetching MCQs:", error);
//       }
//     };
//     fetchMCQs();

//     // Timer setup
//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => (prevTime <= 1 ? 0 : prevTime - 1));
//     }, 1000);

//     return () => clearInterval(timer); // Cleanup timer on unmount
//   }, []); // Ensure this effect runs only once

//   const handleAnswerChange = (questionId: string, answer: string) => {
//     setAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [questionId]: answer,
//     }));
//   };

//   const handlePageChange = (direction: "next" | "prev") => {
//     if (direction === "next" && currentPage < Math.ceil(mcqs.length / questionsPerPage) - 1) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     } else if (direction === "prev" && currentPage > 0) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   const submitUserAnswers = async (userDetails: { name: string; email: string; profilePicture: string; testNumber: string }, answers: { [key: string]: string }) => {
//     const doc = {
//       _type: 'userAnswer',
//       name: userDetails.name,
//       email: userDetails.email,
//       profilePicture: userDetails.profilePicture,
//       score: correctAnswersCount,
//       testNumber: userDetails.testNumber,
//       answers: Object.values(answers),
//     };

//     try {
//       await client.create(doc);
//       toast.success("User answers submitted to Sanity!");
//     } catch (error) {
//       console.error("Submission error:", error);
//       toast.error("Failed to submit user answers to Sanity.");
//     }
//   };

//   const handleSubmit = () => {
//     if (name && email && profilePicture && testNumber && Object.keys(answers).length === mcqs.length) {
//       // Calculate score here
//       let score = 0;
//       mcqs.forEach((mcq) => {
//         if (answers[mcq._id] === mcq.correctAnswer) {
//           score += 1;
//         }
//       });
//       setCorrectAnswersCount(score); // Set the score

//       const userDetails = { name, email, profilePicture, testNumber };
//       submitUserAnswers(userDetails, answers);
//       setHasSubmitted(true);
//       setShowResults(true);
//       toast.success("Test submitted successfully!");
//     } else {
//       toast.error("Please fill out all details and answer all questions.");
//     }
//   };

//   const startIndex = currentPage * questionsPerPage;
//   const selectedQuestions = mcqs.slice(startIndex, startIndex + questionsPerPage);

//   const formatTime = (seconds: number) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
//   };

//   return (
//     <div className="relative bg-center bg-cover min-h-screen" style={{ backgroundImage: "url(/first.jpg)" }}>
//       <div className="absolute inset-0 bg-black bg-opacity-65"></div>
//       <div className="relative z-10 flex flex-col h-full">
//         <Navbar />
//         <div className="text-white text-center flex flex-col justify-center h-full px-4 sm:px-6 md:px-10 lg:px-16">
//           <h3 className="text-[20px] sm:text-[24px] lg:text-[32px] font-extrabold mb-4 sm:mb-6">Ready for the Test?</h3>

//           <div className="mb-6">
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="bg-green-500 border font-bold border-white text-black px-4 py-2 rounded-full ml-4 placeholder:text-white placeholder:font-bold"
//               placeholder="Enter your Name"
//             />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="bg-green-500 border font-bold border-white text-black px-4 py-2 rounded-full ml-4 mt-4 placeholder:text-white placeholder:font-bold"
//               placeholder="Enter a valid Email"
//             />
//             <input
//               type="url"
//               value={profilePicture}
//               onChange={(e) => setProfilePicture(e.target.value)}
//               className="bg-green-500 text-black border font-bold border-white px-4 py-2 rounded-full ml-4 mt-4 placeholder:text-white placeholder:font-bold"
//               placeholder="LinkedIn Profile URL"
//             />
//           </div>

//           <div className="mb-6">
//             <input
//               type="text"
//               value={testNumber}
//               onChange={(e) => setTestNumber(e.target.value)}
//               className="bg-green-500 border border-white font-bold text-black px-4 py-2 rounded-full ml-4 placeholder:text-white placeholder:font-bold"
//               placeholder="Enter Phone Number"
//             />
//           </div>

//           {selectedQuestions.length > 0 ? (
//             <div className="space-y-6 max-w-3xl mx-auto">
//               {selectedQuestions.map((mcq, index) => (
//                 <div key={mcq._id} className="text-left">
//                   <h4 className="text-xl font-semibold mb-3">
//                     <span className="text-yellow-400">{startIndex + index + 1}: </span>{mcq.question}
//                   </h4>
//                   <div className="space-y-2">
//                     {mcq.options.map((option: string, optionIndex: number) => (
//                       <label key={optionIndex} className="flex items-center space-x-2 hover:bg-yellow-500">
//                         <input
//                           type="radio"
//                           name={mcq._id}
//                           value={option}
//                           onChange={() => handleAnswerChange(mcq._id, option)}
//                           checked={answers[mcq._id] === option}
//                           className="form-radio text-yellow-400"
//                           disabled={hasSubmitted}
//                         />
//                         <span>
//                           {option} 
//                           {hasSubmitted && (
//                             <span className={answers[mcq._id] === option ? (answers[mcq._id] === mcq.correctAnswer ? "text-green-500" : "text-red-500") : ""}>
//                               {answers[mcq._id] === option ? (answers[mcq._id] === mcq.correctAnswer ? "    ✅Correct" : "   ❌Incorrect") : ""}
//                             </span>
//                           )}
//                         </span>
//                       </label>
//                     ))}
//                   </div>
//                   {hasSubmitted && (
//                     <div className="mt-2 text-lg">
//                       <span className="text-green-400">Correct Answer:  <strong className="text-green-500 "> ( {mcq.correctAnswer} )</strong></span>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>Loading...</p>
//           )}

//           <div className="flex justify-center items-center gap-6 mt-6">
//             <button
//               onClick={() => handlePageChange("prev")}
//               className="bg-yellow-400 text-black px-4 py-2 rounded-full"
//               disabled={currentPage === 0}
//             >
//               Prev
//             </button>
//             <button
//               onClick={() => handlePageChange("next")}
//               className="bg-yellow-400 text-black px-4 py-2 rounded-full"
//               disabled={currentPage === Math.ceil(mcqs.length / questionsPerPage) - 1}
//             >
//               Next
//             </button>
//           </div>

//           <div className="mt-6 text-center">
//             <span className="text-white font-bold">{formatTime(timeLeft)}</span>
//           </div>

//           <div className="mt-6 text-center">
//             <button
//               onClick={handleSubmit}
//               className="bg-yellow-400 text-black px-4 py-2 rounded-full"
//               disabled={hasSubmitted}
//             >
//               Submit Test
//             </button>
//           </div>

//           {showResults && (
//             <div className="mt-6">
//               <h4 className="text-white text-xl font-semibold">Your Score: {correctAnswersCount}/{mcqs.length}</h4>
//               <p className="text-white">Thanks for completing the test!</p>
//             </div>
//           )}

//           <ToastContainer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestPage;
"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/navbar";

const TestPage = () => {
  const [mcqs, setMcqs] = useState<{ _id: string; question: string; options: string[]; correctAnswer: string }[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [profilePicture, setProfilePicture] = useState<string>("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 40 minutes in seconds
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0); // Correct answers state
  const questionsPerPage = 10; // Number of questions per page

  useEffect(() => {
    const fetchMCQs = async () => {
      try {
        const data = await client.fetch('*[_type == "mcq"]');
        if (data) {
          setMcqs(data);
        }
      } catch (error) {
        console.error("Error fetching MCQs:", error);
      }
    };
    fetchMCQs();

    // Timer setup
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime <= 1 ? 0 : prevTime - 1));
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []); // Ensure this effect runs only once

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handlePageChange = (direction: "next" | "prev") => {
    if (direction === "next" && currentPage < Math.ceil(mcqs.length / questionsPerPage) - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (direction === "prev" && currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const submitUserAnswers = async (userDetails: { name: string; email: string; profilePicture: string }, answers: { [key: string]: string }) => {
    const doc = {
      _type: 'userAnswer',
      name: userDetails.name,
      email: userDetails.email,
      profilePicture: userDetails.profilePicture,
      score: correctAnswersCount,
      answers: Object.values(answers),
    };

    try {
      await client.create(doc);
      toast.success("User answers submitted to Sanity!");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to submit user answers to Sanity.");
    }
  };

  const handleSubmit = () => {
    if (name && email && profilePicture && Object.keys(answers).length === mcqs.length) {
      // Calculate score here
      let score = 0;
      mcqs.forEach((mcq) => {
        if (answers[mcq._id] === mcq.correctAnswer) {
          score += 1;
        }
      });
      setCorrectAnswersCount(score); // Set the score

      const userDetails = { name, email, profilePicture };
      submitUserAnswers(userDetails, answers);
      setHasSubmitted(true);
      setShowResults(true);
      toast.success("Test submitted successfully!");

      // Display motivational message based on score
      const motivationMessage = getMotivationalMessage(score);
      toast.info(motivationMessage);
    } else {
      toast.error("Please fill out all details and answer all questions.");
    }
  };

  const getMotivationalMessage = (score: number) => {
    if (score === mcqs.length) {
      return "Amazing! You aced the test! Keep up the great work!";
    } else if (score >= mcqs.length * 0.8) {
      return "Great job! You're almost there, keep pushing!";
    } else if (score >= mcqs.length * 0.5) {
      return "Good effort! You’re doing well, keep going!";
    } else {
      return "Don't worry! Keep practicing, you'll get better!";
    }
  };

  const startIndex = currentPage * questionsPerPage;
  const selectedQuestions = mcqs.slice(startIndex, startIndex + questionsPerPage);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="relative bg-center  bg-cover min-h-screen pb-10" style={{ backgroundImage: "url(/first.jpg)" }}>
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>
      <div className="relative z-10 flex flex-col h-full">
        <Navbar />
        <div className="text-white text-center pt-6 flex flex-col justify-center h-full px-4 sm:px-6 md:px-10 lg:px-16">
          <h3 className="text-[20px] sm:text-[24px] lg:text-[32px] font-extrabold mb-4 sm:mb-6">Ready for the Test?</h3>

          <div className="mb-6">
          <h1 className="text-base sm:text-lg lg:text-base font-semibold text-center text-yellow-400 py-4">
  Please enter your Name, Gmail, and LinkedIn Profile URL.  <br/>
  The submit button will remain disabled until all fields are filled correctly.
</h1>


            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gradient-to-br bg-yellow-400 to-cyan-500 border font-bold border-white text-black px-4 py-2 rounded-full ml-4 placeholder:text-white placeholder:font-bold"
              placeholder="Enter your Name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-yellow-400 border font-bold border-white text-black px-4 py-2 rounded-full ml-4 mt-4 placeholder:text-white placeholder:font-bold"
              placeholder="Enter a valid Email"
            />
            <input
              type="url"
              value={profilePicture}
              onChange={(e) => setProfilePicture(e.target.value)}
              className="bg-yellow-500 text-black border font-bold border-white px-4 py-2 rounded-full ml-4 mt-4 placeholder:text-white placeholder:font-bold"
              placeholder="LinkedIn Profile URL"
            />
          </div>

          {selectedQuestions.length > 0 ? (
            <div className="space-y-6 max-w-3xl mx-auto mt-6">
  <h1 className="text-xl sm:text-lg lg:text-2xl font-semibold text-center text-yellow-400 py-4">
  You Have 45 Minutes to Solve All 100 MCQs! Your Result Will Appear Below After Completion.
</h1>


              {selectedQuestions.map((mcq, index) => (
                <div key={mcq._id} className="text-left">
                  <h4 className="text-xl font-semibold mb-3">
                    <span className="text-yellow-500">{startIndex + index + 1}: </span>{mcq.question}
                  </h4>
                  <div className="space-y-2">
                    {mcq.options.map((option: string, optionIndex: number) => (
                      <label key={optionIndex} className="flex items-center space-x-2 hover:bg-yellow-500">
                        <input
                          type="radio"
                          name={mcq._id}
                          value={option}
                          onChange={() => handleAnswerChange(mcq._id, option)}
                          checked={answers[mcq._id] === option}
                          className="form-radio text-yellow-400"
                          disabled={hasSubmitted}
                        />
                        <span>
                          {option} 
                          {hasSubmitted && (
                            <span className={answers[mcq._id] === option ? (answers[mcq._id] === mcq.correctAnswer ? "text-green-500" : "text-red-500") : ""}>
                              {answers[mcq._id] === option ? (answers[mcq._id] === mcq.correctAnswer ? "    ✅Correct" : "   ❌Incorrect") : "" }
                            </span>
                          )}
                        </span>
                      </label>
                    ))}
                  </div>
                  {hasSubmitted && (
                    <div className="mt-2 text-lg">
                      <span className="text-green-400">Correct Answer:  <strong className="text-green-500 "> ( {mcq.correctAnswer} )</strong></span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}

          <div className="flex justify-center items-center gap-6 mt-6">
            <button
              onClick={() => handlePageChange("prev")}
              className="bg-yellow-400 text-black px-4 py-2 rounded-full transition-all duration-300 hover:bg-yellow-500 hover:text-white transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              disabled={currentPage === 0}
            >
              Prev
            </button>
            <button
              onClick={() => handlePageChange("next")}
              className="bg-yellow-400 text-black px-4 py-2 rounded-full transition-all duration-300 hover:bg-yellow-500 hover:text-white transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              disabled={currentPage === Math.ceil(mcqs.length / questionsPerPage) - 1}
            >
              Next
            </button>
          </div>

          <div className="mt-6 text-lg">
            <p>Time Left: {formatTime(timeLeft)}</p>
          </div>

          {showResults && (
            <div className="mt-6 text-lg text-center">
              <p>
                You scored: <strong>{correctAnswersCount}</strong> out of{" "}
                <strong>{mcqs.length}</strong>
              </p>
            </div>
          )}

          <div className="mt-6 text-center">
            {!hasSubmitted && (
              <button
                onClick={handleSubmit}
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-500"
              >
                Submit Test
              </button>
            )}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default TestPage;
