import React from 'react'
import ReactGA from 'react-ga4';

import Header from './components/Header'
import AllResources from './components/AllResources'
import Footer from './components/Footer'
import HelperPopUp from './components/HelperPopUp'


function App() {

  ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`)
  // ReactGA.pageview(window.location.pathname + window.location.search)
  // ReactGA.send({ hitType: "pageview", page: window.location.pathname })

  return (
    <>
      <div className="container text-center">
        <Header />
        <AllResources />
        <HelperPopUp />
      </div>
      <Footer />
    </>
  )
}


export default App