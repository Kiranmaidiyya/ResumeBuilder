import { Link } from "react-router-dom";
import { FaRegFileAlt } from "react-icons/fa"; // Logo Icon
import { FaHome, FaPlusCircle, FaFolderOpen } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-blue-600 text-white shadow-md">

      {/* LEFT — Logo + Title */}
      <div className="flex items-center gap-3">
        <FaRegFileAlt size={28} className="text-white" />
        <h1 className="text-xl font-bold tracking-wide">
          Resume Builder
        </h1>
      </div>


      {/* RIGHT — Navigation */}
      <div className="flex items-center gap-6 text-lg">

        <Link
          to="/"
          className="flex items-center gap-2 hover:text-yellow-300 transition"
        >
          <FaHome /> Home
        </Link>

        <Link
          to="/builder"
          className="flex items-center gap-2 hover:text-yellow-300 transition"
        >
          <FaPlusCircle /> Create Resume
        </Link>

        <Link
          to="/resumes"
          className="flex items-center gap-2 hover:text-yellow-300 transition"
        >
          <FaFolderOpen /> My Resumes
        </Link>

      </div>
    </nav>
  );
}