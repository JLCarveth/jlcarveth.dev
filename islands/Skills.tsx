import { h } from 'preact';

export default function Skills() {
  const skills = [
    { name: 'JavaScript', icon: 'js' },
    { name: 'TypeScript', icon: 'ts' },
    { name: 'React', icon: 'react' },
    { name: 'Deno', icon: 'deno' },
    { name: 'Node.js', icon: 'node' },
    { name: 'Linux', icon: 'linux' },
  ];

  return (
    <div class="container text-center my-5">
      <h2 class="display-5 fw-bold lh-1 mb-3">Skills</h2>
      <div class="row justify-content-center">
        {skills.map((skill) => (
          <div class="col-md-4 col-lg-2 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <i class={`bi bi-${skill.icon} fs-1`}></i>
                <h5 class="card-title mt-3">{skill.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
