
import React from 'react';
// import { Typography } from '@mui/material';

const Tooltip = ({ carData }) => {
  return (
    <div className='relative bg-slate-50 md:h-[410px] md:w-[710px] h-[600px] flex flex-wrap items-center justify-center shadow-slate-50 overflow-auto z-30 rounded-2xl mt-[10px] md:ml-[520px] xl:mr-[390px] xl:top-[-80px] xl:w-[800px]'>
      <div className='min-h-max w-full h-full md:w-[700px] md:h-[400px]  xl:w-[790px]  flex flex-wrap rounded-xl shadow-xl'>
        <div>
        <h1 className=' text-slate-500 md:text-4xl text-2xl'>{carData.modeln} Specification</h1>
        </div>
        <div className='md:w-[250px] md:h-[185px] w-[350px] xl:w-[300px] h-[250px] ml-[20px] mt-[-70px] md:ml[-20px] md:mt-[-70px] bg-black p-3 rounded-xl'>
          <img src={carData.img} alt='' className='w-[330px] h-full' />
        </div>
        <div className=' mt-[-70px] md:mt-[-50px] md:ml-[40px]'>
          <section>
            <h2 className='text-3xl  text-cyan-400'>Feature</h2>
            <ol className=' text-teal-700'>
              <li>Engine: {carData.Engine}</li>
              <li>Body: {carData.Body}</li>
              <li>Year: {carData.Years}</li>
              <li>Weight: {carData.Weight}</li>
            </ol>
            <br />
            <h2 className='text-3xl text-cyan-400'>Performance</h2>
            <ol className='text-teal-700'>
              <li>Top Speed: {carData.Speed}</li>
            </ol>
          </section>
        </div>
        <button type="button" class="flex justify-center select-none border-2 text-white
      text-xl font-bold p-2 m-2 rounded-full shadow h-10 w-10 focus:outline-none
      focus:shadow-outline"><img src="/icons/x.svg" alt="" width="40" h="40" class="icon svelte-1iu276v" />x</button>
      </div>
    </div>
  );
};

export default Tooltip;
