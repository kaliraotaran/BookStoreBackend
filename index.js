
const express = require('express')
const app = express()
const {mongoURL, PORT} = require('./config')
const mongoose = require('mongoose')

const booksRoute  = require('./booksRoute')
app.use(express.json());



app.get('/', (req,res)=>{
    console.log(req);
    return res.status(234).send('mern stack')
})

 
app.use('/books', booksRoute);
 

mongoose.connect(mongoURL).then(()=>{
    console.log('app connected to database');})
app.listen(4000,  () => console.log(`Server is running on port 4000`))

