const mongo = require("mongoose");

const addressSchema = new mongo.Schema({
  street: String,
  city: String,
});

const userSchema = new mongo.Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 100,
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} is not an even number`,
    },
  },
  email: {
    type: String,
    required: true,
    lowercase: true, // upercase as well
    minLength: 5,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  bestFriend: {
    type: mongo.SchemaTypes.ObjectId,
    ref: "User",
  },
  hobbies: [String],
  address: addressSchema,
});

userSchema.methods.sayHi = function () {
  console.log(`Hi. My name is ${this.name}`);
};

userSchema.statics.findByName = function (name) {
  return this.find({ name: new RegExp(name, "i") });
};

userSchema.query.byName = function (name) {
  return this.where({ name: new RegExp(name, "i") });
};

userSchema.virtual("namedEmail").get(function () {
  return `${this.name} <${this.email}>`;
});

userSchema.pre('save', function(next) {
    this.updatedAt = Date.now()
    next()
})

userSchema.post('save', function(doc, next) {
    doc.sayHi()
    next()
})
module.exports = mongo.model("User", userSchema);
