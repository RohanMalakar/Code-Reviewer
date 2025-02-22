import {Link} from "react-router-dom"
import ai from "../assets/ai.png"

export default function GetStarted() {
  return (
    <div className="flex bg-gradient-to-r from-[#120744] via-[#7637be] to-[#319ae2] flex-col lg:flex-row items-center  ">
        <section className="lg:py-16 py-16 flex flex-col lg:p-32 items-start px-6 mt-10 ">
          <h2 className="lg:text-6xl text-3xl font-bold mb-4 text-gray-800 dark:text-white navy-blue:text-gray-100">
            Ready to improve your code  with AI ?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 navy-blue:text-gray-200 mb-8">
            Start using CodeReviewer today and take your coding skills to the next level.
          </p>
          <Link
            to="/get-started"
            className="bg-blue-600 hover:scale-110 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600 navy-blue:bg-blue-400 navy-blue:hover:bg-blue-500"
          >
            Get Started
          </Link>
        </section>
        <div className=" lg:h-[100vh] h-[50vh] lg:pt-20 ">
           <img className="h-full " src={ai} alt="ai-image" />
        </div>
        
    </div>
  )
}

