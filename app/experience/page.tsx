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
              <em>NYU Research Symposium</em>{" "}
              <span className="float-right">Fall '24</span>
            </p>
            <p>
              <strong>NYU Dean's Undergrad Research Fund</strong>{" "}
              <span className="float-right">Summer '24</span>
            </p>
            <p>
              <strong>Dean’s Honor List</strong>
              <em>NYU</em> <span className="float-right">'21 -- '23</span>
            </p>
            <p>
              <strong>Research Assistant Grant</strong> <em>NYU</em>{" "}
              <span className="float-right">Spring '23</span>
            </p>
            <p>
              <strong>Scholar’s Award(full ride) </strong> <em>Yale YGS</em>{" "}
              <span className="float-right">Summer '19</span>
            </p>
          </div>
        </div>
        <h2 className="font-semibold text-xl">Leadership</h2>
        <div className="experience-box">
          <div className="leadership">
            <p>
              <strong>Senior Dev Team</strong> <em>Blockchain Club at NYU</em>{" "}
              <span className="float-right">Spring '24</span>
            </p>
            <p>
              <strong>Tech Lead & Mentor</strong> <em>Tech@nyu Club</em>{" "}
              <span className="float-right">Fall '23</span>
            </p>
            <p>
              <strong>Co-Director Tech Consultancy</strong> <em>TAMID@NYU</em>{" "}
              <span className="float-right">Spring'23</span>
            </p>
            <p>
              <strong>Secretary General</strong> <em>NYUSH MUN VI</em>{" "}
              <span className="float-right">Spring '23</span>
            </p>
          </div>
        </div>
        <h2 className="font-semibold text-xl">Course Assistant at NYU</h2>
        <div className="experience-box">
          <div className="tutoring">
            <p>
              <strong>Lead Course Assistant for CS</strong>{" "}
              <span className="float-right">Fall '24 - Present</span>
            </p>
            <p>
              <strong>Data Structures</strong>{" "}
              <span className="float-right">Fall '24 - Present</span>
            </p>
            <p>
              <strong>Intro to CS & DS</strong>{" "}
              <span className="float-right">Spring '23</span>
            </p>
            <p>
              <strong>Intro to Computer Programming</strong>{" "}
              <span className="float-right">Fall'22</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
