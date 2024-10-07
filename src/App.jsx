import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Features from './Components/Features';
import Product from './Components/Product';
import Client from './Components/Clients';
import Marquee from './Components/Marquee';
import Footer from './Components/Footer';


function App(){

  return(
    <div className='min-h-screen w-full bg-[#060A15] px-14 text-white'>
      <Navbar />
      <Home />
      <Features />
      <Product />
      <Client />
      <Marquee />
      <Footer />
    </div>
  )
}

export default App;