import React from 'react'
import './Homenews.css'
import  leftnewsphoto from '../../assets/images/blog07-820x580.jpg'
function Homenews() {
  return (
    <section id='homenews'>
        <div className="homenewstext">
            <p className='blog'>ON THE BLOG</p>
            <h1 className='latest'>Latest News</h1>
        </div>

        <div className="mycontainer">
        <div className="newsbox">
            <div className="leftnews">
                <div className="leftnewsphotobox">
                    <img src={leftnewsphoto} alt="" />
                    <h1>kjwnckjvnjekv</h1>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Homenews