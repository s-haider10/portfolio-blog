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
        <h2 className="font-semibold text-xl">Education</h2>
        <div className="experience-box">
          <div className="education">
            <h3 className="custom-blue">New York University</h3>
            <p className="text-sm">
              Shanghai & New York{" "}
              <span className="float-right">Fall '21 - Present</span>{" "}
            </p>

            <p className="text-xs text-gray-450">
              Courses: Calculus I & II, Discrete Mathematics, Probability and
              Statistics for Econ, Linear Algebra, Data Structures, Basic
              Algorithms, Computer Systems Organization, Operating Systems,
              Databases, Information Visualisation, Mindful Tech Product
              Management, Quantum Computing, Fundamentals of Machine Learning,
              Reinforcement Learning, Technologies in Finance (Graduate Course),
              Computer Vision (Graduate Course), Big Data Science (Graduate
              Course), Recommender Systems, ML with Graphs, NLP
            </p>
          </div>
        </div>

        <h2 className="font-semibold text-xl">Honors & Awards</h2>
        <div className="experience-box">
          <div className="awards">
            <p>
              Most Popular Project Award @ NYU Research Symposium
              <span className="float-right custom-blue">Fall '24</span>
            </p>
            <p>
              NYU Dean's Undergrad Research Fund
              <em> </em>{" "}
              <span className="float-right custom-blue">Summer '24</span>
            </p>
            <p>
              NYU Dean’s Honor List
              <em></em>{" "}
              <span className="float-right custom-blue">'21 - '23</span>
            </p>
            <p>
              NYU Research Assistant Grant<em></em>{" "}
              <span className="float-right custom-blue">Spring '23</span>
            </p>
            <p>
              Scholar’s Award (full ride) @ Yale YGS
              <span className="float-right custom-blue">Summer '19</span>
            </p>
          </div>
        </div>
        <h2 className="font-semibold text-xl">Leadership</h2>
        <div className="experience-box">
          <div className="leadership">
            <p>
              Senior Dev Team @ NYU Blockchain&Fintech Club
              <span className="float-right custom-blue ">Spring '24</span>
            </p>
            <p>
              Tech Lead & Mentor @ Tech@NYU
              <span className="float-right custom-blue">Fall '23</span>
            </p>
            <p>
              Co-Director Tech Consultancy @ NYUSH TAMID Group
              <span className="float-right custom-blue">Spring '23</span>
            </p>
            <p>
              Secretary General @ NYUSHMUN-VI
              <span className="float-right custom-blue">Spring '23</span>
            </p>
          </div>
        </div>
        <h2 className="font-semibold text-xl">Course Assistant at NYU</h2>
        <div className="experience-box">
          <div className="tutoring">
            <p>
              Lead Course Assistant for CS
              <span className="float-right custom-blue">
                Fall '24 - Present
              </span>
            </p>
            <p>
              Data Structures
              <span className="float-right custom-blue">
                Fall '24 - Present
              </span>
            </p>
            <p>
              Intro to Computer and Data Science
              <span className="float-right custom-blue">Spring '23</span>
            </p>
            <p>
              Intro to Computer Programming
              <span className="float-right custom-blue">Fall '22</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
