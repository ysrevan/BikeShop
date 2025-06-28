import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../../redux/blogSlice'
import './Blognews.css'
function Blognews() {

    let {blogs} = useSelector((state)=>state.blogs)

    let dispatch = useDispatch()

    useEffect(()=>{
       dispatch(getBlogs())
    },[dispatch])

    console.log(blogs);
    
  return (
    <section id='blognew'>
      <div className="mycontainer">
        <div className="blognewsbox">
          {
            blogs && blogs.map((blog)=>(
              <div className="blognew">
            <div className="blognewimage">
            <img src={`http://localhost:5000/${blog.image}`} alt="" />
            </div>

            <div className="blognewtext">
            <p className='new-date'>{blog.date}</p>
              <h1 className='new-title'>{blog.title}</h1>
              <p className='new-desc'>{blog.description}</p>
            </div>
          </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Blognews