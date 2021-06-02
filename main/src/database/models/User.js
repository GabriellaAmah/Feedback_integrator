import { Schema, model } from 'mongoose';
let schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    products: {
        type: Schema.Types.ObjectId,
        ref: 'product'
    }
}, { timestamps: true });
let UserModel = model('user', schema);
export { UserModel };
