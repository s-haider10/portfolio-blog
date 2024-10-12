import React from "react";

export default function Page() {
  return (
    <section>
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              Syed Ali Haider
            </h1>
            <div className="text-gray-500 text-lg mt-2">
              <a href="mailto:sh6070@nyu.edu" className="hover:underline">
                sh6070@nyu.edu
              </a>{" "}
              |
              <a
                href="https://linkedin.com/in/haider-tech"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {" "}
                LinkedIn
              </a>{" "}
              |
              <a
                href="https://github.com/s-haider10"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {" "}
                GitHub
              </a>{" "}
              |
              <a
                href="https://s-haider10.github.io/#"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {" "}
                Portfolio
              </a>
            </div>
          </div>

          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Education
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800">
                New York University
              </h3>
              <p className="text-gray-600">
                B.Sc. in Computer Science (Artificial Intelligence)
              </p>
              <p className="text-gray-500">GPA: 3.6/4.0 | Aug '21 -- May '25</p>
              <p className="text-gray-500 mt-2">
                Relevant Coursework: Data Structures, Algorithms, Machine
                Learning, Computer Vision, Big Data Science, Quantum Computing,
                Operating Systems, and more.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Experience
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800">
                  Khudi Ventures
                </h3>
                <p className="text-gray-600">
                  Research Engineer Intern (RecSys) | Jul '24 -- Sep '24
                </p>
                <ul className="list-disc pl-5 text-gray-500">
                  <li>
                    Developed a novel matching algorithm for a dating app,
                    increasing user engagement by 30%.
                  </li>
                  <li>
                    Implemented ML model for personalized recommendations,
                    improving accuracy by 25%.
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800">
                  Reckitt Benckiser (MENA IT&D)
                </h3>
                <p className="text-gray-600">
                  Data Science Intern | May '24 -- Jul '24
                </p>
                <ul className="list-disc pl-5 text-gray-500">
                  <li>
                    Developed predictive pricing and sales forecasting models
                    with 97.93% accuracy using TensorFlow, Power BI, and Azure.
                  </li>
                </ul>
              </div>

              {/* Add more experience items here */}
            </div>
          </section>

          {/* Research Projects Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Research Projects
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800">Kiwi+</h3>
                <p className="text-gray-600">
                  Multimodal Adaptive Personalization Systems Lab | Oct '24 --
                  Present
                </p>
                <ul className="list-disc pl-5 text-gray-500">
                  <li>
                    Developed a context-aware educational chatbot for CS
                    education using Knowledge Retrieval (KR).
                  </li>
                  <li>
                    Focused on audio and vision analysis for multimodal
                    personalized learning.
                  </li>
                </ul>
              </div>

              {/* Add more research projects here */}
            </div>
          </section>

          {/* Awards & Leadership */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Awards & Leadership
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800">
                  Dean's Undergraduate Research Fund
                </h3>
                <p className="text-gray-600">NYU | May '24</p>
                <p className="text-gray-500">
                  $1500 Research Grant for Visual Question Answering (VQA)
                  project.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Skills
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">
                <strong>Programming Languages:</strong> Python, Java, C, C++,
                SQL, JavaScript, HTML/CSS
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Technologies & Tools:</strong> PyTorch, TensorFlow,
                Flask, React, Azure, Power BI, Tableau, OpenCV, NumPy, Pandas,
                Linux, Git, BigQuery
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
