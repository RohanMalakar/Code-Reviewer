import {Link }from "react-router-dom"
import { Code, Github} from "lucide-react"
import { useState, useEffect } from "react"

 function Navbar() {

  return (
    <nav className="bg-white dark:bg-gray-800 navy-blue:bg-navy-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Code size={24} className="text-blue-600 dark:text-blue-400 navy-blue:text-blue-300" />
            <span className="text-xl font-bold text-gray-800 dark:text-white navy-blue:text-gray-100">
              CodeReviewer
            </span>
          </Link>
          <div className="space-x-4 flex items-center">
            <Link
              to="#about"
              className="text-gray-600 dark:text-gray-300 navy-blue:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 navy-blue:hover:text-blue-300"
            >
              About
            </Link>
            <Link
              to="#features"
              className="text-gray-600 dark:text-gray-300 navy-blue:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 navy-blue:hover:text-blue-300"
            >
              Features
            </Link>
            <Link
              to="https://github.com/RohanMalakar"
              className="text-gray-600 dark:text-gray-300 navy-blue:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 navy-blue:hover:text-blue-300"
            >
              <Github size={20} className="inline mr-1" />
              GitHub
            </Link>
            <Link
              to="/get-started"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 navy-blue:bg-blue-400 navy-blue:hover:bg-blue-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
