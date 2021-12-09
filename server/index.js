import express, { application } from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import Routes from './routes/Route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();
const app=express();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',Routes);


const PORT=8000;
const username=process.env.MONGO_USERNAME;
const password=process.env.MONGO_PASSWORD;
Connection({username,password});
app.listen(PORT,()=>{
    console.log(`Server is runnning on port ${PORT}`);
})