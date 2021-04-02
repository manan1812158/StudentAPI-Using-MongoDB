const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const student=require('./router/student.route')

const app=express()

mongoose.connect("mongodb://localhost/studentsDB",{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connected to the Students Database')
})
.catch(err=>{
    console.log('Unsuccessful to connect with the Database')
    process.exit
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/students',student)
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})