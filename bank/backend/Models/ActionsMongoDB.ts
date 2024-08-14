import { Document, Schema, model } from "mongoose";
import { IAccModel } from "./AccountsMongoDB";


// Define the action types
type ActionType = "deposit" | "withdrawal" | "credit";


// Interface for the action model
export interface IActionModel extends Document {

    accountId: Schema.Types.ObjectId;
    type: ActionType;
    amount: number;
    date: Date;
    interestRate?: number;
    numberOfPayments?: number;

}

const ActionSchema = new Schema<IActionModel>(

    {
        accountId: {
            type: Schema.Types.ObjectId,
            ref: "accModel",
            required: true
        },
        type: {
            type: String,
            enum: ["deposit", "withdrawal", "credit"],
            required: [true, "missing action type"]
        },

        amount: {
            type: Number,
            required: [true, "missing amount"]
        },

        date: {
            type: Date,
            required: [true, "missing date"]
        },

        interestRate: {
            type: Number,
            required: function() { return this.type === "credit"; }
        },

        numberOfPayments: {
            type: Number,
            required: function() { return this.type === "credit"; }
        }
    }, {
        versionKey: false, // Do not create _v field for versioning

    }

);

export const ActionModel = model<IActionModel>("actionModel", ActionSchema, "Actions");
