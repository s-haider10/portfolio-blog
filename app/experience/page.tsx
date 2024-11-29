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
              <em>NYU Undergrad Research Symposium</em>{" "}
              <span className="float-right">Fall '24</span>
            </p>
            <p>
              <strong>Dean's Undergrad Research Fund</strong> <em>NYU</em>{" "}
              <span className="float-right">Summer '24</span>
            </p>
            <p>
              <strong>Dean’s List for Academic Year</strong>
              <em>NYU</em> <span className="float-right">'21 -- '23</span>
            </p>
            <p>
              <strong>Research Assistant Honorary Grant</strong> <em>NYU</em>{" "}
              <span className="float-right">Spring '23</span>
            </p>
            <p>
              <strong>Scholar’s Full Ride Award</strong>{" "}
              <em>Yale Young Global Scholars</em>{" "}
              <span className="float-right">Summer '19</span>
            </p>
          </div>
        </div>

        <div className="experience-box">
          <h2 className="font-semibold text-xl">Leadership</h2>
          <div className="leadership">
            <p>
              <strong>Tech Lead Dev Team</strong>{" "}
              <em>Blockchain Club at NYU</em>{" "}
              <span className="float-right">Spring '24</span>
            </p>
            <p>
              <strong>Tech Lead & Mentor</strong> <em>Tech@nyu Club</em>{" "}
              <span className="float-right">Fall '23</span>
            </p>
            <p>
              <strong>Director Tech Consultancy</strong> <em>TAMID@NYU</em>{" "}
              <span className="float-right">Spring'23</span>
            </p>
            <p>
              <strong>Secretary General</strong> $|$ <em>NYUSHMUN VI</em>{" "}
              <span className="float-right">Spring '23</span>
            </p>
          </div>
        </div>

        <div className="experience-box">
          <h2 className="font-semibold text-xl">Tutoring</h2>
          <div className="tutoring">
            <p>
              <strong>Lead Course Assistant in CS Discipline</strong>{" "}
              <em>NYU</em>{" "}
              <span className="float-right">Aug '24 -- Present</span>
            </p>
            <p>
              <strong>Course Assistant for Data Structures</strong> <em>NYU</em>{" "}
              <span className="float-right">Aug '24 -- Present</span>
            </p>
            <p>
              <strong>Course Assistant for Introduction to CS & DS</strong>{" "}
              <em>NYU</em> <span className="float-right">Spring '23</span>
            </p>
            <p>
              <strong>
                Course Assistant for Introduction to Computer Programming
              </strong>{" "}
              <em>NYU</em> <span className="float-right">Fall'22</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
