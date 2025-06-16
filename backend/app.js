import express from "express"
import "dotenv/config"
import "./src/db/Connection.js"
const app = express()
const port = process.env.PORT || 5001

app.listen(port,()=>{
    console.log(`Server is running ${`http://localhost:${port}`}`);
})