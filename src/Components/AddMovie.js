import React, { /*useState */ } from 'react'
import './AddMovie.css'
import {useNavigate} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import * as yup from 'yup';


const editValidationScheme = yup.object({
  name: yup.string().required("Please enter the movie name"),
  poster: yup
    .string()
    .required()
    .min(5, "Enter correct URL for poster"),
  rating: yup
    .number()
    .required("Fill the rating of the Movie")
    .min(0, "need a bigger rating")
    .max(10, "Too much rating"),
  summary: yup
    .string()
    .required("Fill the Summary")
    .min(20, "Need a longer Summary"),
  trailer: yup
    .string()
    .required("Fill the trailer")
    .min(4, "enter the Trailer URL"),  
});

function AddMovie(/* {movieList, setMovieList} */) {

  const {handleSubmit, values, handleBlur, handleChange, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        rating: "",
        poster: "",
        summary: "",
        trailer: "",
      },
      validationSchema: editValidationScheme,     
      onSubmit: (newMovie) => {
        addMovie(newMovie);
      }
    })

  // const [name,setName] = useState('');
  // const [rating,setRating] = useState('');
  // const [poster,setPoster] = useState('');
  // const [summary,setSummary] = useState('');
  // const [trailer,setTrailer] = useState('');

  const navigate = useNavigate();

  const addMovie = (newMovie) =>{
    // const newMovie = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary,
    //   trailer: trailer,
    // };
    // setMovieList([...movieList, newMovie]); 
    // API Method
    fetch("https://632161ec82f8687273b0af97.mockapi.io/movies", {
      method:"POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type" : "application/json",
      },
    })    
      .then(() => navigate("/movielist"))
      .catch((err) => console.log("Error occurred", err));
  };
  return <>
 
   <div className="addmovie-container">
      <form className="addmovie-form" onSubmit={handleSubmit}>
        <div className="addmovie-form-content">
          <h3 className="addmovie-form-title">Add Movie</h3>
          <div className="form-group mt-3">
            <TextField
              type="text"
              className="form-control mt-1"
              label='Movie Name'
              variant='outlined'
              name='name'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name}
              helperText={touched.name && errors.name ? errors.name : null}
              // onChange={(e) => setName(e.target.value)}
            />            
          </div>
          <div className="form-group mt-3">
            <TextField
              type="text"
              className="form-control mt-1"
              label='Rating'
              variant='outlined'
              name='rating'
              value={values.rating}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.rating && errors.rating}
              helperText={touched.rating && errors.rating ? errors.rating : null}
              // onChange={(e) => setRating(e.target.value)}
            />            
          </div>
          <div className="form-group mt-3">
            <TextField
              type="text"
              className="form-control mt-1"
              label='Poster'
              variant='outlined'
              name='poster'
              value={values.poster}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.poster && errors.poster}
              helperText={touched.poster && errors.poster ? errors.poster : null}
              // onChange={(e) => setPost/er(e.target.value)}
            />            
          </div>
          <div className="form-group mt-3">
            <TextField
              type="text"
              className="form-control mt-1"
              label='Summary'
              variant='outlined'
              name='summary'              
              value={values.summary}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.summary && errors.summary}
              helperText={touched.summary && errors.summary ? errors.summary : null}
              // onChange={(e) => setSummary(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <TextField
              type="text"
              className="form-control mt-1"
              label='Trailer'
              variant='outlined'
              name='trailer'
              value={values.trailer}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.trailer && errors.trailer}
              helperText={touched.trailer && errors.trailer ? errors.trailer : null}
              // onChange={(e) => setTrailer(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button  className="btn btn-primary"
              //onClick={() => addMovie()}
              type='submit'>
              Add Movie
            </button>
            {/* <div className="d-grid gap-2 mt-3">
              values
              <pre>{JSON.stringify(values, null, 2)}</pre>
              Error
              <pre>{JSON.stringify(errors, null, 2)}</pre>
              Touched
              <pre>{JSON.stringify(touched, null, 2)}</pre>
            </div> */}
          </div>          
        </div>
      </form>      
    </div> 
   
  </>
}

export default AddMovie