import axios from 'axios';

const URL='http://localhost:8000';
export const addUser=async(data)=>{
    try{
        return await axios.post(`${URL}/add`,data);
    } catch(err){
        console.log(err);
    }
}
export const getUsers=async()=>{
    try{
        const {data}=await axios.get(`${URL}/users`);
        return data;
    } catch(err){
        console.log(err);
    }
}
export const setConversation=async(data)=>{
    try{
        await axios.post(`${URL}/conversation/add`,data);
    } catch(err){
        console.log('err in setConversation',err);
    }
}
export const getConversation=async(users)=>{
    try{
        const {data}=await axios.post(`${URL}/conversation/get`,users);
        return data;
    } catch(err){
        console.log('error in getConversation',err);
    }
}
export const newMessage=async(data)=>{
    try{
        await axios.post(`${URL}/message/add`,data);
    } catch(err){
        console.log('error in newMessage',err);
    }
}
export const getMessages=async(id)=>{
    try{
        return await axios.get(`${URL}/message/get/${id}`);
    } catch(err){
        console.log('error in getMessage',err);
    }
}