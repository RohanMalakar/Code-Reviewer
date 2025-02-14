import "./App.css";
import { useRef, useState } from "react";
import CodeEditor from "./components/CodeEditor";

function App() {
  const [code, setCode] = useState(
    `const greet = (name) => {\n  return "Hello, " + name + "!";\n};\nconsole.log(greet("World"));`
  );

  const [leftWidth, setLeftWidth] = useState(500); // Default left panel width
  const containerRef = useRef(null);
  const isResizingRef = useRef(false);
  const [language, setLanguage] = useState('javascript');

  const handleMouseDown = (e) => {
    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isResizingRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newWidth = e.clientX - containerRect.left;
    const minWidth = 300;
    const maxWidth = containerRect.width - 300;

    if (newWidth >= minWidth && newWidth <= maxWidth) {
      setLeftWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="h-screen w-full flex">
      <div ref={containerRef} className="flex w-full bg-gray-100">
        {/* Left Panel (Code Editor) */}
        <div
          className="bg-white overflow-auto select-none"
          style={{ width: `${leftWidth}px`, minWidth: "500px" }}
        >
          <CodeEditor code={code} setCode={setCode} language={language} setLanguage={setLanguage} />
        </div>

        {/* Resizable Divider */}
        <div
          className="w-2 cursor-ew-resize bg-gray-600 hover:bg-gray-800"
          onMouseDown={handleMouseDown}
        ></div>

        {/* Right Panel */}
        <div className="flex-1 select-none bg-gray-200 p-4 min-w-[50%] overflow-auto">
          <h2 className="text-xl font-bold">Right Panel</h2>
          <p>More content goes here...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
