import React, { useState } from 'react';
// import Pic from '../Picture/mercedes-benz-defining-class-sl-01-1884x1884-08-2023.jpg';
import { carList } from '../data';
import Tooltip from './Tooltip';

const Genration = () => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const [visibleon, setVisibleOn] = useState(false);
  

  const handleButtonClick = (index) => {
    setSelectedButtonIndex(index);
    setVisibleOn(!visibleon);
  };
  // const TomoveTop = (e) => {
  //   if (window.scrollY > 20) {
  //     setTopMove(true);
  //   } else {
  //     setTopMove(false);
  //   }
  //   setTopMove(!topMove)
  // };

  // const backToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };


  // useEffect(() => {
  //   window.addEventListener('scroll', TomoveTop);
  //   return () => {
  //     window.removeEventListener('scroll', TomoveTop);
  //   };
  // }, []);



  return (
    <div className='relative bg-white min-h-screen flex flex-wrap items-center justify-center'>
      {carList.map((List, index) => (
        <section
          key={index}
          className='relative bg-white min-h-screen flex flex-wrap items-center justify-center'
        >
          <div className='order-2 md:order-1 w-full md:w-[50%] lg:w-[40%] xl:w-[30%]'>
            <img
              src={List.pic}
              alt='Car1'
              title='Class'
              className='object-cover w-full h-full rounded-lg md:ml-4 md:mr-4 cursor-pointer 2xl:ml-[100px]'
            />
          </div>
          <div className='order-1 md:order-2 lg:order-2 xl:order-6 md:w-[50%] lg:w-[60%] xl:w-[70%] p-4'>
            <h2 className='text-3xl text-slate-600 mb-4'>{List.modeln}</h2>
            <p className='text-xl md:text-base text-slate-400 p-4 rounded md:w-full md:ml-2 2xl:w-[700px]  2xl:ml-[150px]'>
              {List.discription}
            </p>
          </div>
          <div className='-order-first mt-5 mb-5 md:absolute md:mt-[350px] md:ml-[440px]'>
            <button
              title='click'
              onClick={() => handleButtonClick(index)}
              className='font-bold py-3 px-5 outline outline-offset-2 outline-teal-200 w-44 text-slate-500'
            >
              {List.btn}
            </button>
            {selectedButtonIndex === index && visibleon && <Tooltip carData={List} />}
          </div>
        </section>
      ))}
       
    </div>
  );
};

export default Genration;
