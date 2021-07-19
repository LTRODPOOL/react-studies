import React from "react";
import logo from "../styles/logo.svg";
import "../styles/App.css";
import AppTemplate from "../components/templates/apps";
import Header from "../components/header";

function App() {
  const [data=[], setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:33000/posts")
      .then((res) => res.json())
      .then((data) => setData(data[0].title));
  }, []);

  return (
    <AppTemplate>
      <Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </Header>
    </AppTemplate>
  );
}

export default App;