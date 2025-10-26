# mongosh

# cls

# show dbs

# use appdb

# show collections

# db.dropDatabase() - delete whole db

# db.users.insertOne({ name: "John" }) -- creating

# db.users.find() -- gets all users

# db.users.insertOne({ name: "Sally", age: 19, address: {street: "Izvora 10"}, hobbies: ["Running"] })

# db.users.insertMany([{ name: "Jill" }, { name: "Mike" }]) -- creating many

# db.users.find().limit(2)

# db.users.find().ship(1).limit(2)

# db.users.find().sort({ name: -1 }).limit(2) ---- sort in alphabet order (1 / -1)

# db.users.find({ name: "Jill" }, {name: 1, age: 1, \_id: 0}) --- returns only name and age but \_id

# db.users.find({ name: "Jill" }, { age: 0 }) --- returns everything but name

## complex

# db.users.find({ name: { $eq: "Sally"} }) --- equal to

# db.users.find({ name: { $ne: "Sally"} }) --- not equal to

# db.users.find({ age: { $gt: 13} }) --- greater than

# db.users.find({ age: { $gte: 13} }) --- greater or equal to

# db.users.find({ age: { $lte: 13} }) --- less than or equal to

# db.users.find({ age: { $gte: 20, $lte: 40} })

# db.users.find({ name: { $in: ["Jill", "Jill2"]} }) --- return if the name equals to this list

# db.users.find({ age: { $exists: true / false } }) --- only if they have age

# db.users.find({ $and: [{age: 26}, { name: "Kyle" }] })

# db.users.find({ $or: [{age: 26}, { name: "Kyle" }] })

# db.users.find({ $or: [{age: {$lte: 26}}, { name: "Kyle" }] })

# db.users.find({ age: { $not: { $lte: 20 } } } ) -- even with null

### more complex

- $expr - expression
 db.users.find({$expr: { $gt: ["$debt", "$balance"]}}) -- find debt greater than balance
  db.users.find({ "address.street": "Izvora 110"}) --- getting street from address

-- db.users.countDocuments({ age: { $lte: 40 } })

### Update

- $set
db.users.updateOne({ age: 18 }, {$set: {age: 25 }} )
db.users.updateOne({ _id: ObjectId("6480345d82e44fcca4b9e825")}, {$set:  {name: "Tsvetomir" }} )

- $inc
db.users.updateOne({ _id: ObjectId("6480345d82e44fcca4b9e825")}, {$inc:  {age: 3}} ) --- adding + 3

- $rename
db.users.updateOne({ _id: ObjectId("6480345d82e44fcca4b9e825")}, {$rename:  {name: "firstName"}} )

- $unset
db.users.updateOne({ _id: ObjectId("6480345d82e44fcca4b9e825")}, {$unset:  {age: ""}} )

- $push
db.users.updateOne({ _id: ObjectId("6480345d82e44fcca4b9e825")}, {$push:  {hobbies: "Swimming"}} )

- $pull
db.users.updateOne({ _id: ObjectId("6480345d82e44fcca4b9e825")}, {$pull:  {hobbies: "Swimming"}} )

- updateMany
db.users.updateMany({ address: {$exists: true}},{$unset: { address: ""}})

- replace
db.users.replaceOne({age: 26}, {name: "John"})

### Delete

- deleteOne
db.users.deleteOne({name: "John"})

- deleteMany
db.users.deleteMany({ age: {$exists: false}})

-------------
db.users.insertMany([
{ name: "Jill", age: 26, hobbies: ["Weight lift", "Bowling"], address: {street: "Izvora 10", city: "Montana"}},
{ name: "Jill2", age: 18, hobbies: ["Weighter", "Running"], address: {street: "Izvora 110", city: "Montana"}}
])
