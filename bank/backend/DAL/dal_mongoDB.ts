//npm install mongoose

import mongoose from "mongoose";
import config from "../Utils/config";

//create connection to mongodb
const connect = async () : Promise<void> => {
    try{
        const db = await mongoose.connect(config.connectionString);
        console.log("connected to mongoDB");
        // const collection = db.connection.collection(config.collectionName);
        // console.log(`Connected to collection: ${config.collectionName}`);
    } catch (err:any){
        console.log("Error in connection to mongoDB:\n",err);
    }
}

//calling the execute from server.ts

export default{
    connect
}