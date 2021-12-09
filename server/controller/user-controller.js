import User from '../model/User.js';

export const addUser=async(req,res)=>{
    try{
        const exist=await User.findOne({googleId: req.body.googleId});
        if(exist){
            res.status(200).send("user already exists");
            return;
        }
        const newUser=new User(req.body);
        await newUser.save();
        res.status(200).send("user saved successfully")
    } catch(err){
        res.status(500).send(err);
    }
}
export const getUsers=async(req,res)=>{
    try{
        const users=await User.find({});
        res.status(200).send(users);
    } catch(err){
        res.status(500).send(err);
    }
}