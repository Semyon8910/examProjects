import bodyParser from "body-parser"
import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import config from "./Utils/config"
import ErrorHandler from "./MiddleWare/routeNotFound";
import dal_mongodb from "./DAL/dal_mongoDB";
import accountRouter from "./Routes/accountRouter";

//import ErrorHandler
//import router 
//import carRouter

//create server
const server = express();

//cors = cross origin research sharing...
server.use(cors());

//how we send the data back (JSON,XML,RAW,String)
server.use(express.json());

//where i will save my files from upload
server.use(express.static("upload"));

//enable file uploading, and create a path for the files if it no exists
server.use(fileUpload({createParentPath: true}));

//make the connection to mongoDB
dal_mongodb.connect();

//using routes = > http://localhost:8080/api/v1/transport
server.use("/api/v1/accounts", accountRouter);
//404 handler
server.use("*",ErrorHandler);

//start the server
server.listen(config.webPort, ()=>{
    console.log (`listing on http://${config.webHost}:${config.webPort}`);
})