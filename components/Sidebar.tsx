export default function Sidebar() {
  return (
    <div id="sidebar" class="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
      <div class="sidebar-header">
        <h3>JLCarveth.dev</h3>
        <strong>JLC.DEV</strong>
      </div>
      <hr/>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a class="nav-link active text-white" href="#" aria-current="page">
            <i class="bi-house me-2" role="img" aria-label="home"></i>
            <span class="d-none d-md-inline">Home</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="https://blog.jlcarveth.dev">
            <i class="bi-journal-text me-2" aria-label="Blog"></i>
            <span class="d-none d-md-inline">Blog</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="https://github.com/JLCarveth">
            <i class="bi-github me-2" aria-label="GitHub"></i>
            <span class="d-none d-md-inline">GitHub</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
