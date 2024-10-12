import React from "react";
export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
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
  </div>;
}
