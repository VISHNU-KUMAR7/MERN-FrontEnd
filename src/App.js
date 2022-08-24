import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://backend-dev-01.herokuapp.com/";

function App() {
  const [post, setPost] = useState(null);
  const [sample, setSample] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get(`${baseURL}all`).then((response) => {
      setSample(response.data);
      console.log(response.data[0]);
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>{post}</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button> Show Table</button>
        {sample ? sample[0]["limit"] : "Data not found"}
      </header>
    </div>
  );
}

export default App;
