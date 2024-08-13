const express=require('express');
const app=express();
const db=require('./db');
require('dotenv').config();

const bodyparser=require('body-parser');
app.use(bodyparser.json())

const Person=require('./models/Person.js')

app.get('/',(req,res)=>{
  res.send("Hello World");
})

app.get('/idli',(req,res)=>{
  res.send("I love idli");
})

// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

const Port=process.env.PORT || 3000

app.listen(Port);