// app/projects/page.tsx

import React from "react";
import Link from "next/link"; // or 'react-router-dom' based on your routing setup

const ProjectLandingPage = () => {
  const projects = [
    { id: 1, title: "Project One" },
    { id: 2, title: "Project Two" },
    { id: 3, title: "Project Three" },
    // Add more projects as needed
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectLandingPage;
