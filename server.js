//requirements
const express= require('express')
const cors= require('cors')
const mongoose= require('mongoose')
const dotenv= require('dotenv')
const path= require('path')
const app = express()
const PORT = process.env.PORT || 5000
const userRoute = require('./routes/userRoute')

//env config
dotenv.config()

//cors,json
app.use(cors())
app.use(express.json())
app.use(express.static('view'))

//mongodb connection
mongoose.connect(process.env.MONGO_URI)

//html route
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'view','index.html'))
})

//route navigation
app.use('/api',userRoute)

//server connection to port
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})
