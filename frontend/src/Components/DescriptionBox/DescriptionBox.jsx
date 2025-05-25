import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        
        </div>
        <div className="descriptionbox-description">
            <p>An Ecommerce Website is an online platform that faciliotates buying and selling of productsor services over the internet.It serves as a virtual marketplace where business and individuals showcase their products, interact with customers and conduct online transactions without the need for physical presence. </p>
            <p>
                E-commerce website typically display products or services along with detailed descriptions, images, prices and any other available variations (eg. size,colour).Each product has its own dedicated page with relevant information.
            </p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
