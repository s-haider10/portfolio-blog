// app/projects/[id]/page.tsx

import React from "react";
import { useRouter } from "next/router";

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Here you can fetch project details based on the `id`
  const projectDetails = {
    1: { title: "Project One", description: "Description of Project One" },
    2: { title: "Project Two", description: "Description of Project Two" },
    3: { title: "Project Three", description: "Description of Project Three" },
    // Add more project details as needed
  };

  const project = projectDetails[id];

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectPage;
