import "./App.css";
import { useEffect, useState, useRef } from "react";

function App() {
  const infoRef = useRef();
  const [values, setValues] = useState({
    username: "",
    password: "",
    age: "",
    bio: "",
    gender: "f",
    userType: "corporate",
    tac: false,
    egn: "",
    ek: "",
  });

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]:
        e.target.type == "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // let values = Object.fromEntries(new FormData(e.target))
    // console.log(values);
    console.log(values);
  };

  useEffect(() => {
	if (values.username && values.age) {
		infoRef.current.value = `${values.username} - ${values.age}`
	}
  }, [values.username, values.age]);
  

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
              onChange={changeHandler}
              value={values.username}
            ></input>
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="text"
              name="password"
              value={values.password}
              onChange={changeHandler}
            ></input>
          </div>

          <div>
            <label htmlFor="age">Age:</label>
            <input
              id="age"
              type="number"
              name="age"
              value={values.age}
              onChange={changeHandler}
            ></input>
          </div>

          <div>
            <label htmlFor="bio">Bio:</label>
            <textarea
              name="bio"
              id="bio"
              cols="30"
              rows="10"
              value={values.bio}
              onChange={changeHandler}
            ></textarea>
          </div>

          <div>
            <label htmlFor="gender">Gender:</label>
            <select
              name="gender"
              id="gender"
              value={values.gender}
              onChange={changeHandler}
            >
              <option value="m" selected>
                Male
              </option>
              <option value="f">Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="individual-user-type">Individual:</label>
            <input
              type="radio"
              id="individual-user-type"
              name="userType"
              value="individual"
              checked={values.userType === "individual"}
              onChange={changeHandler}
            ></input>
            <label htmlFor="corporate-user-type">Corporate:</label>
            <input
              type="radio"
              id="corporate-user-type"
              name="userType"
              value="corporate"
              checked={values.userType === "corporate"}
              onChange={changeHandler}
            ></input>
          </div>

          <div>
            <label htmlFor="Identifier">
              {values.userType == "individual" ? "EGN" : "EIK"}{" "}
            </label>
            {values.userType == "individual" ? (
              <input
                type="text"
                id="Identifier"
                name="egn"
                value={values.egn}
                onChange={changeHandler}
              />
            ) : (
              <input
                type="text"
                id="Identifier"
                name="ek"
                value={values.ek}
                onChange={changeHandler}
              />
            )}
          </div>

          <div>
            <label htmlFor="tac">Terms and conditions:</label>
            <input
              type="checkbox"
              id="tac"
              name="tac"
              value={values.tac}
              onChange={changeHandler}
            ></input>
          </div>

          <div>
            <input
              type="submit"
              value="Register"
              disabled={!values.tac}
            ></input>
            {/* <button type="submit">Login</button> */}
          </div>

          <div>
            <labe htmlFor="uncontrolled-input">Uncontrolled input</labe>
            <input
              type="text"
              name="uncontrolled-input"
              id="uncontrolled-input"
			  ref={infoRef}
            ></input>
            {/* <button type="submit">Login</button> */}
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
