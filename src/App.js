import './App.css';
import './Components/AddMovie.css'
// import Navi from './Components/Navi';
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';
import ColorGame from './Components/ColorGame';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate,useParams} from "react-router-dom";
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import {Ini_movie_list} from "./Components/Ini_movie_list"
import MovieDetails from './Components/MovieDetails';
import ResponsiveAppBar from './Components/AppBar';
import Paper from '@mui/material/Paper';
import EditMovie from './Components/EditMovie';

function App() {

  // const [movieList,setMovieList] = useState(Ini_movie_list)
  //API Method
  const [movieList,setMovieList] = useState([])  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const [theme,setTheme] = useState(true)
  const {id} = useParams();

  const theme1= theme ? lightTheme : darkTheme  

  function NotFound(){
     return <>
     <div className='notfound'>
      <h1>Page Not Found</h1>
     <img src='https://i.ytimg.com/vi/q1AAumPtAx4/maxresdefault.jpg' alt='not found' width="800px" height="500px"/>
     </div>
      </>
  } 
  
  useEffect(() => {
    fetch("https://632161ec82f8687273b0af97.mockapi.io/movies")
      .then((data) => data.json())
      .then((mv) => setMovieList(mv));
  }, []);
  return <> 
   <ThemeProvider theme={theme1}>
   <Paper elevation={3} />
      {/* <Navi theme={darkTheme}/> */}
      <ResponsiveAppBar theme={theme} setTheme={setTheme}/>
      <Routes>
        <Route path="/" element={<h1>Welcome to Movies app!</h1>} />
        <Route path="/colorgame" element={<ColorGame/>} />
        <Route path="/addmovie" element={<AddMovie movieList={movieList} setMovieList={setMovieList} />} />
        <Route path="/movielist" element={<MovieList/> } />
        <Route path="/movielist/:id" element={<MovieDetails movieList={movieList} /> } />
        <Route path="/edit/:id" element={<EditMovie id={id} /> } />
        <Route path="/flims" element={<Navigate replace to = "/movielist"/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>   
      <CssBaseline /> 
      <Paper />
    </ThemeProvider>
  </>
}

export default App;
