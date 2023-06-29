import React from 'react'
import {AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Card = ({meal}) => {
  return (
    <div className=' w-72 border-2 rounded-xl flex flex-col items-center relative p-5 gap-5 h-[350px] shadow-lg hover:scale-105 hover:shadow-xl'>
        <img className=' rounded-xl' src={meal.strMealThumb} width="200px" alt="" />
        <h3>{meal.strMeal}</h3>
        <button className=' px-10 py-2 bg-blue-500 mt-0 text-white absolute bottom-3 rounded-xl'>
          <Link to={`/details/${meal.idMeal}`}>
            <AiFillEye/>
          </Link>
        </button>
    </div>
  )
}

export default Card