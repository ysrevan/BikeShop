import React, { useEffect } from 'react'
import { getProducts } from '../../redux/shopproductSlice'
import { useDispatch, useSelector } from 'react-redux'
import './Shopproducts.css'
function Shopproducts() {

    let {products}  = useSelector((state)=>state.products)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

  return (
    <div className='mycontainer'>
         <div className="shopproductsbox">
          {
            products && products.map((product)=>(
              <div className='product-card'>
                 <div className="productcard-image">
                 <img src={`http://localhost:5000/${product.image}`} alt="" />
                 </div>
                 <div className="productcard-text">
                 <h1 className="productcard-title">{product.title}</h1>
                  <p className='productcard-category'>{product.category}</p>
                  <p className='productcard-price'>${product.price}</p>
                 </div>
              </div> 
            ))
          }
         </div>
    </div>
  )
}

export default Shopproducts