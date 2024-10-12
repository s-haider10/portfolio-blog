// app/components/projectList.tsx

import Link from "next/link";
import { getProjectData } from "app/projects/utils";
import { formatDate } from "app/projects/utils"; // Reuse the formatDate function

export const ProjectList = () => {
  const allProjects = getProjectData();

  return (
    <div>
      {allProjects
        .sort((a, b) =>
          new Date(b.metadata.publishedAt) > new Date(a.metadata.publishedAt)
            ? 1
            : -1
        ) // Sort by date
        .map((project) => (
          <Link
            key={project.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/projects/${project.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(project.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {project.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
};
