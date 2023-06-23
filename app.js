require('dotenv').config();
require('express-async-errors')

const express = require('express')
const app = express();
 const connectDB = require('./db/connect');

const notFoundMiddleware = require('./middleware/not-found')
const erorrMiddleware = require('./middleware/error-handler')

const product = require('./routes/products')

app.use(express.json())
app.use('/api/v1/product',product)

app.get('/',(req,res) =>{ 

    res.send('<h1>Store API </h1><a herf"/api/v1/products">products route</a>')
})

// products route
app.use(notFoundMiddleware);
app.use(erorrMiddleware);



const port = process.env.PORT || 3000

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URL)
          app.listen(port,console.log('server is listing'))
    } catch (err){
    
    }
}

start();