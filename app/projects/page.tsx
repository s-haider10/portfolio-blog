import { ProjectList } from "app/components/projectList";

export const metadata = {
  title: "Projects",
  description: "Explore my projects.",
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Projects
      </h1>
      <ProjectList />
    </section>
  );
}
