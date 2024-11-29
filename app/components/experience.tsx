import { getExperiencePosts, formatDateRange } from "app/experience/utils";
import { FileText } from "lucide-react";

export default function ExperienceList() {
  const experiences = getExperiencePosts();

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Professional Experience</h1>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg
            bg-gradient-to-r from-white to-slate-50
            hover:from-blue-50 hover:to-white
            transition-all duration-300
            border border-slate-200/60 shadow-sm hover:shadow-md
            text-gray-700 hover:text-gray-900"
        >
          <FileText size={20} />
          <span>Download CV</span>
        </a>
      </div>
      {experiences.map((exp) => (
        <div
          key={exp.slug}
          className="mb-8 p-6 rounded-lg 
            bg-gradient-to-r from-white via-slate-50 to-white
            shadow-md hover:shadow-lg
            transition-all duration-300 ease-in-out
            hover:bg-gradient-to-r hover:from-white hover:via-blue-50 hover:to-white
            hover:scale-[1.02]
            border border-slate-200/60"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            {exp.metadata.title}
          </h2>
          <h3 className="text-lg text-gray-600 mt-2">
            {exp.metadata.company} - {exp.metadata.location}
          </h3>
          <p className="text-gray-500 mt-1 mb-4">
            {formatDateRange(exp.metadata.startDate, exp.metadata.endDate)}
          </p>
          <div
            className="prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: exp.content }}
          />
        </div>
      ))}
    </div>
  );
}
