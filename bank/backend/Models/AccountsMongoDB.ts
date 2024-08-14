import { Document,Schema,model } from "mongoose";
import { ActionModel } from "./ActionsMongoDB";


//model interface describing the data in the model
export interface IAccModel extends Document{
    //don't specify the _id here !!!!
    number: string;
    action?: ActionType;
}

type ActionType = DepositAction | WithdrawalAction | CreditAction;


interface DepositAction {

    type: "deposit";

    amount: number;

    date: Date;
}


interface WithdrawalAction {

    type: "withdrawal";

    amount: number;

    date: Date;

}


interface CreditAction {

    type: "credit";

    amount: number;

    interestRate: number;

    numberOfPayments: number;

    date: Date;

}

const AccSchema = new Schema<IAccModel>(
    {
        //url
        number:{
            type: String,
            required: [true, "missing account number"], //is it required and error code
            minlength: [ 3, "number too short"], //minimum length and error code
            maxlength: [10, "number too long"], //maximum length and error code
            trim: true, //clear white spaces
            unique: false //is it unique
        },
        action: {
            type: Schema.Types.Mixed,
        }
    }, {
        versionKey: false, //do not create _v field for versioning
        toJSON: {virtuals: true}
    }
);

export const AccModel = model<IAccModel>("accModel", AccSchema, "Accounts");