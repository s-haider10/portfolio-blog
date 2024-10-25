export function getExperiencePosts() {
  return [
    {
      title: "Software Engineer",
      company: "Tech Corp",
      startDate: "2020-01-01",
      endDate: "2022-12-31",
      image: "/images/techcorp-logo.png",
      description:
        "## Role and Responsibilities\nAs a Software Engineer at Tech Corp, I was responsible for developing and maintaining web applications using modern frameworks, collaborating with cross-functional teams to deliver high-quality software, and ensuring best practices throughout the development process.",
      skills: ["JavaScript", "React", "Node.js"],
    },
    {
      title: "Frontend Developer",
      company: "Web Solutions",
      startDate: "2018-01-01",
      endDate: "2019-12-31",
      image: "/images/websolutions-logo.png",
      description:
        "## Achievements\n- Developed user-friendly applications using React and Redux\n- Increased site engagement by 20% through redesigns.",
      skills: ["HTML", "CSS", "Redux"],
    },
    {
      title: "Intern",
      company: "Startup Inc",
      startDate: "2017-06-01",
      endDate: "2017-12-31",
      description:
        "## Internship Overview\nGained practical experience in software development, actively participating in sprint planning, and learning agile development methodologies.",
      skills: ["Python", "Django"],
    },
  ];
}

export function formatDate(dateString) {
  const options = { year: "numeric", month: "long" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

export function sortExperiencesByDate(experiences) {
  return experiences.sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate)
  );
}

export function getTotalYearsOfExperience(experiences) {
  const now = new Date();
  let totalMonths = 0;

  experiences.forEach((exp) => {
    const start = new Date(exp.startDate);
    const end = exp.endDate ? new Date(exp.endDate) : now;
    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());
    totalMonths += months;
  });

  return Math.round((totalMonths / 12) * 10) / 10; // Round to 1 decimal place
}

export function getAllSkills(experiences) {
  const skillSet = new Set();
  experiences.forEach((exp) => {
    exp.skills.forEach((skill) => skillSet.add(skill));
  });
  return Array.from(skillSet);
}
