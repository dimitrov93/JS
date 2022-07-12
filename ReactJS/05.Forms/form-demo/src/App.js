	import "./App.css";
	import { useState } from "react";

	function App() {
	const [values, setValues] = useState({
		username: '',
		password: '',
		age: '',
		bio: '',
		gender: 'f',
		userType: 'corporate',
		tac: false,
	});

	const changeHandler = (e) => {
		console.log(e.target.name, ' - ' , e.target.value);
		setValues(state => ({
			...state, 
			[e.target.name]: e.target.value
		}))
	}

	const onSubmit = (e) => {
		e.preventDefault();
		// let values = Object.fromEntries(new FormData(e.target))
		// console.log(values);
		console.log(values);
	};

	const checkboxChangeHandler = (e) => {
		console.log(e.target.name, ' - ' , e.target.value);
		setValues(state => ({
			...state, 
			[e.target.name]: !state[e.target.name]
		}))
	}

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
				<label htmlFor="individual-user-type">User type:</label>
				<input
				type="radio"
				id="individual-user-type"
				name="userType"
				value={values.userType === "individual"}
				onChange={changeHandler}
				></input>
				<label htmlFor="corporate-user-type">Corporate:</label>
				<input
				type="radio"
				id="corporate-user-type"
				name="userType"
				value={values.userType === "corporate"}
				onChange={changeHandler}
				></input>
			</div>

			<div>
				<label htmlFor="tac">Terms and conditions:</label>
				<input
				type="checkbox"
				id="tac"
				name="tac"
				value={values.tac}
				onChange={checkboxChangeHandler}
				></input>
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
