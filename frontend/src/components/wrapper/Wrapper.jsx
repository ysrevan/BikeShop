import React from 'react'
import { LuUserRound } from "react-icons/lu";
import { IoIosHeartEmpty } from "react-icons/io";
import { GrBasket } from "react-icons/gr";
import "./Wrapper.css"
function Wrapper() {
  return (
    <div className='wrapper-box'>
        <input type="text" className='search'/>
        <LuUserRound  className='user'/>
        <IoIosHeartEmpty   className='heart'/>
        <GrBasket   className='basket'/>
    </div>
  )
}

export default Wrapper