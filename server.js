const express = require("express")
const mongoose = require("mongoose")
const logger = require("morgan")


const app = express() 
const PORT = process.env.PORT || 8080 

app.use(logger("dev")) 
app.use(express.urlencoded({ extended: true })) 
app.use(express.json()) 
app.use(express.static("public")) 

require("./routes/apiroutes")(app) 
require("./routes/htmlroutes")(app) 

mongoose.connect(process.env.MONGODB_URI || "mongodb://<user>:<password1>@ds133086.mlab.com:33086/heroku_np35knxx", {
  useNewUrlParser: true
}) 

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`) 
}) 