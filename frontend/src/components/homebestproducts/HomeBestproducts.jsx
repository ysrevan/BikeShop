import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHomeProducts } from '../../redux/productSlice'
import "./HomeBestproducts.css"
import Button from '../utils/Button'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

function HomeBestproducts() {

  let {homeproducts} = useSelector((state) => state.homeproducts)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHomeProducts())
  }, [dispatch])

  return (
    <section id='homebestproducts'>
      <div className="mycontainer">

        <div className="homeproducttext">
          <p className='check'>CHECK IT OUT</p>
          <h1 className='sellers'>Best Sellers</h1>
        </div>
        <div className="homeproductsbox">
  <Swiper
    modules={[Navigation]}
    spaceBetween={20}
    slidesPerView={3}
    navigation
    loop={true}
    breakpoints={{
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
  >
    {
      homeproducts && homeproducts.map((homeproduct) => (
        <SwiperSlide key={homeproduct._id}>
          <div className="homeproductcard">
            <div className="homeproductcardimage">
              <img src={`http://localhost:5000/${homeproduct.image}`} alt="" />
            </div>
            <div className="homeproductcard-text">
              <h2 className="homeproductcard-title">
                {homeproduct.title.length > 20 ? homeproduct.title.slice(0, 20) + '...' : homeproduct.title}
              </h2>
              <p className='homeproductcard-category'>Category: {homeproduct.category}</p>
              <p className='homeproductcard-price'>${homeproduct.price}</p>
              <Button className='add-btn'>Add To Cart</Button>
            </div>
          </div>
        </SwiperSlide>
      ))
    }
  </Swiper>
</div>
      </div>
    </section>
  )
}

export default HomeBestproducts

