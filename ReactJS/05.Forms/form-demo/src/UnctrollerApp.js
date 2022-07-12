import "./App.css";

function App() {

  const onSubmit = (e) => {
    e.preventDefault();
    const {username, password} = Object.fromEntries(new FormData(e.currentTarget))

  }


  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input id="username" type="text" name="username"></input>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input id="password" type="text" name="password"></input>
          </div>
          <div>
            <input type="submit" value="Login" ></input>
            {/* <button type="submit">Login</button> */}
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
