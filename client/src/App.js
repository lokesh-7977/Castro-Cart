import React from 'react'

import Navbar from './Components/Navbar/Navbar'
import Landing from './Components/Landing/Landing'
import Brands from './Components/BrandBars/Brands'
import Footer from './Components/Footer/Footer'
import Subscribers from './Components/Subsribers/Subscribers'
// import Deals from './Components/Deals/Deals'

const App = () => {
  return (
    <>
    <Navbar />
       <Landing />
       <Brands />
      {/* <Deals />  */}
      <Subscribers />
      <Footer/>
    </>
   
  )
}

export default App