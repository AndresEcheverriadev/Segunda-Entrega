import mongoose from "mongoose";
const { Schema, model } = mongoose;
import { ProductosSchema } from "./ProductosSchema";

const CarritosCollection = "carts";

const CartsSchema = new Schema(
    {
        nombre: { type: String, required: true, max: 100 },
        products: [ProductosSchema],
    },
    {
        virtuals: true,
        timestamps: true,
    }
);

const CarritosModel = model(CarritosCollection, CartsSchema);

export { CarritosModel,CartsSchema }