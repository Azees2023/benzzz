import React from 'react'
import { Show } from '../../data'

const Card = () => {
  return (
    <div className='mt-[15px] w-full bg-black'>
      {Show.map((card,index1) => (
        <div key={index1} className='bg-black text-white '>
            <h1 className='font-mono self-center text-2xl font-semibold whitespace-nowrap dark:text-white '>car details</h1>
          <p className=' xl:absolute text-xl md:text-base text-slate-400 p-4 rounded  md:ml-2 2xl:w-[700px]  2xl:ml-[150px]   left-[660px] top-[400px] order-1 md:order-1 lg:order-2 xl:order-6 md:w-[50%] lg:w-[60%] xl:w-[70%] flex'>{card.detail}</p>
          <div className='text-white text-lg order-1 md:order-2 w-full'>
              <img src={card.im} alt='' className='w-[95%] sm:w-[700px] md:w-[800px] lg:w-[40%] xl:w-[40%] h-[500px] mt-[100px] ml-[10px] object-cover rounded-lg md:ml-4 md:mr-4 cursor-pointer 2xl:ml-[100px]' />
              <div className=' flex flex-wrap justify-around mt-10 bg-transparent '>
                  <h2>Name:<p>{card.nam}</p></h2>
                  <h2>Speed/<p>{card.speed}</p></h2>
                  <h2> Mileage/<p>{card.Mileage}</p></h2>
                  <h2>Engin:<p>{card.Engine}</p></h2>
                  <h2>RPM<p>{card.Rpm}</p></h2>
                  <h2>No.Cylinder<p>{card.Noofcylinder}</p></h2>
              </div> 
          </div>

          <div className='flex mt-40 flex-wrap m-10 gap-10 flex-col '>
            <img src={card.mg} alt='' loading='lazy' className='w-[300px] h-[300px]'/>
            <p className='xl:absolute mt-[700px] mb-[100px] m-auto  text-xl md:text-base text-slate-400 p-4 rounded  md:ml-2 2xl:w-[700px]  2xl:ml-[150px]   left-[660px] top-[400px] order-1 md:order-2 lg:order-2 xl:order-6 md:w-[50%] lg:w-[60%] xl:w-[70%] flex'>{card.detail}</p>
            {/* <img src='' alt='' loading='lazy' className='w-[300px] h-[300px]' /> */}
          </div>
     
        </div>
      ))}
      
     
    </div>
  )
}

export default Card
