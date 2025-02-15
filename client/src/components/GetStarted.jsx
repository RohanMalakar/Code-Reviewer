import {Link} from "react-router-dom"

export default function GetStarted() {
  return (
    <section className="py-16 bg-black text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white navy-blue:text-gray-100">
        Ready to improve your code?
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 navy-blue:text-gray-200 mb-8">
        Start using CodeReviewer today and take your coding skills to the next level.
      </p>
      <Link
        to="/get-started"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600 navy-blue:bg-blue-400 navy-blue:hover:bg-blue-500"
      >
        Get Started
      </Link>
    </section>
  )
}

