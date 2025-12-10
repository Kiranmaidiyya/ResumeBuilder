import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getResumes, deleteResume } from "../API/ResumeAPI.js";

export default function ResumeList() {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadResumes = async () => {
    try {
      setLoading(true);
      const res = await getResumes();
      setResumes(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load resumes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadResumes();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this resume?")) return;
    try {
      await deleteResume(id);
      setResumes((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete resume");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-white mb-4">Saved Resumes</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <div className="mb-4">
        <Link to="/builder" className="btn-primary">
          + Create New Resume
        </Link>
      </div>

      {resumes.length === 0 ? (
        <p>No resumes saved yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((res) => (
            <div
              key={res.id}
              className="bg-white p-4 rounded-lg shadow border flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold mb-1">{res.name}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  {res.email} · {res.phone}
                </p>
                <p className="text-sm text-gray-700 line-clamp-3">
                  {res.summary}
                </p>
              </div>

              <div className="mt-4 flex gap-2">
                <Link
                  to={`/builder/${res.id}`}
                  className="btn-secondary text-sm"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(res.id)}
                  className="bg-red-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}