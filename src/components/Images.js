import React from 'react'
import img from "../Data/img.png"
import '../styles/images.css'
const Images = () => {
  return (
    <div className='imgdiv'>
        <img src={img} alt="courses"></img>
        <div>
          <p>UI/UX DESIGNING COURSE</p>
          <p>Rs 699</p>
        </div>
    </div>
  )
}

export default Images