import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ResumeBuilder from "./Pages/ResumeBuilder.jsx";
import ResumeList from "./Pages/ResumeList.jsx";
import Navbar from "./Components/Navbar.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <ToastContainer position="top-right" autoClose={2000} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/builder" element={<ResumeBuilder />} />
      <Route path="/builder/:id" element={<ResumeBuilder />} /> {/* edit */}
      <Route path="/resumes" element={<ResumeList />} />
      
      
    </Routes>
    

    </div>

  );
}