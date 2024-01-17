import React from 'react'
// import {Instagram ,Facebook,LinkedIn ,GitHub } from '@mui/icons-material/';
import Typography from '@mui/material/Typography';


const Footer = () => {
  return (
    <div className='text-black '>
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal xl:translate-y-2 ">
        &copy; 2023 Your Car Website.com
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="/CarCard"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Models
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="/Contact"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
    <div className='text-white md:justify-between space-x-8'>
      {/* <Facebook />
      <Instagram />
      <GitHub />
      <LinkedIn /> */}
      </div>
    </div>
  )
}

export default Footer

