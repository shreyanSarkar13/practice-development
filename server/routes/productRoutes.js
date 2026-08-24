import express from "express";
import {
    serverStart, search, searchId, test, api, docs, users,
    getAllProductsController,
    getProductsId,
    addProducts,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";

import { authenticate } from "../middleware/authMiddleware.js";
import authorize from "../middleware/authorize.js";

const router = express.Router();

router.get("/", serverStart);
router.get("/search", search);
router.get("/search/:id", searchId);
router.get("/test", test);
router.get("/api", api);
router.get("/api/docs", docs);
router.post("/users", users);
router.get("/products", authenticate, getAllProductsController);
router.get("/products/:id", getProductsId);
router.post("/products", authenticate, authorize("admin"), addProducts);
router.put("/products/:id", authenticate, updateProduct);
router.delete("/products/:id",deleteProduct);

export default router;