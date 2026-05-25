import { h } from 'preact';

const skills = [
  { name: 'JavaScript / TypeScript', icon: '⬡', description: 'Node.js & Deno runtimes' },
  { name: 'Preact / React',          icon: '◎', description: 'Frontend frameworks' },
  { name: 'PostgreSQL',              icon: '🐘', description: 'Database design & optimization' },
  { name: 'Linux',                   icon: '◈', description: 'Debian packaging & systemd' },
  { name: 'C / Rust',               icon: '⚙', description: 'Systems programming' },
  { name: 'Embedded',               icon: '◻', description: 'ESP32 & Arduino platforms' },
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
            <span class="skill-icon">{skill.icon}</span>
            <h3 class="skill-name">{skill.name}</h3>
            <p class="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
