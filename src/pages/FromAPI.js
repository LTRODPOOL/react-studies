import React from "react";
import logo from "../styles/logo.svg";
import "../styles/App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:33000/posts")
      .then((res) => res.json())
      .then((data) => setData(data[0].content));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;