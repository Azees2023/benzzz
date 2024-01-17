
import React from 'react'
import { carDetail } from '../data';


const CarCard = () => {
  return (
    <div className='grid sm:grid-cols-1 sm:flex-wrap md:grid-cols-4 md:grid-flow-row lg:grid-cols-3 xl:grid-cols-4'>
      {carDetail.map((car, index) => (
        <div  key={index} className='mx-3 mt-6 self-start rounded-lg block bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'>
          <a href="#!">
              <img
                class="rounded-lg bg-cover  md:h-[240px] transition duration-300 ease-in-out hover:scale-95"
                src={car.img}
                alt={car.Tit} />
          </a>
          <div class="p-6">
            <h5
              class="mb-2 text-xl font-medium leading-tight text-neutral-800  dark:text-neutral-600">
                Model: {car.Domine}
              
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-800">
                {car.specification}
            </p>
            <div className='mb-16 items-center ml-12 md:mt-[100px]'>
              <a href='/Card' target='_blank' className='ml-[30px]   font-bold  w-[150px] rounded bg-blue-500 px-4 py-3 text-white hover:bg-blue-700 flex float-left '>Learn More
              <svg class="w-3.5 h-3.5 ms-3 m-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </a>
            </div>
          </div>
       </div>
      ))}
      <div>
       
      </div>
    </div>
  )
}

export default CarCard


