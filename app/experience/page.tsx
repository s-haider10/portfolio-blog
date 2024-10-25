import { getExperienceEntries } from "app/experience/utils";
import { CustomMDX } from "app/components/mdx";

export function generateMetadata() {
  return {
    title: "Work Experience",
    description: "My professional work experience and career history",
  };
}

export default function Experience() {
  const experiences = getExperienceEntries();

  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Work Experience</h1>
      {experiences.map((experience, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">
            {experience.title} at {experience.company}
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            {formatDate(experience.startDate)} -{" "}
            {experience.endDate ? formatDate(experience.endDate) : "Present"}
          </p>
          {experience.image && (
            <img
              src={experience.image}
              alt={`${experience.company} logo`}
              className="w-16 h-16 object-contain mb-4"
            />
          )}
          <div className="prose max-w-none">
            <CustomMDX source={experience.description} />
          </div>
          {experience.skills && (
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "long" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}
