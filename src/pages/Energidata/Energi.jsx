import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import Error from '../../components/Error'
import Loader from '../../components/Loader'
import { Bar } from 'react-chartjs-2'

import { useGetData } from '../../hooks/useGetData'

const Energi = () => {

    const { error, loading, data, getData } = useGetData()

    useEffect(() => {
        getData('https://api.energidataservice.dk/dataset/Elspotprices?offset=0&start=2022-12-01T00:00&end=2022-12-14T00:00&filter=%7B%22PriceArea%22:[%22DK1%22]%7D&sort=HourUTC%20DESC&timezone=dk')

    }, [])


    return (
        <div className='Energi container'>
            <Title headline='Energipriser' />

            { loading && <Loader /> }
            { error && <Error /> }

            <div className='row'>

                { data && data.records.map((e) =>
<div className='col-3 my-3'>
                    <div className='card' width='150'>
                        <div className='card-body'>
                            <div className='card-title text-center'>

                                <h4>
                                  Dato:  { new Date(e.HourDK).toLocaleString('da-dk', { weekday: 'long', hour: '2-digit', minute: 'numeric' }) }
                                </h4>
                                <h5>
                                  Pris:  { (e.SpotPriceDKK / 1000).toFixed(2) } kr
                                </h5>
                            </div>
                        </div>
                    </div>
</div>
                )

                }
            </div>
        </div>
    )
}

export default Energi