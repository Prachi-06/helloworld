// function add(a,b){
//   return a+b;
// }

// var add=function(a,b){
//   return a+b;
// }

// var add=(a,b)=>{return a+b}

// var add=(a,b)=>a+b;

// var result=add(4,5);
// console.log(result);

// (function(){
//   console.log("Prachi");
// })();  //immediately invoked function


// //CallBack Function

// function greet(name, callback) {
//   console.log('Hello, ' + name + '!');
//   callback(); // Invoke the callback function
// }

// function sayGoodbye() {
//   console.log('Goodbye!');
// }

// // Using greet function with callback
// greet('Alice', sayGoodbye);

// // Output:
// // Hello, Alice!
// // Goodbye!

// // var fs=require('fs');
// // var os=require('os');

// // var user=os.userInfo();
// // console.log(user);
// // console.log(user.username);

// // fs.appendFile('greeting.txt','Hi '+user.username+'!\n',()=>{
// //   console.log("File is created");
// }); 

// const notes=require('./notes.js');

// var age=notes.age;
// console.log(age);

// console.log(notes.addNumber(2,5));


//LODASH

// var _=require('lodash');

//lodash has many properties that could be use to overcome complexities

//Example
// var data=[1,2,3,4,5,1,2,3,4,];
// //we need to find unique
// var filter=_.uniq(data);
// console.log(filter); //[ 1, 2, 3, 4, 5 ]

//Day-3

//json to object
// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
//  const jsonObject = JSON.parse(jsonString); // Convert JSON string to object
//  console.log(jsonObject.name);//John

//  //object to json
//  const objectToConvert = { name: "Alice", age: 25 };
//  const jsonStringified = JSON.stringify(objectToConvert); // Convert object JSON string
//  console.log(jsonStringified);

//  console.log(typeof jsonStringified); //string

const express=require('express');
const app=express();

app.get('/',(req,res)=>{
  res.send("Hello World");
})

app.get('/idli',(req,res)=>{
  res.send("I love idli");
})

app.listen(4000);


 







