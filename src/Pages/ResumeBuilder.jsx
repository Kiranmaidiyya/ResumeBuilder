import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import { toast } from "react-toastify";

import {
  getResumeById,
  createResume,
  updateResume,
} from "./API/ResumeAPI.js";

import ResumeForm from "../Components/ResumeForm.jsx";
import ResumePreview from "../Components/ResumePreview.jsx";

const emptyData = {
  name: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  summary: "",
  education: [""],
  experience: [""],
  projects: [""],
  skills: "",
  languages: [""],
  certifications: [""],
  templateType: "modern",
};

export default function ResumeBuilder() {
  const [data, setData] = useState(emptyData);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const resumeRef = useRef(null);

  // -------------------------------------------------------------------
  // LOAD RESUME BY ID
  // -------------------------------------------------------------------
  useEffect(() => {
    async function load() {
      if (!id) return;

      try {
        setLoading(true);
        setError("");

        const res = await getResumeById(id);
        setData(res.data);

        toast.success("Resume loaded");
      } catch (err) {
        console.error("Load error:", err);
        const msg = err.message || "Failed to load resume";
        setError(msg);
        toast.error(msg);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  // -------------------------------------------------------------------
  // AUTO-SAVE DRAFT
  // -------------------------------------------------------------------
  useEffect(() => {
    if (id) return;

    const timer = setTimeout(() => {
      localStorage.setItem("resume-draft", JSON.stringify(data));
      toast.info("Draft auto-saved");
    }, 1000);

    return () => clearTimeout(timer);
  }, [data, id]);

  // -------------------------------------------------------------------
  // LOAD DRAFT
  // -------------------------------------------------------------------
  useEffect(() => {
    if (!id) {
      const draft = localStorage.getItem("resume-draft");
      if (draft) {
        try {
          const parsedDraft = JSON.parse(draft);
          setData(parsedDraft);
          toast.success("Draft loaded");
        } catch (e) {
          console.error("Failed to parse draft:", e);
          localStorage.removeItem("resume-draft");
        }
      }
    }
  }, [id]);

  // -------------------------------------------------------------------
  // VALIDATION
  // -------------------------------------------------------------------
  const validateForm = () => {
    const errors = [];

    if (!data.name?.trim()) errors.push("Name is required");
    if (!data.email?.trim()) errors.push("Email is required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errors.push("Enter a valid email");
    if (!data.phone?.trim()) errors.push("Phone number is required");

    if (errors.length > 0) {
      const msg = errors.join(" • ");
      setError(msg);
      toast.error(msg);
      return false;
    }
    return true;
  };

  // -------------------------------------------------------------------
  // PDF DOWNLOAD
  // -------------------------------------------------------------------
  const reactToPrintFn = useReactToPrint({ contentRef: resumeRef });

  const handleDownloadPDF = () => {
    if (!validateForm()) return;

    toast.info("Preparing PDF...");
    reactToPrintFn();
  };

  // -------------------------------------------------------------------
  // SAVE RESUME
  // -------------------------------------------------------------------
  const handleSave = async () => {
    if (!validateForm()) return;

    try {
      setSaving(true);
      setError("");

      if (id) {
        await updateResume(id, data);
        toast.success("Resume updated!");
      } else {
        await createResume(data);
        toast.success("Resume created!");
      }

      localStorage.removeItem("resume-draft");

      navigate("/resumes");
    } catch (err) {
      console.error("Save error:", err);
      const msg =
        err.message ||
        "Failed to save resume. Please check your connection.";
      setError(msg);
      toast.error(msg);
    } finally {
      setSaving(false);
    }
  };

  // -------------------------------------------------------------------
  // CLEAR DRAFT
  // -------------------------------------------------------------------
  const handleClearDraft = () => {
    if (window.confirm("Are you sure you want to clear everything?")) {
      setData(emptyData);
      localStorage.removeItem("resume-draft");
      setError("");

      toast.success("Draft cleared");
    }
  };

  // -------------------------------------------------------------------
  // LOADING SCREEN
  // -------------------------------------------------------------------
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading your resume...</p>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------------
  // MAIN UI
  // -------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-4">
        {id ? "Edit Resume" : "Create New Resume"}
      </h1>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-red-800">{error}</p>
            </div>
            <button
              onClick={() => setError("")}
              className="ml-auto flex-shrink-0 text-red-500 hover:text-red-700 font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        <ResumeForm
          data={data}
          setData={setData}
          onSave={handleSave}
          onDownload={handleDownloadPDF}
          onClear={handleClearDraft}
          saving={saving}
        />

        <div
          ref={resumeRef}
          className="bg-white p-8 shadow-lg border rounded-lg w-full"
          style={{ minHeight: "auto" }}
        >
          <ResumePreview data={data} />
        </div>
      </div>
    </div>
  );
}