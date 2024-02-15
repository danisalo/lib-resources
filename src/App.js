import React from 'react'

import Header from './components/Header'
import AllResources from './components/AllResources'
import Footer from './components/Footer'
import HelperPopUp from './components/HelperPopUp'


function App() {
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