import React from 'react'
import ReactGA from 'react-ga4';

import Header from './components/Header'
import AllResources from './components/AllResources'
import Footer from './components/Footer'
import HelperPopUp from './components/HelperPopUp'

import AllResources2 from './components/AllResources2'


function App() {

  ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`)
  // fontawesome icons

  return (
    <>
      <div className="container text-center mb-5">
        <Header />
        {/* with search bar implemented */}
        {/* <AllResources /> */}

        {/* adding view mode */}
        <AllResources2 />
        <HelperPopUp />
      </div>
      <Footer />
    </>
  )
}


export default App