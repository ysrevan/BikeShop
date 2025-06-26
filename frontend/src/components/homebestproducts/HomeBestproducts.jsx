import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHomeProducts } from '../../redux/productSlice'
import "./HomeBestproducts.css"

function HomeBestproducts() {

  let {homeproducts} = useSelector((state) => state.homeproducts)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHomeProducts())
  }, [dispatch])

  console.log(homeproducts);
  return (
    <section>
      <div className="mycontainer">
        <div className="homeproductsbox">
          {
            homeproducts && homeproducts.map((homeproduct) => (
              <div className="homeproductcard">
                <div className="homeproductcardimage">
                <img src={`http://localhost:5000/${homeproduct.image}`} alt="" />
                </div>
                <div className="homeproductcard-text">
                  <h1 className="homeproductcard-title">{homeproduct.title}</h1>
                  <p className='homeproductcard-category'>{homeproduct.category}</p>
                  <p className='homeproductcard-price'>${homeproduct.price}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default HomeBestproducts