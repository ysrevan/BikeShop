import express from "express"
import "dotenv/config"
import "./src/db/Connection.js"
import productRouter from "./src/routes/ProductRouter.js"
import blogRouter from "./src/routes/BlogRouter.js"
const app = express()
const port = process.env.PORT || 5001

app.use(express.json()); 
app.use("/api/products", productRouter);
app.use("/api/blogs/",blogRouter)
app.use("/images", express.static("src/images"));

app.listen(port,()=>{
    console.log(`Server is running ${`http://localhost:${port}`}`);
})