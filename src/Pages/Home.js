import React from 'react'
import {useNavigate} from 'react-router-dom'
function Home() {
  const navigate=useNavigate()
  const handlelogout=()=>{
    localStorage.removeItem("Token")
    navigate("/Login")
  }
  return (
    <div>HomePage
      <button onClick={handlelogout}>logout</button>
    </div>
    
  )
}

export default Home