const express=require('express');
const app=express();
var cors = require('cors');    
var cookieParser = require('cookie-parser');
const {dbConnect}=require('./utiles/db')
app.use(cookieParser())
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));


app.use('/api',require('./routes/authRoutes'))
app.get('/',(req,res)=> res.send('hello Worl!'));
dbConnect()
const port = 5000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })