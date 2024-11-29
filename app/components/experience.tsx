import { getExperiencePosts, formatDateRange } from "app/experience/utils";

export default function ExperienceList() {
  const experiences = getExperiencePosts();

  return (
    <div className="experience-list">
      {experiences.map((exp) => (
        <div key={exp.slug} className="experience-item">
          <h2>{exp.metadata.title}</h2>
          <h3>
            {exp.metadata.company} - {exp.metadata.location}
          </h3>
          <p>{formatDateRange(exp.metadata.startDate, exp.metadata.endDate)}</p>
          <p>{exp.metadata.description}</p> {/* Displaying the description */}
          <p>
            Skills:{" "}
            {Array.isArray(exp.metadata.skills)
              ? exp.metadata.skills.join(", ")
              : "No skills listed."}
          </p>{" "}
          {/* Displaying skills */}
        </div>
      ))}
    </div>
  );
}
