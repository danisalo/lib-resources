import React, { useEffect, useState } from 'react';
import Airtable from 'airtable'
import Resource from './components/Resource'

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
        // records.forEach((record) => {
        //   console.log('Name:', record.get('Name'));
        // });
      }, (err) => {
        if (err) { console.error(err); return; }
      });
  }, [])

  return (
    <>
      <h1>Project Library</h1>
      {resources.map(resource => (
        <Resource
          key={resource.id}
          resource={resource}
        />
      ))}
    </>
  );
}


export default App;