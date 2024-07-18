const User = require('../model/User')

exports.addUser = async(req,res)=>{
    try{
        const {name,email,phone,password}= req.body;

        if(!name || !email || !phone || !password){
            return res.status(400).json({message:'Please fill all the fields'})
        }

        const existingUser = await User.findOne({$and:[{email:email},{phone:phone}]})

        if(existingUser){
            return res.status(500).json({message:'User with same email and phone number already exists'})
        }

        const newUser = new User({
            name,
            email,
            phone,
            password
        })

        const savedUser = await newUser.save()
        return res.status(201).json({message:'User created successfully'})
    }
    catch(err){
        console.log("Error : ",err)
        return res.status(400).json({message:'Internal server error'})
    }
    
}