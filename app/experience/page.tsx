import { formatDate, getExperiencePosts } from "../experience/utils";

export function ExperiencePosts() {
  let allExperiences = getExperiencePosts();

  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">Experience</h1>
      {allExperiences.map((experience) => (
        <div key={experience.slug} className="mb-8">
          <h2 className="font-bold text-xl">{experience.metadata.title}</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
            {experience.metadata.company} •{" "}
            {formatDate(experience.metadata.publishedAt)}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            {experience.metadata.summary}
          </p>
          {experience.metadata.skills && (
            <div className="mt-2">
              <p className="text-sm font-bold">Skills:</p>
              <ul className="list-disc list-inside">
                {experience.metadata.skills.split(",").map((skill) => (
                  <li
                    key={skill.trim()}
                    className="text-sm text-neutral-600 dark:text-neutral-400"
                  >
                    {skill.trim()}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
