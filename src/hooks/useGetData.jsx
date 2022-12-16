import { useState } from 'react'
import axios from 'axios'


export const useGetData = () => {

    // States til håndtering af data, loading, error
    const [data, setData] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    //use 'Tab' to go faster to the 2nd point 'useState(*)'

    const getData = (url, h = null, p = null) => {

        setLoading(true)
        // setData() doesnt show the data will you wait for the other data when clicking prev or next buttons

        axios.get(url, { headers: h, params: p })
            .then(res => {
                console.log(res.data)
                setData(res.data)
                setError(false)
            })
            .catch(err => {
                console.log('error')
                setError(true)
                setData()
            })
            .finally(() => {
                setLoading(false)
            })
    }

    // det der "udbydes" fra hooket her
    return { getData, error, loading, data }
}
