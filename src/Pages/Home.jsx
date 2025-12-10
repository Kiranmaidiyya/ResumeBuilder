import { Link } from "react-router-dom";
import heroImg from "../assets/hero image.webp"; 
import { FaCheckCircle, FaFileAlt, FaLock, FaMagic } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Create Your Perfect Resume<br />In Just Minutes
          </h1>

          <p className="mt-5 text-gray-300 text-lg leading-relaxed">
            Build a stunning, professional resume using our easy-to-use builder.
            Your data is safe, editable anytime, and downloadable as a clean PDF.
          </p>

          <p className="mt-3 text-gray-400">
            Designed for students & professionals — clean templates, modern UI, no login needed.
          </p>

          <Link
            to="/builder"
            className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            Create Resume Now →
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Resume Example"
            className="rounded-xl shadow-2xl w-[90%]"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-800 py-20">
        <h2 className="text-center text-3xl font-bold mb-10">Why Choose Our Resume Builder?</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

          <div className="p-6 bg-gray-900 rounded-xl shadow-lg text-center">
            <FaFileAlt className="text-blue-400 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Modern Templates</h3>
            <p className="text-gray-400 mt-2">
              Choose from clean, ATS-friendly professional templates.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-xl shadow-lg text-center">
            <FaMagic className="text-purple-400 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Instant PDF Download</h3>
            <p className="text-gray-400 mt-2">
              Export your resume at any time with a single click.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-xl shadow-lg text-center">
            <FaLock className="text-green-400 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Your Data Stays Local</h3>
            <p className="text-gray-400 mt-2">
              JSON server ensures full privacy. No cloud storage.
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-5">Build a Resume That Stands Out</h2>

        <p className="text-gray-300 leading-relaxed text-lg">
          Our resume builder is crafted to give you the tools you need to succeed.
          Whether you're applying for internships, jobs, or higher studies, a polished resume
          can make all the difference.
        </p>

        <p className="text-gray-400 mt-4">
          Customize your layout, update anytime, switch templates instantly, and download a
          beautiful PDF built exactly the way recruiters prefer.
        </p>

        <ul className="mt-6 text-gray-300 space-y-3">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-blue-400" /> Clean, modern design
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-blue-400" /> Student-friendly and professional
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-blue-400" /> No watermarks, no ads, free to use
          </li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Resume Builder. All Rights Reserved.
      </footer>

    </div>
  );
}