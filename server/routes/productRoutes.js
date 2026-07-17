import express from "express";
import {
    serverStart, search, searchId, test, api, docs, users,
    getProducts,
    getProductsId,
    addProducts,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", serverStart);
router.get("/search", search);
router.get("/search/:id", searchId);
router.get("/test", test);
router.get("/api", api);
router.get("/api/docs", docs);
router.post("/users", users);
router.get("/products", getProducts);
router.get("/products/:id", getProductsId);
router.post("/products", addProducts);
router.put("/products/:id", updateProduct);
router.delete("/product/:id", deleteProduct);
export default router;