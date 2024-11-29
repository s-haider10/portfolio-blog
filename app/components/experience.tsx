import { getExperiencePosts, formatDateRange } from "app/experience/utils";

export default function ExperienceList() {
  const experiences = getExperiencePosts();

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Professional Experience</h1>
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
