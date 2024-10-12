// app/projects/[id]/page.tsx

import { notFound } from "next/navigation";
import { getProjectData } from "app/projects/utils";

export default function ProjectPage({ params }) {
  const { id } = params;
  const projectData = getProjectData();
  const project = projectData.find((p) => p.slug === id);

  if (!project) {
    notFound();
  }

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4">{project.metadata.title}</h1>
      <p>{project.metadata.description}</p>
      <article>{project.content}</article>
    </section>
  );
}
