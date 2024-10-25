import { formatDate, getExperiencePosts } from "app/experience/utils";

export function ExperiencePosts() {
  let allProjects = getExperiencePosts();

  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">Experience</h1>
      {allProjects.map((project) => (
        <div key={project.title} className="mb-8">
          <h2 className="font-bold text-xl">{project.title}</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
            {project.company} • {formatDate(project.startDate)} -{" "}
            {project.endDate ? formatDate(project.endDate) : "Present"}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>
          {project.skills && (
            <div className="mt-2">
              <p className="text-sm font-bold">Skills:</p>
              <ul className="list-disc list-inside">
                {project.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-neutral-600 dark:text-neutral-400"
                  >
                    {skill}
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
