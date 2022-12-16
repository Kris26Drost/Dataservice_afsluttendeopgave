import React, { useEffect, useState } from 'react'
import Error from '../../components/Error'
import Loader from '../../components/Loader'
import Title from '../../components/Title'
import './Weather.scss'

//import map
import { initMap, changeMapView, removeMap } from '../../helpers/leaflet'

//import eget hook - som laver request til API
import { useGetData } from '../../hooks/useGetData'

const Weather = () => {

    // request-hook
    const { error, loading, data, getData } = useGetData()
    // request-hook DAWA
    const { error: errorDAWA, loading: loadingDAWA, data: dataDAWA, getData: getDataDAWA } = useGetData()
    // state til
    const [zip, setZip] = useState("8000")

    useEffect(() => {

        // overvej regex - regular expression
        if (zip.length === 4 && !isNaN(zip)) {
            getData('https://api.openweathermap.org/data/2.5/forecast?zip=' + zip + ',dk&units=metric&lang=da&appid=' + process.env.REACT_APP_WEATHERAPIKEY)
        }
        // else {
        // søg i DAWA og send brugerens input med (state)
        getDataDAWA("https://api.dataforsyningen.dk/postnumre/autocomplete?q=" + zip)
        // }
    }, [zip])


    useEffect(() => {
        console.log("data", data)
        // hvis der er data (og dermed koordinater til at valgt postnummer) flt kort-view til postnr-koordinater
        if (data && data.city) changeMapView([data.city.coord.lat, data.city.coord.lon])
        // if (data && dataDAWA) changeMapView([dataDAWA[0].postnummer.visueltcenter_y, dataDAWA[0].postnummer.visueltcenter_x])

    }, [data]) //lytter efter data fra openweather (med koortdinater!)


    // init map
    useEffect(() => {

        initMap([56, 10])

        return () => {
            removeMap() //fjern jortet når component unmountes
        }
    }, [])


    return (
        <div className='Weather container pb-5'>

            <Title headline='Vejret - adresseopslag hos DAWA' />

            { error && <Error /> }

            { loading && <Loader /> }

            <div className='row'>
                <div className='col-12 mb-5 text-center'>

                    {/* Input postnummer by */ }
                    <input list='adresseforslag'
                        type='text'
                        placeholder='Indtast et postnummer'
                        autoComplete='off'

                        onInput={ (e) => setZip(e.target.value) }
                        defaultValue={ zip }
                    />

                    {/* Datalist til input */ }
                    <div>
                        <ul>
                            {
                                dataDAWA && dataDAWA.map(a =>
                                    <li onClick={ (e) => setZip(e.target.value.substring(0, 4)) } key={ a.postnummer.nr }>{ a.tekst }  </li>)
                            }
                        </ul>
                    </div>
                </div>

                {/* KORT */ }
                <div id='mapcontainer' className='offset-md-3 m-auto' style={ { width: '640px', height: '300px', backgroundColor: 'lightgrey' } }>
                    Kortet er på vej...
                </div>

                <div className='row'>

                    {
                        data && data.list.map((w, i) =>
                            <div className='col-3' key={ "weather" + i }>
                                <article className='card my-3' width='100' height='100' key={ "weather" + i }>
                                    <div className='card-body'>
                                        <div className='card-title'>
                                            <img className='m-auto' src={ 'http://openweathermap.org/img/wn/' + w.weather[0].icon + '@2x.png' } alt='forecast' />
                                        </div>
                                    </div>
                                    <div className='card-body'>
                                        <p>Temperatur { Math.round(w.main.temp) }&#8451;</p>
                                        <p className='cap-first font-weight-bold'>{ w.weather[0].description }</p>
                                        <p>Solopgang { new Date(data.city.sunrise * 1000).toLocaleString('da-dk', { hour: '2-digit', minute: 'numeric' }) }</p>
                                        <p>Solnedgang { new Date(data.city.sunset * 1000).toLocaleString('da-dk', { hour: '2-digit', minute: 'numeric' }) }</p>
                                        <p>Luftfugtighed { w.main.humidity }%</p>
                                        <p>Lufttryk { w.main.pressure }</p>

                                        <p>Dato: { new Date(w.dt_txt).toLocaleString('da-dk', { weekday: 'short', hour: '2-digit', minute: 'numeric' }) }</p>
                                    </div>

                                </article>
                            </div>

                        )


                    }

                </div>
            </div>
        </div>
    )
}

export default Weather