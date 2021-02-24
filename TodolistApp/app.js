const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
//const date = require(__dirname + "/date.js");
//console.log(date);

// const items = ["Buy Food", "Cook Food", "Eat Food"];
// const workItems = [];

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

mongoose.connect('mongodb+srv://admin-sowmya:Test123@cluster0.mvmzm.mongodb.net/todolistDB', {useNewUrlParser: true});

const itemsSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item ({
  name: "Welcome to your todolist!"
});

const item2 = new Item ({
  name: "Hit the + button to add a new item."
});

const item3 = new Item ({
  name: "<-- Hit this to delete an item."
});

const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema]
}

const List = mongoose.model("List", listSchema);

app.get("/", function(req, res) {

  Item.find({}, function(err, results) {

    if(results.length === 0) {
      Item.insertMany(defaultItems, function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("Successfully added the documents.");
        }
      });
      res.redirect("/");
    } else {
      res.render("list", {listTitle: "Today", newListItems: results});
    }
    });
});

app.get("/:formName", function(req, res) {
  const customListName = _.capitalize(req.params.formName);

  const list = new List({
    name: customListName,
    items: defaultItems
  });
  List.findOne({name: customListName}, function(err, foundList) {
    if(!err) {
      if(foundList) {
        //Show an existing list
        res.render("list", {listTitle: foundList.name, newListItems: foundList.items});
      } else {
        //Create a new list
        const list = new List({
          name: customListName,
          items: defaultItems
        });
        list.save();
        res.redirect("/" + customListName);
      }
    }
  })

});

app.post("/", function(req, res) {

  const itemName = req.body.newItem;
  const listName = req.body.list;

  const newItem = new Item ({
    name: itemName
  });

  if(listName === "Today") {
    newItem.save();
    res.redirect("/");
  } else {
    List.findOne({name: listName}, function(err, foundList) {
      foundList.items.push(newItem);
      foundList.save();
      res.redirect("/" + listName);
    })
  }
});

app.post("/delete", function(req, res) {
  const deleteItemId = req.body.checkbox;
  const listName = req.body.listName;
  if(listName === "Today") {
    Item.findByIdAndRemove(deleteItemId, function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("Successfully deleted checked item.");
        res.redirect("/");
      }
    });
  } else {
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: deleteItemId}}}, function(err, foundList) {
      res.redirect("/" + listName);
    });
  }
});

app.post("/work", function(req, res) {

  var workItem = req.body.newItem;
  workItems.push(workItem);

  res.redirect("/work");
})

app.get("/about", function(req, res) {
  res.render("about");
});

let port = process.env.PORT;
if(port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started successfully");
})
