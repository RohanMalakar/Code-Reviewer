import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/themes/prism-tomorrow.css"; // Choose a theme
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markup"; // For HTML
import "prismjs/components/prism-java";
import "prismjs/components/prism-python";
import LoadingBtn from './LoadingBtn';


function CodeEditor({ code, setCode,language, setLanguage }) {
  
  const highlightCode = (code, language) => {
    language = language.toLowerCase();
    if (!Prism.languages[language]) {
      console.warn(`Prism.js: Unsupported language '${language}', using plain text.`);
      return code; // Fallback to plain text if language is unsupported
    }
    return Prism.highlight(code, Prism.languages[language], language);
  };

  return (
    <div className='flex relative bg-gray-900 flex-col text-amber-50 justify-center items-center h-screen w-full'>
      <div className='flex relative  w-full bg-amber-700 h-20 items-center justify-center'>
        <form class="absolute top-4 right-5">
          <select 
          id="language" 
          name="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)} 
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="c">c++</option>
            <option value="javascript">Javascript</option>
            <option value="html">HTML</option>
            <option value="jsx">Jsx</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
          </select>
        </form>
      </div>
      <div className='text-4xl p-5 h-full w-full  text-white border-none outline-none'>
        <Editor
          value={code}
          onValueChange={(newCode) => setCode(newCode)}
          highlight={(code) => highlightCode(code, language)}
          padding={10}
          className="text-lg font-mono h-full w-full  text-white border-none outline-none"
        />
      </div>

      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center absolute bottom-5 right-1">
          review code
      </button>
    </div>
  )
}

export default CodeEditor;