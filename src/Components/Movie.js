import React, { useState } from 'react'
import './Show.css';
import Counter from './Counter'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import StarRateIcon from '@mui/icons-material/StarRate';
import { yellow } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import InfoIcon from '@mui/icons-material/Info';
import {useNavigate} from 'react-router-dom';
import CURD from './CURD';

function Movie( {movie, id}) {

  const [show, setShow] = useState(false);
  const styles= {
    color:movie.rating >= 8.5 ? "green" : "red" };  
  const navigate = useNavigate();

  return <>
  <Card className='movie-container'>
    <img src={movie.poster} alt={movie.name} className='movie-poster'/>
    <CardContent>
      <div className='movie-specs'>
        <div className='d-flex flex-row'>
          <h2 className='movie-name'>{movie.name}
          <IconButton onClick={() => setShow(!show)}>{show ? 
            <ExpandLessIcon  fontSize="large" color="primary"/>:
            <ExpandMoreIcon  fontSize="large" color="primary"/> }            
            </IconButton>
            <IconButton onClick={() => navigate(`/movielist/${id}`)}><InfoIcon color="primary"/></IconButton>
            </h2>          
        </div>  
        <div>
          <p className='movie-rating' style={styles}><StarRateIcon sx={{color:yellow[600]}}/>{movie.rating}</p>
        </div>
      </div>
      
        {show ? <p className='movie-summary'>{movie.summary}</p> : null  }
        </CardContent>
        <CardActions disableSpacing>
          <Counter/>
          <CURD/>
        </CardActions>
  </Card> 
  </>
}

export default Movie