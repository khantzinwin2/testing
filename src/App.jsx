import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Meal from './Meal'
import Details from './Details'
import Nav from './Nav'

const App = () => {
  return (
    <div  className=' container mx-auto relative'>
      <Nav/>
      <Routes>
        <Route path="/" element={<Meal/>} />
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
    </div>
  )
}

export default App