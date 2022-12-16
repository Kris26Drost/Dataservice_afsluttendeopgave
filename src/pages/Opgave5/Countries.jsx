import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import Error from '../../components/Error'
import Loader from '../../components/Loader'

import { useGetData } from '../../hooks/useGetData'

const Countries = () => {

    const { error, loading, data, getData } = useGetData()

    useEffect(() => {
        callAPI()
    }, [])

    // Søg - kald API
    const handleSubmit = (e) => {
        e.preventDefault(); // forhindrer reload af siden (skal undgås fordi det tømmer state)
        callAPI()
    }

    const callAPI = () => {
        getData('https://api.api-ninjas.com/v1/country?name=' ,
            {
                'X-RapidAPI-Key': process.env.REACT_APP_NINJAKEY
            }
        )
    }

    return (
        <div className='Countries container'>
            <Title headline='Countries' />

            { loading && <Loader /> }
            { error && <Error /> }

            <div className='row'>
                <button className='btn btn-success mt-5' onClick={ handleSubmit }>Get a Random Country</button>

                <div className='mt-3'>

                    {
                        // hvis der er data og de har en length
                        data?.articles.length ? <p>Antal match: { data.totalResults }</p> : <p>Desværre ingen match</p>
                    }
                </div>
            </div>


            <div className='row row-cols-1 row-cols-md-3 g-3'>

                {
                    data && data.articles.map((a, i) =>

                        <div className='col' key={ 'countriy' + i }>

                            <div className='card h-100'>

                                <img src={ a.urlToImage } alt={ a.title } className='card img-top' />

                                <div className='card-body'>

                                    <div className='title'>
                                        <h4>{ a.title }</h4>
                                        <p><small class='text-muted'>{ a.publishedAt }</small></p>
                                    </div>

                                    <div className='card-text'>
                                        <p>{ a.description }</p>
                                        <p><a href={ a.url } target='_blank'>Læs mere</a> </p>
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

export default Countries