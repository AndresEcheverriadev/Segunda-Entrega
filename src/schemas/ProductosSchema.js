import mongoose from "mongoose"

const productosSchema = new mongoose.Schema({
    title: {type: String, required: true,max: 100},
    price: {type: Number, required: true,max: 100},
    thumbnail: {type: String, required: true},
    stock: {type: Number, required: true,max: 100},
    timestamp: {type: Date}
})

export { productosSchema }