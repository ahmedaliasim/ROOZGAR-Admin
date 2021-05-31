const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const {jwtkey} = require('../keys')
const router = express.Router();
const Employee = mongoose.model("employee")
const BlockedEmployee = mongoose.model("blockedemployee")
const Client = mongoose.model("client")
const BlockedClient = mongoose.model("blockedclient")
const Vendor = mongoose.model("vendor")
const BlockedVendors = mongoose.model("blockedvendors")
const UnVerifiedVendors = mongoose.model("unverifiedvendors")
const Service = mongoose.model("service")
const BlockedService = mongoose.model("blockedservice")


router.get('/',(req,res)=>{
  Employee.find({}).then(data=>{
      res.send(data)
  }).catch(err=>{
      console.log(err)
  })
  
  
})
router.post('/signup',async (req,res)=>{
   
    const {name,email,password,phone,picture} = req.body;

    try{
      const user = new Employee({name,email,password,phone,picture});
      await  user.save();
      const token = jwt.sign({userId:user._id},jwtkey)
      res.send({employee: user, token: token});

    }catch(err){
      return res.status(422).send(err.message)
    }
    
    
})

router.post('/signin',async (req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).send({error :"must provide email or password"})
    }
    const user = await Employee.findOne({email})
    if(!user){
        return res.status(422).send({error :"invalid email or password"})
    }
    try{
      
      await user.comparePassword(password);  
      const blockedEmployee = await BlockedEmployee.findOne({email});
      if(!blockedEmployee) {
        const token = jwt.sign({userId:user._id},jwtkey)

        return res.send({employee: user, token: token});
      }
      return res.send({error: "Your account has been blocked by admin!"});  
     
    }catch(err){
        return res.status(422).send({error :"must provide email or password"})
    }
    


})

router.post('/delete',(req,res)=>{
  Employee.findByIdAndRemove(req.body.id)
  .then(data=>{
      console.log(data)
      res.send(data)
  })
  .catch(err=>{
      console.log(err)
  })
})

router.get('/services/:_id',async (req, res) => {
  try{
      const vendorId = req.params._id;
      const services = await Service.find({vendorId});
      res.send({services: services});
  }
  catch(err){ 
      return res.send(err.message);
  }
});

router.post('/unblockemp',(req,res)=>{
  BlockedEmployee.findByIdAndRemove(req.body.id)
  .then(data=>{
      console.log(data)
      res.send(data)
  })
  .catch(err=>{
      console.log(err)
  })
})
router.post('/unblockvendor',(req,res)=>{
  BlockedVendors.findByIdAndRemove(req.body.id)
  .then(data=>{
      console.log(data)
      res.send(data)
  })
  .catch(err=>{
      console.log(err)
  })
})
router.post('/unblockclient',(req,res)=>{
  BlockedClient.findByIdAndRemove(req.body.id)
  .then(data=>{
      console.log(data)
      res.send(data)
  })
  .catch(err=>{
      console.log(err)
  })
})

router.post('/update',(req,res)=>{
  Employee.findByIdAndUpdate(req.body.id,{
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      picture:req.body.picture,
      password:req.body.password
  }).then(data=>{
      console.log(data)
      res.send(data)
  })
  .catch(err=>{
      console.log(err)
  })
})

router.post('/blockemp',async (req,res)=>{
   
  const {name,email,password,phone,picture} = req.body;

  try{
    const user = new BlockedEmployee({name,email,password,phone,picture});
    await  user.save();
    const token = jwt.sign({userId:user._id},jwtkey)
    res.send({token})

  }catch(err){
    return res.status(422).send(err.message)
  }
  
  
})

// router.post('/blockedclient',async (req,res)=>{
   
//   const {userName,firstName,lastName,cnic,email,phone,image} = req.body;

//   try{
//     const user = new BlockedClient({userName,firstName,lastName,cnic,email,phone,image});
//     await  user.save();
//     const token = jwt.sign({userId:user._id},jwtkey)
//     res.send({token})

//   }catch(err){
//     return res.status(422).send(err.message)
//   }
  
  
// })


router.post('/blockvendor',async (req,res)=>{
   
  const {userName,firstName,lastName,cnic,email,phone,image} = req.body;

  try{
    const user = new BlockedVendors({userName,firstName,lastName,cnic,email,phone,image});
    await  user.save();
    const token = jwt.sign({userId:user._id},jwtkey)
    res.send({token})

  }catch(err){
    return res.status(422).send(err.message)
  }
  
  
})

router.post('/blockedclient',async (req,res)=>{
   
  const {userName,firstName,lastName,cnic,email,phone,image} = req.body;

  try{
    const user = new BlockedClient({userName,firstName,lastName,cnic,email,phone,image});
    await  user.save();
    const token = jwt.sign({userId:user._id},jwtkey)
    res.send({token})

  }catch(err){
    return res.status(422).send(err.message)
  }
  
  
})

router.get('/getclient',(req,res)=>{
  Client.find({}).then(data=>{
      res.send(data)
  }).catch(err=>{
      console.log(err)
  })
  
  
})

router.get('/getvendor',(req,res)=>{
  Vendor.find({}).then(data=>{
      res.send(data)
  }).catch(err=>{
      console.log(err)
  })
  
  
})
router.get('/getservice',(req,res)=>{
  Service.find({}).then(data=>{
      res.send(data)
  }).catch(err=>{
      console.log(err)
  })
  
  
})
router.get('/getblockedemployee',(req,res)=>{
  BlockedEmployee.find({}).then(data=>{
      res.send(data)
  }).catch(err=>{
      console.log(err)
  })
  
  
})
router.get('/getblockedclient',(req,res)=>{
  BlockedClient.find({}).then(data=>{
      res.send(data)
  }).catch(err=>{
      console.log(err)
  })
  
  
})


router.get('/unverifyvendor',(req,res)=>{
  UnVerifiedVendors.find({}).then(data=>{
      res.send(data)
  }).catch(err=>{
      console.log(err)
  })
  
  
})
router.post('/blockservice',async (req,res)=>{
   
  const {_id,vendorId,vendorName,availibility,title,description,price,image,category,hearts,numComments,isFeatured,dateCreated} = req.body;

  try{
    const user = new BlockedService({_id,vendorId,vendorName,availibility,title,description,price,image,category,hearts,numComments,isFeatured,dateCreated});
    await  user.save();
    const token = jwt.sign({userId:user._id},jwtkey)
    res.send({token})

  }catch(err){
    return res.status(422).send(err.message)
  }
  
  
})
router.get('/getblockedvendor',(req,res)=>{
  BlockedVendors.find({}).then(data=>{
      res.send(data)
  }).catch(err=>{
      console.log(err)
  })
  
  
})

router.get('/getblockedservice',(req,res)=>{
  BlockedService.find({}).then(data=>{
      res.send(data)
  }).catch(err=>{
      console.log(err)
  })
  
  
})

router.post('/verifyvendor',(req,res)=>{
  UnVerifiedVendors.findByIdAndRemove(req.body.id)
  .then(data=>{
      console.log(data)
      res.send(data)
  })
  .catch(err=>{
      console.log(err)
  })
})
router.post('/unblockservice',(req,res)=>{
  BlockedService.findByIdAndRemove(req.body.id)
  .then(data=>{
      console.log(data)
      res.send(data)
  })
  .catch(err=>{
      console.log(err)
  })
})

module.exports = router