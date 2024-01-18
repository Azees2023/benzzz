
import React from 'react';
import Car from '../Picture/pxfuel.jpg';
import Genration from '../Picture/Genration';
import { Link } from 'react-router-dom';
// import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <div className='w-full h-full overflow-hidden'>
      <div className='relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px] overflow-hidden'>
        <img src={Car} alt='Car' className='object-cover w-full h-full' />
      </div>
      <div className='text-white relative text-center -top-96 sm:top-[-440px] md:top-[-530px] lg:top-[-630px] xl:top-[-750px] 2xl:top-[-880px]'>
        <h2 className='text-2xl sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-green-200 mb-5'>
          Model : <span className='capitalize font-light text-blue-400'>Mercedes-Benz W194</span>
        </h2>
        {/* <Typography variant='body2' gutterBottom align='center'>
          produced by Mercedes-Benz for the 1952 Sportscar
        </Typography> */}
      </div>

      <div className='absolute w-full md:top-[310px] top-[163px] left-[-120px] z-40'>
{/*         <a href='/Contact'
          title='Click-More'
          className='font-bold md:py-5  px-14 rounded bg-blue-600 hover:bg-blue-800 md:w-56 w-[190px] text-slate-200 ml-[50%] md:ml-36 md:mt-[-300px] z-40'
        >
          Explore

        </a> */}
        <Link title='CardList' to='/CarCard' aria-labelledby='dropdownNavbarLink'
         className='font-bold md:py-5  px-14 rounded bg-blue-600 hover:bg-blue-800 md:w-56 w-[190px] text-slate-200 ml-[50%] md:ml-36 md:mt-[-300px] z-40'>
           Explore
        </Link>
      </div>
      <div>
        <Genration />
      </div>
    </div>
  );
};

export default Home;

