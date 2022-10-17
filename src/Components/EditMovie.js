import {useEffect,useState} from 'react'
import './AddMovie.css'
import {useNavigate, useParams} from 'react-router-dom'
function EditMovie(){

    const {id} = useParams();
    const navigate = useNavigate();
    const [movie,setMovie] = useState({});
    const [name1,setName] = useState();
    const [rating1,setRating] = useState();
    const [poster1,setPoster] = useState();
    const [summary1,setSummary] = useState();
    const [trailer1,setTrailer] = useState();

    
    
    useEffect(() => {
      fetch(`https://632161ec82f8687273b0af97.mockapi.io/movies/${id}`)
        .then((data) => data.json())
        .then((mvs) => setMovie(mvs));          
    });   
   
  const updateMovie =(()=> {
    fetch(`https://632161ec82f8687273b0af97.mockapi.io/movies/${id}`, {
      method:"PUT",
      body: JSON.stringify({
        name:name1, 
        rating:rating1, 
        poster:poster1, 
        summary:summary1, 
        trailer:trailer1
      }),
      headers: {"content-Type": "application/json"}
  })
    .then(navigate("/movielist"))
});

    
    
  return <>
  <div className="addmovie-container">
      <div className="addmovie-form">
        <div className="addmovie-form-content">
          <h3 className="addmovie-form-title">Edit Movie</h3>
          <div className="form-group mt-3">
            <label>Movie Name</label>
            <input
              type="text"
              className="form-control mt-1"
              defaultValue={movie.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
          <label>Rating</label>
            <input
              type="text"
              className="form-control mt-1"
              defaultValue={movie.rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
          <label>Poster</label>
            <input
              type="text"
              className="form-control mt-1"
              defaultValue={movie.poster}
              onChange={(e) => setPoster(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
          <label>Summary</label>
            <input
              type="text"
              className="form-control mt-1"
              defaultValue={movie.summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
          <label>Trailer</label>
            <input
              type="text"
              className="form-control mt-1"
              defaultValue={movie.trailer}
              onChange={(e) => setTrailer(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button  className="btn btn-primary"
              onClick={()=>updateMovie()}
              >
              Update Movie
            </button>                  
          </div>          
        </div>
      </div>
    </div>
  </>
}

export default EditMovie