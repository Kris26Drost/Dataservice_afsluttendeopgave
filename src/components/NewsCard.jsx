import React from 'react'

// data fns - til at formatere datoer til 'nu'
import { formatDistanceToNow } from 'date-fns'
import { da } from 'date-fns/locale'

const NewsCard = ({ newsEvent }) => {

  return (

    <div className='col'>

      <div className='card h-100'>

        <img src={newsEvent.urlToImage ? newsEvent.urlToImage: 'https://via.placeholder.com/100'} alt={newsEvent.title} className='card-img-top' />

        <div className='card-body'>

          <div className='title'>
            <h4>{newsEvent.title}</h4>
            <p><small className='text-muted'>{formatDistanceToNow(new Date(newsEvent.publishedAt), { locale: da, addSuffix: true })}</small></p>

          <p><small className='text-muted'>{new Date(newsEvent.publishedAt).toLocaleString('da-dk', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: 'numeric' })}</small> | {newsEvent.author}</p>
<p></p>

          </div>

          <div className='card-text'>
            <p>{newsEvent.description}</p>
            
            <p><a href={newsEvent.url} target='_blank'>Læs mere</a> </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NewsCard