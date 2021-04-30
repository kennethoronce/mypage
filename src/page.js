import "./style.css";

function Page() {
  return (
    <div className="Page">
      <header>
        <h1 class="logo">KENNETH ORONCE</h1>
        <input type="checkbox" id="nav-toggle" class="nav-toggle"></input>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <label for="nav-toggle" class="nav-toggle-label">
          <span></span>
        </label>
      </header>
      <div class="content"></div>
    </div>
  );
}

export default Page;
