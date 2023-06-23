require('dotenv').config();


const connectDB = require('./db/connect')

const product = require('./models/product');

const jsonProducts = require('./products.json')

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        await product.deleteMany();
        await product.create(jsonProducts) //we send and create our file  './products.json' to mongodb
        console.log('success~~')
        process.exit(0)
    } catch (err){
        console.log(err);
        process.exit(0)

    }
}

start();