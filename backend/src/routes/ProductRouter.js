import express from "express"
import { addProduct, deleteProduct, getProducts } from "../controllers/ProductController.js";

const productRouter =  express.Router()


productRouter.post("/", upload.single("image"), addProduct);
productRouter.get("/", getProducts);
productRouter.delete("/:id", deleteProduct);

export default productRouter