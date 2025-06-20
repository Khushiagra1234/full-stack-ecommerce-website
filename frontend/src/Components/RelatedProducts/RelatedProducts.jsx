import React, { useEffect, useState } from 'react';
import './RelatedProducts.css'
import Item from '../Items/Item'




const RelatedProducts = () => {
  
  const [relatedProducts,setRelatedProducts] = useState([]);
  
    useEffect(()=>{
      fetch('https://full-stack-ecommerce-website-5.onrender.com/popularinwomen'
  )
      .then((response)=>response.json())
      .then((data)=>setRelatedProducts(data));
    },[])
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
        {relatedProducts.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })}
        </div>
      
    </div>
  )
}

export default RelatedProducts
