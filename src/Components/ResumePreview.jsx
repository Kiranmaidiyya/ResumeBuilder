function ModernTemplate({ data }) {
  return (
    <div className="space-y-6 break-words">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg -mx-8 -mt-8 mb-8">
        <div className="flex items-center gap-6">
          
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-3">{data.name || "Your Name"}</h1>
            <div className="text-sm space-y-1 text-blue-100">
              <p className="flex items-center gap-2">
                <span>✉</span> {data.email || "your.email@example.com"}
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span> {data.phone || "Your Phone"}
              </p>
              {data.linkedin && (
                <p className="flex items-center gap-2 break-all">
                  <span>🔗</span> {data.linkedin}
                </p>
              )}
              {data.github && (
                <p className="flex items-center gap-2 break-all">
                  <span>💻</span> {data.github}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {data.summary && (
        <section>
          <h2 className="text-xl font-bold text-blue-700 border-b-2 border-blue-700 pb-2 mb-3">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </section>
      )}

      {data.skills && (
        <section>
          <h2 className="text-xl font-bold text-blue-700 border-b-2 border-blue-700 pb-2 mb-3">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.split(',').map((skill, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </section>
      )}

      {data.languages && data.languages.some(l => l.trim()) && (
        <section>
          <h2 className="text-xl font-bold text-blue-700 border-b-2 border-blue-700 pb-2 mb-3">
            Languages
          </h2>
          <ul className="space-y-1">
            {data.languages.filter(l => l.trim()).map((lang, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">▸</span>
                <span className="text-gray-700">{lang}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.education && data.education.some(e => e.trim()) && (
        <section>
          <h2 className="text-xl font-bold text-blue-700 border-b-2 border-blue-700 pb-2 mb-3">
            Education
          </h2>
          <ul className="space-y-2">
            {data.education.filter(e => e.trim()).map((e, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">▸</span>
                <span className="text-gray-700">{e}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.experience && data.experience.some(e => e.trim()) && (
        <section>
          <h2 className="text-xl font-bold text-blue-700 border-b-2 border-blue-700 pb-2 mb-3">
            Experience
          </h2>
          <ul className="space-y-3">
            {data.experience.filter(e => e.trim()).map((e, i) => (
              <li key={i} className="text-gray-700 whitespace-pre-line">
                {e}
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.projects && data.projects.some(p => p.trim()) && (
        <section>
          <h2 className="text-xl font-bold text-blue-700 border-b-2 border-blue-700 pb-2 mb-3">
            Projects
          </h2>
          <ul className="space-y-3">
            {data.projects.filter(p => p.trim()).map((p, i) => (
              <li key={i} className="text-gray-700 whitespace-pre-line">
                {p}
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.certifications && data.certifications.some(c => c.trim()) && (
        <section>
          <h2 className="text-xl font-bold text-blue-700 border-b-2 border-blue-700 pb-2 mb-3">
            Certifications
          </h2>
          <ul className="space-y-1">
            {data.certifications.filter(c => c.trim()).map((cert, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">▸</span>
                <span className="text-gray-700">{cert}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function ClassicTemplate({ data }) {
  return (
    <div className="space-y-6 break-words font-serif">
      <div className="text-center border-b-4 border-black pb-4">
        
        <h1 className="text-4xl font-bold uppercase tracking-wide mb-2">
          {data.name || "Your Name"}
        </h1>
        <div className="text-sm space-x-3">
          <span>{data.email || "your.email@example.com"}</span>
          <span>•</span>
          <span>{data.phone || "Your Phone"}</span>
        </div>
        {(data.linkedin || data.github) && (
          <div className="text-sm mt-1 space-x-3 break-all">
            {data.linkedin && <span>{data.linkedin}</span>}
            {data.linkedin && data.github && <span>•</span>}
            {data.github && <span>{data.github}</span>}
          </div>
        )}
      </div>

      {data.summary && (
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider border-b-2 border-gray-400 pb-1 mb-2">
            Professional Profile
          </h2>
          <p className="text-gray-800 leading-relaxed text-justify">{data.summary}</p>
        </section>
      )}

      {data.skills && (
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider border-b-2 border-gray-400 pb-1 mb-2">
            Core Competencies
          </h2>
          <p className="text-gray-800">{data.skills}</p>
        </section>
      )}

      {data.languages && data.languages.some(l => l.trim()) && (
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider border-b-2 border-gray-400 pb-1 mb-2">
            Languages
          </h2>
          <ul className="list-none space-y-1">
            {data.languages.filter(l => l.trim()).map((lang, i) => (
              <li key={i} className="pl-4 border-l-2 border-gray-300 text-gray-800">
                {lang}
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.education && data.education.some(e => e.trim()) && (
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider border-b-2 border-gray-400 pb-1 mb-2">
            Education
          </h2>
          <ul className="list-none space-y-2">
            {data.education.filter(e => e.trim()).map((e, i) => (
              <li key={i} className="pl-4 border-l-2 border-gray-300 text-gray-800">
                {e}
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.experience && data.experience.some(e => e.trim()) && (
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider border-b-2 border-gray-400 pb-1 mb-2">
            Professional Experience
          </h2>
          <ul className="list-none space-y-3">
            {data.experience.filter(e => e.trim()).map((e, i) => (
              <li key={i} className="pl-4 border-l-2 border-gray-300 text-gray-800 whitespace-pre-line">
                {e}
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.projects && data.projects.some(p => p.trim()) && (
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider border-b-2 border-gray-400 pb-1 mb-2">
            Projects
          </h2>
          <ul className="list-none space-y-3">
            {data.projects.filter(p => p.trim()).map((p, i) => (
              <li key={i} className="pl-4 border-l-2 border-gray-300 text-gray-800 whitespace-pre-line">
                {p}
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.certifications && data.certifications.some(c => c.trim()) && (
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider border-b-2 border-gray-400 pb-1 mb-2">
            Certifications
          </h2>
          <ul className="list-none space-y-1">
            {data.certifications.filter(c => c.trim()).map((cert, i) => (
              <li key={i} className="pl-4 border-l-2 border-gray-300 text-gray-800">
                {cert}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function MinimalTemplate({ data }) {
  return (
    <div className="space-y-5 break-words">
      <div className="border-b-2 border-gray-900 pb-3">
        <div className="flex items-center gap-4 mb-2">
          
          <div>
            <h1 className="text-3xl font-light tracking-tight text-gray-900">
              {data.name || "Your Name"}
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600">
          <span>{data.email || "your.email@example.com"}</span>
          <span>{data.phone || "Your Phone"}</span>
          {data.linkedin && <span className="break-all">{data.linkedin}</span>}
          {data.github && <span className="break-all">{data.github}</span>}
        </div>
      </div>

      {data.summary && (
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-900 mb-2">
            About
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">{data.summary}</p>
        </section>
      )}

      {data.skills && (
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-900 mb-2">
            Skills
          </h2>
          <p className="text-sm text-gray-700">{data.skills}</p>
        </section>
      )}

      {data.languages && data.languages.some(l => l.trim()) && (
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-900 mb-2">
            Languages
          </h2>
          <ul className="space-y-1 text-sm">
            {data.languages.filter(l => l.trim()).map((lang, i) => (
              <li key={i} className="text-gray-700 pl-4 relative before:content-['—'] before:absolute before:left-0">
                {lang}
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.education && data.education.some(e => e.trim()) && (
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-900 mb-2">
            Education
          </h2>
          <ul className="space-y-1 text-sm">
            {data.education.filter(e => e.trim()).map((e, i) => (
              <li key={i} className="text-gray-700 pl-4 relative before:content-['—'] before:absolute before:left-0">
                {e}
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.experience && data.experience.some(e => e.trim()) && (
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-900 mb-2">
            Experience
          </h2>
          <ul className="space-y-2 text-sm">
            {data.experience.filter(e => e.trim()).map((e, i) => (
              <li key={i} className="text-gray-700 whitespace-pre-line">
                {e}
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.projects && data.projects.some(p => p.trim()) && (
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-900 mb-2">
            Projects
          </h2>
          <ul className="space-y-2 text-sm">
            {data.projects.filter(p => p.trim()).map((p, i) => (
              <li key={i} className="text-gray-700 whitespace-pre-line">
                {p}
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.certifications && data.certifications.some(c => c.trim()) && (
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-900 mb-2">
            Certifications
          </h2>
          <ul className="space-y-1 text-sm">
            {data.certifications.filter(c => c.trim()).map((cert, i) => (
              <li key={i} className="text-gray-700 pl-4 relative before:content-['—'] before:absolute before:left-0">
                {cert}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default function ResumePreview({ data }) {
  if (!data || typeof data !== 'object') {
    return <p className="text-red-500">Error: Invalid data provided to ResumePreview.</p>;
  }

  const templateType = data.templateType || "modern";

  switch (templateType) {
    case "classic":
      return <ClassicTemplate data={data} />;
    case "minimal":
      return <MinimalTemplate data={data} />;
    case "modern":
    default:
      return <ModernTemplate data={data} />;
  }
}