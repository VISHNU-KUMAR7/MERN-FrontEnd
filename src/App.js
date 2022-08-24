import logo from "./logo.svg";
import "./App.css";

function App() {
  let data = new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get("https://backend-dev-01.herokuapp.com/");
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>{data}</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
