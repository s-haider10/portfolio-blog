import React from "react";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Syed Ali Haider
        </h1>
        <div className="text-gray-600 dark:text-gray-400 mt-2">
          <a href="mailto:sh6070@nyu.edu" className="hover:underline">
            sh6070@nyu.edu
          </a>{" "}
          |{" "}
          <a
            href="https://linkedin.com/in/haider-tech"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/s-haider10"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://s-haider10.github.io/#"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Portfolio
          </a>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Education
        </h2>
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            New York University
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            B.Sc. in Computer Science (Artificial Intelligence)
          </p>
          <p className="text-gray-500 dark:text-gray-500">
            GPA: 3.6/4.0 | Aug '21 -- May '25
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Relevant Coursework: Data Structures, Algorithms, Machine Learning,
            Computer Vision, Big Data Science, Quantum Computing, Operating
            Systems
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Experience
        </h2>
        <div className="space-y-4">
          {[
            {
              title: "Khudi Ventures",
              position: "Research Engineer Intern (RecSys)",
              date: "Jul '24 -- Sep '24",
              details: [
                "Developed a novel matching algorithm for a dating app, increasing user engagement by 30%.",
                "Implemented ML model for personalized recommendations, improving accuracy by 25%.",
              ],
            },
            {
              title: "Reckitt Benckiser (MENA IT&D)",
              position: "Data Science Intern",
              date: "May '24 -- Jul '24",
              details: [
                "Developed predictive pricing and sales forecasting models with 97.93% accuracy using TensorFlow, Power BI, and Azure.",
              ],
            },
          ].map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                {exp.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {exp.position} | {exp.date}
              </p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 mt-2">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Research Projects
        </h2>
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            Kiwi+
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Multimodal Adaptive Personalization Systems Lab | Oct '24 -- Present
          </p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 mt-2">
            <li>
              Developed a context-aware educational chatbot for CS education
              using Knowledge Retrieval (KR).
            </li>
            <li>
              Focused on audio and vision analysis for multimodal personalized
              learning.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Awards & Leadership
        </h2>
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            Dean's Undergraduate Research Fund
          </h3>
          <p className="text-gray-600 dark:text-gray-400">NYU | May '24</p>
          <p className="text-gray-500 dark:text-gray-400">
            $1500 Research Grant for Visual Question Answering (VQA) project.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Skills
        </h2>
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400">
            <strong>Programming Languages:</strong> Python, Java, C, C++, SQL,
            JavaScript, HTML/CSS
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            <strong>Technologies & Tools:</strong> PyTorch, TensorFlow, Flask,
            React, Azure, Power BI, Tableau, OpenCV, NumPy, Pandas, Linux, Git,
            BigQuery
          </p>
        </div>
      </section>
    </div>
  );
}
