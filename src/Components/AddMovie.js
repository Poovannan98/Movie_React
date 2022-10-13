import React, { useState } from 'react'
import './AddMovie.css'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

function AddMovie({movieList, setMovieList}) {

  const [name,setName] = useState('');
  const [rating,setRating] = useState('');
  const [poster,setPoster] = useState('');
  const [summary,setSummary] = useState('');

  const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
  };
  console.log(newMovie);
  return <>
   <div className="addmovie-container">
      <div className="addmovie-form">
        <div className="addmovie-form-content">
          <h3 className="addmovie-form-title">Add Movies</h3>
          <div className="form-group mt-3">
            <label>Movie Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Movie Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
          <label>Rating</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Rating"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
          <label>Poster</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Poster URL"
              onChange={(e) => setPoster(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
          <label>Summary</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Summary"
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button  className="btn btn-primary"
              onClick={() => setMovieList([...movieList, newMovie])}>
              Add Movie
            </button> 
            <p> {name}-{rating}</p>                     
          </div>          
        </div>
      </div>
    </div>
  </>
}

export default AddMovie