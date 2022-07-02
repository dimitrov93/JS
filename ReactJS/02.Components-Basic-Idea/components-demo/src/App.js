import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import React from 'react';

function App() {
    // const headerElemenet = React.createElement(Header, {title: 'Hello from props'})


  return (
    <div className="App">
      <header className="App-header">
        {/* {headerElemenet} */}
        <Header title = 'Hello from props'/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
