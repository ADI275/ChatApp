import Conversation from "../model/conversation";

export const newConversation=async(req,res)=>{
    const senderId=req.body.senderId;
    const receiverId=req.body.receiverId;
    try{
        const exist=await Conversation.findOne({members: {$all: [senderId,receiverId]}});
        if(exist){
            res.status(200).send('conversation already exists');
            return;
        }
        const newConv=new Conversation({
            members: [senderId,receiverId]
        });
        await newConv.save();
        res.status(200).send('new conversation added')
    } catch(err){
        res.status(500).send(err);
    }
}
export const getConversation = async (req, res) => {
    try {
        const conversation = await Conversation.findOne({ members: { $all: [ req.body.sender, req.body.receiver] }});
        res.status(200).json(conversation);
    } catch (err) {
        res.status(500).json(err);
    }
}