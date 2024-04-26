import React from 'react'
import ReactGA from 'react-ga4';

import Header from './components/Header'
import AllResources from './components/AllResources'
import Footer from './components/Footer'
import HelperPopUp from './components/HelperPopUp'

import AllResources2 from './components/AllResources2'
import AllResources3 from './components/AllResources3'



function App() {

  ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`)
  // fontawesome icons

  return (
    <>
      <div className="container text-center mb-5">
        <Header />
        {/* <AllResources /> */}
        {/* adding view mode */}
        {/* <AllResources2 /> */}
        <AllResources3 />
        <HelperPopUp />
      </div>
      <Footer />
    </>
  )
}


export default App