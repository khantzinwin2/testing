import React from 'react'
import {IoRestaurant} from 'react-icons/io5'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    
        <Link to={"/"}>
        <div className='flex items-center gap-2 my-8 justify-start'>
        <IoRestaurant className=' text-3xl text-pink-500 '/>
        <p className='text-xl text-gray-500'>Foodie</p>
        </div>
        </Link>
    
  )
}

export default Nav