import ExperienceList from "app/components/experience";

export default function ExperiencePage() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Experiences
      </h1>
      <h2>Industry Internships</h2>
      <ExperienceList />
      <div className="experience-subsections">
        <h2 className="font-semibold text-xl mt-8">Honors</h2>
        <p>Dean's List, 2023</p>

        <h2 className="font-semibold text-xl mt-4">Teaching Experience</h2>
        <p>Learning Assistant for Intro to Data Structures</p>
        <p>Learning Assistant for Intro to Computer Science</p>
        <p>Learning Assistant for Intro to Computer Programming</p>

        <h2 className="font-semibold text-xl mt-4">Leadership</h2>
        <p>Lead Learning Assistant for Computer Science</p>
        <p>Co-Director Tech@TAMID</p>
      </div>
    </div>
  );
}
