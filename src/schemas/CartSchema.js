import mongoose from "mongoose";
const { Schema, model } = mongoose;
import { ProductosSchema } from "./ProductosSchema.js";

const CarritosCollection = "carts";

const CartSchema = new Schema(
    {
        nombre: { type: String, required: true, max: 100 },
        products: [ProductosSchema],
    },
    {
        virtuals: true,
        timestamps: true,
    }
);

const CarritosModel = model(CarritosCollection, CartSchema);

export { CarritosModel,CartSchema }