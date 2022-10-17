import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import StarRateIcon from '@mui/icons-material/StarRate';
import { yellow } from '@mui/material/colors';
import {useNavigate} from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Button from '@mui/material/Button';


function MovieDetails() {

    const {id} = useParams(); 
    // const movie = movieList[id]; 
    const [movie,setMovie] = useState({})
    const navigate = useNavigate();
    const styles= {
        color:movie.rating >= 8.5 ? "green" : "red" };
    

    useEffect(() => {
        fetch(`https://632161ec82f8687273b0af97.mockapi.io/movies/${id}`)
          .then((data) => data.json())
          .then((mvs) => setMovie(mvs));          
      });

  return <>
  <div>
        <iframe 
            width="100%" 
            height="700" 
            src={movie.trailer} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            title='poo'
            allowFullScreen>            
        </iframe>
      <div className='movie-details-container'>
          <div className='movie-specs'>
              <h2 className='movie-name'>{movie.name}</h2>
              <p className='movie-rating' style={styles}><StarRateIcon sx={{color:yellow[600]}}/>{movie.rating}</p>
          </div>
             <p className='movie-summary'>{movie.summary}</p>
             <Button variant="contained" 
             startIcon={<KeyboardBackspaceIcon />}
             onClick={() => navigate(-1)}>Back</Button>
      </div>
  </div>
  </>
}

export default MovieDetails