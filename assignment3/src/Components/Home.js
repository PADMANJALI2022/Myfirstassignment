import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
  return (
    <>
    <div>Home Page</div>
    <button onClick={()=>navigate('Order-summary')}>PlaceOrder</button>
    </>
  )
}

export default Home