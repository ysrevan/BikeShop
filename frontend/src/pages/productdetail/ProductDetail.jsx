import React, { useEffect } from 'react'
import "./ProductDetail.css"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/shopproductSlice'
import { FaHeart } from "react-icons/fa6"
import { addWishlist } from '../../redux/wishlistSlice'
import Button from '../../components/utils/Button'

function ProductDetail() {
    const { id } = useParams()
    const dispatch = useDispatch()

    const { products } = useSelector((state) => state.products)
    const { wishlist } = useSelector((state) => state.wishlist)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const product = products.find((item) => item._id === id)


    if (!product) {
        return (
            <section id="productdetail">
                <div className="mycontainer">
                    <p>Loading...</p>
                </div>
            </section>
        )
    }

    const existProduct = wishlist.find(item => item._id === product._id)

    return (
        <section id='productdetail'>
            <div className="mycontainer">
                <div className='detail-box'>
                    <FaHeart
                        onClick={(e) => { e.stopPropagation(); dispatch(addWishlist(product)) }}
                        style={{ color: existProduct ? "red" : "black" }}
                        className='detailwishlistheart'
                    />
                    <div className="detail-image">
                        <img src={`http://localhost:5000/${product.image}`} alt={product.title} />
                    </div>
                    <div className="detail-text">
                        <h1>{product.title}</h1>
                        <p>Category: {product.category}</p>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail
