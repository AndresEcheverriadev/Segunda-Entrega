import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ProductosCollection = "products";

const ProductosSchema = new Schema(
    {
    title: {type: String, required: true,max: 100},
    price: {type: Number, required: true,max: 100},
    thumbnail: {type: String, required: true},
    stock: {type: Number, required: true,max: 100},
    timestamp: {type: Date}
    },
);

const ProductosModel = model(ProductosCollection, ProductosSchema);

export { ProductosModel,ProductosSchema }