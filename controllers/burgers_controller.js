// var express = require("express");

// var router = express.Router();
// var burger = require("../models/burger");

// // get route -> index
// router.get("/", function(req, res) {
//   res.redirect("/burgers");
// });

// router.get("/burgers", function(req, res) {
//   // express callback response by calling burger.selectAllBurger
//   burger.all(function(data) {
//     // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
//     var hbsObject = { burgers: data };
//     res.render("index", hbsObject);
//   });
// });

// // post route -> back to index
// router.post("/burgers/create", function(req, res) {
//   // takes the request object using it as input for buger.addBurger
//   burger.create(req.body.burger_name, function(result) {
//     // wrapper for orm.js that using MySQL insert callback will return a log to console,
//     // render back to index with handle
//     console.log(result);
//     res.redirect("/");
//   });
// });

// // put route -> back to index
// router.put("/burgers/update", function(req, res) {
//   burger.update(req.body.burger_id, function(result) {
//     // wrapper for orm.js that using MySQL update callback will return a log to console,
//     // render back to index with handle
//     console.log(result);
//     res.redirect("/");
//   });
// });

// module.exports = router;


// Requiring our Burger model
var db = require("../models");

//Routes
module.exports = function(app){

//GET route to redirect
app.get('/', function(req, res){
    res.redirect("/api/all");
  })


//GET route to show all of the burgers
app.get("/api/all", function(req, res){
  db.burgers_db.findAll({}).then(function(dbBurger){
    res.render("index", {burgers: dbBurger});
  });
});


//POST route for saving/posting a new burger
app.post("/api/burgers", function(req, res){
  db.burgers_db.create({
    burger_name: req.body.burger_name,
    devoured: false
  }).then(function(dbBurger){
    res.redirect("/api/all")
  });
});


//PUT route for updating devoured burgers
app.put("/api/:id", function(req, res){
  db.burgers_db.update({
    devoured: true
  }, {
    where: {
      id: req.body.id
    }
  }).then(function(dbBurger){
    res.redirect("/api/all")
  });
});


}
