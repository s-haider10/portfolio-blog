import { getExperiencePosts, formatDateRange } from "app/experience/utils";

export default function ExperienceList() {
  const experiences = getExperiencePosts();

  return (
    <div>
      <h1>Professional Experience</h1>
      {experiences.map((exp) => (
        <div key={exp.slug} className="experience-item">
          <h2>{exp.metadata.title}</h2>
          <h3>
            {exp.metadata.company} - {exp.metadata.location}
          </h3>
          <p>{formatDateRange(exp.metadata.startDate, exp.metadata.endDate)}</p>
          <div dangerouslySetInnerHTML={{ __html: exp.content }} />
        </div>
      ))}
    </div>
  );
}
