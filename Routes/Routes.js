const express=require("express")
const schema=require("./schema")
const router=express.Router()

router.get("/",async(req,res)=>{
      try{
             let data=await schema.find()
             res.json({
              "data":data,
              "status":200,
             })
      }catch(error){
        console.log("getting error get")
      }
})
router.get("/:id",async(req,res)=>{
  try{
         let data=await schema.findById(req.params.id)
        if(data){
          res.json({
            "data":data,
            "status":200,
           })
        }else{
          res.status(404).json({message:"data not found"})
        }
  }catch(error){
   res.status(500).json({error:"unable to search data"})
  }
})
router.post("/",async(req,res)=>{
  // const data=new schema({
  //   name:req.body.name,
  //   email:req.body.email,
  //   phone:req.body.phone,
  //   address:req.body.address,
  //   class:req.body.class,
  //   medium:req.body.medium,
  //   password:req.body.password,
  // })
  try{
    const response= await schema.create(req.body)
      //  const response= await data.save()
       res.json(response)
  }catch(error){
       console.log("getting error post",error)
  }
})

 router.put("/:id",async(req,res)=>{
    try{
              const data=await schema.findByIdAndUpdate(req.params.id,req.body,{
                new:true
              })
              if(data){
                res.status(200).json(data)
              }else{
                res.status(404).json({message:"data not found"})
              }
    }catch(error){
        res.status(500).json({error:error})
    }
 })

router.delete("/:id",async(req,res)=>{
  try{
   
        const deleted_data=await schema.findByIdAndRemove(req.params.id) 
        if(deleted_data){
          res.json(deleted_data)
        }else{
          res.status(404).json({error:"item not found"})
        }
  }catch(error){
    res.status(500).json({error:"could not delete item"})
  }
})


module.exports=router;
