import ExperienceList from "app/components/experience";

export default function ExperiencePage() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Experiences
      </h1>
      <ExperienceList />

      {/* New Subsections with Styled Boxes */}
      <div className="experience-subsections">
        <h2 className="font-semibold text-xl">Honors & Awards</h2>
        <div className="experience-box">
          <div className="awards">
            <p>
              <strong>Most Popular Project Award</strong>{" "}
              <em>NYU Shanghai Undergraduate Research Symposium</em>{" "}
              <span className="float-right">Fall '24</span>
            </p>
            <p>
              <strong>Dean's Undergraduate Research Fund ($1000)</strong> $|${" "}
              <em>New York University</em>{" "}
              <span className="float-right">Summer '24</span>
            </p>
            <p>
              <strong>Dean’s List for Academic Year</strong> $|${" "}
              <em>New York University</em>{" "}
              <span className="float-right">'21 -- '23</span>
            </p>
            <p>
              <strong>Research Assistant Honorary Grant ($1000)</strong> $|${" "}
              <em>New York University</em>{" "}
              <span className="float-right">Spring '23</span>
            </p>
            <p>
              <strong>
                Scholar’s Full Ride Award, Yale Young Global Scholars ($6500)
              </strong>{" "}
              $|$ <em>Yale University</em>{" "}
              <span className="float-right">Summer '19</span>
            </p>
          </div>
        </div>

        <div className="experience-box">
          <h2 className="font-semibold text-xl">Leadership</h2>
          <div className="leadership">
            <p>
              <strong>Tech Lead Dev Team</strong> $|${" "}
              <em>Fintech & Blockchain Club at NYU</em>{" "}
              <span className="float-right">Jan '24 -- May '24</span>
            </p>
            <p>
              <strong>Tech Lead & Mentor</strong> $|$ <em>Tech@nyu Club</em>{" "}
              <span className="float-right">Aug '23 -- Dec '23</span>
            </p>
            <p>
              <strong>Director Tech Consultancy</strong> $|${" "}
              <em>TAMID Group at NYU</em>{" "}
              <span className="float-right">Jan '23 -- May '23</span>
            </p>
            <p>
              <strong>Secretary General</strong> $|${" "}
              <em>New York University Model United Nations VI</em>{" "}
              <span className="float-right">Jan '23</span>
            </p>
          </div>
        </div>

        <div className="experience-box">
          <h2 className="font-semibold text-xl">Tutoring</h2>
          <div className="tutoring">
            <p>
              <strong>Lead Course Assistant in CS Discipline</strong> $|${" "}
              <em>NYU</em>{" "}
              <span className="float-right">Aug '24 -- Present</span>
            </p>
            <p>
              <strong>Course Assistant for Data Structures</strong> $|${" "}
              <em>NYU</em>{" "}
              <span className="float-right">Aug '24 -- Present</span>
            </p>
            <p>
              <strong>
                Course Assistant for Introduction to Data and Computer Science
              </strong>{" "}
              $|$ <em>NYU</em>{" "}
              <span className="float-right">Jan '23 -- May '23</span>
            </p>
            <p>
              <strong>
                Course Assistant for Introduction to Computer Programming
              </strong>{" "}
              $|$ <em>NYU</em>{" "}
              <span className="float-right">Aug '22 -- Dec '22</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
