const Product = require('../models/product');

const getAllProductsStatic = async (req,res)=>{
    const products = await Product.find({}).select('name price')
    res.status(200).json({products,nbHits: products.length})

}


const getAllProducts = async (req,res)=>{
    const {featured,company,name,sort,fields} = req.query;

    const queryObject ={}

    if  (featured){
           queryObject.featured = featured === 'true'? true : false

    } if (company){
           queryObject.company = company

    } if (name){
           queryObject.name = {$regex:name, $options: 'i'}
    
    } 
        
    let result =  Product.find(queryObject);

    if (sort){
          const sortList = sort.split(',').join('');
           result = result.sort({price:'desc'})
   } else {
            result = result.sort("createAt");
   } 
   
    if (fields) {
            const fieldlist = fields.split(',').join('')
             result = result.select(fieldlist);     
}

   const products = await result;

   res.status(200).json({products,nbHits: products.length})
}

module.exports={
    getAllProducts,
    getAllProductsStatic
}