import express from 'express';
import { addUser,getUsers } from '../controller/user-controller';
import { newConversation,getConversation } from '../controller/conversation-controller';
import { newMessage,getMessage } from '../controller/message-controller'; 

const route=express.Router();

route.post('/add',addUser);
route.get('/users',getUsers);
route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);
route.post('/message/add',newMessage);
route.get('/message/get/:id',getMessage);

export default route;