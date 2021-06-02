import { Schema, model } from 'mongoose';
let schema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    feedbacks: [{
            type: String,
        }]
}, { timestamps: true });
let ProductModel = model('product', schema);
export { ProductModel };
