import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <p>
            This project was coded by Alissa Woods and is{" "}
            <a
              href="https://github.com/alissafwoods/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and hosted on Netlify.
          </p>
        </footer>
      </div>
    </div>
  );
}
