const express=require('express');
const router=express.Router();
const Person=require('./../models/Person.js');


router.get('/',async(req,res)=>{
  try{
    const data= await Person.find();
    res.status(200).json(data);
  }
  catch(err){
    res.status(500).json({err:"error occured"});
  }
})

router.post('/',async(req,res)=>{
  try{
    const data=req.body
    const newPerson=new Person(data);

    const response=await newPerson.save();
    console.log('data saved');
    res.status(200).json(response)
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server Error'})
  }


  // newPerson.save((error,savedperson)=>{
  //   if(error){
  //     console.log('Error saving person : ',error);
  //     res.status(500).json({erroor: 'Internal server error'})
  //   }
  //   else{
  //     console.log('data saved successfully');
  //     res.status(200).json(savedperson);
  //   }
  // })

  //save function now dont accept this type of callback functions and  also it it complex

  //so we use async await
})

router.get('/:workType',async (req,res)=>{
  try{
    const workType=req.params.workType;
    if(workType==='chef' || workType==='manager' || workType==='waiter'){
      const response=await Person.find({work: workType});
      console.log('response fetched');
      res.status(200).json(response);
    }else{
      res.status(404).json({error: 'Invalid work type'});
    }
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
  }
})

router.put('/:id',async (req,res)=>{
  try{
    const personId=req.params.id;
    const updatedPersonData=req.body;
    const response= await Person.findByIdAndUpdate(personId,updatedPersonData,{
      new:true,
      runValidators:true,
    })
    console.log('data updated');
    res.status(200).json(response);

    if(!response){
      return res.status(404).json({error:'Person not found'});
    }
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
  }
})

router.delete('/:id',async(req,res)=>{
  try{
    const personId=req.params.id;
    const response=await Person.findByIdAndDelete(personId);
    if(!response){
      return res.status(404).json({error:'Person not found'});
    }
    console.log('data deleted');
    res.status(200).json({message:'data deleted successfully'});
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
  }
})
module.exports=router;