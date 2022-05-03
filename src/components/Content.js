
import React from 'react'
import Courses from './Courses'
import Filter from './Filter'
import "../styles/content.css"
const Content = () => {
  return (
    <div className='main'>
        <Filter/>
        <Courses/>
    </div>
  )
}
export default Content
