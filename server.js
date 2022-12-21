const express = require('express')
const app = express()
const peopleController = require('./controllers/people-controller')

//app dependencies
const cors = require('cors')
const morgan = require('morgan')

require("dotenv").config()
require('./config/db.connection')//node runs all code in this file

const {PORT} = process.env

//express/app middleware
app.use(express.json())
//cors helper function
app.use(cors())//allows for cross origin request- open channel

//morgan request logger(for dev)
app.use(morgan('dev'))

//router middleware
app.use('/people', peopleController)

//root- redirects to people index
app.get('/', (req, res)=>res.redirect('/people'))


app.listen(PORT, ()=>console.log(`Listening on port: ${PORT}`))