import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Newsboard from './component/Newsboard'

export default function App() {
  const [category,setCategory]=useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Newsboard category={category}/>
    </div>
  )
}

