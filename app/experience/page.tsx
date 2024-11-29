import ExperienceList from "app/components/experience";

export default function ExperiencePage() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Experiences
      </h1>
      <ExperienceList />
      <h3 className="font-semibold text-xl">Internships</h3>
      <div className="experience-subsections">
        <div className="experience-box">
          <h3 className="font-semibold text-xl">Honors</h3>
          <p>Research Assistant Fund</p>
          <p>Dean Undergraduate Research Fund 2024</p>
          <p>Dean's List for Academic Year, 2022-23</p>
          <p>Dean's List for Academic Year, 2021-22</p>
        </div>

        <div className="experience-box">
          <h3 className="font-semibold text-xl">Teaching</h3>
          <p>Teaching Assistant for Data Structures</p>
          <p>Teaching Assistant for Intro to Computer and Data Science</p>
          <p>Teaching Assistant for Intro to Computer Programming</p>
        </div>

        <div className="experience-box">
          <h3 className="font-semibold text-xl">Leadership</h3>
          <p>President of the Coding Club</p>
        </div>
      </div>
    </div>
  );
}
