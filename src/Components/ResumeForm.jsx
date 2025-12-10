export default function ResumeForm({ data, setData, onSave, onDownload, onClear, saving }) {

  const updateField = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const updateList = (value, index, listName) => {
    const list = [...data[listName]];
    list[index] = value;
    setData({ ...data, [listName]: list });
  };

  const addListItem = (listName) => {
    setData({ ...data, [listName]: [...data[listName], ""] });
  };

  const removeListItem = (index, listName) => {
    const list = [...data[listName]];
    list.splice(index, 1);
    setData({ ...data, [listName]: list });
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg border overflow-y-auto max-h-screen">

      <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>

  

      <input 
        name="name" 
        placeholder="Full Name" 
        value={data.name}
        onChange={updateField} 
        className="input" 
      />

      <input 
        name="email" 
        placeholder="Email" 
        value={data.email}
        onChange={updateField} 
        className="input" 
      />

      <input 
        name="phone" 
        placeholder="Phone" 
        value={data.phone}
        onChange={updateField} 
        className="input" 
      />

      <input 
        name="linkedin" 
        placeholder="LinkedIn URL" 
        value={data.linkedin}
        onChange={updateField} 
        className="input" 
      />

      <input 
        name="github" 
        placeholder="GitHub URL" 
        value={data.github}
        onChange={updateField} 
        className="input" 
      />

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
        <textarea 
          name="summary" 
          placeholder="Write a brief summary about yourself, your experience, and career goals..." 
          value={data.summary}
          onChange={updateField} 
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          rows="6"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
        <textarea 
          name="skills" 
          placeholder="JavaScript, React, Node.js, Python, SQL, Git, Docker, AWS..." 
          value={data.skills}
          onChange={updateField} 
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          rows="4"
        />
        <p className="text-xs text-gray-500 mt-1">Separate skills with commas</p>
      </div>

      <h3 className="font-semibold mt-6 mb-2 text-gray-800">Languages</h3>
      {(data.languages || []).map((lang, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input
            value={lang}
            placeholder="e.g., English - Native, Spanish - Intermediate"
            onChange={(e) => updateList(e.target.value, i, "languages")}
            className="input flex-1"
          />
          {(data.languages || []).length > 1 && (
            <button 
              type="button" 
              onClick={() => removeListItem(i, "languages")}
              className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xl font-bold"
            >
              ×
            </button>
          )}
        </div>
      ))}
      <button 
        type="button" 
        className="btn-secondary w-full" 
        onClick={() => addListItem("languages")}
      >
        + Add Language
      </button>

      <h3 className="font-semibold mt-6 mb-2 text-gray-800">Education</h3>
      {data.education.map((edu, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input
            value={edu}
            placeholder="e.g., BSc Computer Science - University Name (2020-2024)"
            onChange={(e) => updateList(e.target.value, i, "education")}
            className="input flex-1"
          />
          {data.education.length > 1 && (
            <button 
              type="button" 
              onClick={() => removeListItem(i, "education")}
              className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xl font-bold"
            >
              ×
            </button>
          )}
        </div>
      ))}
      <button 
        type="button" 
        className="btn-secondary w-full" 
        onClick={() => addListItem("education")}
      >
        + Add Education
      </button>

      <h3 className="font-semibold mt-6 mb-2 text-gray-800">Experience</h3>
      {data.experience.map((exp, i) => (
        <div key={i} className="mb-3">
          <div className="flex gap-2">
            <textarea
              value={exp}
              placeholder="Software Engineer - Company Name (2022-Present)&#10;• Built web applications using React&#10;• Led team of 3 developers&#10;• Improved performance by 40%"
              onChange={(e) => updateList(e.target.value, i, "experience")}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows="4"
            />
            {data.experience.length > 1 && (
              <button 
                type="button" 
                onClick={() => removeListItem(i, "experience")}
                className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xl font-bold h-fit"
              >
                ×
              </button>
            )}
          </div>
        </div>
      ))}
      <button 
        type="button" 
        className="btn-secondary w-full" 
        onClick={() => addListItem("experience")}
      >
        + Add Experience
      </button>

      <h3 className="font-semibold mt-6 mb-2 text-gray-800">Projects</h3>
      {(data.projects || []).map((proj, i) => (
        <div key={i} className="mb-3">
          <div className="flex gap-2">
            <textarea
              value={proj}
              placeholder="E-commerce Platform&#10;Built a full-stack online store using React, Node.js, and MongoDB&#10;Features: User authentication, payment integration, admin dashboard&#10;Link: github.com/username/project"
              onChange={(e) => updateList(e.target.value, i, "projects")}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows="5"
            />
            {(data.projects || []).length > 1 && (
              <button 
                type="button" 
                onClick={() => removeListItem(i, "projects")}
                className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xl font-bold h-fit"
              >
                ×
              </button>
            )}
          </div>
        </div>
      ))}
      <button 
        type="button" 
        className="btn-secondary w-full" 
        onClick={() => addListItem("projects")}
      >
        + Add Project
      </button>

      <h3 className="font-semibold mt-6 mb-2 text-gray-800">Certifications</h3>
      {(data.certifications || []).map((cert, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input
            value={cert}
            placeholder="e.g., AWS Certified Developer - Amazon (2023)"
            onChange={(e) => updateList(e.target.value, i, "certifications")}
            className="input flex-1"
          />
          {(data.certifications || []).length > 1 && (
            <button 
              type="button" 
              onClick={() => removeListItem(i, "certifications")}
              className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xl font-bold"
            >
              ×
            </button>
          )}
        </div>
      ))}
      <button 
        type="button" 
        className="btn-secondary w-full" 
        onClick={() => addListItem("certifications")}
      >
        + Add Certification
      </button>

      <h3 className="mt-6 mb-3 font-semibold text-gray-800">Choose Template</h3>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <button
          type="button"
          onClick={() => setData({ ...data, templateType: 'modern' })}
          className={`p-4 border-2 rounded-lg transition-all ${
            data.templateType === 'modern'
              ? 'border-blue-500 bg-blue-50 shadow-md'
              : 'border-gray-300 hover:border-blue-300 hover:shadow'
          }`}
        >
          <div className="font-semibold text-sm">Modern</div>
          <div className="text-xs text-gray-500 mt-1">Colorful & Bold</div>
          {data.templateType === 'modern' && (
            <div className="mt-2 text-blue-600 text-xs">✓ Selected</div>
          )}
        </button>
        
        <button
          type="button"
          onClick={() => setData({ ...data, templateType: 'classic' })}
          className={`p-4 border-2 rounded-lg transition-all ${
            data.templateType === 'classic'
              ? 'border-blue-500 bg-blue-50 shadow-md'
              : 'border-gray-300 hover:border-blue-300 hover:shadow'
          }`}
        >
          <div className="font-semibold text-sm">Classic</div>
          <div className="text-xs text-gray-500 mt-1">Traditional</div>
          {data.templateType === 'classic' && (
            <div className="mt-2 text-blue-600 text-xs">✓ Selected</div>
          )}
        </button>

        <button
          type="button"
          onClick={() => setData({ ...data, templateType: 'minimal' })}
          className={`p-4 border-2 rounded-lg transition-all ${
            data.templateType === 'minimal'
              ? 'border-blue-500 bg-blue-50 shadow-md'
              : 'border-gray-300 hover:border-blue-300 hover:shadow'
          }`}
        >
          <div className="font-semibold text-sm">Minimal</div>
          <div className="text-xs text-gray-500 mt-1">Clean & Simple</div>
          {data.templateType === 'minimal' && (
            <div className="mt-2 text-blue-600 text-xs">✓ Selected</div>
          )}
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <div className="flex gap-3">
          <button 
            type="button" 
            className="btn-primary flex-1" 
            onClick={onSave} 
            disabled={saving}
          >
            {saving ? "Saving..." : "💾 Save Resume"}
          </button>

          <button 
            type="button" 
            className="btn-secondary flex-1" 
            onClick={onDownload}
          >
            📥 Download PDF
          </button>
        </div>

        {onClear && (
          <button 
            type="button" 
            className="w-full px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium" 
            onClick={onClear}
          >
            🗑 Clear All Fields
          </button>
        )}
      </div>

    </div>
  );
}