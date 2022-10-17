import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import {useNavigate} from 'react-router-dom'


function MovieList() {

  const [movieList,setMovieList] = useState([])
  const navigate = useNavigate();

  
  const getMovies =(() => {
    fetch("https://632161ec82f8687273b0af97.mockapi.io/movies", {
      method:"GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovieList(mv));
  });
  
  useEffect(() => getMovies(), []);
  
  const deleteMovie = (id) => {
    console.log("Deleting...",id)
    fetch(`https://632161ec82f8687273b0af97.mockapi.io/movies/${id}`,{
      method: "DELETE"
    }).then(() => getMovies());  
  };

  const editMovie = (id) => {
    navigate(`/edit/${id}`)
  }
  
  return <>
  <div className='movie-list-container'>
      {movieList.map((mv, index) => (
        <Movie 
          key={mv.id} 
          movie={mv} 
          id={mv.id}
          editButton={<IconButton onClick={() => editMovie(mv.id)}>
            <EditIcon color="primary"/></IconButton>}
           // &nbsp;   
          deleteButton ={<IconButton onClick={() => deleteMovie(mv.id)}>
            <DeleteForeverIcon color="error"/></IconButton>}
        />
      ))}
    </div>
  </>
}

export default MovieList