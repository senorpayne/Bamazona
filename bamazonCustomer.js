var inquirer = require('inquirer');
var mysql = require("mysql");



var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "bamazon"
  });
  
  connection.connect(function(err,res) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId)
  });
function inquier1(){

    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;


  inquirer
  .prompt([
    {
      name: "product_name",
      type: "rawlist",
      choices: function() {
        var choiceArray = [];
        for (var i = 0; i < results.length; i++) {
          choiceArray.push(results[i].product_name);}
          return choiceArray;
      message: "What is the id number of the item you would like to buy?"},

       name:"quanity",
      type:"input",
        message: "How many?"
      }
    ])
    .then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        chosenItem--  })})}
        inquier1();