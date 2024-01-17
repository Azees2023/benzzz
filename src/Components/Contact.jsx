
import React, { useState } from 'react';

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const  handleChange = (e) => {
      setUserName(e.target.value);

  }


  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const SubmitButton = () =>{
    let rex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;

    if (userName === '') {
      console.log("Name must not be empty");
    } else if (password === '') {
      console.log('Password must not be empty');
    } else {
      if (!rex.test(userName)) {
        console.log("Invalid email format");
      } else {
        console.log("Form submitted successfully");
      }
    }
  }



  return (
    <div className='bg-white min-h-screen md:w-full md:h-full flex flex-col items-center'>
      <div className='w-full max-w-screen-md md:w-[550px] md:h-auto p-4'>
        <div className='text-2xl text-purple-400 mb-4'>
          <h2>Login Page</h2>
        </div>
        <form className='bg-white w-full rounded-md shadow-md p-4'>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-lg  font-mono dark:text-orange-300 text-start'>
              Your Email:
            </label>
            <input
              type='email'
              value={userName}
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500'
              placeholder='name@flowbite.com'
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-lg  font-mono dark:text-orange-300 text-start'>
              Your Password:
            </label>
            <input
              type='password'
              value={password}
              onChange={handleChangePassword}
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500'
              required
            />
          </div>
          <div className='flex items-center mb-4'>
            <input
              id='remember'
              type='checkbox'
              className='w-4 h-4 border rounded focus:ring-2 focus:ring-blue-300'
              required
            />
            <label htmlFor='remember' className='ml-2 text-sm font-medium text-gray-900'>
              Remember me
            </label>
          </div>
          <button
            type='submit'
            onClick={SubmitButton}
            className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300'
          >
            Submit
          </button>
          <div className='text-gray-500 text-sm mt-2'>
            <sub>Forget Password ..?</sub>
          </div>
          <a href='#/' className='text-indigo-400 text-sm mt-2'>
            Register New User
          </a>
        </form>
      </div>
          <div class="block rounded-md bg-primary-100 p-4 text-primary bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="h-6 w-6 top-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                </svg> 
          </div>
          <div class=" ml-8 mt-2 grow">
                  <p class="mb-2 font-bold dark:text-black">
                    Technical support..!
                  </p>
                  <p class="text-neutral-500 dark:text-neutral-700">
                    123support@gmail.com
                  </p>
                  <p class="text-neutral-500 dark:text-neutral-800">
                    +91 9600691181
                  </p>
              </div>
      
    </div>
  );
};

export default Contact;
