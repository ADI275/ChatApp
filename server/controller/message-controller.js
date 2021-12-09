import Message from "../model/message.js";
import conversation from "../model/conversation.js";

export const newMessage=async(req,res)=>{
    const newMessage=new Message(req.body);
    try{
        await newMessage.save();
        await conversation.findByIdAndUpdate(req.body.conversationId,{message: req.body.text});
        res.status(200).send('message saved');
    } catch(err){
        res.status(500).send(err);
    }
}
export const getMessage=async(req,res)=>{
    try{
        const messages=await Message.find({conversationId: req.params.id});
        res.status(200).send(messages);
    } catch(err){
        res.status(500).send(err);
    }
}