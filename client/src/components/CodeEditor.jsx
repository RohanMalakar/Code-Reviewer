import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/themes/prism-tomorrow.css"; // Choose a theme
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-java";
import "prismjs/components/prism-python";
import LoadingBtn from './LoadingBtn';


function CodeEditor({ code, setCode,language, loading, setLanguage,setLoading ,setReview}) {
 
  const highlightCode = (code, language) => {
    language = language.toLowerCase();
    if (!Prism.languages[language]) {
      console.warn(`Prism.js: Unsupported language '${language}', using plain text.`);
      return code; // Fallback to plain text if language is unsupported
    }
    return Prism.highlight(code, Prism.languages[language], language);
  };

  const getCodeReview = async () => {
    setLoading(true);
    if(!code) {
      setLoading(false);
      return setReview('Please enter some code');
    }
    try {
      const response = await fetch("https://code-reviewer-0ri0.onrender.com/api/v1/ai/get-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ✅ Add this header
        },
        body: JSON.stringify({ code, language }),
      });
      
      const data = await response.json();
      setLoading(false);
      setReview(data);
    } catch (error) {
      setReview(error.message);
    }
  }

  return (
    <div className='flex relative overflow-hidden text-2xl bg-gray-900 flex-col  text-amber-50 min-h-[50vh] lg:min-h-screen w-full'>
      <div className='flex relative  w-full  bg-amber-700 h-20 items-center justify-center'>
        <form class="absolute top-4 right-5">
          <select 
          id="language" 
          name="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)} 
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="c">c++</option>
            <option value="javascript">Javascript</option>
            <option value="jsx">Jsx</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
          </select>
        </form>
      </div>
      <div className="w-full min-h-[80vh] scrollbar-custom  max-h-[80vh] overflow-y-scroll">
        <Editor
          value={code}
          onValueChange={(newCode) => setCode(newCode)}
          highlight={(code) => highlightCode(code, language)}
          padding={14}
          className="text-lg font-mono  w-full  text-white border-none outline-none"
        />
      </div>
      <div className="relative h-full w-full flex justify-end mt-4 items-center">
        { loading 
          ?
          <LoadingBtn />
          :
          <button
          onClick={getCodeReview}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center ">
              review code
          </button>
        }
      </div>
    </div>
  )
}

export default CodeEditor;