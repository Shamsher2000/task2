import React from 'react';
import '../styles/Navbar.css';
import { AiOutlineShoppingCart,AiOutlineSearch } from 'react-icons/ai';
export const Navbar = () => {
  return (
    <>
      <div className='main-div'>
          <input type="text" placeholder="search"/>
          <a href="#" className='navtext'>Home</a>
          <a href="#" className='navtext'>Courses</a>
          <a href="#" className='navtext'><AiOutlineShoppingCart/></a>
          <button className='login'><a href="#" className='navtext'>Login</a></button>
      </div>
    </>
  )
}
export default Navbar