## in this page we have to methods that mogooes provied
# sort it will sort our documnets in the way we want  asc, desc, ascending, descending
#  select


```js
const Product = require('../models/product');

const getAllProducts = async (req,res)=>{
    const {sort,fields} = req.query; 

    const queryObject ={}
        
    let result =  Product.find(queryObject);

    if (sort){
          const sortList = sort.split(',').join('');
           result = result.sort( sortList)
   } else {
            result = result.sort('createdAt');
   } 
   
    if (fields) {
            const fieldlist = fields.split(',').join('')
             result = result.select(fieldlist);     
}

   const products = await result;

   res.status(200).json({products,nbHits: products.length})
}


```