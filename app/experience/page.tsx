import ExperienceList from "app/components/experience";

export default function ExperiencePage() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Experiences
      </h1>
      <ExperienceList />

      <div className="experience-subsections">
        <div className="experience-box">
          <h2 className="font-semibold text-xl">Honors</h2>
          <p>Dean's List, 2023</p>
        </div>

        <div className="experience-box">
          <h2 className="font-semibold text-xl">Teaching</h2>
          <p>Teaching Assistant for Intro to Computer Science</p>
        </div>

        <div className="experience-box">
          <h2 className="font-semibold text-xl">Leadership</h2>
          <p>President of the Coding Club</p>
        </div>
      </div>
    </div>
  );
}
