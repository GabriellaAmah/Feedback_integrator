import {Schema, model, Document} from 'mongoose'
import { User } from './User'

interface Product extends Document{
    name : string,
    user : User,
    feedbacks? : Array<string>
}

let schema = new Schema({
    name : {
        type : String,
        required : true
    },

    user : {
        type : Schema.Types.ObjectId,
        ref : 'user',
        required : true
    },

    feedbacks : [{
        type : String,
    }]

}, {timestamps : true})

let ProductModel = model<Product>('product', schema)

export {Product, ProductModel}