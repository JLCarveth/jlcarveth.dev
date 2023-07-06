export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <ul class="nav nav-pills ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/JLCarveth">
              <i class="bi-git me-2" role="img" aria-label="Git" />
              <span class="d-md-inline">GitHub</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://blog.jlcarveth.dev">
              <i class="bi-journals me-2" role="img" aria-label="Blog" />
              <span class="d-md-inline">Blog</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
