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
    console.log("Avaliable to Purchase")
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
          var result ={};
         
         
result.id= results[i].id;
result.name= results[i].product_name;
result.price = results[i].price;

          choiceArray.push(result); 
         
        }
console.log(choiceArray);
          
          return choiceArray;},
      message: "What is the id number of the item you would like to buy?"
        },
        {

       name:"quantity",
      type:"input",
        message: "How many?"
      }
    ])
    .then(function(answer) {
        
        var userQuantity = answer.quantity;
        var productname = answer.product_name;
        //console.log(productname);
       connection.query("SELECT * FROM products WHERE product_name ='"+productname+"' ",function(err,result){
         console.log(result)
if (userQuantity < result[0].stock){
console.log("Order Approved");


}else {
console.log("Insufficient quantity!");

}
       })
       stockUpdate();
        })})}
        inquier1();

        function stockUpdate(){
          var updatedStock = stock - userQuantity;
          connection.query("UPDATE stock FROM products WHERE stock > 0", function(err, results) {
            if (err) throw err;
console.log(results);

        })}