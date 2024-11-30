import { getExperiencePosts, formatDateRange } from "app/experience/utils";

export default function ExperienceList() {
  const experiences = getExperiencePosts();

  return (
    <div className="experience-list">
      {experiences.map((exp) => (
        <div key={exp.slug} className="experience-item">
          <h3 className="company-location">
            {exp.metadata.company} - {exp.metadata.title}
          </h3>
          <h2 className="date">
            {exp.metadata.location}{" "}
            {formatDateRange(exp.metadata.startDate, exp.metadata.endDate)}
          </h2>
          <p className="description">{exp.metadata.description}</p>
          <p className="skills">
            Skills:{" "}
            {Array.isArray(exp.metadata.skills)
              ? exp.metadata.skills.join(", ")
              : "No skills listed."}
          </p>
        </div>
      ))}
    </div>
  );
}
