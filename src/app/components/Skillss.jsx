import React from "react";
import "../styles/globas.css"; // import file css

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>skills</h2>
      <div className="skills-container">
        <div className="skill-card">
          <img src="/html.jpg" alt="HTML" />  {/* ganti ke gambar lokal */}
          <h3>HTML</h3>
          <p>Basic html</p>
        </div>

        <div className="skill-card">
          <img src="/css.jpg" alt="CSS" />   {/* ganti ke gambar lokal */}
          <h3>CSS</h3>
          <p>Basic css</p>
        </div>

        <div className="skill-card">
          <img src="/javascript.jpg" alt="JavaScript" /> {/* ganti ke gambar lokal */}
          <h3>JavaScript</h3>
          <p>Basic javascript</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
