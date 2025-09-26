import { h } from 'preact';

export default function Skills() {
  const skills = [
    {
      name: 'JavaScript/TypeScript',
      icon: '🟨',
      description: 'Node.js & Deno',
      color: 'var(--amber-400)'
    },
    {
      name: 'Preact/React',
      icon: '⚛️',
      description: 'Frontend frameworks',
      color: 'var(--blue-400)'
    },
    {
      name: 'PostgreSQL',
      icon: '🐘',
      description: 'Database design',
      color: 'var(--blue-600)'
    },
    {
      name: 'Linux',
      icon: '🐧',
      description: 'Debian packaging & systemd',
      color: 'var(--slate-700)'
    },
    {
      name: 'C/Rust',
      icon: '⚙️',
      description: 'Systems programming',
      color: 'var(--orange-600)'
    },
    {
      name: 'Embedded',
      icon: '🔧',
      description: 'ESP32 & Arduino',
      color: 'var(--green-600)'
    },
  ];

  return (
    <section class="skills-section">
      <div class="skills-container">
        <h2 class="skills-title">Skills & Technologies</h2>
        <p class="skills-subtitle">Technologies I work with regularly</p>

        <div class="skills-grid">
          {skills.map((skill, index) => (
            <div class="skill-card" key={index}>
              <div class="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 class="skill-name">{skill.name}</h3>
              <p class="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
