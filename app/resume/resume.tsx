import React from "react";

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>My Resume</h1>

      {/* Embedded PDF */}
      <iframe
        src="/resume.pdf"
        width="100%"
        height="600px"
        className="pdf-viewer"
      >
        Your browser does not support iframes.
      </iframe>

      {/* Download Button */}
      <a
        href="/resume.pdf"
        download="Syed_Ali_Haider_resume.pdf"
        className="download-button"
      >
        Download CV
      </a>
    </div>
  );
};

export default Resume;
