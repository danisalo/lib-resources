import React, { useEffect, useState } from 'react';
import Airtable from 'airtable'

import Header from './components/Header';
import AllResources from './components/AllResources';
import Footer from './components/Footer';


const api_KEY = process.env.REACT_APP_api_KEY;
const base = new Airtable({ apiKey: `${api_KEY}` }).base('appFDHfzVQYxhaJbL');


function App() {

  const [resources, setResources] = useState([])

  useEffect(() => {
    base('General')
      .select({ view: 'Grid - All by Name' })
      .eachPage((records, fetchNextPage) => {
        setResources(records)
        fetchNextPage();
      }, (err) => {
        if (err) { console.error(err); return; }
      });
  }, [])

  return (
    <>
      <div class="container text-center">
        <Header />

        <AllResources
          resources={resources}
        />

      </div>

      <Footer />
    </>
  );
}


export default App;