import { h } from 'preact';

const skills = [
  { name: 'JavaScript / TypeScript', icon: 'devicon-typescript-plain', description: 'Node.js & Deno runtimes' },
  { name: 'Preact / React',          icon: 'devicon-react-original',   description: 'Frontend frameworks' },
  { name: 'PostgreSQL',              icon: 'devicon-postgresql-plain',  description: 'Database design & optimization' },
  { name: 'Linux',                   icon: 'devicon-linux-plain',       description: 'Debian packaging & systemd' },
  { name: 'C / Rust',               icon: 'devicon-rust-plain',        description: 'Systems programming' },
  { name: 'Embedded',               icon: 'devicon-arduino-plain',     description: 'ESP32 & Arduino platforms' },
];

export default function Skills() {
  return (
    <section class="skills-section">
      <div class="skills-header">
        <span class="section-label">// expertise</span>
        <h2 class="section-title">Skills & Technologies</h2>
        <p class="section-subtitle">Technologies I work with regularly</p>
      </div>
      <div class="skills-grid">
        {skills.map((skill, i) => (
          <div class="skill-card" key={i}>
            <i class={`skill-icon ${skill.icon}`}></i>
            <h3 class="skill-name">{skill.name}</h3>
            <p class="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
