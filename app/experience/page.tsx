import ExperienceList from "app/components/experience";

export default function ExperiencePage() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Experiences
      </h1>
      <h2 className="font-semibold text-xl">Internships</h2>
      <ExperienceList />

      {/* New Subsections with Styled Boxes */}
      <div className="experience-subsections">
        <h2 className="font-semibold text-xl">Honors & Awards</h2>
        <div className="experience-box">
          <div className="awards">
            <p>
              Most Popular Project Award @ NYU Research Symposium
              <span className="float-right">Fall '24</span>
            </p>
            <p>
              NYU Dean's Undergrad Research Fund
              <em> </em> <span className="float-right">Summer '24</span>
            </p>
            <p>
              NYU Dean’s Honor List
              <em></em> <span className="float-right">'21 - '23</span>
            </p>
            <p>
              NYU Research Assistant Grant<em></em>{" "}
              <span className="float-right">Spring '23</span>
            </p>
            <p>
              Scholar’s Award(full ride) @ Yale YGS
              <span className="float-right">Summer '19</span>
            </p>
          </div>
        </div>
        <h2 className="font-semibold text-xl">Leadership</h2>
        <div className="experience-box">
          <div className="leadership">
            <p>
              Senior Dev Team @ NYU Blockchain&Fintech Club
              <span className="float-right">Spring '24</span>
            </p>
            <p>
              Tech Lead & Mentor @ Tech@NYU
              <span className="float-right">Fall '23</span>
            </p>
            <p>
              <span className="text-blue-500">
                Co-Director Tech Consultancy @ NYUSH TAMID Group
              </span>
              <span className="float-right">Spring'23</span>
            </p>
            <p>
              Secretary General NYUSH MUN VI
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
