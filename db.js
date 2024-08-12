const mongoose=require('mongoose')
require('dotenv').config();

// const mongoURL='mongodb://localhost:27017/restaurant'
const mongoURL=process.env.DB_URL;

mongoose.connect(mongoURL,{
  // useNewUrlParser:true,
  // useUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected',()=>{
  console.log('Connected to  MongoDB Server');
})

db.on('error',(error)=>{
  console.log('MongoDB connection error : ',error);
})

db.on('disconnected',()=>{
  console.log('MongoDB disconnected');
})

module.exports=db;