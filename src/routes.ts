// src/productRouter.ts
import { Router } from "express";
import * as controller from "./controllers";

const productRouter = Router();

productRouter.get("/products", controller.getAllProducts);
productRouter.get("/products/:id", controller.getProductById);
productRouter.post("/products", controller.createProduct);
productRouter.put("/products/:id", controller.updateProduct);
productRouter.delete("/products/:id", controller.deleteProduct);

export default productRouter;
