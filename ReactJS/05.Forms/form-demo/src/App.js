import "./App.css";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState("f");
  const [userType, setUserType] = useState("individual");
  const [tac, setTac] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    // let values = Object.fromEntries(new FormData(e.target))
    // console.log(values);

    console.log("tac: ", tac);
  };

  const userNameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              name="username"
              onChange={userNameChangeHandler}
              value={username}
            ></input>
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div>
            <label htmlFor="age">Age:</label>
            <input
              id="age"
              type="number"
              name="age"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            ></input>
          </div>

          <div>
            <label htmlFor="bio">Bio:</label>
            <textarea
              name="bio"
              id="bio"
              cols="30"
              rows="10"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label htmlFor="gender">Gender:</label>
            <select
              name="gender"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="m" selected>
                Male
              </option>
              <option value="f">Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="individual-user-type">User type:</label>
            <input
              type="radio"
              id="individual-user-type"
              name="userType"
              value="individual"
              onChange={(e) => setUserType(e.target.value)}
              checked={userType === 'individual'}
            ></input>
            <label htmlFor="corporate-user-type">Corporate:</label>
            <input
              type="radio"
              id="corporate-user-type"
              name="userType"
              value="corporate"
              onChange={(e) => setUserType(e.target.value)}
              checked={userType === 'corporate'}
            ></input>
          </div>

          <div>
            <label htmlFor="tac">Terms and conditions:</label>
            <input type="checkbox" id="tac" name="tac" checked={tac} onChange={(e) => setTac(e.target.value == 'on')}></input>
          </div>

          <div>
            <input type="submit" value="Login"></input>
            {/* <button type="submit">Login</button> */}
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
