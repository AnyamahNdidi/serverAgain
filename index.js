const express = require("express")
const app = express()
const port = process.env.PORT || 5040

app.get("/", (req, res)=>{
   res.send("port is running well well")
})

app.listen(port, ()=>{
  console.log( `port is running on ${port}`);
})