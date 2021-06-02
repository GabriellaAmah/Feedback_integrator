import {Schema, model, Document} from 'mongoose'
import { Product } from './Products'

interface User extends Document{
    name : string,
    email : string,
    password : string,
    category : string,
    products? : Product,
    updatedAt? : Date,
    createdAt? : Date
}

let schema = new Schema({
    name : {
        type : String,
        required : true
    },

    email :  {
        type : String,
        required : true
    },

    password :  {
        type : String,
        required : true
    }, 

    category :  {
        type : String,
        required : true
    },

    products : {
        type : Schema.Types.ObjectId,
        ref : 'product'
    }

}, {timestamps : true})

let UserModel = model<User>('user', schema)

export { UserModel, User}