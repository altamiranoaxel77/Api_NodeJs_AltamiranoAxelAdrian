import { Schema ,model } from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    salers_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
    ,
    image: {
        type: String,
        default: ""
    },
    active: {
        type: Boolean,
        default: true
    }
})

const Product = model("Product", productSchema)

export default Product