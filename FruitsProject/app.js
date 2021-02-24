const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB');

//Connection URL
const url = ('mongodb://localhost:27017', { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const pineapple = new Fruit ({
  name: "Pineapple",
  rating: 10,
  review: "Pineapples are great!"
});

//pineapple.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
  name: "Kiran",
  age: 37,
  favouriteFruit: pineapple
});

//person.save();

// const kiwi = new Fruit({
//   name: "kiwi",
//   score: 10,
//   review: "The best fruit."
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   score: 4,
//   review: "Too sour for me."
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   score: 3,
//   review: "Weird texture."
// });

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all fruits to fruitsDB");
//   }
// });

// Fruit.find(function(err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//
//     fruits.forEach(function(fruit) {
//       console.log(fruit.name);
//       mongoose.connection.close();
//     });
//   }
// });

Person.updateOne({_id: "5ffc5d106d1a6808b7cd837e"}, {favouriteFruit: pineapple}, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document.");
  }
})

// Person.deleteOne({_id: "5ffc6102e004bd08e11b90c9"}, function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document.");
//   }
// })

// Person.deleteMany({name: "Sowmya"}, function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the documents.");
//   }
// })
