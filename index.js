require('dotenv').config()
require("./config/db.js")
const express = require("express")
const app = express()
const myRouter = require("./Router/router")
const cors = require("cors")
const port = process.env.PORT || 2022

app.get("/", (req, res)=>{
   res.send("port is running well well")
})


app.use(express.json())
app.use(cors())
app.use("/api", myRouter)

app.listen(port, ()=>{
  console.log( `port is running on ${port}`);
})