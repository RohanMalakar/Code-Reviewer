import About from "../components/About"
import Features from "../components/Features"
import Footer from "../components/Footer"
import GetStarted from "../components/GetStarted"
import Navbar from "../components/Navbar"


function LandingPage() {
  return (
    <div className="h-screen w-full flex flex-col">
       <Navbar />
       <GetStarted />
       <About/>
       <Features/>
       <Footer/>
    </div>
  )
}

export default LandingPage