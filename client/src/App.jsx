import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage.jsx";
import GetStarted from "./components/GetStarted.jsx";
import "./App.css";
import NotFoundPage from "./Pages/NotFoundPage";
import CodeReviwer from "./Pages/CodeReviwer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/get-started" element={<CodeReviwer />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App