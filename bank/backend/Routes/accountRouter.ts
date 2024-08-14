import express from 'express';
import { addAccount, addAction, getAccByNumber } from '../logic/mongoDB_logic';
import { IAccModel } from '../Models/AccountsMongoDB';
import { IActionModel } from '../Models/ActionsMongoDB';

const accountRouter = express.Router();

accountRouter.post('/addAccount', async (req, res) => {
    try {
        const newAccount: IAccModel = req.body;
        const savedAccount = await addAccount(newAccount);
        res.status(201).json(savedAccount);
    } catch (err) {
        return err;
    }
});

accountRouter.post('/addAction', async (req, res) => {
    try {
        const newAction: IActionModel = req.body;
        const savedAction = await addAction(newAction);
        res.status(201).json(savedAction);
    } catch (err) {
        return err;
    }
});

accountRouter.get('/account/:number', async (req, res) => {
    try {
        const number = parseInt(req.params.number);
        const result = await getAccByNumber(number);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

export default accountRouter;