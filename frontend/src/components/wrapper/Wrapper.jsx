import React from 'react'
import { LuUserRound } from "react-icons/lu";
import { IoIosHeartEmpty } from "react-icons/io";
import { GrBasket } from "react-icons/gr";
import "./Wrapper.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Wrapper() {

  let {basket} = useSelector((state)=>state.basket)
  
let basketcount = basket.reduce((sum,item)=>sum+item.count,0)

  return (
    <div className='wrapper-box'>
        <input type="text" className='search'/>
        <LuUserRound  className='user'/>
       <Link to='/wishlist'> <IoIosHeartEmpty   className='heart'/></Link>
       <div className="basket-wrapper">
       <Link to='/basket'><GrBasket   className='basket'/></Link>
       <span className='basket-count'>{basketcount}</span>
       </div>
    </div>
  )
}

export default Wrapper