import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import Error from '../../components/Error'
import Loader from '../../components/Loader'
import NewsCard from '../../components/NewsCard'

// import eget hook - som laver request til API
import { useGetData } from '../../hooks/useGetData'

const News = () => {
  const { error, loading, data, getData } = useGetData()

  // states
  const [search, setSearch] = useState('bitcoin') //søgeord
  const [sortBy, setSortBy] = useState('popularity') //kategori
  const [language, setLanguage] = useState('en') //language

  // Søgning - når component loader
  useEffect(() => {
    callAPI()
  }, [])

  // Søg - kald API
  const handleSubmit = (e) => {
    e.preventDefault(); // forhindrer reload af siden (skal undgås fordi det tømmer state)
    callAPI()
  }

  const callAPI = () => {
    getData('http://newsapi.org/v2/everything?q=' + search + '&sortBy=' + sortBy + '&language=' + language + '&apiKey=' + process.env.REACT_APP_NEWSAPIKEY)
  }


  return (
    <div className='News container'>

      <Title headline='News' />

      { loading && <Loader /> }
      { error && <Error /> }

      <div className='row mb-5'>

        <form onSubmit={ handleSubmit }>

          {/* Søgning - Søgeord */ }
          <div className='col-6 mb-3 mt-3'>
            <h5>Søgning:</h5>
            <input type="text" defaultValue={ search } onInput={ e => setSearch(e.target.value) } className='form-control' placeholder='Søg noget' />
          </div>

          {/* Kategori - vælg kategori  */ }
          <div className='col-6 mb-3 mt-3' >
            <h5>Sort by:</h5>
            <select defaultValue={ sortBy } onChange={ e => setSortBy(e.target.value) } className='form-select'>
              <option>popularity</option>
              <option>relevancy</option>
              <option>publishedAt</option>
            </select>
          </div>

          {/* Language */ }
          <div className='col-6 mb-3 mt-3'>
            <h5>Language:</h5>
            <input list='languageList' onInput={ e => setLanguage(e.target.value) } className='form-control' />
            <datalist id='languageList'>
              <option value="ar" />
              <option value="de" />
              <option value="en" />
              <option value="es" />
              <option value="fr" />
              <option value="he" />
              <option value="it" />
              <option value="nl" />
              <option value="no" />
              <option value="pt" />
              <option value="ru" />
              <option value="sv" />
              <option value="ud" />
              <option value="zh" />
            </datalist>
          </div>

          <button className='btn btn-primary'>Søg</button>

        </form>

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

            <NewsCard newsEvent={ a } key={ 'news' + i } />

          )
        }

      </div>

    </div>


  )
}

export default News