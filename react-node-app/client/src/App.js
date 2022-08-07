// client/src/App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cookies from 'js-cookie';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));

    fetch("/increase", { method: 'PUT' })
  }, []);

  function decrease() {
    fetch("/decrease", { method: 'PUT'})
  }

  function reset() {
    fetch("/reset", { method: 'PUT'})
  }

  function increase() {
    fetch("/increase", { method: 'PUT'})
  }

  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <p>Counter: {Cookies.get('counter')}</p>
        <p>
        <button className="all_buttons" id="decrease" onClick={decrease}>-</button>
        <button className="all_buttons" id="reset" onClick={reset}>RESET</button>
        <button className="all_buttons" id="increase" onClick={increase}>+</button>
        </p>
      </header>
    </div>
  );
}

export default App;