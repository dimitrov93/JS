const regForm = document.querySelector('#register-view');
const register = regForm.querySelector('#register')

register.addEventListener('submit', (e) => {
    e.preventDefault();
    let form = new FormData(e.currentTarget)
    let email = form.get('email');
    let password = form.get('password');
    let repeat = form.get('repeat');

    fetch('http://localhost:3030/users/register', {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email,password}),
      })
      .then(res => res.json())
      .then(user => {
          localStorage.setItem('_id', user._id)
          localStorage.setItem('email', user.email)
          localStorage.setItem('password', user.password)
      })
      .catch(err => {
          console.log(err);
      })
})


// function solve(e) {
//   let formData = new FormData(e.currentTarget);
//   let email = formData.get('email');
//   let password = formData.get('passowrd')

//   let button = document.querySelectorAll("#register button")[0];
//   button.addEventListener("click", (e) => {
//     e.preventDefault();

//     const url = `http://localhost:3030/users/register`;
    
    // fetch(url, {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({email,password}),
    // })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Success:", data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   });
// }

// solve();
