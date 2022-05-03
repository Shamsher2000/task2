import React from 'react'
import '../styles/filter.css'
const Filter = () => {
  return (
    <div className='mainfilter'>
      <h4>Filter</h4>
      <div className='formdiv'>
      <h4>Topic</h4>
        <input type="search"></input>
      </div>

      <form className='formdiv'>
        <h4>Level</h4>
        <div><label> <input type="checkbox" />Beginner</label></div>
        <div><label> <input type="checkbox" />Intermediate</label></div>
        <div> <label> <input type="checkbox" />Advanced</label></div>
        <div><label> <input type="checkbox" />All Of the Above</label></div>
      </form>

        <form className='formdiv'>
          <h4>Price</h4>
          <div><label> <input type="checkbox" />499-1000</label></div>
          <div><label> <input type="checkbox" />1000-1500</label></div>
          <div><label> <input type="checkbox" />499-1000</label></div>
          <div><label> <input type="checkbox" />1000-1500</label></div>
        </form>
    </div>
  )
}

export default Filter