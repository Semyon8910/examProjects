//getting the methods we need
import express , {NextFunction,Request,Response} from 'express';
import {getAllServers, updateSeverStatus} from '../logic/serversLogic'

const servRouter = express.Router();

servRouter.get(
    "/servers",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{                      
        try{
            const servers = await getAllServers()
            response.status(200).json(servers)
        } catch (err) {
            nextFunction (err);
        }
    }
)

servRouter.post(
    "/severs/updateStatus",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{
        try{
            const newStatus = request.body.status;
            const id = request.body.id
            const updatedStatus = await updateSeverStatus(id, newStatus)
            response.status(201).json(updatedStatus);
        } catch (err) {
            nextFunction (err);
        }
    }
)

export default servRouter;