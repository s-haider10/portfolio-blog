import Link from "next/link";
import { formatDate, getProjectPosts } from "app/projects/utils";

interface Metadata {
  publishedAt: string;
  title: string;
  keywords?: string[];
}

export function ProjectPosts() {
  let allProjects = getProjectPosts() as { metadata: Metadata; slug: string }[];

  return (
    <div>
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
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
              <div className="flex flex-col">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {project.metadata.title}
                </p>
                {Array.isArray(project.metadata.keywords) &&
                project.metadata.keywords.length > 0 ? (
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Keywords: {project.metadata.keywords.join(", ")}
                  </p>
                ) : null}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
