import React, { useEffect } from 'react'
import Error from '../../../components/Error'
import Loader from '../../../components/Loader'
import parse from 'html-react-parser'

import { useGetData } from '../../../hooks/useGetData'

const Velkomst = () => {

  const { error, loading, data, getData } = useGetData()
  const { error: errorService, loading: loadingService, data: dataService, getData: getDataService } = useGetData()

  useEffect(() => {

    getData('http://localhost:5023/aboutus')
    getDataService('http://localhost:5023/services?limit=2')

  },

  [])

  return (
    <div className='container Velkomst p-3'>

     

      {/* ERROR */ }
      { (error) && <Error /> }

      {/* LOADING */ }
      { (loading) && <Loader /> }

      <div className='row'>

        {
          data &&

          <div className='col m-1'>
            <h2>Velkommen til <span className='title-service'>Viborg Haveservice</span></h2>
             <hr className=' bg-success' width='100' />
            { parse(data.content) }

            <a className='btn btn-success stretched-link Services' href='http://localhost:3000/services'> SE ALLE YDELSER</a>
          </div>
        }

        {
          dataService && dataService.map((s) =>
            <div className='col m-1' key={ s._id }>

              <img className='m-auto' src={ 'http://localhost:5023/images/' + s.image } alt='' width='250' height='250' />

              <h4>{ s.title }</h4>
              <p>{ s.content }</p>

            </div>
          )
        }
      </div>
      </div>
      
      )
}

      export default Velkomst