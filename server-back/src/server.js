const express = require("express");
require("dotenv").config(); /*Solo se usa en Local no en producción*/
const morgan = require('morgan'); /*Solo se usa en Local no en producción*/
const bodyParser = require('body-parser');///
const mongoose = require('mongoose')////
const cors = require('cors')
const { connect } = require("./database")
const applicationRoutes = require('./routes')


const app = express();
const port = process.env.PORT || 8081;
connect();


app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}))

app.use(express.json())
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(morgan('dev'))/*Solo se usa en Local no en producción*/

applicationRoutes(app)

app.listen(port, () => {
  console.log(`✅ Server listening on port ${port}`)
})
