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

const personRoutes=require('./routes/personRoutes.js')
app.use('/person',personRoutes);

const Port=process.env.PORT || 3000

app.listen(Port);