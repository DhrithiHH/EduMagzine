"use client";
import { useState } from "react";
import { z } from "zod";

// Validation schema
const sectionSchema = z.object({
  heading: z.string().min(1, "Heading is required"),
  content: z.string().min(1, "Content is required"),
  image: z.string().optional(),
});

const formSchema = z.object({
  slug: z.string().min(1, "Slug is required"),
  name: z.string().min(1, "Name is required"),
  title: z.string().min(1, "Title is required"),
  summary: z.string().min(1, "Summary is required"),
  sections: z.array(sectionSchema).min(1, "At least one section is required"),
});

export default function JsonContentForm() {
  const [formData, setFormData] = useState({
    slug: "",
    name: "",
    title: "",
    summary: "",
    sections: [{ heading: "", content: "", image: "" }],
  });
  const [errors, setErrors] = useState({});

  // Handle top-level string field change
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle section field change
  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...formData.sections];
    updatedSections[index][field] = value;
    setFormData((prev) => ({ ...prev, sections: updatedSections }));
  };

  const addSection = () => {
    setFormData((prev) => ({
      ...prev,
      sections: [...prev.sections, { heading: "", content: "", image: "" }],
    }));
  };

  const removeSection = (index) => {
    const updatedSections = formData.sections.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, sections: updatedSections }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsed = formSchema.safeParse(formData);

    if (!parsed.success) {
      const fieldErrors = {};
      parsed.error.issues.forEach((issue) => {
        // Compose error path for nested fields
        const path = issue.path
          .map((p) => (typeof p === "number" ? `[${p}]` : p))
          .join(".");
        fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", parsed.data);
      alert("Submitted JSON:\n" + JSON.stringify(parsed.data, null, 2));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">JSON Content Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Slug */}
        <div>
          <label className="font-medium text-gray-700">Slug</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={formData.slug}
            onChange={(e) => handleChange("slug", e.target.value)}
          />
          {errors["slug"] && (
            <p className="text-red-600 text-sm mt-1">{errors["slug"]}</p>
          )}
        </div>

        {/* Name */}
        <div>
          <label className="font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          {errors["name"] && (
            <p className="text-red-600 text-sm mt-1">{errors["name"]}</p>
          )}
        </div>

        {/* Title */}
        <div>
          <label className="font-medium text-gray-700">Title</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
          {errors["title"] && (
            <p className="text-red-600 text-sm mt-1">{errors["title"]}</p>
          )}
        </div>

        {/* Summary */}
        <div>
          <label className="font-medium text-gray-700">Summary</label>
          <textarea
            rows={3}
            className="w-full border p-2 rounded"
            value={formData.summary}
            onChange={(e) => handleChange("summary", e.target.value)}
          />
          {errors["summary"] && (
            <p className="text-red-600 text-sm mt-1">{errors["summary"]}</p>
          )}
        </div>

        {/* Sections */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold text-gray-800">Sections</h2>
            <button
              type="button"
              onClick={addSection}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition"
            >
              Add Section
            </button>
          </div>

          {formData.sections.map((section, index) => (
            <div
              key={index}
              className="relative group border p-4 rounded space-y-2 bg-white mb-4"
            >
              {/* Remove button, visible on hover */}
              <button
                type="button"
                onClick={() => removeSection(index)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-600 text-lg font-bold opacity-0 group-hover:opacity-100 transition"
                aria-label={`Remove section ${index + 1}`}
              >
                &times;
              </button>

              <h3 className="font-semibold text-gray-800">Section {index + 1}</h3>

              <div>
                <label className="text-gray-700">Heading</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  value={section.heading}
                  onChange={(e) =>
                    handleSectionChange(index, "heading", e.target.value)
                  }
                />
                {errors[`sections[${index}].heading`] && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors[`sections[${index}].heading`]}
                  </p>
                )}
              </div>

              <div>
                <label className="text-gray-700">Content</label>
                <textarea
                  rows={3}
                  className="w-full border p-2 rounded"
                  value={section.content}
                  onChange={(e) =>
                    handleSectionChange(index, "content", e.target.value)
                  }
                />
                {errors[`sections[${index}].content`] && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors[`sections[${index}].content`]}
                  </p>
                )}
              </div>

              <div>
                <label className="text-gray-700">Image URL</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  value={section.image}
                  onChange={(e) =>
                    handleSectionChange(index, "image", e.target.value)
                  }
                />
                {errors[`sections[${index}].image`] && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors[`sections[${index}].image`]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition"
        >
          Generate JSON
        </button>
      </form>

      <div className="mt-8">
        <h3 className="font-bold mb-2 text-gray-900">Current JSON Output:</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap break-words">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
}
