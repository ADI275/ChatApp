import mongoose from 'mongoose';

const Connection=async({username,password})=>{
    const URL=`mongodb+srv://${username}:${password}@chatapp.uyhc0.mongodb.net/PROJECT0?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("connected to database");
    } catch(err){
        console.log(err);
    }
}
export default Connection;