## if we want to look in specific pattren or world 

```js
const getAllProductsStatic = async (req,res)=>{
    const search = 'ab' //we set our term that we want document contain "ab"
    // we will filter the name property we set our condtion regex will used the term search 
    const products = await Product.find({name: {$regex:search,$options:'i'},}) //options case-insensitive
    res.status(200).json({products,nbHits: products.length})

}

```