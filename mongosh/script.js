const mongoose = require("mongoose");
const User = require("./User");

mongoose
  .connect("mongodb://127.0.0.1:27017/")
  .then(() => console.log("Connected Successfully"))
  .catch((err) => {
    console.error(err);
  });

async function run() {
  try {
    // const user = await User.where("age")
    //   .gt("10")
    //   .lt("30")
    //   .where("name")
    //   .populate("bestFriend")
    //   .limit(1)

    // const user = await User.findByName("Tsvetomir")
    // const user = await User.find().byName("Tsvetomir") // only for Query !!!!!!!!!!!!!
    const user = await User.findOne({ name: "Tsvetomir", email: "testov@gmail.com"})
    console.log(user.namedEmail);
    user.sayHi()
  } catch (e) {
    console.log(e.message);
  }
}

// async function run() {

// //   const user = new User({
// //     name: "Tsvetomir",
// //     age: 29,    try {
//         const user = await User.create({
//             name: "Tsvetomir",
//             age: 28,
//             email: "Test@test.com",
//             hobbies: ["Weight lifting", "Bowling"],
//             address: {
//                 street: "Izvora 10",
//                 city: "Montana"
//             }
//           });
//           user.name = "Sally"
//           await user.save()
//           console.log(user);
//     } catch (error) {
//         console.log(error.message);
//     }
// //   });
// //   await user.save();
// }

run();
