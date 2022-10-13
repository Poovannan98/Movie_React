import React from 'react'
import Movie from './Movie'

function MovieList({movieList}) {
  return <>
  <div className='movie-list-container'>
      {movieList.map((mv, index) => (
        <Movie key={index} movie={mv} movieList={movieList} id={index} />
      ))}
    </div>
  </>
}

export default MovieList