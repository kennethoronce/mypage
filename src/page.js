import "./style.css";

function Page() {
  return (
    <div className="Page">
      <header>
        <a href="#" className="logo">
          <h1>Keronobi</h1>
        </a>
        <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Experiments</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
      </header>
      <div className="content"></div>
    </div>
  );
}

export default Page;
