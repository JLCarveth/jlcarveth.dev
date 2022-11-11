export default function Sidebar() {
  return (
    <div class="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width=280px">
      <a class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" href="/">JLCarveth.dev</a>
      <hr/>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a class="nav-link active text-white" href="#" aria-current="page">
              <img class="bi me-2 text-white" src="/img/house.svg" width="16" height="16" alt="Home"/>
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="https://blog.jlcarveth.dev">
            <img class="bi me-2 text-white" src="/img/journal-text.svg" width="16" height="16" alt="Blog"/>
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
}
