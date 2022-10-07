import React from 'react'
import Counter from './Counter'

function Movie( {movie}) {
  return <>
  <div className='movie-container'>
    <img src={movie.poster} alt={movie.name} className='movie-poster'/>
    <div className='movie-specs'>
        <h2 className='movie-name'>{movie.name}</h2>
        <p className='movie-rating'>⭐ {movie.rating}</p>
    </div>
        <p className='movie-summary'>{movie.summary}</p>
        <Counter/>
  </div>
  </>
}

export default Movie