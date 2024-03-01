import { useState, useEffect } from 'react'
import Airtable from 'airtable'

const api_KEY = process.env.AIRTABLE_API_KEY;
const base = new Airtable({ apiKey: `${api_KEY}` }).base('appFDHfzVQYxhaJbL')

const useAirtableData = (baseName, viewName) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            if (!baseName) {
                setLoading(false)
                return;
            }
            try {
                const records = await base(baseName)
                    .select({ view: viewName })
                    .firstPage()

                setData(records)
                setLoading(false)
            } catch (err) {
                console.error(err)
                setLoading(false)
            }
        }

        fetchData()
    }, [baseName, viewName])

    return { data, loading }
}


export default useAirtableData