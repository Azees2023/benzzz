
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import { carDetail } from './data';
import Main from './Components/Main';
import Card from './Components/Cardetails/Card';
import Service from './Components/Cardetails/Service';
// import ScrollToTop from './ScrollToTop';
import{ useEffect, useState } from 'react'

function App() {
  const [topMove, setTopMove] = useState(false);

  const TomoveTop = (e) => {
    setTopMove(!topMove)
  };

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  useEffect(() => {
    window.addEventListener('scroll', TomoveTop);
    return () => {
      window.removeEventListener('scroll', TomoveTop);
    };
  });
  return (
    <div className="App h-full">
      <BrowserRouter>
        <Nav />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/CarCard" element={<Main carDetail={carDetail} />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Services" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <div>
      <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          class="!fixed bottom-5 right-5  rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
          onClick={backToTop}
>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            class="h-4 w-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
          </svg>
        </button>
      </div>

    </div>
  );
}

export default App;
// const TomoveTop = (e) => {
  //   if (window.scrollY > 20) {
  //     setTopMove(true);
  //   } else {
  //     setTopMove(false);
  //   }
  //   // setTopMove(!topMove)
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
