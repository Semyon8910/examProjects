

//CRUD -> Create Read Update Delete

import { ActionModel, IActionModel } from "../Models/ActionsMongoDB";
import { AccountNotFound, ClientError } from "../Models/ClientsErrors";
import { IAccModel, AccModel } from "../Models/AccountsMongoDB";


//Create (sql: insert into accounts)
const addAccount = async (newAccount: IAccModel): Promise<IAccModel> => {
    const account = new AccModel(newAccount);
    const errors = account.validateSync();
    if (errors) throw new ClientError(400, "errors:\n" + errors);
    return await account.save();
}

//create action new item
const addAction = async (newAction: IActionModel): Promise<IActionModel> => {
    const action = new ActionModel(newAction);
    const errors = action.validateSync();
    if (errors) throw new ClientError(400, "errors:\n" + errors);
    return await action.save();
}

const getAccByNumber = async (number: number): Promise<{ account: IAccModel, actions: IActionModel[] }> => {
    const singleAccount = await AccModel.findOne({ number }).exec();
    if (!singleAccount) throw new AccountNotFound(`account # ${number} is not in the system`);
    
    const actions = await ActionModel.find({ accountId: singleAccount._id }).exec();
    
    return { account: singleAccount, actions };
}

export {
    addAccount,
    addAction,
    getAccByNumber,
}