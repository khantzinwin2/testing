import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {AiFillYoutube} from "react-icons/ai"
import Loading from './Loader/Loading';


const Details = () => {
  const {id} = useParams();
  const [meal,setMeal] = useState();
  const [isLoading,setIsLoading] = useState(true);

  const getDetails = async() =>{
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    console.log(data?.meals[0])
    setMeal(data?.meals[0])
    setIsLoading(false)
  } 

  useEffect(()=>{
    getDetails()
  },[])
  return (
    <>
    {
      isLoading?(<Loading/>):(
        <div className=' flex flex-col gap-5'>
      
      <img src={meal?.strMealThumb} width={"500px"} className=' rounded-xl shadow-xl' alt="" />
      <div className=' bg-pink-500 w-20 text-center text-white rounded-xl'>
        {meal?.strCategory}
      </div>
      <h2 className=' text-2xl font-semibold'>
        {meal?.strMeal}
      </h2>
      <div>
      <h2 className=' text-2xl font-semibold'>
        Instruction
      </h2>
      <p className=' text-gray-600 tracking-wider leading-7 '>
        {meal?.strInstructions}
      </p>
      </div>
      <div className=' flex gap-5 items-center'>
      <a href={meal?.strYoutube} className=' self-start' target={"__blank"}><AiFillYoutube className=' self-center text-5xl text-red-500'/></a>
      <p className=' text-gray-500'>Watch on Youtube</p>
      </div>
    </div>
      )
    }
    </>
  )
}

export default Details