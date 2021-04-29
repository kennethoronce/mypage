import cover from "./img/cover.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h5>
        <b>(Working in progress)</b>
      </h5>
      <h1>Hi!, I'm Kenneth.</h1>
      <p>
        Im trying to make my own page. Where I can put my skills, work
        experience, and portfolio.
      </p>
      <img src={cover} alt="cover-img" />
    </div>
  );
}

export default App;
