// import express from "express"
// import { addProduct, deleteProduct, getProducts } from "../controllers/ProductController.js";

// const productRouter =  express.Router()


// productRouter.post("/", upload.single("image"), addProduct);
// productRouter.get("/", getProducts);
// productRouter.delete("/:id", deleteProduct);

// export default productRouter

// import express from "express"
// import { addProduct, deleteProduct, getProducts } from "../controllers/ProductController.js";
// import multer from "multer"; 


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/images'); 
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname); 
//   }
// });

// const upload = multer({ storage }); 

// const productRouter = express.Router();

// productRouter.post("/", upload.single("image"), addProduct);
// productRouter.get("/", getProducts);
// productRouter.delete("/:id", deleteProduct);

// export default productRouter;


import express from "express";


import {
  addProduct,
  deleteProduct,
  getProducts,
} from "../controllers/productController.js";
import upload from "../upload/upload.js";

const productRouter = express.Router();



productRouter.post("/", upload.single("image"), addProduct);
productRouter.get("/", getProducts);
productRouter.delete("/:id", deleteProduct);


export default productRouter;