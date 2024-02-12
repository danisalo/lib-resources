import { useState, useEffect } from 'react';
import Airtable from 'airtable';

const api_KEY = process.env.REACT_APP_api_KEY;
const base = new Airtable({ apiKey: `${api_KEY}` }).base('appFDHfzVQYxhaJbL');

const useAirtableData = (baseName, viewName) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        base(`${baseName}`)
            .select({ view: `${viewName}` })
            .eachPage((records, fetchNextPage) => {
                setData(records)
                fetchNextPage();
                setLoading(false);
            }, (err) => {
                if (err) { console.error(err); return }
            })
    }, [baseName, viewName])

    return { data, loading }
}


export default useAirtableData