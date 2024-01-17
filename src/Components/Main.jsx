import React from 'react'
import CarCard from './CarCard'
import Aclass from '../Class/Aclass'
import Card from './Cardetails/Card'

const Main = () => {
  return (
    <div className=' container w-full mb-56   '>
        <CarCard />
        <Aclass />
        {/* <Card /> */}
    </div>
  )
}

export default Main
