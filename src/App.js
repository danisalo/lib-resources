import React from 'react'

import Header from './components/Header'
import AllResources from './components/AllResources'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <div className="container text-center">
        <Header />
        <AllResources />
      </div>
      <Footer />
    </>
  )
}


export default App